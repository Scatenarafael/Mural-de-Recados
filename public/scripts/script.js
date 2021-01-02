document.addEventListener('DOMContentLoaded', () => {
  
  updatePosts();


});





function updatePosts(){
  // let URL = "http://localhost:3000";

  fetch("http://localhost:3000/api/all").then(res => 
    {
  
      return res.json();
  
    }).then( (json) => 
    {
        
        let postElements='';

        let posts = JSON.parse(json);

        posts.forEach((post) => {
          let postElement =
           `   
          <div id=${post.id} class="card mb-4">
              <div class="card-header">
                <div class="row">
                  <div class="col">  
                      <h5 class="card-title">${post.title}</h5>
                  </div>
                    <div class="col"></div>
                  <div class="col-md-auto">
                      <button id=${"btn-"+post.id} class = "btn btn-danger">Excluir</button>
                  </div>
                </div>
              </div>
            <div class="card-body">
              <div class="card-text">${post.description}</div>
            </div>
          </div>
           `;

          postElements += postElement;

        });
        document.getElementById("posts").innerHTML = postElements;
        monitoraDelbtn();
        document.getElementById("title").focus();
    });
}

function shownewPost(){

      let title = document.getElementById("title").value;
      let description = document.getElementById("desc").value;

      let post = {title, description};

      const options = {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(post)
      }; 

      fetch("http://localhost:3000/api/new", options).then(res => {
        updatePosts();
        document.getElementById("title").value = '';
        document.getElementById("desc").value = '';
      });    
  };



function selectDangerbuttons(){
    
  let btns = [];
        
  btns = document.querySelectorAll('.btn-danger');

  return btns;
}

function monitoraDelbtn(){
          let btns = selectDangerbuttons();
          btns.forEach(btn => {
            btn.addEventListener('click', (btn) => {    
              // console.log(btn.target.id.slice(4));
              showdelPost(btn.target.id.slice(4));
              });
            });
}

function showdelPost(id){

  const options = {
    method: "delete",
    headers: new Headers({'content-type': 'application/json'}),
  };   
  
  fetch(`http://localhost:3000/api/delete?id=${id}`, options).then(res => {
      updatePosts();
    });    
}