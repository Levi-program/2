document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".login-form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = document.querySelector("#username").value.trim();
      const password = document.querySelector("#password").value;
      const storedUsername = localStorage.getItem("username");
      const storedPassword = localStorage.getItem("password");
      if (username === storedUsername && password === storedPassword) {
        alert("Вход успешен!");
        setTimeout(() => {
          window.location.href = "greetings.html";
        }, 1000);
      } else {
        alert("Неверное имя пользователя или пароль. Попробуйте еще раз.");
      }
    });
    const registerLink = document.querySelector("#register-link");
    registerLink.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "register.html";
    });
  });
  