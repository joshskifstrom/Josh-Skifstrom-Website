window.addEventListener("load", function() {
	
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
		mainBckImg.classList.add("hide");
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
		mainBckImg.classList.add("hide");
	}

	//Nav Section
	const navLeftHeader = document.getElementById("nav-left-header-id");

	navLeftHeader.addEventListener("click",homePage);

	function homePage() {
		mainBckImg.classList.remove("hide");
		sectionAbout.classList.remove("show");
		sectionMusic.classList.remove("show");
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

})