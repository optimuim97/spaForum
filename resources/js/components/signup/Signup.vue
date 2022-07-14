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
            <span class="red--text" v-if="form.errors">
                {{ form.errors.email[0] ? form.errors.email[0] : "" }}
            </span>

            <v-text-field
                v-model="form.name"
                label="E-mail"
                type="email"
                required
            ></v-text-field>

            <span class="red--text" v-if="form.errors">
                {{ form.errors.name ? form.errors.name[0] : "" }}
            </span>

            <v-text-field
                v-model="form.password"
                label="Password"
                type="password"
                required
            ></v-text-field>

            <span class="red--text" v-if="form.errors">
                {{ form.errors.password ? form.errors.password[0] : "" }}
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
                errors : null
            }
        }
    },
    methods: {
        register(){
            axios.post('api/auth/signup', this.form)
            .then((res) => {
                User.responseAfterRegister(res)
            })
            .catch(
                (error) => {
                    this.form.errors = error.response.data.errors 
                
                    console.log(
                        this.form.errors
                    )
                }
            );
        }
    }
}
</script>