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
        projectString += `<div class="jumbotron">`;
        projectString += `<img src="${project.thumbnail}" rel="${project.title}">`;
        projectString += `<h1>${project.title}</h1>`;
        projectString += `<p>${project.description}</p>`;
        projectString += `<span> Technologies used: ${project.technologiesUsed}</span>`;
        projectString += `<ul>`;
        projectString += `<li>URL: <a href="${project.url}">Click Here</a></li>`;
        projectString += `<li>Github: <a href="${project.github}">Click Here</a>`;
        projectString += `</ul>`;
        projectString += `</div >`;
      });
      printProjectsToDom(projectString);
    });
};

const printBlogsToDom = (blog) => {
  $('#blogsPage').html(blog);
};

const printProjectsToDom = (project) => {
  $('#projectsDiv').html(project);
};

module.exports = {
  buildDomForBlogs,
  buildDomForProjects,
};
