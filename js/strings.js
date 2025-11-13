// Centralized strings file for all text used in the project

const STRINGS = {
    // Page Titles
    APP_TITLE: "Student Portal - Login & Registration",
    LOGIN_TITLE: "Student Login",
    REGISTER_TITLE: "Student Registration",
    
    // Form Labels
    LABEL_NAME: "Name",
    LABEL_PHOTO: "Photo",
    LABEL_DEPARTMENT: "Department",
    LABEL_SESSION: "Session",
    LABEL_ROLL_NO: "Roll Number",
    LABEL_PASSWORD: "Password",
    
    // Buttons
    BTN_LOGIN: "Login",
    BTN_REGISTER: "Register",
    BTN_OK: "OK",
    
    // Placeholders
    PLACEHOLDER_SELECT_DEPT: "Select Department",
    PLACEHOLDER_SELECT_SESSION: "Select Session",
    
    // Department Options
    DEPT_COMPUTER: "Computer",
    DEPT_AIDS: "AI&DS",
    DEPT_CSEDS: "CSEDS",
    DEPT_MECH: "Mech",
    DEPT_CIVIL: "Civil",
    
    // Session Options
    SESSION_FE: "FE",
    SESSION_SE: "SE (including DSE)",
    SESSION_TE: "TE",
    SESSION_BE: "BE",
    
    // Success Messages
    MSG_REGISTRATION_SUCCESS: "Registration successful! You can now login.",
    MSG_LOGIN_SUCCESS: "Login successful! Welcome to your profile.",
    
    // Error Messages
    ERROR_EMPTY_FIELDS: "Please fill in all required fields.",
    ERROR_INVALID_ROLL: "Please enter a valid roll number.",
    ERROR_PASSWORD_SHORT: "Password must be at least 6 characters long.",
    ERROR_USER_EXISTS: "A student with this roll number is already registered.",
    ERROR_USER_NOT_FOUND: "No student found with this roll number.",
    ERROR_WRONG_PASSWORD: "Incorrect password. Please try again.",
    ERROR_PHOTO_REQUIRED: "Please select a photo to upload.",
    ERROR_INVALID_FILE: "Please select a valid image file (JPG, PNG, GIF).",
    
    // Dialog Titles
    DIALOG_SUCCESS: "Success",
    DIALOG_ERROR: "Error",
    DIALOG_WARNING: "Warning",
    DIALOG_INFO: "Information"
};

// Make it available globally
window.STRINGS = STRINGS;
