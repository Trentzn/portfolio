const form = document.getElementById("contact-form");
const successMessage = document.getElementById("form-success");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: "application/json"
    }
  });

  if (response.ok) {
    form.reset();
    successMessage.style.display = "block";
  } else {
    alert("Oops! Something went wrong. Please try again.");
  }
});
