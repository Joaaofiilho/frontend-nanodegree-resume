/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("João Ferreira");

//var awesomeThoughts = "I am João Ferreira and I am AWESOME";
//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

//$("#main").append(funThoughts);

 //var name = "João Ferreira";
 //var role = "Desenvolvedor Web";
//
// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

//var skills = ["awesomeness", "programming", "teaching", "JS"];

//$("#main").append(skills[0]);

var bio = {
  "name" : "João",
  "role" : "Desenvolvedor Web",
  "contact" :{
     "gmail" : "joaot10112@gmail.com",
     "twitter" : "@Joa_ot"
  },
  "pictureURL" : "images/fry.jpg",
  "welcomeMessage" : "Bem-vindo à minha página!",
  "skills" : ["awesomeness", "programming", "teaching", "JS"]
};

//
// $("#main").append(bio.name);
// $("#main").append(bio.role);
// $("#main").append(bio.contact.twitter);
// $("#main").append(bio.pictureURL);
// $("#main").append(bio.welcomeMessage);
// $("#main").append(bio.skills);

var work = {
	"jobs": [{
			"job": "Programador",
			"position": "Chefe",
			"employer": "Google",
			"years": 4,
			"city": "Fortaleza"
		},
		{
			"job": "Desenvolvedor Web",
			"position": "Chefe",
			"employer": "Microsoft",
			"years": 2,
			"city": "São Paulo"
		}
	]
};

//
// var education = {};
// education["name"] = "Ari de Sá Cavalcante";
// education["yearsAttended"] = "2014-2016";
// education["city"] = "Fortaleza";

//$("#main").append(work["position"]);
//$("#main").append(education.name);

var education = {
  "schools" : [
    {
      "name" : "CIEP",
      "city" : "Paraipaba",
      "majors" : ["Alexandra", "Sérgio"],
      "minors" : ["Adahilton", "Jorge"],
      "years" : "2013",
      "onlineCourse" : "none"
    },
    {
      "name" : "Ari de Sá Cavalcante",
      "city" : "Fortaleza",
      "majors" : ["Otto", "Kesslly"],
      "minors" : ["Bruno Maia", "Izabel Leão"],
      "years" : "2014-2016",
      "onlineCourse" : "none"
    }
  ]
};

var projects = {
      "title" : "none",
      "date" : "none",
      "description" : "none",
      "images" : ["link", "link"]
};

if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkills);
}

$("#workExperience").append(HTMLworkStart);
for (var job in work.jobs) {
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);
}
