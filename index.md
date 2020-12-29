---
layout: default
title: Home
nav_order: 1
---

# for da newbies :D
A walkthrough guide to help you out in the first few days!

{: .note }
This guide is incomplete!

<button class="btn js-toggle-dark-mode">Theme Toggle</button>
  <script>
    const toggleDarkMode = document.querySelector('.js-toggle-dark-mode');
    jtd.addEvent(toggleDarkMode, 'click', function()
    {
      if (jtd.getTheme() === 'custom') 
      {
        jtd.setTheme('light');
        toggleDarkMode.textContent = 'Toggle to Dark';
      }
      else 
      {
        jtd.setTheme('custom');
        toggleDarkMode.textContent = 'Toggle to light';
      }
    });
  </script>