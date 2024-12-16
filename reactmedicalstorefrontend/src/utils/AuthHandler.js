import axios from "axios";

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