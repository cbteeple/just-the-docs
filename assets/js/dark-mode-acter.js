const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');

if  (userPrefers === "dark") {
	cssFile.setAttribute('href', darkModeCssRef)
	window.localStorage.setItem('theme', 'dark');
	updateButtonText(toggleDarkMode)
} else {
	cssFile.setAttribute('href', originalCssRef)
	window.localStorage.setItem('theme', 'light');
	updateButtonText(toggleDarkMode)
}

function modeSwitcher() {
	let currentMode = document.documentElement.getAttribute('data-theme');
	if (currentMode === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		window.localStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle").innerHTML = "Dark Mode";
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		window.localStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = "Light Mode";
	}
}