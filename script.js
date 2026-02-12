// Add this at the very top of script.js
window.handleRegistration = function() {
    userData = {
        name: document.getElementById('reg-name').value,
        company: document.getElementById('reg-company').value,
        role: document.getElementById('reg-role').value,
        email: document.getElementById('reg-email').value
    };

    if(!userData.name || !userData.email) {
        alert("Please provide at least a name and email.");
        return;
    }
    startGame(); // This will now call your existing startGame function
};
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz0CZBIqFlmBkGIZoU6yVFDak_B4FhkqnvnEUl7ZILjOVWq9-5htipRMk_zeqWZ_ZOoyg/exec";

const products = [
    { name: "Global Positioning System (GPS)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUIU05FOfL-VUxBLF8z2PxyB8zwnhwuRgJ5A&s", isDualUse: false },
    { name: "Carbon Fiber Roll", image: "https://m.media-amazon.com/images/I/81PsiYlPIVL._AC_UF894,1000_QL80_.jpg", isDualUse: true },
    { name: "Luxury Smartwatch", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500", isDualUse: false },
    { name: "Industrial Magnet", image: "https://www.cmtcompanies.com/wp-content/uploads/2017/01/57-DASH-magnet.jpg", isDualUse: true },
    { name: "Liquid Nitrogen Tank", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2Dd9blOb5taCLB5qW-FF6U_eVyg-JNnZvg&s", isDualUse: false },
    { name: "Satellite Phone", image: "https://www.officeeasy.be/media/catalog/product/cache/16822256cee3c919bf29bfc0144d0975/i/r/iridium_extreme.jpg", isDualUse: true },
    { name: "Instant Coffee", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=500", isDualUse: false },
    { name: "Laboratory Centrifuge", image: "https://m.media-amazon.com/images/I/61g+cYn2kyL._AC_UF894,1000_QL80_.jpg", isDualUse: true },
    { name: "Stainless Steel Pipe", image: "https://yenaengineering.nl/wp-content/uploads/2021/08/image.jpeg", isDualUse: false },
    { name: "Encryption Software", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=500", isDualUse: true },
    { name: "Industrial Fertilizer", image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=500", isDualUse: true },
    { name: "Solar Panel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHUI-Bvr5LxlJcF-hgywBzy_7lj4EZ_fUrA&s", isDualUse: false },
    { name: "High-Performance GPU", image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=500", isDualUse: true },
    { name: "Furbie Toy", image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/streams/2012/August/120806/347363-furby.jpg", isDualUse: false },
    { name: "Laser Cutting Machine", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRT9RsSsxHUuk1vWWRjHB-pnRH0o6GBX0LyQ&s", isDualUse: true },
    { name: "Laptop Computer", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=500", isDualUse: false },
    { name: "Maraging Steel Plate", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXsbdXgTyUmTXBOyhIVwzA_nm19OZXqF0PvA&s", isDualUse: true },
    { name: "Microwave Oven", image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=500", isDualUse: false },
    { name: "Aluminum Powder", image: "https://m.media-amazon.com/images/I/31nzZAXwywL._AC_UF1000,1000_QL80_.jpg", isDualUse: true },
    { name: "3D Printer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqxaGChmXB4lHNgCxOiI-vGLCWYIOOotsHBw&s", isDualUse: false },
    { name: "Submersible Pump", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCd3SnUnK2N15maZwuwtbuqkMdhMDOEZqx8w&s", isDualUse: true },
    { name: "Glass Wool", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfoDE-SZKNUyH93ypfcE4pQ5aErVzadPHdQQ&s", isDualUse: false },
    { name: "Night Vision Goggles", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZOFZhwOGjZtPGdmkgVCALUTuwX1-nA9Cfw&s", isDualUse: true },
    { name: "Consumer Drone", image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=500", isDualUse: true },
    { name: "Diesel Generator", image: "https://www.auto-service.be/assets/media/29748/diesel-generator-geluidsgedempt-230v400v-10kva-3.jpg", isDualUse: false },
    { name: "Digital Oscilloscope", image: "https://be.farnell.com/productimages/large/en_GB/3228047-40.jpg", isDualUse: true },
    { name: "Nickel Alloy", image: "https://specialpipingmaterials.com/wp-content/uploads/2019/07/Copy-of-Untitled-2-1.png", isDualUse: true },
    { name: "Fiber Optic Cable", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500", isDualUse: true },
    { name: "Vacuum Pump", image: "https://cbeuptime.com/wp-content/uploads/2015/03/industrial-vacuum-pump-compressor-picture-id1152748867.jpg", isDualUse: true },
    { name: "Titanium Rods", image: "https://m.media-amazon.com/images/I/71mI-+fS9EL._AC_UF1000,1000_QL80_.jpg", isDualUse: true },
    { name: "Industrial Smoke Detector", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-3Q2qHWY7wL9Lpx-pKXiXU92oXrqeEVXbw&s", isDualUse: true },
    { name: "Server Rack", image: "https://cdn11.bigcommerce.com/s-bmqf4dxrop/images/stencil/1030x680/uploaded_images/untitled-design-7-1-.png?t=1733945236", isDualUse: true },
    { name: "Microscope", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XgSkqXloXilxRV2f_LfRXGnoe4v0U8mJAA&s", isDualUse: true },
    { name: "Pressure Sensor", image: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.625,f_auto,h_214,q_auto,w_380/c_pad,h_214,w_380/F8285729-01?pgw=1", isDualUse: true },
    { name: "High-Speed Camera", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500", isDualUse: true },
    { name: "Ball Bearings", image: "https://m.media-amazon.com/images/I/61IqIz62s6L.jpg", isDualUse: true },
    { name: "Graphite Electrodes", image: "https://www.eastcarb.com/wp-content/uploads/2024/10/What-is-Graphite-Electrode.png", isDualUse: true },
    { name: "Thermal Imaging Camera", image: "https://m.media-amazon.com/images/I/61y5QhiHmSL._AC_UF1000,1000_QL80_.jpg", isDualUse: true },
    { name: "Scuba Regulator", image: "https://www.scuba.com/blog/wp-content/uploads/2023/11/scuba-diving-regulator-octo-AdobeStock_254364233.jpg", isDualUse: true },
    { name: "Microprocessor Chips", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500", isDualUse: true },
    { name: "Industrial Robot Arm", image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=500", isDualUse: true },
    { name: "Dental Drill", image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=500", isDualUse: true }
];

let currentIndex = 0;
let correct = 0;
let wrong = 0;
let timeLeft = 60;
let timer;
let userData = {};

// 1. REGISTRATION TRIGGER
function handleRegistration() {
    userData = {
        name: document.getElementById('reg-name').value,
        company: document.getElementById('reg-company').value,
        role: document.getElementById('reg-role').value,
        email: document.getElementById('reg-email').value
    };

    if(!userData.name || !userData.email) {
        alert("Please provide at least a name and email.");
        return;
    }
    startGame();
}

function startGame() {
    document.getElementById('reg-screen').classList.add('hidden');
    document.getElementById('game-content').classList.remove('hidden');

    currentIndex = 0;
    correct = 0;
    wrong = 0;
    timeLeft = 60;
    
    document.getElementById('score').innerText = "Score: 0";
    document.getElementById('timer').innerText = "Time: 60";

    showNextProduct();
    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `Time: ${timeLeft}`;
        if (timeLeft <= 0) endGame();
    }, 1000);
}

function showNextProduct() {
    if (currentIndex >= products.length) {
        endGame();
        return;
    }
    const p = products[currentIndex];
    document.getElementById('product-img').src = p.image;
    document.getElementById('product-name').innerText = p.name;
}

function handleSwipe(userGuessedDualUse) {
    if (timeLeft <= 0) return;
    const actual = products[currentIndex].isDualUse;
    if (userGuessedDualUse === actual) {
        correct++;
    } else {
        wrong++;
    }
    document.getElementById('score').innerText = `Score: ${correct}`;
    currentIndex++;
    showNextProduct();
}

function endGame() {
    clearInterval(timer);
    document.getElementById('game-content').classList.add('hidden');
    document.getElementById('results-screen').classList.remove('hidden');
    document.getElementById('final-stats').innerText = `Correct: ${correct} \n Wrong: ${wrong}`;

    // SEND DATA TO GOOGLE
    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({ ...userData, score: correct })
    }).then(() => loadLeaderboard());
}

function loadLeaderboard() {
    fetch(SCRIPT_URL)
        .then(res => res.json())
        .then(data => {
            document.getElementById('loading-msg').classList.add('hidden');
            const table = document.getElementById('leaderboard-table');
            const body = document.getElementById('leaderboard-body');
            table.classList.remove('hidden');
            body.innerHTML = data.map((row, i) => `<tr><td>${i+1}</td><td>${row[0]}</td><td>${row[4]}</td></tr>`).join('');
        });
}

// Global exposure
window.handleRegistration = handleRegistration;
window.handleSwipe = handleSwipe;