window.addEventListener("load", function() {
	const about = document.getElementById("about");
	const sectionAbout = document.getElementById("section-about-id");
	const mainBckImg = document.getElementById("main-background-img");
	about.addEventListener("click", aboutSection);

	function aboutSection() {
		sectionAbout.classList.add("show");
		mainBckImg.classList.add("hide");

	}

	const navLeftHeader = document.getElementById("nav-left-header-id");

	navLeftHeader.addEventListener("click",homePage);

	function homePage() {
		mainBckImg.classList.remove("hide");
		sectionAbout.classList.remove("show");
	}
})