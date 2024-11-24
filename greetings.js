document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("username");
    if (username) {
      document.getElementById("username-display").textContent = username;
    } else {
      document.getElementById("username-display").textContent = "Гость";
    }
  });
  