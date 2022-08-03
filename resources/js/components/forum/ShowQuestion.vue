<template>
        <v-card>
            <v-container fluid>
                <v-card-title>
                        <div class="headline"> 
                            {{ data.title }}
                        </div>
                        <span class="grey--text">{{ data.user }} said {{ data.created_at }}</span>
                        <v-spacer></v-spacer>
                        <div d-flex>
                            <v-btn color="teal" class="ml-5"> 5 Replies </v-btn>
                        </div>
                </v-card-title>
                <v-card-text v-html="data.body"></v-card-text>
            </v-container>
        </v-card>
</template>

<script>
    export default {
        props : ['data']
    }
</script>