
 var bio = {
     
    "name" : "Eva Počivavšek Janhar",
    "role" : "Web Designer & Developer",
    "contacts" : {
          "mobile": "+38651243336",
          "email": "eva.pocivavsek.janhar@gmail.com",
          "github": "https://github.com/ep1607",
          "twitter": "not jet :)", 
          "location": "Tabor 8, Ljubljana"
    },
    "welcomeMessage": '"Tralala..."', 
    "skills": ["programming", "designing", "dancing", "performing", "teaching", "DJing", "video editing", "self-learning", "procarstinanting"],
    "biopic": "http://i.ytimg.com/vi/bMKi7ZLHA8Y/maxresdefault.jpg"
    
 };

var education = {
    "schools": [
        {
        "name" : "Faculty of Natural Sciences and Engineering",
        "location" : "Snežniška ulica 5, Ljubljana",
        "degree" : "Bachelor's degree",
        "majors" : ["Graphic and Media Technology"],
        "dates" : 2011,
        "url" : "http://www.ntf.uni-lj.si/en/"
        },
        {
        "name" : "Faculty of Computer and Information Science",
        "location" : "Večna Pot 113, Ljubljana",
        "degree" : "still studying",
        "majors" : ["not jet"],
        "dates" : "now",
        "url" : "http://www.fri.uni-lj.si/"
        }
    ],
    "onlineCourses" : [{
        "title" : "Front-End Web Developer Nanodegree",
        "school" : "Udacity",
        "date" : "now",
        "url" : "https://www.udacity.com"
    }]
        
};


var work = {
    "jobs" : [{
        "employer" : "Cankarjev Dom", 
        "title" : "hostes", 
        "location" : "Prešernova cesta 10, Ljubljana", 
        "dates" : "November 2008 - September 2011",
        "description" : "garderobe, selling tickets, hostes in gallery, events,..." 
    },
    {
        "employer" : "VPK", 
        "title" : "MCR operator", 
        "location" : "Kranjčeva 22, Ljubljana", 
        "dates" : "March 2013 - September 2015",
        "description" : "work as Media controller, also did graphics, video and sound editing,..." 
    },
    {
        "employer" : "Studio Dansa", 
        "title" : "dance teacher", 
        "location" : "Vilharjeva 3, Ljubljana", 
        "dates" : "November 2013 - now",
        "description" : "Teaching Lindy Hop, solo jazz, DJing, preforming... "
    }]
    
};

var project = {
    "projects" : [{
          "title" : "Bosopet - header design", 
          "dates" : "September 2014",
          "description" : "Header for preschool web page.",
          "images" : ["http://www.vrtec-bosopet.si/images/winter2.jpg"]
    },
    {
          "title" : "Studio Dansa - logo design",
          "dates" : "September 2013",
          "description" : "Logo for dancing school.",
          "images" : ["https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/p160x160/401589_476307345743788_2023428427_n.jpg?oh=360336a3ed5bda3409010900a2a4f9f5&oe=56498BDF&__gda__=1447846464_cfee113e8d82ee09be6c206a68600cf7"]

    },
    {
          "title" : "Black Water Blues - promo video",
          "dates" : "January 2013",
          "description" : "Promo video for festival.",
          "images" : "",
          "video" : "cZ0DS-EuTIk"
    }
    ]
};


var id="";


//
// from BIO
//

bio.display = function() {
    //HEADER

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    
    
    //CONTACTS
    
    var formattedMobile=HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail=HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter=HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub=HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation=HTMLlocation.replace("%data%", bio.contacts.location);
    
    var formattedContactInfo=formattedMobile+formattedEmail+formattedTwitter+formattedGithub;
    $("#topContacts").append(formattedContactInfo+formattedLocation);
    $("#footerContacts").append(formattedContactInfo);
    
    var formattedPic=HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);
    
    var formattedWmessage=HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWmessage);
    
    //SKILLS
    
    var collectedSkills="";
    var n=bio.skills.length;
    for(var i=0; i<n; i++) {
        collectedSkills=collectedSkills+HTMLskills.replace("%data%", bio.skills[i]);
    }
    $("#header").append(HTMLskillsStart);
    $("#skills").append(collectedSkills);
};

bio.display();
//
// from WORK
//
work.display =  function() {
    $("#workExperience").append(HTMLworkStart);
    
    var n = work.jobs.length;
    for (var i=0; i<n; i++) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer+formattedTitle;
        $("div.work-entry:last").append(formattedEmployerTitle);
        
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        
        var content=formattedDate+formattedLocation+formattedDescription;
        $("div.work-entry:last").append(content);
        
    }
};
work.display();
//
// from PROJECTS
//
project.display = function() {
    
    $("#projects").append(HTMLprojectStart);
    
    var n = project.projects.length;
    for(var i=0; i<n; i++) {
        var formattedTitle=HTMLprojectTitle.replace("%data%", project.projects[i].title);
        var formattedDates=HTMLprojectDates.replace("%data%", project.projects[i].dates);
        var formattedDescription=HTMLprojectDescription.replace("%data%", project.projects[i].description);
        
        var formattedPic="";
        if(project.projects[i].images[0]!== undefined) {
            var len=project.projects[i].images.length;
            var j=0;
            while(j<len) {
                formattedPic+=HTMLprojectImage.replace("%data%", project.projects[i].images[j]);
                j++;
            }
        } else {
            formattedPic="<div id='player'></div>";
            id=project.projects[i].video;
        }
        
        var data=formattedTitle+formattedDates+formattedDescription+formattedPic;
        $(".project-entry").append(data);
    }
};
project.display();
//
// from EDUCATION
//

education.display = function() {
    
    $("#education").append(HTMLschoolStart);
    
    var n=education.schools.length;
    for(var i=0; i<n; i++) {
        
        var formattedName=HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree=HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var nameDegree=formattedName+formattedDegree;
    
        var formatedDates=HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedLocation=HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedMajor=HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        
        $(".education-entry").append(nameDegree+formatedDates+formattedLocation+formattedMajor);
        $(".education-entry").find("a:last").attr("href", education.schools[i].url);
    }
    
    $(".education-entry").append(HTMLonlineClasses);
    
    n=education.onlineCourses.length;
    for(i=0; i<n; i++) {
        
        var formattedTitle=HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedSchool=HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedDates=HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
        var schoolTitle=formattedTitle+formattedSchool;
        
        $(".education-entry").append(schoolTitle+formattedDates);
        $(".education-entry").find("a:last").attr("href", education.onlineCourses[i].url);
        
        var formattedURL=HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry").append(formattedURL);
        $(".education-entry").find("a:last").attr("href", education.onlineCourses[i].url);
        
    }
};

education.display();

$("#mapDiv").append(googleMap);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: "cZ0DS-EuTIk",
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
}

function onPlayerReady(event) {
    event.target.stopVideos();
}
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}
