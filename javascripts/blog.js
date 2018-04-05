
const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeOnLoad);
    myRequest.addEventListener("error",executeOnFail);
    myRequest.open("Get","../db/blogs.json");
    myRequest.send();
}

startApplication();

function executeOnLoad () {
    const data = JSON.parse(this.responseText);
    createBlogPosts(data.blogs);
    writeToDom();
}

function executeOnFail () {
    console.log('error');
}

const writeToDom = (strang) => {
    document.getElementById("my-blogs").innerHTML += strang;
};

const createBlogPosts = (blogs) => {
    for ( let i = 0; i < blogs.length; i++){
        let domString = "";
        domString += `<div>
                        <h2 id="${blogs[i].id}">${blogs[i].title} ${blogs[i].date}</h2>
                            <p> ${blogs[i].post}</p>
                      </div>`
        writeToDom(domString);
    }
};

createBlogPosts();