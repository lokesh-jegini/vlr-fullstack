var form1 = document.querySelector(".form");
form1.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form1);
  const data = Object.fromEntries(formData);
  console.log(data);
});

