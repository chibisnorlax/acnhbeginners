---
layout: default
title: Home
nav_order: 1
---

# for da newbies :D
A walkthrough guide to help you out in the first few days!

{: .note }
This guide is incomplete!
<a id="theme-toggle" onclick="modeSwitcher()"></a>

<script>
    console.log("local");
	if (theme === "dark") {
		document.getElementById("theme-toggle").innerHTML = "Light Mode";
		jtd.setTheme("custom");
		console.log("end change to dark");
	} else if (theme === "light") {
		document.getElementById("theme-toggle").innerHTML = "Dark Mode";
		jtd.setTheme("light");
		console.log("end change to light");
	} else if  (userPrefers === "dark") {
		document.documentElement.setAttribute('data-theme', 'dark');
		window.localStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = "Light Mode";
		jtd.setTheme("custom");
		console.log("end change to dark2");
	} else {
		document.documentElement.setAttribute('data-theme', 'Dark');
		window.localStorage.setItem('theme', 'Dark');
		document.getElementById("theme-toggle").innerHTML = "Dark Mode";
		jtd.setTheme("light");
		console.log("end change to light2");
	}

	function modeSwitcher() {
		let currentMode = document.documentElement.getAttribute('data-theme');
		if (currentMode === "light") {
			document.documentElement.setAttribute('data-theme', 'light');
			window.localStorage.setItem('theme', 'light');
			document.getElementById("theme-toggle").innerHTML = "Dark Mode";
			jtd.setTheme("light");
			console.log("mode change to light3");
		} else {
			document.documentElement.setAttribute('data-theme', 'dark');
			window.localStorage.setItem('theme', 'dark');
			document.getElementById("theme-toggle").innerHTML = "Light Mode";
			jtd.setTheme("custom");
			console.log("mode change to dark3");
		}
	}
</script>
