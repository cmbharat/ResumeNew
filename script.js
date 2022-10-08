var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");
var interval;
var animationDone = false;
for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetSection = this.textContent.trim().toLowerCase();

    var targetSectionId = document.getElementById(targetSection);

    // interval = setInterval(scrollVertically, 20, targetSectionId);
    interval = setInterval(function () {
      scrollVertically(targetSectionId);
    }, 20);
  });
}

var progressBars = document.querySelectorAll(".skill-progress > div");

var skillsContainer = document.getElementById("skills-container");

window.addEventListener("scroll", checkScroll);

function scrollVertically(targetSectionId) {
  var targetSectionCoordinates = targetSectionId.getBoundingClientRect();
  if (targetSectionCoordinates.top <= 0) {
    clearInterval(interval);
    return;
  }
  window.scrollBy(0, 50);
}
initialBars();
// checkScroll();
function initialBars() {
  for (let bar of progressBars) {
    bar.style.width = 0 + "%";
  }
}
function fillBars() {
  for (let bar of progressBars) {
    let targetWidth = bar.getAttribute("data-value");
    // console.log(targetWidth);
    let currentWidth = 0;

    let skillBarInterval = setInterval(function () {
      if (currentWidth > targetWidth) {
        clearInterval(skillBarInterval);
        return;
      }
      currentWidth++;
      bar.style.width = currentWidth + "%";
    }, 3);
  }
}

function checkScroll() {
  var skillsContainerCoordinates = skillsContainer.getBoundingClientRect();
  if (!animationDone && skillsContainerCoordinates.top <= window.innerHeight) {
    animationDone = true;
    fillBars();
  } else if (skillsContainerCoordinates.top > window.innerHeight) {
    animationDone = false;
    initialBars();
  }
}
