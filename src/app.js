/* Create Post object with findAll method */
let Post = {
  findAll(){
    return new Promise( (resolve, reject) => {
      let uri = "http://localhost:3000/posts";
      let request = new XMLHttpRequest();
      request.open("GET", uri, true);
      request.onload = () => {
        if(request.status >= 200 && request.status < 400){
          resolve(request.response);
        }
      };
      request.onerror = () => {
        reject(new Error("Something Went wrong on the API"));
      }
      request.send();
    });
  }
}

let ui = {
  renderPosts(posts){
    console.log(posts);
  }
}

Post.findAll().then(ui.renderPosts).catch( (error) => console.log(error));
