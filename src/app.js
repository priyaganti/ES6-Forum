import Post from './post';
import User from './user';
import ui from './ui';


Post.findAll()
.then(ui.renderPosts)
.catch( (error) => console.log(error));

User.findAllActive()
.then(ui.renderActiveUsers)
.catch( (error) => console.log(error));
