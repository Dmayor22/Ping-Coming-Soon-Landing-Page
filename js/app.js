// variables
const emailInput = document.getElementById("email");
const submitForm = document.getElementById("submit");
const errMsg = document.querySelector("#errorMessage");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (submitForm) {
  submitForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = emailInput.value.trim().toLowerCase();

    if (!inputValue || !emailRegex.test(inputValue)) {
      errMsg.textContent = "Please provide a valid emaail address";
      errMsg.style.display = "block";

      emailInput.style.borderColor = "red";

      return false;
    }

    if (inputValue) {
      alert("email submitted");

      emailInput.value = " ";
    }
  });
}
