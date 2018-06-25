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

const buildDomForProjects = () => {
  firebaseApi.getProjectsFromFirebase()
    .then((projectsArray) => {
      let projectString = '';
      projectsArray.forEach((project) => {
        for (let i = 0; i < project.length; i++) {
          projectString += `<div class="jumbotron">`;
          projectString += `<h1>${project[i].title}</h1>`;
          projectString += `<p>...</p>`;
          projectString += `  <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>`;
          projectString += `</div >`;
        }
      });
      printProjectsToDom(projectString);
    });
};

const printBlogsToDom = (blog) => {
  $('#blogsPage').html(blog);
};

const printProjectsToDom = (project) => {
  $('#projectsPage').html(project);
};

module.exports = {
  buildDomForBlogs,
  buildDomForProjects,
};
