const startApp = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load",executeCodeAfterFileLoad);
    myRequest.addEventListener("error",executeThisIfXHRFails);
    myRequest.open("GET","../db/projects.json");
    myRequest.send();
}

startApp();

function executeCodeAfterFileLoad () {
    const data = JSON.parse(this.responseText);
    createProjectCards(data.projects);
    writeToDom();
}

function executeThisIfXHRFails () {
    console.log("error");
}

const writeToDom = (strang) => {
    document.getElementById("my-projects").innerHTML += strang;
};

const createProjectCards = (projectsArray) => {
    for ( let i = 0; i < projectsArray.length; i++){
        let domString = "";
        domString += `<div>
                        <h2 id="${projectsArray[i].id}"> ${projectsArray[i].title}</h2>
                        <img src="${projectsArray[i].imagePath}">
                            <p>${projectsArray[i].description}</p>
                     </div>`
        writeToDom(domString);
    }
};

