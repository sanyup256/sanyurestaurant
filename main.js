$(document).ready(function () {
  $(document).ready(function () {
    $("#copyright-year").text(new Date().getFullYear());
  });

  // Set dark theme as default if no theme is saved
  const theme = localStorage.getItem("theme") || "dark";

  // Apply the saved theme on page load
  $("body")
    .addClass(`${theme}-theme`)
    .removeClass(`${theme === "dark" ? "light" : "dark"}-theme`);

  // Toggle icons visibility based on theme
  toggleThemeIcons(theme);

  // Toggle light and dark themes when clicking the theme button
  $("#theme").click(function () {
    const newTheme = $("body").hasClass("dark-theme") ? "light" : "dark";
    $("body")
      .removeClass("light-theme dark-theme")
      .addClass(`${newTheme}-theme`);

    // Toggle icons visibility
    toggleThemeIcons(newTheme);

    // Save theme to localStorage
    localStorage.setItem("theme", newTheme);
  });

  // Function to toggle theme icons based on the current theme
  function toggleThemeIcons(theme) {
    if (theme === "dark") {
      $("#dark").show();
      $("#light").hide();
      $("#sun").show();
      $("#moon").hide();
    } else {
      $("#light").show();
      $("#dark").hide();
      $("#moon").show();
      $("#sun").hide();
    }
  }

  if ($("body").hasClass("light-theme")) {
    $("#dark-quotes").show();
    $("#light-quotes").hide();
  } else {
    $("#dark-quotes").hide();
    $("#light-quotes").show();
  }

  $("#open").click(function () {
    $("#open").hide();
    $("#close").show();
    $(".header-cont header nav").css("transform", "translateY(0%)");
  });

  $("#close").click(function () {
    $("#close").hide();
    $("#open").show();
    $(".header-cont header nav").css("transform", "translateY(-100%)");
  });

  // $(".header-cont header nav a").click(function () {
  //   $("#close").hide();
  //   $("#open").show();
  //   $(".header-cont header nav").css("transform", "translateY(-100%)");
  // });

  $("setion").click(function () {
    $("#close").hide();
    $("#open").show();
    $(".header-cont header nav").css("transform", "translateY(-100%)");
  });
});
