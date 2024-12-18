import axios from "axios";
import config from "./Config";
import { reactLocalStorage } from 'reactjs-localstorage';


class AuthHandler{
    static login (username, password, callback){
        axios.post(config.loginUrl, {username:username, password:password })
        .then(function(response){
            // console.log(response);
            if(response.statusCode === 200){
                reactLocalStorage.set("refresh", response.data.refresh);
                callback({error: false, message: "Login successfully..."});
            }
        })
        .catch(function(error){
            // console.log(error.response);
            callback({error: true, message: "Error During Login - Invalid Login Details..."});
        });
    }
}

export default AuthHandler;