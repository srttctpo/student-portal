// Dialog management functions for showing errors and messages

function showDialog(title, message, type = 'info') {
    const dialogOverlay = document.getElementById('dialogOverlay');
    const dialogTitle = document.getElementById('dialogTitle');
    const dialogMessage = document.getElementById('dialogMessage');
    
    dialogTitle.textContent = title;
    dialogMessage.textContent = message;
    
    dialogOverlay.classList.add('active');
}

function closeDialog() {
    const dialogOverlay = document.getElementById('dialogOverlay');
    dialogOverlay.classList.remove('active');
}

function showError(message) {
    showDialog(STRINGS.DIALOG_ERROR, message, 'error');
}

function showSuccess(message) {
    showDialog(STRINGS.DIALOG_SUCCESS, message, 'success');
}

function showWarning(message) {
    showDialog(STRINGS.DIALOG_WARNING, message, 'warning');
}

function showInfo(message) {
    showDialog(STRINGS.DIALOG_INFO, message, 'info');
}
