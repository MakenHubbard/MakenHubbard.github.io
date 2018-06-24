const firebaseApi = require('./firebaseApi');

const buildDomForBlogs = () => {
  firebaseApi.getBlogsFromFirebase()
    .then((blogsArray) => {
      let blogString = '';
      blogString = `<h2 align="center"><u>My Journey</u></h2>`;
      blogsArray.forEach((blog) => {
        blogString += `<h3><u>${blog.title}</u></h3>`;
        blogString += `<span><strong>${blog.date}</strong></span>`;
        blogString += `</br>`;
        blogString += `<p>${blog.post}</p>`;
      });
      printBlogsToDom(blogString);
    });
};

const printBlogsToDom = (blog) => {
  $('#blogsPage').html(blog);
};

module.exports = {
  buildDomForBlogs,
};
