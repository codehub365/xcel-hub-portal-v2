function loadSection(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

loadSection("header", "sections/header.html");
loadSection("home", "sections/home.html");
loadSection("about", "sections/about.html");
loadSection("trainings", "sections/trainings.html");
loadSection("contact", "sections/contact.html");
loadSection("registration", "sections/registration.html");
loadSection("footer", "sections/footer.html");

/* OPEN / CLOSE REGISTRATION */

function openRegistrationModal() {
    const modal = document.getElementById("registrationModal");

    if (modal) {
        modal.classList.add("active");
    }
}

function closeRegistrationModal() {
    const modal = document.getElementById("registrationModal");

    if (modal) {
        modal.classList.remove("active");
    }
}

/* BUTTON SELECTION */

document.addEventListener("click", function (e) {
    const choiceButton = e.target.closest(".choice-group button");
    const skillButton = e.target.closest(".skill-grid button");

    if (choiceButton) {
        e.preventDefault();

        const group = choiceButton.closest(".choice-group");

        group.querySelectorAll("button").forEach(button => {
            button.classList.remove("selected");
        });

        choiceButton.classList.add("selected");
    }

    if (skillButton) {
        e.preventDefault();

        const group = skillButton.closest(".skill-grid");

        group.querySelectorAll("button").forEach(button => {
            button.classList.remove("selected");
        });

        skillButton.classList.add("selected");
    }
});

/* SUBMIT REGISTRATION */

document.addEventListener("click", function (e) {
    const submitButton = e.target.closest(".submit-registration");

    if (submitButton) {
        e.preventDefault();

        const form = submitButton.closest(".registration-form");

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const registrationModal = document.getElementById("registrationModal");
        const successModal = document.getElementById("successModal");

        if (registrationModal) {
            registrationModal.classList.remove("active");
        }

        if (successModal) {
            successModal.classList.add("active");
            successModal.style.display = "flex";
        }
    }
});

/* SUCCESS MODAL */

function closeSuccessModal() {
    const successModal = document.getElementById("successModal");

    if (successModal) {
        successModal.classList.remove("active");
        successModal.style.display = "none";
    }
}

function backToHome() {
    closeSuccessModal();
    window.location.href = "index.html#home";
}
/* =========================
   SAVE REGISTRATION TO LOCALSTORAGE
========================= */

document.addEventListener("submit", function (e) {

    if (!e.target.matches("#registrationForm")) return;

    e.preventDefault();

    const selectedSkill = document.querySelector("#skillLevel button.selected");

    const hasLaptopGroup = document.querySelector('[data-name="hasLaptop"]');
    const selectedLaptop = hasLaptopGroup
        ? hasLaptopGroup.querySelector("button.selected")
        : null;

    const registrationData = {
        name:
            document.getElementById("firstName").value + " " +
            document.getElementById("middleInitial").value + " " +
            document.getElementById("lastName").value,

        training: document.getElementById("trainingInterest").value,
        email: document.getElementById("emailAddress").value,
        contact: document.getElementById("mobileNumber").value,

        laptop: selectedLaptop
            ? selectedLaptop.textContent.trim()
            : "Not selected",

        skill: selectedSkill
            ? selectedSkill.textContent.trim()
            : "Not selected",

        goals: document.getElementById("learningGoals").value,
        usage: document.getElementById("excelUsage").value
    };

    let registrations =
        JSON.parse(localStorage.getItem("registrations")) || [];

    registrations.push(registrationData);

    localStorage.setItem(
        "registrations",
        JSON.stringify(registrations)
    );

    e.target.reset();

    document.querySelectorAll(".selected").forEach(btn => {
        btn.classList.remove("selected");
    });

    document.getElementById("registrationModal").classList.remove("active");
    document.getElementById("successModal").classList.add("active");

});
function saveRegistration() {
    const selectedSkill = document.querySelector("#skillLevel button.selected");
    const laptopGroup = document.querySelector('[data-name="hasLaptop"]');
    const selectedLaptop = laptopGroup ? laptopGroup.querySelector("button.selected") : null;

    const registrationData = {
        name:
            document.getElementById("firstName").value + " " +
            document.getElementById("middleInitial").value + " " +
            document.getElementById("lastName").value,

        training: document.getElementById("trainingInterest").value,
        email: document.getElementById("emailAddress").value,
        contact: document.getElementById("mobileNumber").value,

        laptop: selectedLaptop ? selectedLaptop.textContent.trim() : "Not selected",
        skill: selectedSkill ? selectedSkill.textContent.trim() : "Not selected",

        goals: document.getElementById("learningGoals").value,
        usage: document.getElementById("excelUsage").value
    };

    let registrations = JSON.parse(localStorage.getItem("registrations")) || [];

    registrations.push(registrationData);

    localStorage.setItem("registrations", JSON.stringify(registrations));

    document.getElementById("registrationForm").reset();

    document.querySelectorAll(".selected").forEach(btn => {
        btn.classList.remove("selected");
    });

    document.getElementById("registrationModal").classList.remove("active");
    document.getElementById("successModal").classList.add("active");
}
