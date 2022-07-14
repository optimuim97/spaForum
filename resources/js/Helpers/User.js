import AppStorage from "./AppStorage.js"
import Token from "./Token.js"

class User{
    
    login (data){
        axios.post('api/auth/login', data)
        .then((res) => {  
            this.responseAfterLogin(
                res
                // Token.payload(res)
            )
        })
        .catch(error => (error) => {
            console.log(error.data);
        })
    }
    
    responseAfterLogin(res){

        const access_token = res.data.access_token
        const username = res.data.user    

        if(Token.isValid(access_token)){
            AppStorage.storeData(access_token, username)
        }

    }
}

export default User = new User()