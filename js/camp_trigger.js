function myFunction() {
    document.getElementById("myDropdown").classList.toggle("downshow");
  }
  window.onclick = function(e) {
      if (!e.target.matches('.dropdown-trigger')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          for (var d = 0; d < dropdowns.length; d++) {
              var openDropdown = dropdowns[d];
              if (openDropdown.classList.contains('downshow')) {
                  openDropdown.classList.remove('downshow');
              }
          }
      }
  }
