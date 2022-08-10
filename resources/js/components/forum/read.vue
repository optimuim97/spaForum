<template>
    <div>
        <div v-if="editing">
            <edit-question :question="question"></edit-question>
        </div>

        <div v-if="!editing">
            <show-question :data="question"></show-question>
        </div>
    </div>
</template>

<script>
    import showQuestion from './showQuestion.vue'
    import editQuestion from './editQuestion.vue'

    export default {
        components : {showQuestion, editQuestion},
        data(){
            return {
                question : null,
                editing : false
            }
        },
        created(){
            this.listen(),
            this.getQuestion()
        },
        methods : {
            listen (){
                EventBus.$on('startEditing', () => {
                    this.editing = true
                })
            },
            getQuestion (){
                const slug = this.$route.params.slug

                 axios.get("/api/question/"+slug).then((result) => {
                    this.question  = result.data.data
                }).catch((err) => {
                    console.log(err)
                });
            }
        }
    }
</script>