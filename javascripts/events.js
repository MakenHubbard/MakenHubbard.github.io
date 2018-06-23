const dom = require('./dom');

const hideAndSeek = () => {
  $(document).click((e) => {
    if (e.target.id === 'projectBtn') {
      $('#mainHead').addClass('hide');
      $('#projectPage').removeClass('hide');
      $('#blogPage').addClass('hide');
      $('#techPage').addClass('hide');
      $('#contactPage').addClass('hide');
      // projects build dom function here
    } else if (e.target.id === 'blogBtn') {
      $('#mainHead').addClass('hide');
      $('#projectPage').addClass('hide');
      $('#blogPage').removeClass('hide');
      $('#techPage').addClass('hide');
      $('#contactPage').addClass('hide');
      dom.buildDomForBlogs();
    } else if (e.target.id === 'techBtn') {
      $('#mainHead').addClass('hide');
      $('#projectPage').addClass('hide');
      $('#blogPage').addClass('hide');
      $('#techPage').removeClass('hide');
      $('#contactPage').addClass('hide');
    } else if (e.target.id === 'contactBtn') {
      $('#mainHead').addClass('hide');
      $('#projectPage').addClass('hide');
      $('#blogPage').addClass('hide');
      $('#techPage').addClass('hide');
      $('#contactPage').removeClass('hide');
    }
  });
};

// const exposeBlogsEvent = () => {
//   $(document).on('click', '#blogButt', (e) => {

//   });
// };

const initializer = () => {
  hideAndSeek();
};

module.exports = {
  initializer,
};
