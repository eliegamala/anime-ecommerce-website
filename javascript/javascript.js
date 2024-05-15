document.querySelector(".menu-icon").onclick = () => {
  document.querySelector(".nav-list").classList.toggle("open");
  profile.classList.remove("active"); //removes the login pop up when the side bar is clicked
};

//login pop-up
profile = document.querySelector(".profile");

document.querySelector("#user-btn").onclick = () => {
  profile.classList.toggle("active");
  document.querySelector(".nav-list").classList.remove("open"); //removes the side bar when the account btn is pressed
};

window.onscroll = () => {
  document.querySelector(".nav-list").classList.remove("open");
  profile.classList.remove("active");
};
