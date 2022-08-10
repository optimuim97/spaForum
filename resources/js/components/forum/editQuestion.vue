<template>
     <v-container grid-list-xs>

        <h1> Modifier une Question </h1>

        <v-form @submit.prevent="upateQuestion">
            <v-text-field
                name="title"
                label="Titre" 
                id="title"
                v-model="form.title"
            ></v-text-field>

            <!--
                <v-select
                    :items="categories"
                    item-text="name"
                    item-value="id"
                    item-id="id"
                    v-model="question.category_id"
                    label="Category"
                >
                </v-select>    
            -->

            <editor 
                name="body"
                label="Description"
                id="body"
                ref="toastuiEditor"
                @change="getHTML()"
                :initialValue="form.body"
                getHTML
            />
            
            <v-btn  icon color="green">
                <v-icon>mdi-content-save</v-icon>
            </v-btn>

            <v-btn  icon color="red" @click="cancel">
                <v-icon>mdi-cancel</v-icon>
            </v-btn>
            
        </v-form>
    
   </v-container>
</template>

<script>
    import { Editor } from '@toast-ui/vue-editor';

    export default {
        data(){
            return {
                form : {
                    title : null,
                    boddy : null
                }
            }
        }, 
        components : {Editor},
        props : ['question'],
        methods : {
            upateQuestion (){

            },
            cancel(){

            },
            getHTML(){
                let html = this.$refs.toastuiEditor.invoke('getHTML');
                this.form.body = html
            }
        },
        created(){
            return this.form = this.question
        }
    }
</script>
