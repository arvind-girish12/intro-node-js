var app = require('./api.js');

app.showPostsForCurrentUser = (userId, cb) => {
    app.getPostsForUser(userId, posts => {
        const postTemplates = posts.map(post => {
            return `
      <div class="post">
        ${post.title}
        ${post.body}
        ${post.createdBy}
      </div>`
        })
        cb(postTemplates)
    })
}

app.showUserProfile = (userId, cb) => {
    app.getUserById(userId, user => {
        const profile = `
      <div>
        ${user.name}
      </div>
    `
        cb(user)
    })
}

module.exports = app;

