<template>

   <v-container grid-list-xs>

        <h1> Ajouter une Question </h1>

        <v-form @submit="askQuestion">
            <v-text-field
                name="title"
                label="Titre"
                id="title"
                v-model="form.title"
            ></v-text-field>

            <v-select
                :items="categories"
                item-text="name"
                item-id="id"
                v-model="form.category_id"
                label="Category"
            ></v-select>

            <v-text-field
                name="description"
                label="Description"
                id="description"
                v-model="form.body"
            >
            </v-text-field>

            <Editor
                mode="editor"
                ref="editor"
                :outline="true"
                :render-config="renderConfig"
                v-model="body"
            />

            <v-btn color="success" type="submit">Ajouter</v-btn>
        </v-form>
    
   </v-container>
</template>

<script>
    import { Editor } from "vuetify-markdown-editor";
    export default {
        components : {Editor},
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
                    console.log(result)
                }).catch((err) => {
                    console.log(error.data.error)
                });
            }
        },
        created(){
            axios.get('api/category').then((result) => {
                console.log(result)

                this.categories = result.data.data
            }).catch((err) => { 
                console.log(err.data)
            });
        },
        mounted() {
            // Access properties or methods using $refs
            // this.$refs.editor.focus();
            // this.$refs.editor.upload();

            // Dark theme
            this.$vuetify.theme.dark = true;
        }
    }
</script>