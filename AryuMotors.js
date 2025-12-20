
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const tehsil = document.getElementById("Tehsil").value;
    const model = document.getElementById("model").value;
    const message = document.getElementById("msg").value.trim();

    if (!name || !phone || !tehsil || !model ) {
        alert("Please fill all fields before submitting the enquiry.");
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    const formData = {
        name,
        phone,
        tehsil,
        model,
        message
    };

    console.log("Enquiry Data:", formData);

    alert("Enquiry submitted successfully!");

    document.getElementById("contactForm").reset();
});



