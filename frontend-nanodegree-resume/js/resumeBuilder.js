var work = {
	"jobs" : [
	{
		"employer" : "Whirlpool Corporation",
		"location" : "MI, US",
		"title" : "Front End Developement Intern",
		"dates" : "June 2016 to August 2016",
		"description" : "Interacted with stakeholders, gathered new requirements and understood the business needs, metrics and user's objective. Undergone UX Design Bootcamp training which helped me to create an effective User Interface web design which contains input controls,navigation components, informational components and containers.Designed and developed UI wireframes using Balsamiq and a working prototype using Adobe Illustrator and InVision. As an individual contributor, migrated modules of a powerful legacy application configuring intoa web application using Spring MVC 4 with Maven dependencies, JavaScript, bootstrap, Ajax and Angular. Modified the tables, Indexes, views,triggers and procedures of the existing Oracle database to integrate with the web application.Integrated Tableau with google analytics to track and report website's traffic, user's behavior and content value."
		},
	{
		"employer" : "Pricol Limited, India",
		"location" : "TN, India",
		"title" : "Software Engineer Trainee",
		"dates" : "June 2014 to July 2015",
		"description" : "Participated in requirements gathering, analysis and experienced in developing architecture in accordance to User Interface Specs. Created wireframes using pencil and worked extensively with HTML5, CSS and JavaScript code to build the dynamic web pages. Re­designed and developed the existing website to improve user experience and add new functionality."
	},
	{
		"employer" : "CG VAK Exports and India Private Limited, India",
		"location" : "TN, India",
		"title" : "Software Engineering Intern",
		"dates" : "Aug 2012 to Nov 2012",
		"description" : "Developed a career module of an organization by implementing keyword search and automatic validation of application details using Java and Javascript. Worked closely with the database by integrating the application with the MySQL database. Increased the performance, integrity and security of the database by adding indices and optimizing queries."
	}
	]
}

var projects = {
	"projects" : [
	{
		"title" : "Online Grocery Store",
		"date" : "Jan 2016 to May 2016",
		"description" : "Implemented a web application with user registration,login, product search using filters, rate products, email using mail API features using Java, AngularJS and MySQL."
	},
	{
		"title" : "IVotes Voting system",
		"date" : "Aug 2015 to Dec 2015",
		"description" : "Implemented a Real Time voting system with extensive data visualization using Java, Javascript, MySQL and Tableau."
	},
	{
		"title" : "Researchers Exchange Participation",
		"date" : "Aug 2015 to Dec 2015",
		"description" : "Implemented MVC pattern using JSP and JavaBeans with SQL as the backend with mailing and social media integration feature."
	},
	{
		"title" : "My portfolio",
		"date" : "Aug 2016 to Sep 2016",
		"description" : "Implemented a responsive website with image compression and responsiveness and optimization of the website using Bootstrap, Html5, CSS3 and responsive patterns like mostly fluid and Off Canvas Visualization."

	},
	{
		"title" : "Ajax Implementation",
		"date" : "Aug 2016 to Sep 2016",
		"description" : "Implemented Google map street, NYT and Wikipedia API using JSON and Ajax call."
	},
	{
		"title" : "Online Resume",
		"date" : "Aug 2016 to present",
		"description" : "Developed fully functional responsive application with jQuery DOM manipulation functions, HTML5/CSS3, Bootstrap and JavaScript."
	},
	{
		"title" : "Online Resume",
		"date" : "June 2016 to present",
		"description" : "Implemented Ajax function call and used plugins like Data Tables, JsPDF and Highcharts ."
	}
	]
}

var bio = {
	"name" : "Sharmi Kandasamy",
	"role" : "Front End Web Developement",
	"contacts" : [
		{
			"mobile" : "+91-980-585-5757",
			"email" : "svanakar@uncc.edu",
			"GitHub" : "",
			"location" : "Charlotte,NC",
			"linkedin" : "https://www.linkedin.com/in/sharmik"
	}
	],
	"welcomeMessage": "Front end developement is an art and not a science",
    "skills" : [
    "JavaScript", "HTML5 & CSS3", "Bootstrap", "AngularJS", "Oracle PL/SQL", "MySQL", "SQL server", "Invision", "Adobe Illustrator", "Balsamiq" 
    ],
    "biopic" : "images/fry.jpg"
}

var education = {
	"schools" : [
	{
		"name" : "University of North Carolina, Charlotte",
		"location" : "Charlotte, North Carolina",
		"degree" : "Master of Science",
		"major" : "Masters in Information Technology",
		"date" : "Aug 2015 - Dec 2016",
		"url" : "http://www.uncc.edu/landing/academics#graduate-programs"
		
	},
	{
		"name" : "Anna University",
		"location" : "Chennai, India",
		"degree" : "Under Graduation",
        "major" : "Information Technology",
		"date" : "July 2010 - June 2014",
		"url" : "http://www.skcet.ac.in/"
	}
	]
}

var certification= {
	"certificate" : [
	{
		"title" : "Nano Degree - Front End Web Developement",
		"school" : "Udacity.com",
		"dates" : "July 2016 - Present",
		"url" : "https://classroom.udacity.com/nanodegrees/nd001/parts/0011345406/modules/296281861575462/lessons/2962818615239847/concepts/29594685550923#"
	}
	]
}



var name = "Sharmi Kandasamy";
var formattedname= HTMLheaderName.replace("%data%", name);
$("#header").prepend(formattedname);

if(bio.contacts.length > 0){
	for(contact in bio.contacts){

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
		$("#topContacts").append(formattedMobile);
		var formattedemail = HTMLemail.replace("%data%", bio.contacts[contact].email);
		$("#topContacts").append(formattedemail);
		var formattedlocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
		$("#topContacts").append(formattedlocation);
		var formattedlinkedln = HTMLblog.replace("%data%", bio.contacts[contact].linkedin);
		$("#topContacts").append(formattedlinkedln);
		var formattedimage = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedimage);
		var formattedwelcomemessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedwelcomemessage);
      }
	}

if(bio.skills.length > 0 )
{
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[8]);
    $("#skills").append(formattedSkill);
}


function displayWork(){
for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formatteddate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formatteddate);
	var formatteddescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formatteddescription);
}
}

displayWork();

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
})


projects.display = function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
        $(".project-entry:last").append(formattedDate);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

	}
}

projects.display();

education.display = function(){
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedname = HTMLschoolName.replace("%data%",education.schools[school].name);
		$(".education-entry:last").append(formattedname);
		var formattedDate = HTMLschoolDates.replace("%data%",education.schools[school].date);
		$(".education-entry:last").append(formattedDate);
		var formattedlocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedlocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);

	}
}

education.display();


if(certification.certificate.length != null){
	for(certificate in certification.certificate)
		$("#certification").append(HTMLonlineClasses);

		var formattedTitle = HTMLonlineTitle.replace("%data%",certification.certificate[certificate].title);
		$(".certification-entry:last").append(formattedTitle);
		var formattedCreatedby = HTMLonlineSchool.replace("%data%",certification.certificate[certificate].school);
		$(".certification-entry:last").append(formattedCreatedby);
		var formattedDate = HTMLonlineDates.replace("%data%",certification.certificate[certificate].dates);
		$(".certification-entry:last").append(formattedDate);
	}


$("#mapDiv").append(googleMap);
