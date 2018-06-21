// This is where I am making an Api call for the data

let config = {};

const getConfig = () => {
  return config;
};

const setConfig = (newConfig) => {
  config = newConfig;
};

const loadConfig = () => {
  return new Promise((resolve,reject) => {
    $.ajax({
      method: 'GET',
      url: '/db/apiKeys.json',
    }).done((results) => {
      resolve(results.firebaseConfig);
    }).fail((error) => {
      reject(error);
    });
  });
};

const getBlogsFromFirebase = () => {
  return new Promise((resolve,reject) => {
    const blogsArray = [];
    $.ajax({
      method: 'GET',
      url: `${config.databaseURL}/blogs.json`,
    })
      .done((blogEntries) => {
        if (blogEntries !== null) {
          Object.keys(blogEntries).forEach((fbKey) => {
            blogEntries[fbKey].id = fbKey;
            blogsArray.push(blogEntries[fbKey]);
          });
        }
        resolve(blogsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

// const initializer = () => {
//   loadConfig().then((firebaseConfig) => {
//     setConfig(firebaseConfig);
//     firebase.initializeApp(firebaseConfig);
//   });
// };

module.exports = {
  // initializer,
  getConfig,
  setConfig,
  loadConfig,
  getBlogsFromFirebase,
};
