module.exports = {

  posts: [
  {
   id: "kdamkmakva",
   title: "Titulo teste do Mural",
   description: "Descrição teste"
  },

],

getAll(){
  return this.posts;
},

newPost(title, description){
  
  this.posts.push({"id": generateID(), title, description});

},

deletePost(id){
  for(let post of this.posts){
    if (id == post.id){
      this.posts.splice(this.posts.findIndex(post => post.id == id), 1);
    }
  }
},


}

function generateID(){

  return Math.random().toString(36).substring(2, 9);
}
