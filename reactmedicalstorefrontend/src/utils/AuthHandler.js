import axios from "axios";
import config from "./Config";

class AuthHandler{
    static login (username, password, callback){
        axios.post(config.loginUrl, {username:username, password:password })
        .then(function(response){
            // console.log(response);
            if(response.statusCode === 200){
                
            }
        })
        .catch(function(error){
            console.log(error.response);
        });
    }
}

export default AuthHandler;