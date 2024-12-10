from os import access

# from django.contrib.gis.serializers.geojson import Serializer
from django.shortcuts import render, get_object_or_404

from rest_framework.generics import get_object_or_404

from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication

from application.models import Company, CompanyBank, Medicine, MedicalDetails
from application.serializers import CompanySerializer, CompanyBankSerializer, MedicineSerializer, \
    MedicalDetailsSerializer, MedicineSerializerSimple


# Create your views here.
class CompanyViewSet(viewsets.ViewSet):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def list(self, request):
        company = Company.objects.all()
        serializer = CompanySerializer(company, many=True, context={'request': request})
        response_dict = {"error": False, "message":"All Company List Data", "data": serializer.data}
        return Response(response_dict)

    def create(self, request):
        try:
            serializer = CompanySerializer(data=request.data, context={'request': request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response={"error":False, "message":"Company Data Save Successfully"}
        except:
            dict_response={"error":True, "message":"Error During Saving Company Data"}
        return Response(dict_response)

    def update(self, request, pk=None):

        try:
            queryset = Company.objects.all()
            company = get_object_or_404(queryset, pk=pk)
            serializer = CompanySerializer(company, data=request.data, context={'request': request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response={"error":False, "message":"Successfully Updated Company Data"}

        except:
            dict_response={"error":True, "message":"Error During Updating Company Data"}
        return Response(dict_response)


class CompanyBankViewSet(viewsets.ViewSet):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def create(self, request):
        try:
            serializer = CompanyBankSerializer(data=request.data, context={'request': request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response={"error":False, "message":"Company Bank Data Save Successfully"}
        except:
            dict_response={"error":True, "message":"Error During Saving Company Bank Data"}
        return Response(dict_response)


    def list(self, request):
        companybank = CompanyBank.objects.all()
        serializer = CompanyBankSerializer(companybank, many=True, context={'request': request})
        response_dict = {"error": False, "message":"All Company Bank List Data", "data": serializer.data}
        return Response(response_dict)

    def retrieve(self, request, pk=None):
        queryset = CompanyBank.objects.all()
        companybank = get_object_or_404(queryset, pk=pk)
        serializer = CompanyBankSerializer(companybank, context={"request": request})
        return Response({"error":False, "message":"Single Data Fetch", "data": serializer.data})

    def update(self, request, pk=None):
        queryset = CompanyBank.objects.all()
        companybank = get_object_or_404(queryset, pk=pk)
        serializer = CompanyBankSerializer(companybank, data=request.data, context={"request": request})
        serializer.is_valid()
        serializer.save()
        return Response({"error":False, "message":"Data Has Been Updated", "data": serializer.data})

# Creating a method for filtering data by name
class CompanyNameViewSet(generics.ListAPIView):

    serializer_class = CompanySerializer
    def get_queryset(self):
        name = self.kwargs['name']
        return Company.objects.filter(name=name)

class MedicineViewSet(viewsets.ViewSet):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def create(self, request):
        try:
            serializer = MedicineSerializer(data=request.data, context={'request': request})
            serializer.is_valid(raise_exception=True)
            serializer.save()


            # Comment this out

            # access the serializer id which ia saved in the DB table
            medicine_id=serializer.data['id']
            print(medicine_id)

            # Adding and saving id into Medicine Details table
            medicine_details_list=[]
            for medicine_detail in request.data['medicine_details']:
                print(medicine_detail)

                # Adding medicine id which will work form medicine detail serializer
                medicine_detail["medicine_id"] = medicine_id
                medicine_details_list.append(medicine_detail)
                print(medicine_detail)

            serializer2 = MedicalDetailsSerializer(data=medicine_details_list, many=True, context={"request":request})
            serializer2.is_valid()
            serializer2.save()

            # above comment ends here


            dict_response = {"error": False, "message": "Medicine Data Saved Successfully"}
        except:
            dict_response = {"error": True, "message": "Error During Saving Medicine Data"}
        return Response(dict_response)

    def list(self, request):
        medicine = Medicine.objects.all()
        serializer = MedicineSerializer(medicine, many=True, context={'request': request})

        medicine_data=serializer.data
        newmedicinelist=[]

        # Adding extra key for medicine Details in medicine
        for medicine in medicine_data:
            # Accessing all the medical details of the current medicine ID
            medicine_details=MedicalDetails.objects.filter(medicine_id=medicine['id'])
            medicine_details_serializer=MedicineSerializerSimple(medicine_details, many=True)
            medicine["medicine_details"]=medicine_details_serializer.data
            newmedicinelist.append(medicine)

        response_dict = {"error": False, "message": "All Medicine List Data", "data": serializer.data}
        return Response(response_dict)

    def retrieve(self, request, pk=None):
        queryset = Medicine.objects.all()
        medicine = get_object_or_404(queryset, pk=pk)
        serializer = MedicineSerializer(medicine, context={"request": request})

        serializer_data=serializer.data
        # Accessing all the medical details of the current medicine ID
        medicine_details=MedicalDetails.objects.filter(medicine_id=medicine['id'])
        medicine_details_serializer=MedicineSerializerSimple(medicine_details, many=True)
        serializer_data["medicine_details"]=medicine_details_serializer.data

        return Response({"error": False, "message": "Single Data Fetch", "data": serializer.data})

    def update(self, request, pk=None):
        queryset = Medicine.objects.all()
        medicine = get_object_or_404(queryset, pk=pk)
        serializer = MedicineSerializer(medicine, data=request.data, context={"request": request})
        serializer.is_valid()
        serializer.save()
        return Response({"error": False, "message": "Data Has Been Updated", "data": serializer.data})

company_list = CompanyViewSet.as_view({"get":"list"})
company_create = CompanyViewSet.as_view({"post":"create"})
company_update = CompanyViewSet.as_view({"put":"update"})