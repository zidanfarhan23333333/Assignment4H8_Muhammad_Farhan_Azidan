const FORM_STORAGE = "form-storage";

const appForm = document.getElementById("app-form");

appForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const availability = document.getElementById("availability").value;
  const age = document.getElementById("age").value;
  const location = document.getElementById("location").value;
  const experience = document.getElementById("experience").value;
  const email = document.getElementById("email").value;

  document.getElementById("bio-name").innerText = name;
  document.getElementById("bio-role").innerText = role;
  document.getElementById("bio-availability").innerText = availability;
  document.getElementById("bio-age").innerText = age;
  document.getElementById("bio-location").innerText = location;
  document.getElementById("bio-experience").innerText = experience;
  document.getElementById("bio-email").innerText = email;

  document.getElementById("form-section").style.display = "none";

  const formData = {
    name,
    role,
    availability,
    age,
    location,
    experience,
    email,
  };

  // save data di localstorage
  localStorage.setItem(FORM_STORAGE, JSON.stringify(formData));
});

function loadFormData() {
  const savedFormData = localStorage.getItem(FORM_STORAGE);

  if (savedFormData) {
    const formData = JSON.parse(savedFormData);

    document.getElementById("bio-name").innerText = formData.name;
    document.getElementById("bio-role").innerText = formData.role;
    document.getElementById("bio-availability").innerText =
      formData.availability;
    document.getElementById("bio-age").innerText = formData.age;
    document.getElementById("bio-location").innerText = formData.location;
    document.getElementById("bio-experience").innerText = formData.experience;
    document.getElementById("bio-email").innerText = formData.email;
  }
}

window.addEventListener("load", loadFormData);
