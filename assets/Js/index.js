// JavaScript code to toggle menu open and close
const mainMenu = document.getElementById('linkscontainer');
const menuIcon = document.getElementById('menu-btn');
const cancelIcon = document.getElementById('menu-close');

menuIcon.addEventListener('click', function() {
   if (mainMenu.style.display === 'none') {
      mainMenu.style.display = 'block';
      menuIcon.style.display = 'none';
      cancelIcon.style.display = 'inline-block';
   } else {
      mainMenu.style.display = 'none';
      menuIcon.style.display = 'inline-block';
      cancelIcon.style.display = 'none';
   }
});
cancelIcon.addEventListener('click', function() {
   if (mainMenu.style.display === 'none') {
      mainMenu.style.display = 'block';
      menuIcon.style.display = 'none';
      cancelIcon.style.display = 'inline-block';
   } else {
      mainMenu.style.display = 'none';
      menuIcon.style.display = 'inline-block';
      cancelIcon.style.display = 'none';
   }
});
