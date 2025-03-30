function bookAmbulance() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const data = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            const socket = io(); // Assuming socket.io is included in your project
            socket.emit("sending-location", data);
            alert("Location sent to the server!");
        }, () => {
            alert("Unable to retrieve your location.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

document.addEventListener('DOMContentLoaded', function () {

});
