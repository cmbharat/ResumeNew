var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");
var interval;
for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetSection = this.textContent.trim().toLowerCase();
    // console.log(targetSection);
    var targetSectionId = document.getElementById(targetSection);
    // console.log(targetSectionId);

    // interval = setInterval(scrollVertically, 20, targetSectionId);
    interval = setInterval(function () {
      scrollVertically(targetSectionId);
    }, 20);
  });
}

function scrollVertically(targetSectionId) {
  var targetSectionCoordinates = targetSectionId.getBoundingClientRect();
  if (targetSectionCoordinates.top <= 0) {
    clearInterval(interval);
    return;
  }
  window.scrollBy(0, 50);
}
