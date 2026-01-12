const quotes = [
    "Kode adalah puisi di tahun 2026.",
    "Masa depanmu ditentukan oleh apa yang kamu buat hari ini.",
    "Jangan berhenti saat lelah, berhentilah saat selesai.",
    "Teknologi berkembang, pastikan skill-mu juga!",
    "Halo dari dimensi digital 2026!"
];

function generateCard() {
    const name = document.getElementById('nameInput').value;
    const age = document.getElementById('ageInput').value;
    const hobby = document.getElementById('hobbyInput').value;

    if(!name || !age) {
        alert("Isi dulu bro biar asik!");
        return;
    }

    // Putar Musik
    const music = document.getElementById('bgMusic');
    music.volume = 0.5;
    music.play();

    // Set Data ke Kartu
    document.getElementById('display-name').innerText = name;
    document.getElementById('display-info').innerText = `${age} Tahun | ${hobby || "Digital Nomad"}`;
    document.getElementById('display-quote').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;

    // Transisi Tampilan
    document.getElementById('input-section').style.display = 'none';
    document.getElementById('card-section').style.display = 'block';
}

// Efek Tilt 3D
const card = document.getElementById('card');
document.addEventListener('mousemove', (e) => {
    if(document.getElementById('card-section').style.display === 'block') {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
});
