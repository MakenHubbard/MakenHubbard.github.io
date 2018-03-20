var projects = [
    {
        id: "project1",
        title: "My Dog Project",
        imagePath: "./images/uglydog.jpg",
        description: "I'm working on getting this guys tongue back in his mouth.",
        githubUrl: "MakenHubbard.github.io"
    },
    {
        id: "project2",
        title: "My Other Dog Project",
        imagePath: "./images/flappydog.jpg",
        description: "This guy is in need of a face lift. We are working on that.",
        githubUrl: "MakenHubbard.github.io"
    },
    {
        id: "project3",
        title: "My Spider Project",
        imagePath: "./images/bigspider.jpg",
        description: "We are infusing this spider with DNA that might interact with human DNA, possibly creating a super human spider guy if bitten. Also working on what to call the specimen when created.",
        githubUrl: "MakenHubbard.github.io"
    },
    {
        id: "project4",
        title: "My War Horse Project",
        imagePath: "./images/zebra.jpg",
        description: "In this project, We are observing the advantages/disadvantages of applying war paint to horses in the wild. Maybe it will throw of predators when they foolishly attack a war horse. Or they will just look super cool galloping around making everyone jealous of their hypnotic print",
        githubUrl: "MakenHubbard.github.io"
    },
    {
        id: "project5",
        title: "My Hairy Toothpick Project",
        imagePath: "./images/crazypillar.jpg",
        description: "This is mainly a gingivitis experiment. We are trying to find ways of implementing the ability of flossing your teeth while you use your handy toothpick to pick out that piece of lettuce that has caught the attention of all your snickering co-workers who won't tell you that you have something in your teeth especially Greg because Greg is your friend and he didn't say anything about it either. Thanks alot Gregory!!!!",
        githubUrl:  "MakenHubbard.github.io"
    },
    {
        id: "project6",
        title: "My Charlie Chaplin Tribute Project",
        imagePath: "./images/charliechaplin.jpg",
        description: "This isn't so much of a project than it is just a picture of Charlie.",
        githubUrl: "MakenHubbard.github.io"
    }
];

function writeToDom(strang) {
    document.getElementById("my-projects").innerHTML += strang;
};

function createProjectCards(projectsArray) {
    for ( var i = 0; i < projectsArray.length; i++){
        var domString = "";
        domString += '<div>'
        domString += '<h2 id="' + projectsArray[i].id + '">' + projectsArray[i].title + '</h2>'
        domString += '<img src="' + projectsArray[i].imagePath + '">'
        domString += '<p>' + projectsArray[i].description + '/p>'
        domString += "</div>"
        writeToDom(domString);
    }
};

createProjectCards(projects);