---
layout: default
title: Home
nav_order: 1
---

# for da newbies :D
A walkthrough guide to help you out in the first few days!

{: .note }
This guide is incomplete!


<script>
let theme = sessionStorage.getItem('theme');

    function modeSwitcher() {
    let theme = sessionStorage.getItem('theme');
    if (theme === "dark") {
        jtd.setTheme('light');
        sessionStorage.setItem('theme', 'light');
        document.getElementById("theme-toggle").innerHTML = "Dark Mode";
    } else {
        jtd.setTheme('custom');
        sessionStorage.setItem('theme', 'dark');
        document.getElementById("theme-toggle").innerHTML = "Light Mode";
    }
    }
    
    if (theme === "light") {
    jtd.setTheme('light');
    sessionStorage.setItem('theme', 'light');
    document.getElementById("theme-toggle").innerHTML = "Dark Mode";
    }
    else {
    jtd.setTheme('custom');
    sessionStorage.setItem('theme', 'dark');
    document.getElementById("theme-toggle").innerHTML = "Light Mode";
    }
</script>