/* Create Post object with findAll method */
let Post = {
  findAll(){
    return new Promise( (resolve, reject) => {
      resolve('Ok Posts!');
    });
  }
}

let ui = {
  renderPosts(posts){
    console.log(posts);
  }
}

Post.findAll().then(ui.renderPosts);
