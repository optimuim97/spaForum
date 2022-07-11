class User{
    login (data){
        axios.post('api/auth/login', data)
        .then(res => {  
            console.log(res.data)
        })
        .catch(error => (error) => {
            console.log(error.data);
        })
    }
}

export default User = new User()