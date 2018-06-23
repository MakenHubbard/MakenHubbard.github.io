const firebaseApi = require('./firebaseApi');

const buildDomForBlogs = () => {
  firebaseApi.getBlogsFromFirebase()
    .then((blogsArray) => {
      let blogString = '';
      blogsArray.forEach((blog) => {
        blogString += `<h3>${blog.title}</h3>`;
        blogString += `</br>`;
        blogString += `<span>${blog.date}</span>`;
        blogString += `<p>${blog.post}</p>`;
      });
      printBlogsToDom(blogString);
    });
};

const printBlogsToDom = (blog) => {
  $('#blogsDiv').html(blog);
};

module.exports = {
  buildDomForBlogs,
};
