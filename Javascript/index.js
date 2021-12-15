window.addEventListener("load", function() {
	
	analytics.page("Website Page", "Home");
	analytics.identify("97980cfea0067", {
	  name: "Josh Skifstrom",
	  email: "jskifstrom@gmail.com",
	  logins: 1
	});
	
	//About Section
	const about = document.getElementById("about");
	const aboutMobile = document.getElementById("about-mobile");
	const sectionAbout = document.getElementById("section-about-id");
	const mainBckImg = document.getElementById("main-background-img");
	about.addEventListener("click", aboutSection);
	aboutMobile.addEventListener("click", aboutSection);

	function aboutSection() {
		sectionAbout.classList.add("show");
		sectionMusic.classList.remove("show");
		sectionShows.classList.remove("show");
		sectionContact.classList.remove("show");
		mainBckImg.classList.add("hide");
		
		analytics.page("Website Page","About");
	}

	//Music Section
	const music = document.getElementById("music");
	const sectionMusic = document.getElementById("section-music-id");
	const musicMobile = document.getElementById("music-mobile");
	music.addEventListener("click", musicSection);
	musicMobile.addEventListener("click", musicSection);
	
	function musicSection() {
		sectionMusic.classList.add("show");
		sectionAbout.classList.remove("show");
		sectionShows.classList.remove("show");
		sectionContact.classList.remove("show");
		mainBckImg.classList.add("hide");
	}

	//Shows Section
	const shows = document.getElementById("shows");
	const sectionShows = document.getElementById("section-shows-id");

	shows.addEventListener("click",showsSection);

	function showsSection() {
		sectionShows.classList.add("show");
		sectionMusic.classList.remove("show");
		sectionAbout.classList.remove("show");
		sectionContact.classList.remove("show");
		mainBckImg.classList.add("hide");
	}

	//Contact Section
	const contact = document.getElementById("contact");
	const sectionContact = document.getElementById("section-contact-id");

	contact.addEventListener("click", contactSection);

	function contactSection () {
		sectionContact.classList.add("show");
		sectionShows.classList.remove("show");
		sectionMusic.classList.remove("show");
		sectionAbout.classList.remove("show");
		mainBckImg.classList.add("hide");
	}

	//Nav Section
	const navLeftHeader = document.getElementById("nav-left-header-id");

	navLeftHeader.addEventListener("click",homePage);

	function homePage() {
		mainBckImg.classList.remove("hide");
		sectionAbout.classList.remove("show");
		sectionMusic.classList.remove("show");
		sectionShows.classList.remove("show");
		sectionContact.classList.remove("show");
	}

	const navMobile = document.getElementById('nav-mobile-id');
	const menu1Dropdown = document.getElementById('menu-1');
	const main = document.getElementById('main-background-img');

	navMobile.addEventListener("click", displayMenuOne);
	navMobile.addEventListener("mouseout", removeMenuOne);
	menu1Dropdown.addEventListener("mouseover", displayMenuList);
	menu1Dropdown.addEventListener("mouseout", removeMenuList);
	main.addEventListener("click",removeMenuList);

	function displayMenuOne() {
	  menu1Dropdown.classList.add("show-menu");
	}

	function removeMenuOne() {
	  menu1Dropdown.classList.remove("show-menu");
	}

	function displayMenuList() {
	  menu1Dropdown.classList.add("show-menu");
	}

	function removeMenuList() {
	  menu1Dropdown.classList.remove("show-menu");
	}

	//form function
	const name = document.getElementById('name');
	const phone = document.getElementById('phone');
	const email = document.getElementById('mail');
	const userMessage = document.getElementById('msg');
	const sendButton = document.getElementById('send-button');
	const formContainer = document.getElementById('form-container-id');
	
	sendButton.addEventListener("click",sendForm);

	function sendForm() {
		let nameValue = name.value;
		let phoneValue = phone.value;
		let emailValue = email.value;
		let userMessageValue = userMessage.value;

		formContainer.classList.add("hide-form");
		
		// using Twilio SendGrid's v3 Node.js Library
		const sgMail = require('@sendgrid/mail')
		//import sgMail from '@sendgrid/mail';

		sgMail.setApiKey(process.env.SENDGRID_API_KEY);

		const msg = {
		  to: 'jskifstrom@gmail.com',
		  from: 'jskifstrom@gmail.com', // Use the email address or domain you verified above
		  subject: 'Sending with Twilio SendGrid is Fun',
		  text: 'and easy to do anywhere, even with Node.js',
		  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
		};
		//ES6
		sgMail
		  .send(msg)
		  .then(() => {}, error => {
			console.error(error);
		
			if (error.response) {
			  console.error(error.response.body)
			}
		  });
		//ES8
		(async () => {
		  try {
			await sgMail.send(msg);
		  } catch (error) {
			console.error(error);
		
			if (error.response) {
			  console.error(error.response.body)
			}
		  }
		})();
	}

})
