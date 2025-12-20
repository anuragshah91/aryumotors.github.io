const products = {
    1: {
        title: "MF 8055 MAGNATRAK",
        image: "image/MF-8055-MAGNATRAK.png",
        specs: [
            { name: "Power Range (hp Range)", value: "36 kw (50hp)" },
            { name: "Cylinders", value: "3" },
            { name: "Cubic Capacity", value: "3298 cc" },
            { name: "Fuel Injection Pump", value: "Inline" },
            { name: "Clutch Type", value: "Dual Clutch" },
            { name: "Transmission Type", value: "Constant mesh" },
            { name: "Number of Speeds", value: "8 Forward + 2 Reverse" },
            { name: "Front Tyre", value: "19.05 cm X 40.64 cm (7.5 X 16)" },
            { name: "Rear Tyre", value: "37.85 cm X 71.12 cm (14.9 X 28)42.93 cm X 71.12 cm (16.9 X 28) Optional" },
            { name: "Forward Speed @ Rated RPM", value: "31 km/h" },
            { name: "PTO Type", value: "Reverse PTO" },
            { name: "PTO Speed", value: "540 RPM @ 1735 ERPM" },
            { name: "Hydraulics Lifting Capacity", value: "1800 kgf" },
            { name: "Brake Type", value: "MF Duracool Brakes / MAXX OIB" },
            { name: "Steering Type", value: "Power Steering" },
            { name: "Overall Length", value: "3460 mm" },
            { name: "Overall Width", value: "1800 mm" },
            { name: "Wheelbase", value: "2000 mm" },
            { name: "Total Weight", value: "2240 kgf" },
            { name: "Fuel Tank Capacity", value: "58 Litres" },
            { name: "Additional Features", value: "Deflector guards, transport lock, RMB valve with UpLift and oil pipe kitOptional: Slope Assist System (SAS)" }
        ]
    },
    2: {
        title: "MF 7250 Challenger",
        image: "image/MF-7250-Challenger.jpg",
        specs: [
            { name: "Power Range (hp Range)", value: "36.4 kW (50 hp Range)" },
            { name: "Cylinders", value: "3" },
            { name: "Cubic Capacity", value: "2700 cc" },
            { name: "Fuel Injection Pump", value: "Inline" },
            { name: "Clutch Type", value: "Dual Clutch" },
            { name: "Transmission Type", value: "Constant Mesh" },
            { name: "Constant Mesh", value: "8 Forward + 2 Reverse" },
            { name: "Tyre Dimensions", value: "7.5 x 16 (19.05 cm x 40.64 cm) Front14.9 x 28(37.84 cm x 71.12 cm) Rear" },
            { name: "Forward Speed @ rated RPM", value: "34.87 km/h @ 2250" },
            { name: "PTO Type", value: "RPTO, Six-splined shaft" },
            { name: "PTO Speed", value: "540 RPM @ 1735 ERPM" },
            { name: "Hydraulics Lifting Capacity (Lower Links at Horizontal Position)", value: "1800 kgf" },
            { name: "Brake Type", value: "Oil Immersed Brake" },
            { name: "Steering Type", value: "Power Steering" },
            { name: "Overall Length", value: "3610 mm" },
            { name: "Overall Width", value: "1747 mm" },
            { name: "Overall Height", value: "2350 mm" },
            { name: "Wheelbase", value: "1930 mm" },
            { name: "Total Weight", value: "2110 kgs" },
            { name: "Fuel Tank Capacity", value: "60 L" },
            { name: "Features", value: "Both Side Shift | Front Bumper with tow hook |Dry Type Air Cleaner|Auxillary pump with two way Double Acting Spool valve|RPTO|Telescopic stabilizer |Pendant type clutch & Brake Pedals |High Ground Clearance | Raised Quadrant" }
        ]
    },
    3: {
        title: "MF 1035 DI Mahashakti",
        image: "image/MF-1035-DI-Mahashakti.jpg",
        specs: [
            { name: "Power Range (hp Range)", value: "40 HP (27.6 kW)" },
            { name: "Engine", value: "SIMPSONS S337 T III A" },
            { name: "Cylinders", value: "3" },
            { name: "Cubic Capacity", value: "2400 cc (2.40L)" },
            { name: "Fuel Injection Pump", value: "Inline" },
            { name: "Clutch Type", value: "Dual Clutch" },
            { name: "Transmission Type", value: "Sliding Mesh" },
            { name: "Number of Speeds", value: "8 Forward + 2 Reverse" },
            { name: "Tyre Dimensions", value: "6 x 16 (15.24 cm x 40.64 cm) Front 13.6 x 28 (34.54 cm x 71.12 cm) Rear" },
            { name: "Forward Speed @ rated RPM", value: "30.36 Km/h @ 2000" },
            { name: "PTO Type", value: "Live PTO, Six-splined shaft" },
            { name: "PTO Speed", value: "540 RPM @ 1500 ERPM" },
            { name: "Hydraulics Lifting Capacity (Lower Links at Horizontal Position)", value: "1300 kgf" },
            { name: "Three-point Linkage and Controls", value: "Draft, position and response control. Links fitted with CAT-1 (Combi Ball)" },
            { name: "Brake Type", value: "Dry Brake" },
            { name: "Steering Type", value: "Manual Steering" },
            { name: "Electricals", value: "12 V 75 Ah Battery, 12 V 36 A Alternator" },
            { name: "Overall Length", value: "3340 mm" },
            { name: "Overall Width", value: "1715 mm" },
            { name: "Overall Height", value: "2200mm" },
            { name: "Wheelbase", value: "1785" },
            { name: "Total Weight", value: "1745kg" },
            { name: "Fuel Tank Capacity", value: "47 L" },
            { name: "Features", value: "Transport lock valve | Classic pedal | Instrument Cluster | Thicker steering wheel | External check chain (Chain stablizer)" },
        ]
    },
    4: {
        title: "MF 1035 DI DOST",
        image: "image/MF-1035-DI-DOST.jpg",
        specs: [
            { name: "Power Range (hp Range)", value: "35 HP (24.6kW)" },
            { name: "Engine", value: "SIMPSONS TIII A S 334" },
            { name: "Cylinders", value: "3" },
            { name: "Cubic Capacity", value: "2270 cc (2.27L)" },
            { name: "Fuel Injection Pump", value: "Inline" },
            { name: "Clutch Type", value: "Dual" },
            { name: "Transmission Type", value: "Sliding mesh" },
            { name: "Number of Speeds", value: "8 Forward + 2 Reverse" },
            { name: "Tyre Dimensions", value: "6.00x16 (0.15 x 0.41 m) front 13.6 x 28 (0.35 x 0.71 m) rear option: 12.4 x 28 (0.31 x 0.71 m) rear" },
            { name: "Forward Speed @ rated RPM", value: "30.36 kmph" },
            { name: "PTO Type", value: "Live, Six-splined shaft" },
            { name: "PTO Speed", value: "540 RPM @ 1500 ERPM" },
            { name: "Hydraulics Lifting Capacity (Lower Links at Horizontal Position)", value: "1100 kgf" },
            { name: "Three-point Linkage and Controls", value: "Draft, position and response control. Links fitted with CAT-1 (Combi Ball)" },
            { name: "Brake Type", value: "MDSS Brakes / Maxx OIB" },
            { name: "Steering Type", value: "Manual - Recirculating worm, ball and nut type" },
            { name: "Electricals", value: "12V 80 Ah Battery, 12V 36 A alternator" },
            { name: "Overall Length", value: "3085 mm" },
            { name: "Overall Width", value: "1720 mm" },
            { name: "Overall Height", value: "2200 mm" },
            { name: "Wheelbase", value: "1935 mm" },
            { name: "Total Weight", value: "1770 kg" },
            { name: "Fuel Tank Capacity", value: "47 L" },
            { name: "Features", value: "Front bumper, rear flat face with hitch rails and oil pipe kit, transport lock, digital cluster" },
        ]
    },
    5: {
        title: "MF 1035 DI Tonner",
        image: "https://masseyfergusonindia.com/massey-ferguson/banner/MF-1035-DI-TONNER.jpg",
        specs: [
            { name: "Power Range (hp Range)", value: "40 HP (29.41 kW)" },
            { name: "Engine", value: "SIMPSONS S337 T III A" },
            { name: "Cylinders", value: "3" },
            { name: "Cubic Capacity", value: "2400 cc (2.40L)" },
            { name: "Fuel Injection Pump", value: "Inline" },
            { name: "Clutch Type", value: "	Dual" },
            { name: "Transmission Type", value: "Partial constant mesh" },
            { name: "Number of Speeds", value: "8 Forward + 2 Reverse" },
            { name: "Tyre Dimensions", value: "6.00 x 16 (15.24 cm x 40.64 cm) Front13.6 x 28 (34.54 cm x 71.12 cm) Rear" },
            { name: "Forward Speed @ rated RPM", value: "30.4 kmph" },
            { name: "PTO Type", value: "Live, Six-splined shaft" },
            { name: "PTO Speed", value: "540 RPM @ 1500 ERPM" },
            { name: "Hydraulics Lifting Capacity (Lower Links at Horizontal Position)", value: "1100 kgf" },
            { name: "Three-point Linkage and Controls", value: "Draft, position and response control. Links fitted with CAT-1 (Combi Ball)" },
            { name: "Brake Type", value: "Dry disc brakes (Dura Brakes) / Maxx OIB" },
            { name: "Steering Type", value: "Manual steering" },
            { name: "Electricals", value: "12 V 75 Ah Battery, 12 V 36 A Alternator" },
            { name: "Overall Length", value: "3340 mm" },
            { name: "Overall Width", value: "1650 mm" },
            { name: "Overall Height", value: "2200 mm" },
            { name: "Wheelbase", value: "1935 mm" },
            { name: "Total Weight", value: "1820 kg" },
            { name: "Fuel Tank Capacity", value: "55 L" },
            { name: "Features", value: "Front bumper, bigger fuel tank, rear flat face with hitch rails, elevated hood" },
        ]
    },
    6: {
        image: "image/MF-8055-MAGNATRAK.png",
        specs: [
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
        ]
    },
    7: {
        image: "image/MF-8055-MAGNATRAK.png",
        specs: [
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },
            { name: "", value: "" },


        ]
    },
    8: {
        image: "image/MF-8055-MAGNATRAK.png",
        specs: [
            { name: "Clutch", value: "Single" }
        ]
    },
    9: {
        image: "image/MF-8055-MAGNATRAK.png",
        specs: [
            { name: "Clutch", value: "Single" }
        ]
    },
};

function loadProductWithTable() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const select = document.getElementById("model");
    select.options[0].value = products[id].title;
    select.options[0].text = products[id].title;

    if (!products[id]) {
        document.body.innerHTML = "<h2>Product not found</h2>";
        return;
    }

    document.getElementById("productTitle").innerText = products[id].title;
    document.getElementById("productSubtitle").innerText = "Product Specifications";

    // set image
    document.getElementById("image").src = products[id].image;

    // create table rows
    let rows = "";
    products[id].specs.forEach(spec => {
        rows += `
        <tr>
          <td>${spec.name}</td>
          <td>${spec.value}</td>
        </tr>
      `;
    });

    document.getElementById("tableBody").innerHTML = rows;
}

// call function
loadProductWithTable();