// Javascript for tab navigation horizontal scroll buttons
window.onload = function () {
  const btnLeft = document.querySelector(".left-btn");
  const btnRight = document.querySelector(".right-btn");
  const tabMenu = document.querySelector(".tab-menu");

  const iconVisibility = () => {
    let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
    console.log("1.", scrollLeftValue);

    let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;
    console.log("2.", scrollableWidth);

    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
    btnRight.style.display =
      scrollableWidth > scrollLeftValue ? "block" : "none";
  };

  btnRight.addEventListener("click", () => {
    tabMenu.scrollLeft += 150;
    //iconVisibility();
    setTimeout(() => iconVisibility(), 50);
  });
  btnLeft.addEventListener("click", () => {
    tabMenu.scrollLeft -= 150;
    //iconVisibility();
    setTimeout(() => iconVisibility(), 50);
  });

  window.onload = function () {
    btnRight.style.display =
      tabMenu.scrollWidth > tabMenu.clientWidth ||
      tabMenu.scrollWidth >= window.innerWidth
        ? "block"
        : "none";
    btnLeft.style.display =
      tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
  };

  window.onresize = function () {
    btnRight.style.display =
      tabMenu.scrollWidth > tabMenu.clientWidth ||
      tabMenu.scrollWidth >= window.innerWidth
        ? "block"
        : "none";
    btnLeft.style.display =
      tabMenu.scrollWidth >= window.innerWidth ? "" : "none";

    let scrollLeftValue = Math.round(tabMenu.scrollLeft);
    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
  };

  // Javascript to make the tab navigation draggable
  let activeDrag = false;

  tabMenu.addEventListener("mousemove", (drag) => {
    if (!activeDrag) return;
    tabMenu.scrollLeft -= drag.movementX;
    iconVisibility();

    tabMenu.classList.add("dragging");
  });

  document.addEventListener("mouseup", () => {
    activeDrag = false;

    tabMenu.classList.remove("dragging");
  });

  tabMenu.addEventListener("mousedown", () => {
    activeDrag = true;
  });

  // Javascript to view tab contents on click tab buttons
  const tabs = document.querySelectorAll(".tab");
  const tabBtns = document.querySelectorAll(".tab-btn");

  const tab_Nav = function (tabBtnClick) {
    tabBtns.forEach((tabBtn) => {
      tabBtn.classList.remove("active");
    });

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tabBtns[tabBtnClick].classList.add("active");
    tabs[tabBtnClick].classList.add("active");
  };

  tabBtns.forEach((tabBtn, i) => {
    tabBtn.addEventListener("click", () => {
      tab_Nav(i);
    });
  });

  //java script for make button active by clicking it in sideMenu
  var header = document.getElementById("myDIV");
  var btns = header.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  //java script for closing menu when click out side it

  const mobileMenuToggler = () => {
    if (window.screen.width >= 992) {
      const sideMenu = document.getElementById("side-menu1");
      const submenuTrigger = document.getElementById("submenu-trigger");
      document.onclick = function (e) {
        if (e.target.id !== "side-menu") {
          sideMenu.classList.remove("show");
        }
      };
    }
  };
  mobileMenuToggler();
  /*window.addEventListener("resize", desktopMenuToggler);
  const mobileMenuToggler = () => {
    if (window.screen.width < 992) {
      $("li.navitem").click(function (e) {
        if (this === e.target)
          $(this).find(".subsubmenu").toggleClass("visible");
      });
      $(document).ready(function () {
        // Toggle sidebar on button click
        $("#sidebarToggle").click(function () {
          $("#side-menu1").toggleClass("show");
          $("#overlay").toggle();
        });

        // Close sidebar when clicking on overlay
        $("#overlay").click(function () {
          $("#side-menu1").removeClass("show");
          $(this).hide();
        });
      });
    }
  };
  mobileMenuToggler();
  window.addEventListener("resize", mobileMenuToggler);*/
};
function getVals() {
  // Get slider values
  let parent = this.parentNode;
  let slides = parent.getElementsByTagName("input");
  let slide1 = parseFloat(slides[0].value);
  let slide2 = parseFloat(slides[1].value);
  // Neither slider will clip the other, so make sure we determine which is larger
  if (slide1 > slide2) {
    let tmp = slide2;
    slide2 = slide1;
    slide1 = tmp;
  }

  let displayElement = parent.getElementsByClassName("rangeValues")[0];
  displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
}

window.onload = function () {
  // Initialize Sliders
  let sliderSections = document.getElementsByClassName("range-slider");
  for (let x = 0; x < sliderSections.length; x++) {
    let sliders = sliderSections[x].getElementsByTagName("input");
    for (let y = 0; y < sliders.length; y++) {
      if (sliders[y].type === "range") {
        sliders[y].oninput = getVals;
        // Manually trigger event first time to display values
        sliders[y].oninput();
      }
    }
  }
};

//javascript for make overlay entire screen when I click side menu
$("li.navitem").click(function (e) {
  if (this === e.target) $(this).find(".subsubmenu").toggleClass("visible");
});
$(document).ready(function () {
  // Toggle sidebar on button click
  $("#sidebarToggle").click(function () {
    $("#side-menu1").toggleClass("show");
    $("#overlay").toggle();
  });

  // Close sidebar when clicking on overlay
  $("#overlay").click(function () {
    $("#side-menu1").removeClass("show");
    $(this).hide();
  });
});
