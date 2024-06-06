document.addEventListener('DOMContentLoaded', function () {
    // Populate the name in the welcome message
    let userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById('userName').textContent = userName;
    }

    // Handle form submission
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        
        let name = document.getElementById('name').value;
        let date = document.getElementById('date').value;
        let gender = document.querySelector('input[name="gender"]:checked').value;
        let message = document.getElementById('message').value;

        let output = `
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Tanggal Lahir:</strong> ${date}</p>
            <p><strong>Jenis Kelamin:</strong> ${gender}</p>
            <p><strong>Pesan:</strong> ${message}</p>
        `;

        document.getElementById('formOutput').innerHTML = output;
    });
});
