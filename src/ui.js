let ui = {
  renderPosts(posts){
    let elements = posts.map( (post) => {
      return articleTemplate;
    });

    let target = document.querySelector('.container');
    target.innerHTML = elements.join(''); // map returns an array(elements). convert to string for proper display
  }
}

let articleTemplate = `
  <article class="post">
    <h2 class="post-title">
      In hybrid moments, give me a moment
    </h2>
    <p class="post-meta">
    Last reply on July 7
    </p>
  </article>`


export default ui;
