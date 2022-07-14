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
            AppStorage.storeData(username, access_token)
        }

    }

    hasToken(){
        const storedToken = AppStorage.getToken()

        if(storedToken){
            return Token.isValid(storedToken) ? true : false
        }

        return false;
    }

    loggIn(){
        return this.hasToken()
    }

    logout(){
        AppStorage.clear()
    }

    name(){
        if(this.loggIn()){
            return AppStorage.getUser()
        }
    }

    id(){
        if(this.loggIn()){
            const token = AppStorage.getToken()
            const payload = Token.payload(token)

            if(Token.isValid(token)){
               return payload.sub
            }   

        }else{
            alert('User is not loggin')
        }
    }

    responseAfterRegister(res){
        console.log(res)
    }
}

export default User = new User()