<template>
    <div>
        <show-question :data="question"></show-question>
    </div>
</template>

<script>
    import ShowQuestion from './ShowQuestion.vue'

    export default {
        components : {ShowQuestion},
        data(){
            return {
                question : null
            }
        },
        created(){
            const slug = this.$route.params.slug

            axios.get("/api/question/"+slug).then((result) => {

                this.question  = result.data.data
                
            }).catch((err) => {

                console.log(err)

            });
        }
    }
</script>