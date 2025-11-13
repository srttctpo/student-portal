// Authentication and profile management

// Tab switching function
function switchTab(tab) {
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (tab === 'login') {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    } else {
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
    }
}

// Handle registration
function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const photo = document.getElementById('photo').files[0];
    const department = document.getElementById('department').value;
    const session = document.getElementById('session').value;
    const rollNo = document.getElementById('rollNo').value.trim();
    const password = document.getElementById('password').value;
    
    // Validation
    if (!name || !photo || !department || !session || !rollNo || !password) {
        showError(STRINGS.ERROR_EMPTY_FIELDS);
        return;
    }
    
    if (password.length < 6) {
        showError(STRINGS.ERROR_PASSWORD_SHORT);
        return;
    }
    
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('students') || '[]');
    if (users.find(user => user.rollNo === rollNo)) {
        showError(STRINGS.ERROR_USER_EXISTS);
        return;
    }
    
    // Convert photo to base64
    const reader = new FileReader();
    reader.onload = function(e) {
        const newStudent = {
            name,
            photo: e.target.result,
            department,
            session,
            rollNo,
            password,
            registrationDate: new Date().toISOString()
        };
        
        users.push(newStudent);
        localStorage.setItem('students', JSON.stringify(users));
        
        showSuccess(STRINGS.MSG_REGISTRATION_SUCCESS);
        
        // Clear form
        document.getElementById('name').value = '';
        document.getElementById('photo').value = '';
        document.getElementById('department').value = '';
        document.getElementById('session').value = '';
        document.getElementById('rollNo').value = '';
        document.getElementById('password').value = '';
        
        // Switch to login tab after 2 seconds
        setTimeout(() => {
            closeDialog();
            switchTab('login');
        }, 2000);
    };
    
    reader.readAsDataURL(photo);
}

// Handle login
function handleLogin(event) {
    event.preventDefault();
    
    const rollNo = document.getElementById('loginRoll').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    if (!rollNo || !password) {
        showError(STRINGS.ERROR_EMPTY_FIELDS);
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('students') || '[]');
    const user = users.find(u => u.rollNo === rollNo);
    
    if (!user) {
        showError(STRINGS.ERROR_USER_NOT_FOUND);
        return;
    }
    
    if (user.password !== password) {
        showError(STRINGS.ERROR_WRONG_PASSWORD);
        return;
    }
    
    // Login successful
    localStorage.setItem('currentUser', JSON.stringify(user));
    showSuccess(STRINGS.MSG_LOGIN_SUCCESS);
    
    // Redirect to profile page after 2 seconds
    setTimeout(() => {
        // For now, show user info in console
        console.log('Logged in user:', user);
        closeDialog();
    }, 2000);
}
