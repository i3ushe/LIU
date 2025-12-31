// Main JavaScript for LIU Mauritania Website

// Toggle hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    // Translate navigation links dynamically using data-page attribute
    if (typeof translateNavLinks === 'function') {
        translateNavLinks();
    }
});

// Set active navigation link
function setActiveNav(currentPage) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Format date
function formatDate(date) {
    return new Intl.DateTimeFormat(currentLanguage, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(date));
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Hide all tab contents
function hideAllTabContents() {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
}

// Show specific tab
function showTab(tabName) {
    hideAllTabContents();
    const tab = document.getElementById(tabName);
    if (tab) {
        tab.classList.add('active');
    }
}

// Filter table rows
function filterTable(inputId, tableId) {
    const input = document.getElementById(inputId);
    const table = document.getElementById(tableId);
    const rows = table.getElementsByTagName('tr');
    
    input.addEventListener('keyup', function() {
        const filter = input.value.toUpperCase();
        
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            let matchFound = false;
            
            const cells = row.getElementsByTagName('td');
            for (let j = 0; j < cells.length; j++) {
                if (cells[j].textContent.toUpperCase().indexOf(filter) > -1) {
                    matchFound = true;
                    break;
                }
            }
            
            row.style.display = matchFound ? '' : 'none';
        }
    });
}

// Get current language
function getCurrentLanguage() {
    return (window.currentLanguage) ? window.currentLanguage : (localStorage.getItem('language') || 'en');
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validate phone
function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 7;
}

// Local storage helpers
const StorageManager = {
    set: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get: (key) => {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    },
    remove: (key) => {
        localStorage.removeItem(key);
    },
    clear: () => {
        localStorage.clear();
    }
};

// Auth helper
const AuthManager = {
    login: (username, password, role) => {
        const user = {
            username: username,
            role: role,
            loginTime: new Date()
        };
        StorageManager.set('user', user);
        return user;
    },
    logout: () => {
        StorageManager.remove('user');
        window.location.href = 'login.html';
    },
    getCurrentUser: () => {
        return StorageManager.get('user');
    },
    isAuthenticated: () => {
        return StorageManager.get('user') !== null;
    }
};

// Mock data for students
const studentsMockData = {
    'student1': {
        username: 'student1',
        password: 'pass123',
        fullName: 'Ahmed Salem Aref',
        id: '12430180',
        courses: [
            {
                code: 'CSC1361A',
                name: 'Programmation Web',
                professor: 'Dr. Med Mahmoud El Bennany',
                level: 'L2',
                absences: 4
            },
            {
                code: 'CSC1301B',
                name: 'Algorithmique et Structures des données',
                professor: 'Dr. Mayara Mohdi',
                level: 'L2',
                absences: 0
            },
            {
                code: 'CSIT315',
                name: 'Fondements des Réseaux',
                professor: 'M. Sidi Samba Tounsi',
                level: 'L2',
                absences: 0
            },
            {
                code: 'CSCI330',
                name: 'Data mining',
                professor: 'Dr. Mohamed El Hacen Med Dylla',
                level: 'L2',
                absences: 0
            }
        ]
    },
    'student2': {
        username: 'student2',
        password: 'pass123',
        fullName: 'Amina Youbah',
        id: '12430181',
        courses: [
            {
                code: 'CSC1361A',
                name: 'Programmation Web',
                professor: 'Dr. Med Mahmoud El Bennany',
                level: 'L2',
                absences: 2
            },
            {
                code: 'CSC1301B',
                name: 'Algorithmique et Structures des données',
                professor: 'Dr. Mayara Mohdi',
                level: 'L2',
                absences: 0
            },
            {
                code: 'CSIT315',
                name: 'Fondements des Réseaux',
                professor: 'M. Sidi Samba Tounsi',
                level: 'L2',
                absences: 0
            },
            {
                code: 'CSCI330',
                name: 'Data mining',
                professor: 'Dr. Mohamed El Hacen Med Dylla',
                level: 'L2',
                absences: 0
            }
        ]
    },
    'student3': {
        username: 'student3',
        password: 'pass123',
        fullName: 'Ezouha Lemine',
        id: '12430182',
        courses: [
            {
                code: 'CSC1361A',
                name: 'Programmation Web',
                professor: 'Dr. Med Mahmoud El Bennany',
                level: 'L2',
                absences: 6
            },
            {
                code: 'CSC1301B',
                name: 'Algorithmique et Structures des données',
                professor: 'Dr. Mayara Mohdi',
                level: 'L2',
                absences: 0
            },
            {
                code: 'CSIT315',
                name: 'Fondements des Réseaux',
                professor: 'M. Sidi Samba Tounsi',
                level: 'L2',
                absences: 0
            },
            {
                code: 'CSCI330',
                name: 'Data mining',
                professor: 'Dr. Mohamed El Hacen Med Dylla',
                level: 'L2',
                absences: 0
            }
        ]
    }
};

// If there is a persisted studentsMockData in localStorage, merge it so
// attendance updates persist across pages (student/dean dashboards).
try {
    const persisted = StorageManager.get('studentsMockData');
    if (persisted && typeof persisted === 'object') {
        Object.keys(persisted).forEach(k => {
            if (studentsMockData[k]) {
                // Deep merge: keep base data but update courses with persisted absences
                if (Array.isArray(persisted[k].courses) && Array.isArray(studentsMockData[k].courses)) {
                    persisted[k].courses.forEach(persistedCourse => {
                        const baseCourse = studentsMockData[k].courses.find(c => c.code === persistedCourse.code);
                        if (baseCourse) {
                            baseCourse.absences = persistedCourse.absences;
                        } else {
                            studentsMockData[k].courses.push(persistedCourse);
                        }
                    });
                }
                // Copy other fields
                Object.keys(persisted[k]).forEach(field => {
                    if (field !== 'courses') {
                        studentsMockData[k][field] = persisted[k][field];
                    }
                });
            } else {
                studentsMockData[k] = persisted[k];
            }
        });
    }
} catch (e) {
    console.error('Failed to load persisted studentsMockData:', e);
}

// Mock data for professors
const professorsMockData = {
    'prof1': {
        username: 'prof1',
        password: 'pass123',
        fullName: 'Dr. Med Mahmoud El Bennany',
        id: 'P001',
        department: 'Computer Science',
        courses: [
            {
                code: 'MATH260',
                name: 'Recherche Opérationnelle',
                level: 'L1',
                students: [
                    '12430003',
                    '12430058',
                    '12430126',
                    '12430101',
                    '12430107',
                    '12430135',
                    '12430037',
                    '12430015',
                    '12430085',
                    '12230012',
                    '12430009',
                    '12330074',
                    '12530062',
                    '12530203',
                    '12530133',
                    '12430179',
                    '12430181',
                    '12430182'
                ]
            },
            {
                code: 'CSC1361A',
                name: 'Programmation Web',
                level: 'L2',
                students: [
                    '12430003',
                    '12430106',
                    '12430058',
                    '12430017',
                    '12430111',
                    '12430126',
                    '12430101',
                    '12430107',
                    '12430074',
                    '12430135',
                    '12430037',
                    '12430013',
                    '12430015',
                    '12430085',
                    '12230012',
                    '12430009',
                    '12330074',
                    '12530062',
                    '12530203',
                    '12530133',
                    '12430179',
                    '12430180',
                    '12430181',
                    '12430182'
                ]
            }
        ]
    },
    'prof2': {
        username: 'prof2',
        password: 'pass123',
        fullName: 'Dr. Mayara Mohdi',
        id: 'P002',
        department: 'Computer Science',
        courses: [
            {
                code: 'CSCI260',
                name: 'Introduction à l\'Algorithmique',
                level: 'L2',
                students: ['12430181','12430182']
            },
            {
                code: 'CSC1301B',
                name: 'Algorithmique et Structures des données',
                level: 'L2',
                students: ['12430181']
            }
        ]
    },
    'prof3': {
        username: 'prof3',
        password: 'pass123',
        fullName: 'M. Sidi Samba Tounsi',
        id: 'P003',
        department: 'Computer Science',
        courses: [
            {
                code: 'CSIT315',
                name: 'Fondements des Réseaux',
                level: 'L2',
                students: []
            },
            {
                code: 'CSIT486',
                name: 'Cybersécurité',
                level: 'L3',
                students: ['12430182']
            }
        ]
    }
};

// Mock data for dean
const deanMockData = {
    'dean': {
        username: 'dean',
        password: 'pass123',
        fullName: 'Dean of Faculty',
        id: 'D001',
        department: 'Faculty of Science & Technology'
    }
};

// Validate login credentials
function validateLogin(username, password, role) {
    let mockData;
    
    if (role === 'student') {
        mockData = studentsMockData;
    } else if (role === 'professor') {
        mockData = professorsMockData;
    } else if (role === 'dean') {
        mockData = deanMockData;
    }
    
    if (mockData && mockData[username]) {
        const user = mockData[username];
        if (user.password === password) {
            return user;
        }
    }
    
    return null;
}

// Export data for dashboards
const DashboardData = {
    studentsMockData,
    professorsMockData,
    deanMockData
};

// Translate nav links by data-page -> nav.{page}
function translateNavLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const page = link.getAttribute('data-page');
        if (page) {
            const key = `nav.${page}`;
            if (typeof getTranslation === 'function') {
                const txt = getTranslation(key);
                // preserve existing inner HTML if there are icons
                if (link.querySelector('i')) {
                    // put text after icon
                    const icon = link.querySelector('i');
                    // remove existing text nodes
                    link.childNodes.forEach(n => { if (n.nodeType === Node.TEXT_NODE) n.remove(); });
                    icon.insertAdjacentText('afterend', ' ' + txt);
                } else {
                    link.textContent = txt;
                }
            }
        }
    });
}

// Student records by ID for professor dashboard
// IMPORTANT: This must include ALL students used in any course
const studentRecordsById = {
    // Primary students (linked to courses)
    '12430180': { id: '12430180', fullName: 'Ahmed Salem Aref' },
    '12430181': { id: '12430181', fullName: 'Amina Youbah' },
    '12430182': { id: '12430182', fullName: 'Ezouha Lemine' },
    // Other students
    '12430003': { id: '12430003', fullName: 'Abdellahi Ahmed Mreizigue' },
    '12430106': { id: '12430106', fullName: 'Ahmed Salam Mohamed Lemine Aref El Bara' },
    '12430058': { id: '12430058', fullName: 'Amina Mohamed Youbah' },
    '12430017': { id: '12430017', fullName: 'Aya Mohamed M Bareck Massa' },
    '12430111': { id: '12430111', fullName: 'Bechar Mohamed Agatt' },
    '12430126': { id: '12430126', fullName: 'Edjeh Aly Hadouni' },
    '12430101': { id: '12430101', fullName: 'El Kebir Mohameden M Beirick' },
    '12430107': { id: '12430107', fullName: 'Ely Amar Ahmed Wahena' },
    '12430074': { id: '12430074', fullName: 'Essma El Houssein Cherif El Mekki' },
    '12430135': { id: '12430135', fullName: 'Ezouha Mohamed Lemine Hamza' },
    '12430037': { id: '12430037', fullName: 'Ibtissam Salma El Khalil Ahmed Khalifa' },
    '12430013': { id: '12430013', fullName: 'Meta El Bane El Bane' },
    '12430015': { id: '12430015', fullName: 'Moctar Cheikh Ely' },
    '12430085': { id: '12430085', fullName: 'Mountagha Cheikh Tijani Baba' },
    '12230012': { id: '12230012', fullName: 'Moustapha Mouhamedou Beye' },
    '12430009': { id: '12430009', fullName: 'Randi Honenantsoa Rajaonson' },
    '12330074': { id: '12330074', fullName: 'Sidahmed Bakar' },
    '12530062': { id: '12530062', fullName: 'Mohamed El Hafedh' },
    '12530203': { id: '12530203', fullName: 'Hamady' },
    '12530133': { id: '12530133', fullName: 'Mohamed El Mokhtar' },
    '12430179': { id: '12430179', fullName: 'Mohamed El Mokhtar Mohamed Abdellahi Braham' }
};

