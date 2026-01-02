
let ContactForm = document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const tehsil = document.getElementById("Tehsil").value;
    const model = document.getElementById("model").value;
    const message = document.getElementById("msg").value.trim();

    if (!name || !phone || !tehsil || !model) {
        alert("Please fill all fields before submitting the enquiry.");
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    const EnquiryDate = new Date().toLocaleDateString();

    const formData = {
        name,
        phone,
        tehsil,
        model,
        message,
        EnquiryDate
    };

    console.log("Enquiry Data:", formData);
    alert('Thanks ' + formData.name + " — we've received your enquiry. We'll call you shortly.");
    document.getElementById("contactForm").reset();
});

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
