document.addEventListener('DOMContentLoaded', () => {
    console.log('oppty Dashboard JS Initialized.');

    // --- 1. Job Applicants Tab Switching ---
    const applicantTabsContainer = document.querySelector('#job-applicants .tabs');
    const applicantListContainer = document.getElementById('applicant-list-content');

    const OPENINGS_CONTENT = `
        <div class="user-entry">
            <img src="https://via.placeholder.com/35/33FF57/ffffff?text=O1">
            <div><strong>Lead Backend Engineer</strong><small>Exp: 5+ Years • USA</small></div>
            <span class="badge python" style="background-color: var(--color-purple);">Python</span>
        </div>
        <div class="user-entry">
            <img src="https://via.placeholder.com/35/FF5733/ffffff?text=O2">
            <div><strong>HR Manager</strong><small>Exp: 3+ Years • UK</small></div>
            <span class="badge finance" style="background-color: var(--color-red);">HR</span>
        </div>
    `;
    
    const APPLICANTS_CONTENT = `
        <div class="user-entry">
            <img src="https://via.placeholder.com/35/007bff/ffffff?text=A1">
            <div><strong>Brian Villalobos</strong><small>Exp: 5+ Years • USA</small></div>
            <span class="badge ui-ux" style="background-color: var(--color-teal);">UI/UX Designer</span>
        </div>
        <div class="user-entry">
            <img src="https://via.placeholder.com/35/dc3545/ffffff?text=A2">
            <div><strong>Anthony Lewis</strong><small>Exp: 4+ Years • USA</small></div>
            <span class="badge python" style="background-color: var(--color-blue);">Python Developer</span>
        </div>
        <div class="user-entry">
            <img src="https://via.placeholder.com/35/ffc107/ffffff?text=A3">
            <div><strong>Stephan Peralt</strong><small>Exp: 6+ Years • USA</small></div>
            <span class="badge android" style="background-color: var(--color-orange);">Android Developer</span>
        </div>
        <div class="user-entry">
            <img src="https://via.placeholder.com/35/6f42c1/ffffff?text=A4">
            <div><strong>Doglas Martini</strong><small>Exp: 2+ Years • USA</small></div>
            <span class="badge react" style="background-color: var(--color-green);">React Developer</span>
        </div>
    `;

    // Initialize the default view based on the image (Applicants selected)
    applicantListContainer.innerHTML = APPLICANTS_CONTENT;

    applicantTabsContainer.addEventListener('click', (e) => {
        const tabButton = e.target.closest('.tab-btn');
        if (!tabButton) return;

        // Remove active state from all
        document.querySelectorAll('#job-applicants .tab-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.style.cssText = ''; // Reset inline styles applied for active state
        });

        // Add active state to clicked tab
        tabButton.classList.add('active');
        tabButton.style.cssText = 'background: var(--card-bg); box-shadow: 0 1px 3px rgba(0,0,0,0.1); color: var(--color-blue);';

        const tabType = tabButton.getAttribute('data-tab');
        
        if (tabType === 'openings') {
            applicantListContainer.innerHTML = OPENINGS_CONTENT;
        } else {
            applicantListContainer.innerHTML = APPLICANTS_CONTENT;
        }
    });

    // --- 2. Sidebar Menu Submenu Toggle (Simulated) ---
    const superAdminItem = document.querySelector('.applications-section .active-parent');
    const submenu = superAdminItem.nextElementSibling;

    superAdminItem.addEventListener('click', (e) => {
        e.preventDefault();
        submenu.classList.toggle('hidden');
        const icon = superAdminItem.querySelector('.fa-chevron-down, .fa-chevron-right');
        if (icon) {
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-right');
        }
    });
});


// Attendance Doughnut Chart 

document.addEventListener("DOMContentLoaded", function () {

    // Attendance Data
    const data = {
        present: 90,
        late: 30,
        absent: 5,
        wfh: 25
    };

    const total = data.present + data.late + data.absent + data.wfh;
    document.getElementById("totalCount").textContent = total;

    // Set percentage text
    document.getElementById("pPresent").textContent = Math.round((data.present / total) * 100) + "%";
    document.getElementById("pLate").textContent = Math.round((data.late / total) * 100) + "%";
    document.getElementById("pAbsent").textContent = Math.round((data.absent / total) * 100) + "%";
    document.getElementById("pWFH").textContent = Math.round((data.wfh / total) * 100) + "%";

    // Arc settings
    const radius = 80;
    const centerX = 100;
    const centerY = 100;

    let startAngle = Math.PI; // 180 degrees (left side)

    function describeArc(startAngle, endAngle) {
        const start = polarToCartesian(centerX, centerY, radius, endAngle);
        const end = polarToCartesian(centerX, centerY, radius, startAngle);

        return [
            "M", start.x, start.y,
            "A", radius, radius, 0, 0, 0, end.x, end.y
        ].join(" ");
    }

    function polarToCartesian(cx, cy, r, angle) {
        return {
            x: cx + r * Math.cos(angle),
            y: cy + r * Math.sin(angle)
        };
    }

    function drawArc(value, elementId) {
        const angle = (value / total) * Math.PI;
        const endAngle = startAngle + angle;

        const path = describeArc(startAngle, endAngle);
        document.getElementById(elementId).setAttribute("d", path);

        startAngle = endAngle;
    }

    // Draw arcs in order
    drawArc(data.present, "arc-present");
    drawArc(data.late, "arc-late");
    drawArc(data.absent, "arc-absent");
    drawArc(data.wfh, "arc-wfh");

});

document.getElementById("dashboardMenu").addEventListener("click", function () {

    const submenu = document.getElementById("dashboardSubmenu");

    submenu.classList.toggle("open");
    this.classList.toggle("open");

});