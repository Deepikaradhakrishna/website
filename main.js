// SHOW MENU
const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId);
      const nav = document.getElementById(navId);
  
      if (toggle && nav) {
          toggle.addEventListener('click', () => {
              nav.classList.toggle('show');
          });
      }
  };
  
  showMenu('nav_toggle', 'nav_menu');
  
  // ACTIVE & REMOVE ACTIVE
  const navLinks = document.querySelectorAll('.nav_link');
  
  function linkAction() {
      // Remove active class from all links
      navLinks.forEach(n => n.classList.remove('active'));
      
      // Add active class to the clicked link
      this.classList.add('active');
  
      // Hide the navigation menu
      const navMenu = document.getElementById('nav_menu');
      navMenu.classList.remove('show');
  }
  
  // Add click event listener to each navigation link
  navLinks.forEach(n => n.addEventListener('click', linkAction));
  