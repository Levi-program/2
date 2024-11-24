document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".register-form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = document.querySelector("#register-username").value.trim();
      const password = document.querySelector("#register-password").value;
      const confirmPassword = document.querySelector("#register-confirm-password").value;
      if (!username || !password || !confirmPassword) {
        alert("Пожалуйста, заполните все поля.");
        return;
      }
      if (password !== confirmPassword) {
        alert("Пароли не совпадают. Попробуйте еще раз.");
        return;
      }
      if (password.length < 6) {
        alert("Пароль должен быть не менее 6 символов.");
        return;
      }
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert("Регистрация прошла успешно!");
      window.location.href = "login.html";
    });
  });
  