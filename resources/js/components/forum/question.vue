<template>
    
        <v-card>
            <v-card-title> 
                <router-link :to="question.url">
                    {{ question.title }}    
                </router-link>         
            </v-card-title>

            <v-card-subtitle> {{ question.created_at }}</v-card-subtitle>

            <v-card-text>
                 {{ question.body }}
            </v-card-text>
        </v-card>
    
</template>

<script>

    export default {
        props:['question'],
        data(){
            return {
                
            }
        }
    }
</script>