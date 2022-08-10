<template>

   <v-container grid-list-xs>

        <h1> Ajouter une Question </h1>

        <v-form @submit.prevent="askQuestion">
            <v-text-field
                name="title"
                label="Titre"
                id="title"
                v-model="form.title"
            ></v-text-field>

            <v-select
                :items="categories"
                item-text="name"
                item-value="id"
                item-id="id"
                v-model="form.category_id"
                label="Category"
            ></v-select>   

            <editor 
                name="body"
                label="Description"
                id="body"
                ref="toastuiEditor"
                @change="getHTML()"
                getHTML
            />

            <div>
                <v-btn color="success" type="submit">Ajouter</v-btn>
            </div>
        </v-form>
    
   </v-container>
</template>

<script>
    import '@toast-ui/editor/dist/toastui-editor.css';
    import { Editor } from '@toast-ui/vue-editor';

    export default {
        components : {
            editor: Editor
        },
        data(){
            return {
                form : {   
                    title :null, 
                    category_id : null, 
                    body : null
                },  
                categories : {},
                errors : null
            }
        },
        methods : {
            askQuestion (){
                axios.post('/api/question', this.form).then((result) => {
                    this.$router.push({path : result.data.url })
                }).catch((err) => {
                    this.errors = error.data
                });
            },
            getHTML() {
                let html = this.$refs.toastuiEditor.invoke('getHTML');
                this.form.body = html
            }   
        },
        created(){
            axios.get('api/category').then((result) => {
                this.categories = result.data.data
            }).catch((err) => { 
                console.log(err.data)
                this.errors = err.data
            });
        },
      
    }
</script>