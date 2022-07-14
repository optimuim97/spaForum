class Token{

    isValid(token){
        const payload = this.payload(token)

        if(payload){
            return payload.iss == "http://localhost:9000/api/auth/login" ? true : false;
        }

        return false;
    }

    payload(token){
        const playload = token.split('.')[1]

        return this.decode(playload)
    }

    decode(playload){
        return JSON.parse(atob(playload))
    }
}

export default Token = new Token()