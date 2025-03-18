
let selectedUserType = '';
function selectUserType(type) {
    selectedUserType = type;
    document.getElementById('userTypeTitle').innerText = type + ' Registration';
    document.getElementById('registration-form').classList.remove('hidden');
}

function registerUser() {
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const aadhar = document.getElementById('aadhar').value;
    if (!name || !mobile || !aadhar) {
        alert('Please fill in all details');
        return;
    }
    document.getElementById('registration').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    document.getElementById('welcomeMessage').innerText = `Welcome, ${name} (${selectedUserType})`;
}

function logout() {
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('registration').classList.remove('hidden');
}

function showSection(section) {
    document.getElementById('ambulance-section').classList.add('hidden');
    document.getElementById('appointment-section').classList.add('hidden');
    document.getElementById(`${section}-section`).classList.remove('hidden');
}

function bookAmbulance() {
    alert('Ambulance Booking Submitted!');
}

function bookAppointment() {
    alert('Appointment Booking Submitted!');
}
