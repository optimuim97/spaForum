<template>
    <v-card>
        <v-card fluid>
            <v-card-title> {{ data.title }}</v-card-title>

            <v-card-subtitle> {{ data.created_at }}</v-card-subtitle>

            <v-card-text>
                 {{ data.body }}
            </v-card-text>
        </v-card>
    </v-card>
</template>

<script>

    export default {
        props:['data'],
        data(){
        }
    }
</script>