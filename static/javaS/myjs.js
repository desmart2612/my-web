window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
  
    document.body.style.opacity = 1;
  
    setTimeout(function() {
      if (scrollPosition < window.innerHeight) {
        document.body.style.backgroundImage = "url(../iceland-2111811_1280.jpg)";
      } else if (scrollPosition < window.innerHeight * 2) {
        document.body.style.backgroundImage = "url(../russia-1758515_1280.jpg)";
      } else {
        document.body.style.backgroundImage = "url('image3.jpg')";
      }
  
      document.body.style.opacity = 1;
    }, 300);

    var box = document.querySelector(".card1");
    var box2 = document.querySelector(".card2");
      var position = box.getBoundingClientRect();
      var position2 = box2.getBoundingClientRect();
      if (position.top < window.innerHeight && position.bottom >= 0) {
          box.classList.add("bounce");
      } else {
          box.classList.remove("bounce");
      }
      if (position2.top < window.innerHeight && position2.bottom >= 0) {
        box2.classList.add("bounce");
    } else {
        box2.classList.remove("bounce");
    }
  });