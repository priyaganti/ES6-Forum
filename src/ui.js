let ui = {
  renderPosts(posts){
    let postElements = posts.map( (post) => {
      let {title, lastReply} = post;
      return articleTemplate(title, lastReply);
    });

    let target = document.querySelector('.container');
    target.innerHTML = postElements.join(''); // map returns an array(elements). convert to string for proper display
  },

  renderActiveUsers(users){
    let userElements = users.map( (user) => {
      let {name, avatar} = user;
      return sidebarTemplate(name, avatar);
    });
    let target = document.querySelector('.sidebar-content');
    target.innerHTML = userElements.join('');
  }
};

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

function sidebarTemplate (name, avatar){
  let template = `
    <div class="active-avatar">
      <img width="54" src="images/${avatar}">
      <h5 class="post-author">${name}</h5>
    </div>`;
  return template;
}

export default ui;
