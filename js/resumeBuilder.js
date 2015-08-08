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
          "location": "Tabor, Ljubljana"
    },
    "welcomeMessage": "Hello good people of Internet", 
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
        "location" : "Ljubljana",
        "degree" : "BA",
        "majors" : ["Graphic and Media Technology"],
        "dates" : 2011,
        "url" : "http://www.ntf.uni-lj.si/en/"
        },
        {
        "name" : "Faculty of Computer and Information Science",
        "location" : "Ljubljana",
        "degree" : "-",
        "majors" : [],
        "dates" : 0,
        "url" : "http://www.fri.uni-lj.si/"
        }
    ],
    "onlineCourses" : [{
        "title" : "Front-End Web Developer Nanodegree",
        "school" : "Udacity",
        "date" : 0,
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
        "location" : "Ljubljana", 
        "dates" : "November 2008 - September 2011",
        "description" : "garderobe, selling tickets, hostes in gallery, events,..." 
    },
    {
        "employer" : "VPK", 
        "title" : "MCR operator", 
        "location" : "Ljubljana", 
        "dates" : "March 2013 - September 2015",
        "description" : "work as Media controller, also did graphics, video and sound editing,..." 
    },
    {
        "employer" : "Studio Dansa", 
        "title" : "dance teacher", 
        "location" : "Ljubljana", 
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

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedName);
$("#header").append(formattedRole);

$("$t")