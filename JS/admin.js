/* =========================
   ADMIN LOGIN MODAL
========================= */

function openAdminLogin() {
    document.getElementById("adminModal").classList.add("active");
}

function closeAdminLogin() {
    document.getElementById("adminModal").classList.remove("active");
}

function checkAdminPassword() {
    const password = document.getElementById("adminPassword").value;
    const adminPassword = "xcelhub2018";

    if (password === adminPassword) {
        window.location.href = "admin.html";
    } else {
        alert("Incorrect admin password.");
    }
}

/* =========================
   ADMIN SECTION NAVIGATION
========================= */

function showAdminSection(sectionId) {
    const sections = document.querySelectorAll(".admin-section");
    const buttons = document.querySelectorAll(".admin-bottom-nav button");

    sections.forEach(section => section.classList.remove("active"));
    buttons.forEach(button => button.classList.remove("active"));

    document.getElementById(sectionId).classList.add("active");
    event.target.classList.add("active");
}

/* =========================
   LOAD REGISTRATIONS
========================= */

document.addEventListener("DOMContentLoaded", () => {
    loadRegistrations();
    setupSearch();
});

/* =========================
   DISPLAY REGISTRATIONS
========================= */

function loadRegistrations() {
    const registrations = JSON.parse(localStorage.getItem("registrations")) || [];
    const tableBody = document.getElementById("registrationTableBody");

    if (!tableBody) return;

    tableBody.innerHTML = "";

    registrations.forEach((item, index) => {
        const status = item.status || "Interested";
        const statusClass = status === "Contacted" ? "contacted" : "interested";

        const row = `
            <tr>
                <td>
                    <div class="registrant-cell">
                        <div>
                            <strong>${item.name}</strong>
                            <span>${item.skill}</span>
                        </div>
                    </div>
                </td>

                <td class="email-cell">${item.email}</td>
                <td>${item.contact}</td>
                <td>${item.training}</td>
                <td>${item.laptop}</td>
                <td class="message-cell">${item.goals}</td>
                <td class="message-cell">${item.usage}</td>

                <td>
                    <span class="status-badge ${statusClass}">
                        ${status}
                    </span>
                </td>

                <td class="action-buttons">
                    <button
                        class="email-record-btn"
                        onclick="openEmailModal('${item.email}', '${item.name}', '${item.training}', ${index})"
                    >
                        <img src="Images/mail.png" alt="Email">
                    </button>

                    <button 
                        class="delete-record-btn"
                        onclick="deleteRegistration(${index})"
                    >
                        <img src="Images/delete.png" alt="Delete">
                    </button>
                </td>
            </tr>
        `;

        tableBody.innerHTML += row;
    });

    updateDashboard(registrations);
    updateTrainingCards(registrations);
    updateReports(registrations);
}

/* =========================
   DELETE CONFIRMATION MODAL
========================= */

let selectedDeleteIndex = null;

function deleteRegistration(index) {
    selectedDeleteIndex = index;
    document.getElementById("deleteModal").classList.add("active");
}

function closeDeleteModal() {
    selectedDeleteIndex = null;
    document.getElementById("deleteModal").classList.remove("active");
}

function confirmDeleteRegistration() {
    if (selectedDeleteIndex === null) return;

    let registrations = JSON.parse(localStorage.getItem("registrations")) || [];

    registrations.splice(selectedDeleteIndex, 1);
    localStorage.setItem("registrations", JSON.stringify(registrations));

    closeDeleteModal();
    loadRegistrations();
}

/* =========================
   SEARCH
========================= */

function setupSearch() {
    const searchInput = document.getElementById("adminSearch");

    if (!searchInput) return;

    searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();
        const rows = document.querySelectorAll("#registrationTableBody tr");

        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(value) ? "" : "none";
        });
    });
}

/* =========================
   DASHBOARD COUNTS
========================= */

function updateDashboard(registrations) {
    document.getElementById("totalRegistrations").textContent = registrations.length;

    const laptopRequests = registrations.filter(item => item.laptop === "Yes").length;
    document.getElementById("laptopRequests").textContent = laptopRequests;

    const beginnerUsers = registrations.filter(item => item.skill === "Beginner").length;
    document.getElementById("beginnerUsers").textContent = beginnerUsers;

    const trainingCounts = {};

    registrations.forEach(item => {
        trainingCounts[item.training] = (trainingCounts[item.training] || 0) + 1;
    });

    let popularTraining = "-";
    let highestCount = 0;

    for (let training in trainingCounts) {
        if (trainingCounts[training] > highestCount) {
            highestCount = trainingCounts[training];
            popularTraining = training;
        }
    }

    document.getElementById("popularTraining").textContent = popularTraining;

    updateCharts(trainingCounts, registrations);
}

/* =========================
   UPDATE BAR CHARTS
========================= */

function updateCharts(trainingCounts, registrations) {
    const max = Math.max(...Object.values(trainingCounts), 1);

    setBar("barDailyUsers", trainingCounts["Excel for Daily Users"] || 0, max, "Excel for Daily Users");
    setBar("barSheets", trainingCounts["Google Sheets Mastery"] || 0, max, "Google Sheets Mastery");
    setBar("barLiteracy", (trainingCounts["Computer Literacy 1"] || 0) + (trainingCounts["Computer Literacy 2"] || 0), max, "Computer Literacy");
    setBar("barBeginners", trainingCounts["Excel for Beginners"] || 0, max, "Excel for Beginners");
    setBar("barAITools", trainingCounts["Excel Formulas & AI Tools"] || 0, max, "Excel Formulas & AI Tools");

    updateSkillDistribution(registrations);
}

function setBar(id, count, max, label) {
    const bar = document.getElementById(id);

    if (!bar) return;

    const height = count === 0 ? 0 : (count / max) * 100;

    bar.style.height = `${height}%`;
    bar.setAttribute("data-tooltip", `${label}: ${count} responses`);
}

/* =========================
   SKILL DISTRIBUTION
========================= */

function updateSkillDistribution(registrations) {
    const total = registrations.length || 1;

    const levels = {
        Basic: 0,
        Beginner: 0,
        Intermediate: 0,
        Advanced: 0
    };

    registrations.forEach(item => {
        if (levels[item.skill] !== undefined) {
            levels[item.skill]++;
        }
    });

    updateSkill("basic", levels.Basic, total);
    updateSkill("beginner", levels.Beginner, total);
    updateSkill("intermediate", levels.Intermediate, total);
    updateSkill("advanced", levels.Advanced, total);
}

function updateSkill(name, count, total) {
    const percentage = Math.round((count / total) * 100);

    document.getElementById(`${name}Count`).textContent = `${count} (${percentage}%)`;
    document.getElementById(`${name}Bar`).style.width = `${percentage}%`;
}

/* =========================
   TRAINING CARDS
========================= */

function updateTrainingCards(registrations) {
    const container = document.getElementById("trainingAdminGrid");

    if (!container) return;

    const trainingCounts = {};

    registrations.forEach(item => {
        trainingCounts[item.training] = (trainingCounts[item.training] || 0) + 1;
    });

    container.innerHTML = "";

    if (registrations.length === 0) {
        container.innerHTML = `
            <div class="training-admin-card">
                <h3>No training data yet</h3>
                <p>Submitted registrations will appear here.</p>
                <span>0 interested</span>
            </div>
        `;
        return;
    }

    for (let training in trainingCounts) {
        container.innerHTML += `
            <div class="training-admin-card">
                <h3>${training}</h3>
                <p>Training registration demand monitoring.</p>
                <span>${trainingCounts[training]} interested</span>
            </div>
        `;
    }
}

/* =========================
   REPORTS
========================= */

function updateReports(registrations) {
    const report = document.getElementById("adminReportText");

    if (!report) return;

    if (registrations.length === 0) {
        report.textContent = "No registration data yet.";
        return;
    }

    const beginnerUsers = registrations.filter(item => item.skill === "Beginner").length;

    report.innerHTML = `
        Total registrations reached <strong>${registrations.length}</strong>.
        Most users are interested in Excel-related training programs.
        There are also <strong>${beginnerUsers}</strong> beginner learners who may need foundational guidance during training.
    `;
}

/* =========================
   EMAIL PREVIEW MODAL
========================= */

function openEmailModal(email, name, training, index) {
    const modal = document.getElementById("emailModal");

    document.getElementById("emailTo").textContent = email;
    document.getElementById("emailMessage").textContent =
        `Good day ${name},

We are pleased to inform you that there is now an available slot/schedule for your selected training: ${training}.

Please wait for further details from Xcel Hub Training Services.

Thank you!`;

    document.getElementById("openEmailBtn").href =
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent("Xcel Hub Training Schedule")}&body=${encodeURIComponent(document.getElementById("emailMessage").textContent)}`;

    document.getElementById("openEmailBtn").onclick = function () {
        markAsContacted(index);
    };

    modal.classList.add("active");
}

function closeEmailModal() {
    document.getElementById("emailModal").classList.remove("active");
}

/* =========================
   MARK AS CONTACTED
========================= */

function markAsContacted(index) {
    let registrations = JSON.parse(localStorage.getItem("registrations")) || [];

    if (registrations[index]) {
        registrations[index].status = "Contacted";
        localStorage.setItem("registrations", JSON.stringify(registrations));
        loadRegistrations();
    }
}