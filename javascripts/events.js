const dom = require('./dom');

const hideAndSeek = () => {
  $(document).click((e) => {
    if (e.target.id === 'projectBtn') {
      $('#mainHead').addClass('hide');
      $('#projectsPage').removeClass('hide');
      $('#blogsPage').addClass('hide');
      $('#techPage').addClass('hide');
      $('#contactPage').addClass('hide');
      dom.buildDomForProjects();
    } else if (e.target.id === 'blogBtn') {
      $('#mainHead').addClass('hide');
      $('#projectsPage').addClass('hide');
      $('#blogsPage').removeClass('hide');
      $('#techPage').addClass('hide');
      $('#contactPage').addClass('hide');
      dom.buildDomForBlogs();
    } else if (e.target.id === 'techBtn') {
      $('#mainHead').addClass('hide');
      $('#projectsPage').addClass('hide');
      $('#blogsPage').addClass('hide');
      $('#techPage').removeClass('hide');
      $('#contactPage').addClass('hide');
    } else if (e.target.id === 'contactBtn') {
      $('#mainHead').addClass('hide');
      $('#projectsPage').addClass('hide');
      $('#blogsPage').addClass('hide');
      $('#techPage').addClass('hide');
      $('#contactPage').removeClass('hide');
    } else if (e.target.id === 'brandName') {
      $('#mainHead').removeClass('hide');
      $('#projectsPage').addClass('hide');
      $('#blogsPage').addClass('hide');
      $('#techPage').addClass('hide');
      $('#contactPage').addClass('hide');
    };
  });
};

const initializer = () => {
  hideAndSeek();
};

module.exports = {
  initializer,
};
