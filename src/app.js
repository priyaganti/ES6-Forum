import Post from './post.js';
import ui from './ui.js';


Post.findAll()
.then(ui.renderPosts)
.catch( (error) => console.log(error));
