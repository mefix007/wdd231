// script for data that will be used to populate discovery page.
const devices = [
    {
        "name": "Iphone 15",
        "os": "run on Apple's iOS 17, upgradable to iOS 18.1",
        "date": "2023 September 12",
        "features": "Face ID, accelerometer, gyro, proximity, compass,<br>barometer Ultra Wideband (UWB) support (gen2 chip) and more",
        "battery": "Li-Ion 3349 mAh, non-removable",
        "storage": "256gig-1tb, 6gig Ram",
        "path": "images/Apple_Iphone_15.png"
    },
    {
        "name": "Sangao Laser SmartWatch",
        "os": "Android 11, upgradable to Android 13, MIUI 14",
        "date": "2023",
        "features": "Blood sugar Smart Watch Men Sangao Laser Health Heart<br>Rate Blood Pressure Fitness Watches IP68 Waterproof",
        "battery": "Lithium Polymer",
        "path": "images/Sangao_Laser_Smart_Watch.png"
    },
    {
        "name": "Google Pixel 7a",
        "os": "run on Android 13, upgradable to Android 15",
        "date": "2023, May 10",
        "features": "Fingerprint (under display, optical), accelerometer,<br>gyro, proximity, compass, barometer",
        "battery": "Li-Po 4385 mAh, non-removable",
        "storage": "128GB 8GB RAM",
        "path": "images/Google_pixel_7.png"
    },
    {
        "name": "Lenovo IdeaPad Slim 3",
        "os": "FreeDOS",
        "date": "2022",
        "features": "Processor Intel® Core™ i3-N305 (8C / 8T, 1.8 / 3.8GHz, 6MB),<br>Graphics Integrated Intel UHD Graphics, Chipset Intel SoC Platform",
        "storage": "Memory 4GB Soldered LPDDR5-4800, storage 256GB SSD.",
        "path": "images/Lenovo_15_6.png"
    },
    {
        "name": "Motorola moto Z4",
        "os": "Android 9.0 (Pie), upgradable to Android 10",
        "date": "2019, June",
        "features": "Fingerprint (under display, optical), accelerometer,<br>gyro, proximity, compass Moto Mods snap-on accessories",
        "battery": "Li-Ion 3600 mAh, non-removable",
        "storage": "128GB 4GB RAM",
        "path": "images/Motorola_moto_z⁴.png"
    },
    {
        "name": "MacBook Air 13 M3",
        "os": "macOS Sonoma 14",
        "date": "2024",
        "features": "13-inch MacBook Air with M3 chip, USB-C to MagSafe 3 Cable<br>(2m), USB-C Power Adapter",
        "storage": "16GB RAM, Internal Memory 512GB",
        "path": "images/MacBook_Air.jpg"
    },
    {
        "name": "Redmi Note 11",
        "os": "Android 11, upgradable to Android 13, MIUI 14",
        "date": "2022, January 26",
        "features": "Fingerprint (side-mounted), accelerometer, gyro, compass<br>Virtual proximity sensing",
        "battery": "Li-Po 5000 mAh, non-removable",
        "storage": "64gb-128gb, 4gb-6gb RAM",
        "path": "images/Redmi_Note_11.png"
    },
    {
        "name": "Sienfix Smartwatch",
        "os": "Android",
        "date": "2024",
        "features": "Screen Size 1.3 Inches, is waterproof, shockproof,<br>magnetically resistant, and designed for professional outdoor exercise",
        "battery": "Lithium Polymer",
        "path": "images/Amazon_Sienfix.png"
    },
    {
        "name": "Samsung S24 Ultra",
        "os": "Android 14, up to 7 major Android upgrades, One UI 6.1.1",
        "date": "2024, January 17",
        "features": "Fingerprint (under display, ultrasonic), accelerometer,<br>gyro, proximity, compass, barometer",
        "battery": "Li-Ion 5000 mAh, non-removable",
        "storage": "256GB 12GB RAM, 512GB 12GB RAM, 1TB 12GB RAM",
        "path": "images/samsung_ultra22.png"
    },
    {
        "name": "Samsung Galaxy Watch6",
        "os": "Android",
        "date": "2022, January 26",
        "features": "keep insights on duration, distance, calories burned<br>and more. Watch recognizes activities from running to swimming and tracks over 90 other exercises",
        "battery": "Lithium Polymer",
        "path": "images/Samsung_Galaxy_Watch6.png"
    },
    {
        "name": "Microsoft Surface Laptop3",
        "os": "Comes with windows 10, can be upgraded to windows 11",
        "date": "2022, January 26",
        "features": "Studio Mics, facial-recognition camera, Surface Connect port,<br>USB port, USB-C port, Headphones jack",
        "storage": "16GB RAM, Internal Memory 512GB-1TB",
        "path": "images/Microsoft_Surface_Laptop_3.png"
    },

    {
        "name": "Smart Touch2 smartwatch",
        "os": "Android",
        "date": "2023",
        "features": "Heart Rate Monitor, Blood Pressure, Alarms, Clock,<br>Professionally Waterproof & Resistant, Bluetooth & Phone Calling & More",
        "battery": "Lithium Polymer",
        "path": "images/Steel-belt_Lige_Smart_Touch2.png"
    }
]

// setting the variable constants
const showDevices = document.querySelector("#showDevices")
const mydialog = document.querySelector('#mydialog')
const mytitle = document.querySelector('#mydialog h3')
const myclose = document.querySelector('#mydialog button')
const myinfo = document.querySelector('#mydialog p')
myclose.addEventListener("click", () => mydialog.close())


//  function to display all the variables
function displayItems(data) {
    data.forEach(element => {
        console.log(element)
        const photo = document.createElement('img')
        photo.src = `${element.path}`
        photo.alt = element.name
        photo.setAttribute('loading', 'lazy');
        photo.setAttribute('width', '300');
        photo.setAttribute('height', '320');
        // add an event listener to the photos
        photo.addEventListener('click', () => showItems(element));
        showDevices.appendChild(photo)
    });
}
displayItems(devices)

// function to display the photo items
function showItems(element) {
    mytitle.innerHTML = element.name
    mydialog.showModal();
    myinfo.innerHTML = `
    OS: ${element.os}<br>
    Features: ${element.features}<br>
    Battery: ${element.battery}<br>
    Release Date: ${element.date}
`;
}

