// Init Github
const github = new Github();
// Init UI
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // Show spinner
    ui.showSpinner();

    // Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
        ui.showContributionHeatmap(data.profile.login);

      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
    // Hide spinner if input is cleared
    ui.hideSpinner();
  }
});
