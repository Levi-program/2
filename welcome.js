document.addEventListener("DOMContentLoaded", () => {
    const dataList = document.getElementById("data-list");
    const newDataInput = document.getElementById("new-data");
    const addButton = document.getElementById("add-button");
    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    function renderData() {
      dataList.innerHTML = "";
      storedData.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        dataList.appendChild(li);
      });
    }
    addButton.addEventListener("click", () => {
      const newData = newDataInput.value.trim();
      if (newData) {
        storedData.push(newData);
        localStorage.setItem("data", JSON.stringify(storedData));
        newDataInput.value = ""; 
        renderData(); 
      }
    });
    renderData();
  });
  