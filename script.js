document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    const menuToggle = document.getElementById('menu-toggle');
    const navDropdown = document.getElementById('nav-dropdown');
  
    menuToggle.addEventListener('click', function() {
      navDropdown.classList.toggle('active');
    });
  
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!menuToggle.contains(event.target) && !navDropdown.contains(event.target)) {
        navDropdown.classList.remove('active');
      }
    });
  
    // User account icon functionality
    const userAccount = document.getElementById('user-account');
  
    userAccount.addEventListener('click', function() {
      // Redirect to login page
      window.location.href = 'iniciar.html';
    });
  
    // Add hover effects for better UX
    const navLinks = document.querySelectorAll('.nav-menu a');
  
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', function() {
        this.style.color = '#a67c5c';
      });
  
      link.addEventListener('mouseleave', function() {
        this.style.color = '#456452';
      });
    });
  });