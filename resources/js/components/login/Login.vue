<template>
    <v-container>
        <v-form
            ref="form"
            @submit.prevent="login"
        >
            <v-text-field
                v-model="form.email"
                label="E-mail"
                required
            ></v-text-field>

            <v-text-field
                v-model="form.password"
                label="password"
                type="password"
                required
            >
            
            </v-text-field>

            <v-btn
                type="submit"
                color="green"
            >
                Login
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        data(){
            return {
                form : {
                    email : null,
                    password: null
                }
            }
        },
        methods : {
            login (){
                User.login(this.form)
            }     
        }
    }
</script>