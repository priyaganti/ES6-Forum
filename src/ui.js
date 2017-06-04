let ui = {
  renderPosts(posts){
    let elements = posts.map( (post) => {
      let {title, lastReply} = post;
      return articleTemplate(title, lastReply);
    });

    let target = document.querySelector('.container');
    target.innerHTML = elements.join(''); // map returns an array(elements). convert to string for proper display
  }
}

function articleTemplate (title, lastReply){
  let template = `
    <article class="post">
      <h2 class="post-title">
        ${title}
      </h2>
      <p class="post-meta">
        ${lastReply}
      </p>
    </article>`;
  return template;
}

export default ui;
