/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 //DATA
 
 /* BIO format:
    name : string
    role : string
    contacts : an object with
          mobile: string
          email: string 
          github: string
          twitter: string 
          location: string
    welcomeMessage: string 
    skills: array of strings
    biopic: url
    display: function
*/ 

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
    //"display": function
    
 };
 
 
 /* EDUCATION format
     schools: array of objects with
         name: string
         location: string
         degree: string
         majors: array of strings
         dates: integer (graduation date)
         url: string
    onlineCourses: array with
         title: string
         school: string
         date: integer (date finished)
         url: string
    display: function
*/

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
    //"display" : function
        
};

/* WORK format:
jobs: array of objects with
     employer: string 
     title: string 
     location: string 
     dates: string (works with a hyphen between them)
     description: string 
display: function
*/
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
    
    //"display" : function
};
/* PROJECT format:
projects: array of objects with
      title: string 
      dates: string (works with a hyphen between them)
      description: string
      images: array with string urls
display: function
*/


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
          "images" : ["http://www.studiodansa.com/v2/wp-content/uploads/2014/08/logo-300x107.jpg"]

    }
    ]
    //"display" : function
};

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
    var formattedContactInfo=formattedMobile+formattedEmail+formattedTwitter+formattedGithub+formattedLocation;
    $("#topContacts").append(formattedContactInfo);
    var formattedContactFooter=formattedMobile+formattedEmail+formattedTwitter+formattedGithub
    $("#footerContacts").append(formattedContactFooter);
    
    var formattedPic=HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);
    
    var formattedWmessage=HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWmessage);
    
    //SKILLS
    
    var collectedSkills="";
    for(var skill in bio.skills) {
        //console.log(skill);
        collectedSkills=collectedSkills+HTMLskills.replace("%data%", bio.skills[skill]);
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
    
    for(var job in work.jobs) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer+formattedTitle;
        $("div.work-entry:last").append(formattedEmployerTitle);
        
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        
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
    for(var p in project.projects) {
        var formattedTitle=HTMLprojectTitle.replace("%data%", project.projects[p].title);
        var formattedDates=HTMLprojectDates.replace("%data%", project.projects[p].dates);
        var formattedDescription=HTMLprojectDescription.replace("%data%", project.projects[p].description);
        var formattedPic=HTMLprojectImage.replace("%data%", project.projects[p].images[0]);
        
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
    for(var school in education.schools) {
        var formattedName=HTMLschoolName.replace("%data%", education.schools[school].name);
        
        var formattedDegree=HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var nameDegree=formattedName+formattedDegree;
    
        var formatedDates=HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation=HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor=HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        
        $(".education-entry").append(nameDegree+formatedDates+formattedLocation+formattedMajor);
        $(".education-entry").find("a:last").attr("href", education.schools[school].url);
    }
    
    $(".education-entry").append(HTMLonlineClasses);
    for(var eSchool in education.onlineCourses) {
        
        var formattedTitle=HTMLonlineTitle.replace("%data%", education.onlineCourses[eSchool].title);
        var formattedSchool=HTMLonlineSchool.replace("%data%", education.onlineCourses[eSchool].school);
        var formattedDates=HTMLonlineDates.replace("%data%", education.onlineCourses[eSchool].date);
        var schoolTitle=formattedTitle+formattedSchool;
        
        $(".education-entry").append(schoolTitle+formattedDates);
        $(".education-entry").find("a:last").attr("href", education.onlineCourses[eSchool].url);
        var formattedURL=HTMLonlineURL.replace("%data%", education.onlineCourses[eSchool].url);
        $(".education-entry").append(formattedURL);
        $(".education-entry").find("a:last").attr("href", education.onlineCourses[eSchool].url);
        
    }
};

education.display();

$("#mapDiv").append(googleMap);
