import axios from "axios";
import config from "./Config";

class AuthHandler{
    static login (username, password, callback){
        axios.post(config.loginUrl, {username:username, password:password })
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        });
    }
}

export default AuthHandler;