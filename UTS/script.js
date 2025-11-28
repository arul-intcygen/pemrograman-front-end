// 1. Data Awal (Default) jika belum ada data di LocalStorage
const defaultServices = [
    {
        name: "Perplexity Pro",
        desc: "Akses mesin pencari AI advanced gratis selama setahun. Gunakan email .itts.ac.id saat mendaftar atau masukkan kode promo khusus mahasiswa.",
        status: "Valid"
    },
    {
        name: "Google Gemini Advanced",
        desc: "Dapatkan akses ke model Gemini 1.5 Pro dan integrasi Google Workspace dengan akun Google Education kampus.",
        status: "Valid"
    },
    {
        name: "Notion Personal Pro",
        desc: "Organisir catatan kuliah tanpa batas blok. Gratis selamanya selama menggunakan email institusi pendidikan.",
        status: "Valid"
    }
];

// 2. Fungsi Utama: Dijalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    
    // Cek apakah kita ada di halaman index.html (mencari elemen service-list)
    const serviceList = document.getElementById('service-list');
    
    if (serviceList) {
        renderServices();
    }

    // Cek apakah kita ada di halaman tambahLayanan.html (mencari form)
    const addForm = document.getElementById('addForm');
    
    if (addForm) {
        addForm.addEventListener('submit', handleAddService);
    }
});

// 3. Fungsi Menampilkan Layanan (Render)
function renderServices() {
    // Ambil data dari LocalStorage, jika kosong pakai defaultServices
    let services = JSON.parse(localStorage.getItem('ittsServices'));
    
    if (!services) {
        services = defaultServices;
        // Simpan default ke storage agar tersinkronisasi
        localStorage.setItem('ittsServices', JSON.stringify(services));
    }

    const container = document.getElementById('service-list');
    container.innerHTML = ''; // Bersihkan container

    // Loop data dan buat HTML Card
    services.forEach(service => {
        // Tentukan kelas warna badge berdasarkan status
        const badgeClass = service.status === 'Valid' ? 'valid' : 'invalid';
        
        const cardHTML = `
            <div class="card">
                <div>
                    <h3>${service.name}</h3>
                    <p>${service.desc}</p>
                </div>
                <span class="badge ${badgeClass}">${service.status}</span>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// 4. Fungsi Menambah Layanan Baru
function handleAddService(e) {
    e.preventDefault(); // Mencegah halaman refresh

    // Ambil nilai dari input form
    const name = document.getElementById('name').value;
    const desc = document.getElementById('desc').value;
    const status = document.getElementById('status').value;

    // Buat objek baru
    const newService = {
        name: name,
        desc: desc,
        status: status
    };

    // Ambil data lama, tambahkan data baru, simpan lagi
    let services = JSON.parse(localStorage.getItem('ittsServices')) || defaultServices;
    services.push(newService);
    localStorage.setItem('ittsServices', JSON.stringify(services));

    alert('Layanan berhasil ditambahkan!');
    window.location.href = 'index.html'; // Pindah balik ke halaman utama
}
