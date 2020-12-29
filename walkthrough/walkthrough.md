---
layout: default
title: Walkthrough
nav_order: 2
has_children: true
permalink: walkthrough/
---

# Walkthrough
Welcome to the Animal Crossing: New Horizons tutorial walkthrough! Please use the left-hand navigation bar to navigate through the walkthrough.

<!-- more stuff here?? no idea what to put though... :thonk: -->

## Timeline
Put timeline of events here 

<script>
let theme = sessionStorage.getItem('theme');

    function modeSwitcher() {
    let theme = sessionStorage.getItem('theme');
    if (theme === "dark") {
        jtd.setTheme('light');
        sessionStorage.setItem('theme', 'light');
        document.getElementById("theme-toggle").innerHTML = "Dark Mode";
    }	else {
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