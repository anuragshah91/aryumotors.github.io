let form = document.getElementById('contactForm');
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission

    const data = {
        name: document.getElementById("name").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        tehsil: document.getElementById("Tehsil").value,
        model: document.getElementById("model").value,
        message: document.getElementById("msg").value.trim()
    };

    e.target.querySelector('button[type="submit"]').disabled = true; // Disable the submit button to prevent multiple submissions
    e.target.querySelector('button[type="submit"]').innerText = "Submitting..."; //

    fetch("https://script.google.com/macros/s/AKfycbylq4aT996pg7fFnowd4Dp6nrWZlNoyKK2KGVZPZevEUNk9CLW53_Qj4ms31YL1gC9z/exec", {
        method: "POST",
        body: JSON.stringify(data)
    })

        .then(res => res.json())
        .then(() => {
            alert("Enquiry submitted successfully!");

            // e.target.querySelector('button[type="submit"]').disabled = false; // Re-enable the submit button
            e.target.querySelector('button[type="submit"]').innerText = "Send enquiry"; // Restore button text

            document.getElementById("contactForm").reset();
        })
        .catch(() => alert("Error submitting form"));
})

const search = () => {
    const searchbox = document.getElementById("searchInput").value.toUpperCase();
    const storeitems = document.getElementById("tractor-section")
    const products = document.querySelectorAll(".hero-card")
    const pname = document.getElementsByTagName("strong")

    for (let i = 0; i < pname.length; i++) {
        let match = products[i].getElementsByTagName('strong')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML;
            
            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                products[i].style.display = "";
            } else {
                products[i].style.display = "none";
            }
        }
    }
}

