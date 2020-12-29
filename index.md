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
	const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');

	if (theme === "dark") {
		document.getElementById("theme-toggle").innerHTML = "Light Mode";
		jtd.setTheme("custom");
	} else if (theme === "light") {
		document.getElementById("theme-toggle").innerHTML = "Dark Mode";
		jtd.setTheme("light");
	} else if  (userPrefers === "dark") {
		document.documentElement.setAttribute('data-theme', 'dark');
		window.localStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = "Light Mode";
		jtd.setTheme("custom");
	} else {
		document.documentElement.setAttribute('data-theme', 'Dark');
		window.localStorage.setItem('theme', 'Dark');
		document.getElementById("theme-toggle").innerHTML = "Dark Mode";
		jtd.setTheme("light");
	}

	function modeSwitcher() {
		let currentMode = document.documentElement.getAttribute('data-theme');
		if (currentMode === "dark") {
			document.documentElement.setAttribute('data-theme', 'light');
			window.localStorage.setItem('theme', 'light');
            document.getElementById("theme-toggle").innerHTML = "Dark Mode";
            jtd.setTheme("custom");
		} else {
			document.documentElement.setAttribute('data-theme', 'dark');
			window.localStorage.setItem('theme', 'dark');
            document.getElementById("theme-toggle").innerHTML = "Light Mode";
            jtd.setTheme("light");
		}
	}
</script>