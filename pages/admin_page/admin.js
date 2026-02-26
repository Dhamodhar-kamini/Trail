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


// popup section
const empModal = document.getElementById("empModal");
const empOpenBtn = document.getElementById("empOpenBtn");
const empCloseBtn = document.getElementById("empCloseBtn");
const empCancelBtn = document.getElementById("empCancelBtn");

empOpenBtn.onclick = () => empModal.style.display = "flex";
empCloseBtn.onclick = () => empModal.style.display = "none";
empCancelBtn.onclick = () => empModal.style.display = "none";

window.addEventListener("click", function(e){
  if(e.target === empModal){
    empModal.style.display = "none";
  }
});

document.getElementById("empForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Employee Added Successfully ");
  empModal.style.display = "none";
});


//attendance details modal
document.addEventListener('DOMContentLoaded', () => {
    const detailModal = document.getElementById('detailModal');
    const modalTableBody = document.getElementById('modalTableBody');
    const closeBtn = document.querySelector('.close-btn');

    // Dummy Data
    const ATTENDANCE_LOG_DATA = [
        { id: 21918, name: "Anugrah Prasetya", role: "Graphic Designer", date: "24-07-2024", duration: "8h 0m", permission: "Sick Leave", status: "Pending" },
        { id: 37189, name: "Denny Malik", role: "IT Support", date: "22-08-2024", duration: "4h 0m", permission: "Appointment", status: "Rejected" },
        { id: 41521, name: "Silvia Cintia Bakri", role: "Product Designer", date: "15-07-2024", duration: "8h 0m", permission: "Annual Leave", status: "Approved" },
        { id: 12781, name: "Bambang Pramudi", role: "Customer Support", date: "10-08-2024", duration: "1h 30m", permission: "Late Entry", status: "Pending" },
    ];

    function renderAttendanceModal(data) {
        let html = '';
        data.forEach(item => {
            const statusClass = item.status.toLowerCase();
            
            // Logic for the color of the avatar border based on status
            const colorCode = statusClass === 'approved' ? '66BB6A' : statusClass === 'rejected' ? 'EF5350' : '42A5F5';

            html += `
                <tr>
                    <td>#${item.id}</td>
                    <td class="employee-cell">
                        <img src="https://ui-avatars.com/api/?name=${item.name}&background=${colorCode}&color=fff" alt="${item.name}">
                        <div class="employee-info">
                            <strong>${item.name}</strong>
                            <small>${item.role}</small>
                        </div>
                    </td>
                    <td>${item.date}</td>
                    <td>${item.duration}</td>
                    <td>${item.permission}</td>
                    <td class="action-cell">
                        ${item.status === 'Pending' ? 
                            `<div class="action-buttons">
                                <button class="approve-btn">Approve</button>
                                <button class="x-btn"><i class="fas fa-times"></i></button>
                             </div>` : 
                            `<span class="status-badge ${statusClass}">${item.status}</span>`
                        }
                    </td>
                </tr>
            `;
        });
        modalTableBody.innerHTML = html;
        detailModal.style.display = "block";
    }

    function closeModal() {
        detailModal.style.display = "none";
    }

    // --- THE FIX IS HERE ---
    // We select based on the class 'attendance-trigger'
    const attendanceLink = document.querySelector('.attendance-trigger');
    
    if (attendanceLink) {
        attendanceLink.addEventListener('click', (e) => {
            e.preventDefault(); 
            renderAttendanceModal(ATTENDANCE_LOG_DATA);
        });
    } else {
        console.error("Attendance link not found! Check your HTML classes.");
    }

    // Modal controls
    if(closeBtn) closeBtn.onclick = closeModal;
    
    window.onclick = (event) => {
        if (event.target === detailModal) {
            closeModal();
        }
    };
});



document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const employeeModal = document.getElementById('employeeModal');
    const tableBody = document.getElementById('employeeTableBody');
    const searchInput = document.getElementById('employeeSearch');
    const closeBtn = document.querySelector('.close-employee-btn');
    const triggerBtn = document.querySelector('.employee-trigger');

    // Data matching the reference image
    const EMPLOYEES = [
        { id: 1, name: "Emily", email: "emily.thompson23@gmail.com", position: "Web Developer", img: "https://i.pravatar.cc/150?u=1" },
        { id: 2, name: "Michael", email: "m.johnson87@gmail.com", position: "Mobile Developer", img: "https://i.pravatar.cc/150?u=2" },
        { id: 3, name: "Jessica", email: "jessica.carter89@yahoo.com", position: "QA", status: "Active", img: "https://i.pravatar.cc/150?u=3" },
        { id: 4, name: "Olivia", email: "olivia.brooks91@outlook.com", position: "UX/UI designer", img: "https://i.pravatar.cc/150?u=4" },
        { id: 5, name: "Ethan", email: "ethan.miller22@protonmail.com", position: "Graphic designer", img: "https://i.pravatar.cc/150?u=8" },
        { id: 6, name: "Jacob",  email: "jacob.anderson77@hotmail.com", position: "Sales manager", img: "https://i.pravatar.cc/150?u=6" },
        { id: 7, name: "Sophia", email: "sophia.m@gmail.com", position: "Content Writer", img: "https://i.pravatar.cc/150?u=7" },
        { id: 8, name: "Daniel", email: "dan.wilson@tech.com", position: "Project Manager", img: "https://i.pravatar.cc/150?u=5" },
    ];

    // Function to Render Table
    function renderTable(data) {
        let html = '';
        if(data.length === 0) {
            html = '<tr><td colspan="6" style="text-align:center;">No employees found</td></tr>';
        } else {
            data.forEach(emp => {
                const badgeClass = emp.status === 'Active' ? 'badge-active' : 'badge-inactive';
                
                html += `
                    <tr>
                        <td><img src="${emp.img}" alt="${emp.name}" class="avatar-img"></td>
                        <td>${emp.name}</td>
                        <td>${emp.surname}</td>
                        <td>${emp.email}</td>
                        <td>${emp.position}</td>
                        
                    </tr>
                `;
            });
        }
        tableBody.innerHTML = html;
    }

    // Event: Open Modal
    if (triggerBtn) {
        triggerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            renderTable(EMPLOYEES); // Render all data initially
            employeeModal.style.display = "block";
        });
    }

    // Event: Search Functionality
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = EMPLOYEES.filter(emp => 
                emp.name.toLowerCase().includes(term) || 
                emp.surname.toLowerCase().includes(term) ||
                emp.email.toLowerCase().includes(term) ||
                emp.position.toLowerCase().includes(term)
            );
            renderTable(filtered);
        });
    }

    // Event: Close Modal
    if(closeBtn) {
        closeBtn.onclick = () => {
            employeeModal.style.display = "none";
            searchInput.value = ''; // Reset search on close
        };
    }

    // Close on clicking outside
    window.onclick = (event) => {
        if (event.target === employeeModal) {
            employeeModal.style.display = "none";
            if(searchInput) searchInput.value = '';
        }
    };
});