// variables
const emailInput = document.getElementById("email");
const MobileEmail = document.getElementById("Mobileemail");
const submitForm = document.getElementById("submit");
const MobileSubmit = document.getElementById("MobileSubmit");
const errMsg = document.querySelector("#errorMessage");
const MobileErrorMessage = document.querySelector("#MobileerrorMessage");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function handleSubmit(formType, emailType, errType) {
  formType.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = emailType.value.trim().toLowerCase();

    if (!inputValue || !emailRegex.test(inputValue)) {
      errType.textContent = "Please provide a valid email address";
      errType.style.display = "block";

      emailType.style.borderColor = "red";

      emailType.addEventListener("input", () => {
        emailType.style.borderColor = "hsl(0, 0%, 59%)";
        errType.style.display = "none";
      });
      return false;
    }

    if (inputValue) {
      alert("email submitted");

      emailType.value = " ";
    }
  });
}

if (submitForm) {
  handleSubmit(submitForm, emailInput, errMsg);
}

if (MobileSubmit) {
  handleSubmit(MobileSubmit, MobileEmail, MobileErrorMessage);
}
