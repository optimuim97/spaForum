<template>
    <v-container>

        <h1>Sign Up</h1>

        <v-form
            ref="form"
            @submit.prevent="register"
        >
            <v-text-field
                v-model="form.email"
                label="Name"
                required
            ></v-text-field>
            <span class="red--text" v-if="errors">
                {{ errors.email[0] ? errors.email[0] : "" }}
            </span>

            <v-text-field
                v-model="form.name"
                label="E-mail"
                type="email"
                required
            ></v-text-field>

            <span class="red--text" v-if="errors">
                {{ errors.name ? errors.name[0] : "" }}
            </span>

            <v-text-field
                v-model="form.password"
                label="Password"
                type="password"
                required
            ></v-text-field>

            <span class="red--text" v-if="errors">
                {{ errors.password ? errors.password[0] : "" }}
            </span>

            <v-text-field 
                v-model="form.password_confirmation" 
                label="Password Confirmation"
                type="password"
            >
            </v-text-field>

            
            <v-btn
                type="submit"
                color="green"
            >
                Register
            </v-btn>

            <v-btn color="blue">
                <router-link to="/login">
                    Login
                </router-link>
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            form : {
                name : null,
                email : null,
                password : null,
                password_confirmation : null,
            },
            errors : null
        }
    },
    methods: {
        register(){

            axios.post('api/auth/signup', this.form)
            .then((res) => {
                User.responseAfterLogin(res)

                this.$router.push({name:'forum'})

            })
            .catch( (error) => {
                this.errors = error.response.data.errors 
            });
        }
    }
}
</script>