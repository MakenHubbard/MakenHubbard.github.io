var blogs = [
    {
        id: "blog1",
        title: "HTML",
        date: "2/27/2018",
        post: "First things first, what I have learned about HTML. I know for a fact that HTML is short for HyperText Mark-up Language. I also felt comfortable with the HTML side of things coming into this class but soon felt that comfortability slowly fade away. I knew the basic syntax and order of things but found out quickly that I needed to know how to order things and which elements to use when trying to recreate something else. This was a bit difficult, deciding and planning ahead when coding HTML so that when I would move onto styling the document so I would be able to easily manipulate the content. I still feel I need more experience in HTML, which I am working on, so that I can be more fluid when sitting down and banging out some code. I need more of that 'think like a programmer' insight but feel as though I will acquire that as we move further into class."
    },
    {
        id: "blog2",
        title: "CSS",
        date: "2/27/2018",
        post: "In CSS, I need more of an understanding of what is possible, what positioning properties are best to use, and how use them effectively when recreating a style to mimic another document. After I typed the previous sentence, I realize I was refering to mostly basic CSS understanding, so I'LL just I could use  'more basics'. I am going to sit down, in what little free time I am expecting to have this year, and explore CSS and its capabilities."
    },
    {
        id: "blog3",
        title: "GIT and github",
        date: "3/6/18",
        post: 'OH MY LAWD!!!! Git was a pretty heavy concept for me to understand. We have this saying, in my line of work when we got buried up in some mud or soft terrian and can not get out, "I am not stuck, I can not get traction!". Starting with GIT, this is how I felt. I was thinking to myself, "Man, this is only the second week of class and they throw this at me?" This concept seriously made me have feelings of self-doubt. I considered that maybe I just did not have intellect to learn this craft whatsoever. I consider asking questions in class, like the instructors suggest to do consistently for good reason, but I could not. I could not because I was so lost that I did not even know what questions to ask. So I woke the Wednesday after being introduced to GIT and github thinking, "OK, maybe after I sleep I could bring all this information together and it would make some sense." Wrong, I sat down at home tried my best to understand it and I looked through the slides of both presentations, I went to google to find some understanding and just stumbled upon more confusion, I even went back and reviewed some Team Treehouse videos which made it better but still did not have any feeling of having this concept down. My only thought was I maybe if I go to the school I might have a chance of finding help. I embark on this crusade, searching for "The Holy Grail" of information if you will, rolling over everything in my mind attempting to make sense things. Not just things pertaining to GIT and github because there was no chance of that understanding but things in general life such as to why am I doing this, can I do this, No you can not, yes you can have faith in yourself, maybe,probably I can. I arrive at the school. As I enter the third floor, I am hoping there will a familiar face I can ask for help or insight as to what I need to know about how to know how to get an understanding of GIT and github. I sit down in the snackery and set up my stuff in hopes that maybe the information is stored in the walls of this place of learning and the answers will come to me via a weird osmosis phenomenom and I will be fine. Well.... did not quite work out that way. Que more feelings of self doubt. I sit there longer going over the same stuff I did at home still searching for understanding. As sit hoplessly, Jeremiah is giving tours, I suspect each and every one of my class mates have been through, like professional actor that has memorized a script so well he mumbles it in his sleep. I finally ask him, "Is there someone, anyone that could possibly help me with this?" He replied, "Yeah, I think Meg could help you depending on what she is doing right now." A faint feeling of relieve came over me. I am would not be surprised if Jeremiah could see happiness appear in my eyes where the look of pathetic misery previously resided. I packed up my stuff and followed him into his concession stand office, as Jon refered to it as, and there she was my educational savior!! I sat down and figuratively dumped all of my problems in her lap as if the copier went psycho and started shooting paper everywhere making a huge mess. It seemed as if she understood my vague word vomit of how i just did not understand anything and proceeded to help me pick up those figurative pieces of paper that spued from the copier, which resembled my life in shambles, and neatly stacked them for me in a nice pile of resounding understanding. I said, "Thank you so much!!"" several times to express my gratitude for her help as best as I could. For now, I have some understanding, not total perfection, but a fantastic foundational understanding to move forward with in this hellatious GIT and github adventure.'
    },
    {
        id: "blog4",
        title: "My Blog on Arrays",
        date: "3/16/2018",
        post: "'These past couple of weeks we have been learning Arrays. A concept I still have yet to find some comfort in because of reasons I can not even explain. I do not know what questions to ask and definitely do not know why. I am trying to watch videos online to learn about the proper syntax to use on everything. When I read the challenges that have been assigned to us, I do not even know where to start with solving them. I keep thinking maybe this is like the Git and Github thing that I was previously stuck and keep try to persevere through the mental walls put before me. Here I am, the before this blog is due and still have plenty of work to do in the array challenges on top of doing challenges for objects and functions. I just gotta 'Keep on Keeping on'I guess. I have full confidence that the understanding wil come to me but less confident that the understanding will come in the time I need it too. Hopefully, by immersing myself in the content I will grasp the ideas."
    },
    {
        id: "blog5",
        title: "Objects and Functions",
        date: "3/13/18",
        post: "I have been assigned with some reading that should help me with understanding Objects and Functions I have read some and its help me understand the for loops better and I am in the process of moving forward in my reading in search for the knowledge."
    },
    {
        id: "blog6",
        title: "Making Tickets",
        date: "3/13/18",
        post: "I feel pretty comfortable so far with the making tickets portion. We are currently in the process of a group project that is designed to mimic the how things work within a job atmosphere. Its seems simple going through the actions of creating columns of different stages of the process involved with completing tasks needed for final products. Adding tickets to the projects and making detailed cards for those tickets is lengthy but well needed for good communication and understanding what needs to be accomplished as a team."
    },
    {
        id: "blog7",
        title: "ES6, DOM Interaction, and markdown.",
        date: "3/27/18",
        post: "I feel behind. When it comes to ES6 it mostly makes sense. I am still though working on figure out how to write functions. What goes where and just simply where to start to accomplish what I want with a function is my issue. I know what I need to do to get better and that is to practice. Time is my biggest enemy in this scholastic adventure I am on and its whooping up on me for sure. With Dom Interaction, I feel the same way, it makes sense to me but to capture the exact syntax and knowing what goes where are my struggles. Markdown I can understand as well and I feel alright with it. I guess I just need to search for time some where to practice. One thing I struggle with, as far as time, is my schedule. I going to have to wrestle this year into submission to achieve this goal of becoming a Full Stack Developer. I am proud of how far I have come but still feel inadequate. "
    }
];

function writeToDom (strang) {
    document.getElementById("my-blogs").innerHTML += strang;
};

function createBlogPosts (blogsArray) {
    for ( var i = 0; i < blogsArray.length; i++){
        var domString = "";
        domString += '<div>'
        domString += '<h2 id="' + blogsArray[i].id + '">' + blogsArray[i].title + " " + blogsArray[i].date + '</h2>'
        domString += '<p>' + blogsArray[i].post + '/p>'
        domString += "</div>"
        writeToDom(domString);
    }
};

createBlogPosts(blogs);