<template>
   <v-container>
        <v-layout row wrap>
            <v-flex xs8>
                <question  v-for="question in questions" :key="question.path" :data='question'></question>
            </v-flex>
            Sidebar
        </v-layout>
   </v-container>
</template>


<script>
    import question from './question'

    export default {
        components : {question},
        data (){
            return {
                questions : {}
            }
        },
        created(){
            axios.get('/api/question').then((result) => {
                console.log(result.data) 
                
                if(result.status == 200){
                    this.questions = result.data.data
                }else{
                    alert('error')
                }
                
            }).catch((err) => {
                console.log(error)
            });
        }
    }
</script>