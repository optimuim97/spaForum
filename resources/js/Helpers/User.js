import AppStorage from "./AppStorage.js";
import Token from "./Token.js";

class User {
    login(data) {
        console.log(data)

        axios
            .post("api/auth/login", data)
            .then((res) => {
                this.responseAfterLogin(res);
            })
            .catch((error) => (error) => {
                alert("Error");
                console.log(error.data);
            });
    }

    responseAfterLogin(res) {
        const access_token = res.data.access_token;
        const username = res.data.user;

        if (Token.isValid(access_token)) {
            AppStorage.storeData(username, access_token);
        } else {
            alert("User is not valid");
        }
    }

    hasToken() {
        const storedToken = AppStorage.getToken();

        if (storedToken) {
            return Token.isValid(storedToken) ? true : false;
        }

        return false;
    }

    loggIn() {
        return this.hasToken();
    }

    logout() {
        AppStorage.clear();
        window.location = "/login";
    }

    name() {
        if (this.loggIn()) {
            return AppStorage.getUser();
        }
    }

    id() {
        if (this.loggIn()) {
            const token = AppStorage.getToken();
            const payload = Token.payload(token);

            if (Token.isValid(token)) {
                return payload.sub;
            }
        } else {
            alert("User is not loggin");
        }
    }

    own(user_id){
        return this.id() == user_id
    }
}

export default User = new User();
