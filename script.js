/* ============================================
   RUANGESTETIKA - MAIN JAVASCRIPT
   Version: 5.0.0 - FULLY FIXED WITH WISHLIST
   ============================================ */

'use strict';

// ========== DATA PRODUK (60+ Produk Lengkap) ==========
const productsData = [
    { id: 1, name: "Meja Makan Ekstra Panjang", category: "Meja", price: 3250000, oldPrice: 4250000, rating: 4.9, reviews: 128, image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400", badge: "best", stock: 15, description: "Meja makan premium dari kayu jati solid dengan finishing natural." },
    { id: 2, name: "Meja Kerja Minimalis", category: "Meja", price: 1890000, oldPrice: 2350000, rating: 4.8, reviews: 94, image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400", badge: null, stock: 23, description: "Meja kerja modern dengan desain minimalis dan laci tersembunyi." },
    { id: 3, name: "Meja Kopi Nordic", category: "Meja", price: 1250000, oldPrice: 1750000, rating: 4.7, reviews: 67, image: "https://images.unsplash.com/photo-1532372320978-9b4d4a3a2f5c?w=400", badge: "sale", stock: 8, description: "Meja kopi bergaya Skandinavia dengan kaki kayu solid." },
    { id: 4, name: "Meja TV Modern", category: "Meja", price: 2150000, oldPrice: 2850000, rating: 4.6, reviews: 52, image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400", badge: null, stock: 31, description: "Meja TV dengan desain floating dan ruang penyimpanan luas." },
    { id: 5, name: "Meja Lipat Multifungsi", category: "Meja", price: 890000, oldPrice: 1250000, rating: 4.5, reviews: 203, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400", badge: "sale", stock: 45, description: "Meja lipat praktis untuk ruang terbatas." },
    { id: 6, name: "Meja Rias Elegan", category: "Meja", price: 2750000, oldPrice: 3450000, rating: 4.9, reviews: 88, image: "https://images.unsplash.com/photo-1513553404607-988bf2703777?w=400", badge: "best", stock: 12, description: "Meja rias dengan cermin besar dan laci-laci cantik." },
    { id: 7, name: "Meja Belajar Anak", category: "Meja", price: 750000, oldPrice: 1050000, rating: 4.7, reviews: 156, image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=400", badge: null, stock: 38, description: "Meja belajar ergonomis untuk anak." },
    { id: 8, name: "Meja Konsol Entryway", category: "Meja", price: 1650000, oldPrice: 2250000, rating: 4.6, reviews: 43, image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=400", badge: null, stock: 19, description: "Meja konsol elegan untuk area pintu masuk." },
    { id: 9, name: "Meja Bar Tinggi", category: "Meja", price: 2450000, oldPrice: 3150000, rating: 4.8, reviews: 71, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400", badge: null, stock: 14, description: "Meja bar dengan desain industrial." },
    { id: 10, name: "Meja Kantor Eksekutif", category: "Meja", price: 4250000, oldPrice: 5850000, rating: 4.9, reviews: 62, image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=400", badge: "best", stock: 7, description: "Meja kantor mewah dengan material premium." },
    { id: 11, name: "Kursi Makan Kayu Jati", category: "Kursi", price: 850000, oldPrice: 1150000, rating: 4.8, reviews: 112, image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400", badge: null, stock: 42, description: "Kursi makan dengan desain klasik." },
    { id: 12, name: "Kursi Santai Rotan", category: "Kursi", price: 990000, oldPrice: 1350000, rating: 4.7, reviews: 89, image: "https://images.unsplash.com/photo-1532372320978-9b4d4a3a2f5c?w=400", badge: "sale", stock: 27, description: "Kursi rotan alami yang nyaman." },
    { id: 13, name: "Kursi Kantor Ergonomis", category: "Kursi", price: 1750000, oldPrice: 2450000, rating: 4.9, reviews: 234, image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400", badge: "best", stock: 18, description: "Kursi kantor dengan dukungan lumbar." },
    { id: 14, name: "Kursi Gantung Ayunan", category: "Kursi", price: 1290000, oldPrice: 1890000, rating: 4.6, reviews: 67, image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400", badge: null, stock: 9, description: "Kursi gantung untuk relaksasi." },
    { id: 15, name: "Kursi Lipat Portable", category: "Kursi", price: 450000, oldPrice: 650000, rating: 4.5, reviews: 312, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400", badge: "sale", stock: 78, description: "Kursi lipat praktis." },
    { id: 16, name: "Kursi Bar Tinggi", category: "Kursi", price: 750000, oldPrice: 1050000, rating: 4.7, reviews: 54, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400", badge: null, stock: 34, description: "Kursi bar dengan footrest." },
    { id: 17, name: "Kursi Tamu Mewah", category: "Kursi", price: 1950000, oldPrice: 2650000, rating: 4.8, reviews: 76, image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400", badge: null, stock: 11, description: "Kursi tamu dengan velvet premium." },
    { id: 18, name: "Kursi Belajar Anak", category: "Kursi", price: 550000, oldPrice: 850000, rating: 4.6, reviews: 145, image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=400", badge: null, stock: 56, description: "Kursi belajar ergonomis." },
    { id: 19, name: "Kursi Teras Minimalis", category: "Kursi", price: 650000, oldPrice: 950000, rating: 4.5, reviews: 98, image: "https://images.unsplash.com/photo-1532372320978-9b4d4a3a2f5c?w=400", badge: null, stock: 43, description: "Kursi teras tahan cuaca." },
    { id: 20, name: "Kursi Gaming Premium", category: "Kursi", price: 2850000, oldPrice: 3850000, rating: 4.9, reviews: 167, image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400", badge: "best", stock: 22, description: "Kursi gaming dengan fitur recline." },
    { id: 21, name: "Sofa L-Shape Mewah", category: "Sofa", price: 4250000, oldPrice: 5850000, rating: 4.9, reviews: 143, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400", badge: "best", stock: 8, description: "Sofa L-Shape dengan fabric premium." },
    { id: 22, name: "Sofa Minimalis Modern", category: "Sofa", price: 2850000, oldPrice: 3650000, rating: 4.8, reviews: 112, image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=400", badge: null, stock: 15, description: "Sofa minimalis dengan desain clean." },
    { id: 23, name: "Sofa Bed Folding", category: "Sofa", price: 3250000, oldPrice: 4450000, rating: 4.7, reviews: 98, image: "https://images.unsplash.com/photo-1551298370-9d3d53740c6c?w=400", badge: "sale", stock: 12, description: "Sofa 2-in-1 bisa jadi tempat tidur." },
    { id: 24, name: "Sofa Kulit Asli", category: "Sofa", price: 5850000, oldPrice: 7850000, rating: 5.0, reviews: 67, image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400", badge: "best", stock: 5, description: "Sofa kulit asli Italia premium." },
    { id: 25, name: "Sofa Single Armchair", category: "Sofa", price: 1850000, oldPrice: 2450000, rating: 4.6, reviews: 87, image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400", badge: null, stock: 23, description: "Armchair elegan untuk sudut baca." },
    { id: 26, name: "Sofa Modular", category: "Sofa", price: 4850000, oldPrice: 6450000, rating: 4.9, reviews: 54, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400", badge: null, stock: 6, description: "Sofa modular bisa disusun sesuai keinginan." },
    { id: 27, name: "Sofa Klasik Eropa", category: "Sofa", price: 7250000, oldPrice: 9850000, rating: 4.9, reviews: 43, image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400", badge: "best", stock: 3, description: "Sofa bergaya Eropa klasik." },
    { id: 28, name: "Sofa Daybed", category: "Sofa", price: 3650000, oldPrice: 4850000, rating: 4.7, reviews: 76, image: "https://images.unsplash.com/photo-1551298370-9d3d53740c6c?w=400", badge: null, stock: 9, description: "Sofa daybed multifungsi." },
    { id: 29, name: "Sofa Teras Rotan", category: "Sofa", price: 2450000, oldPrice: 3250000, rating: 4.6, reviews: 92, image: "https://images.unsplash.com/photo-1532372320978-9b4d4a3a2f5c?w=400", badge: "sale", stock: 17, description: "Sofa rotan alami tahan cuaca." },
    { id: 30, name: "Sofa Minimalis Kecil", category: "Sofa", price: 2150000, oldPrice: 2850000, rating: 4.8, reviews: 134, image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=400", badge: null, stock: 28, description: "Sofa 2-seater untuk apartemen." },
    { id: 31, name: "Kasur Spring Bed Premium", category: "Kasur", price: 2850000, oldPrice: 3850000, rating: 4.9, reviews: 234, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400", badge: "best", stock: 45, description: "Kasur dengan pocket spring dan latex." },
    { id: 32, name: "Kasur Busa Inoac", category: "Kasur", price: 1750000, oldPrice: 2350000, rating: 4.7, reviews: 312, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400", badge: "sale", stock: 67, description: "Kasur busa berkualitas tinggi." },
    { id: 33, name: "Kasur Lipat Portable", category: "Kasur", price: 850000, oldPrice: 1250000, rating: 4.5, reviews: 189, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400", badge: null, stock: 34, description: "Kasur lipat praktis untuk tamu." },
    { id: 34, name: "Kasur Mewah Orthopedic", category: "Kasur", price: 4850000, oldPrice: 6850000, rating: 5.0, reviews: 98, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400", badge: "best", stock: 12, description: "Kasur orthopedic dengan memory foam." },
    { id: 35, name: "Kasur Bayi Anti Alergi", category: "Kasur", price: 650000, oldPrice: 950000, rating: 4.8, reviews: 156, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400", badge: null, stock: 43, description: "Kasur bayi anti alergi." },
    { id: 36, name: "Kasur Latex Alami", category: "Kasur", price: 3850000, oldPrice: 5250000, rating: 4.9, reviews: 87, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400", badge: "best", stock: 8, description: "Kasur latex alami dengan ventilasi." },
    { id: 37, name: "Kasur Queen Size", category: "Kasur", price: 3250000, oldPrice: 4450000, rating: 4.8, reviews: 145, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400", badge: null, stock: 23, description: "Kasur ukuran queen." },
    { id: 38, name: "Kasur King Size Mewah", category: "Kasur", price: 5250000, oldPrice: 7250000, rating: 4.9, reviews: 76, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400", badge: "best", stock: 5, description: "Kasur king size premium." },
    { id: 39, name: "Lampu Gantung Crystal", category: "Lampu", price: 1250000, oldPrice: 1850000, rating: 4.8, reviews: 89, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400", badge: "sale", stock: 15, description: "Lampu gantung mewah dengan kristal." },
    { id: 40, name: "Lampu Meja Minimalis", category: "Lampu", price: 450000, oldPrice: 650000, rating: 4.6, reviews: 134, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400", badge: null, stock: 34, description: "Lampu meja desain minimalis." },
    { id: 41, name: "Lampu Dinding Nordic", category: "Lampu", price: 650000, oldPrice: 950000, rating: 4.7, reviews: 78, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400", badge: null, stock: 27, description: "Lampu dinding bergaya Skandinavia." },
    { id: 42, name: "Lampu Hias Kayu", category: "Lampu", price: 350000, oldPrice: 550000, rating: 4.5, reviews: 112, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400", badge: null, stock: 43, description: "Lampu hias dari kayu solid." },
    { id: 43, name: "Lampu Lantai Modern", category: "Lampu", price: 950000, oldPrice: 1350000, rating: 4.8, reviews: 67, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400", badge: null, stock: 18, description: "Lampu lantai dengan adjustable height." },
    { id: 44, name: "Lampu Taman Solar", category: "Lampu", price: 250000, oldPrice: 450000, rating: 4.4, reviews: 234, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400", badge: "sale", stock: 56, description: "Lampu taman dengan solar cell." },
    { id: 45, name: "Lampu Tidur Smart", category: "Lampu", price: 550000, oldPrice: 850000, rating: 4.7, reviews: 98, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400", badge: null, stock: 22, description: "Lampu tidur dengan kontrol remote." },
    { id: 46, name: "String Lights", category: "Lampu", price: 150000, oldPrice: 250000, rating: 4.6, reviews: 345, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400", badge: null, stock: 89, description: "Lampu hias untuk dekorasi." },
    { id: 47, name: "Vas Bunga Keramik", category: "Dekorasi", price: 275000, oldPrice: 425000, rating: 4.7, reviews: 89, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400", badge: null, stock: 34, description: "Vas keramik handmade." },
    { id: 48, name: "Lukisan Dinding Abstrak", category: "Dekorasi", price: 850000, oldPrice: 1250000, rating: 4.8, reviews: 67, image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400", badge: null, stock: 12, description: "Lukisan kanvas abstrak." },
    { id: 49, name: "Jam Dinding Kayu", category: "Dekorasi", price: 350000, oldPrice: 550000, rating: 4.6, reviews: 134, image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400", badge: null, stock: 28, description: "Jam dinding dari kayu solid." },
    { id: 50, name: "Karpet Bulu Premium", category: "Dekorasi", price: 1250000, oldPrice: 1850000, rating: 4.9, reviews: 98, image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400", badge: "best", stock: 9, description: "Karpet bulu dengan ketebalan premium." },
    { id: 51, name: "Hiasan Dinding Macrame", category: "Dekorasi", price: 185000, oldPrice: 285000, rating: 4.5, reviews: 234, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400", badge: "sale", stock: 45, description: "Hiasan dinding macrame handmade." },
    { id: 52, name: "Set Peralatan Makan", category: "Dekorasi", price: 450000, oldPrice: 650000, rating: 4.7, reviews: 156, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400", badge: null, stock: 32, description: "Set peralatan makan keramik." },
    { id: 53, name: "Tatakan Buku", category: "Dekorasi", price: 150000, oldPrice: 250000, rating: 4.5, reviews: 189, image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400", badge: null, stock: 67, description: "Tatakan buku desain geometris." },
    { id: 54, name: "Patung Hias Modern", category: "Dekorasi", price: 550000, oldPrice: 850000, rating: 4.6, reviews: 78, image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400", badge: null, stock: 14, description: "Patung abstrak dari resin." },
    { id: 55, name: "Tirai Gorden Premium", category: "Dekorasi", price: 750000, oldPrice: 1150000, rating: 4.7, reviews: 112, image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400", badge: null, stock: 23, description: "Gorden blackout bahan premium." },
    { id: 56, name: "Bantal Sofa Set", category: "Dekorasi", price: 250000, oldPrice: 450000, rating: 4.8, reviews: 234, image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400", badge: null, stock: 56, description: "Set 4 bantal sofa berbagai motif." },
    { id: 57, name: "Tempat Lilin", category: "Dekorasi", price: 95000, oldPrice: 150000, rating: 4.5, reviews: 345, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400", badge: "sale", stock: 78, description: "Tempat lilin minimalis." },
    { id: 58, name: "Rak Dinding Floating", category: "Dekorasi", price: 350000, oldPrice: 550000, rating: 4.7, reviews: 134, image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400", badge: null, stock: 34, description: "Rak dinding minimalis." },
    { id: 59, name: "Mirror Decorative", category: "Dekorasi", price: 650000, oldPrice: 950000, rating: 4.8, reviews: 89, image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400", badge: null, stock: 11, description: "Cermin dekoratif bingkai kayu." },
    { id: 60, name: "Tatakan Pot Bunga", category: "Dekorasi", price: 125000, oldPrice: 225000, rating: 4.4, reviews: 278, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400", badge: null, stock: 67, description: "Tatakan pot bunga dari rotan." }
];

// ========== STATE MANAGEMENT ==========
let state = {
    products: productsData,
    cart: [],
    wishlist: [],
    currentPage: 'home',
    currentBudget: 5000000,
    currentCategory: 'all',
    sortBy: 'default',
    searchQuery: '',
    currentPageNum: 1,
    itemsPerPage: 12,
    gsapInitialized: false
};

// ========== UTILITY FUNCTIONS ==========
function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(angka);
}

// ========== TOAST NOTIFICATION ==========
let toastTimeout = null;

function showToast(message, type = 'info') {
    const existingToast = document.querySelector('.custom-toast');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '❌';
    if (type === 'warning') icon = '⚠️';
    if (type === 'info') icon = '💡';
    
    toast.innerHTML = `<div style="display: flex; align-items: center; gap: 10px;"><span style="font-size: 1.2rem;">${icon}</span><span>${message}</span></div><div class="toast-progress"></div>`;
    document.body.appendChild(toast);
    toast.offsetHeight;
    toast.classList.add('show');
    
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => { if (toast.parentNode) toast.remove(); }, 300);
    }, 3000);
}

// ========== GSAP ANIMATIONS ==========
function initGSAPAnimations() {
    if (state.gsapInitialized) return;
    
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "power3.out", duration: 0.8 });
    
    gsap.fromTo(".hero-text", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.2 });
    gsap.fromTo(".hero-image", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1, delay: 0.4 });
    gsap.fromTo(".floating-card", { y: 0 }, { y: -10, duration: 2, repeat: -1, yoyo: true, ease: "power1.inOut" });
    
    gsap.utils.toArray(".category-card").forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, y: 30 }, {
            opacity: 1, y: 0, duration: 0.6, delay: i * 0.1,
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" }
        });
    });
    
    gsap.utils.toArray(".product-card").forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, scale: 0.95 }, {
            opacity: 1, scale: 1, duration: 0.5, delay: i * 0.05,
            scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none reverse" }
        });
    });
    
    gsap.utils.toArray(".feature").forEach((feature, i) => {
        gsap.fromTo(feature, { opacity: 0, scale: 0.9 }, {
            opacity: 1, scale: 1, duration: 0.5, delay: i * 0.1,
            scrollTrigger: { trigger: ".features-grid", start: "top 80%", toggleActions: "play none none reverse" }
        });
    });
    
    ScrollTrigger.create({
        trigger: "body", start: "top -80px", end: "top 0",
        onUpdate: (self) => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (self.progress > 0) {
                    navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
                    navbar.style.padding = "8px 0";
                } else {
                    navbar.style.boxShadow = "none";
                    navbar.style.padding = "12px 0";
                }
            }
        }
    });
    
    state.gsapInitialized = true;
}

function animatePageTransition(pageId) {
    const newPage = document.getElementById(`${pageId}Page`);
    if (!newPage) return;
    
    const currentPage = document.querySelector('.page.active-page');
    if (currentPage && currentPage !== newPage) {
        gsap.to(currentPage, {
            opacity: 0, y: -20, duration: 0.3, ease: "power2.in",
            onComplete: () => {
                currentPage.classList.remove('active-page');
                newPage.classList.add('active-page');
                gsap.fromTo(newPage, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
                ScrollTrigger.refresh();
                animateNewPageElements();
            }
        });
    } else {
        newPage.classList.add('active-page');
        gsap.fromTo(newPage, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
        animateNewPageElements();
    }
}

function animateNewPageElements() {
    gsap.utils.toArray(".animate-fade-up").forEach(el => {
        gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.1 });
    });
    gsap.utils.toArray(".animate-scale").forEach(el => {
        gsap.fromTo(el, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.6, delay: 0.1 });
    });
    gsap.utils.toArray(".animate-slide-left").forEach(el => {
        gsap.fromTo(el, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.6, delay: 0.1 });
    });
    gsap.utils.toArray(".animate-slide-right").forEach(el => {
        gsap.fromTo(el, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.6, delay: 0.1 });
    });
}

// ========== CART FUNCTIONS ==========
function loadCart() {
    const saved = localStorage.getItem('ruangestetika_cart');
    if (saved) state.cart = JSON.parse(saved);
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('ruangestetika_cart', JSON.stringify(state.cart));
    updateCartUI();
}

function addToCart(productId, quantity = 1) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;
    
    const existing = state.cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += quantity;
        showToast(`Jumlah ${product.name} diperbarui (${existing.quantity} item)`, 'success');
    } else {
        state.cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: quantity });
        showToast(`${product.name} ditambahkan ke keranjang`, 'success');
        
        const cartIcon = document.querySelector('.cart-icon');
        if (cartIcon) gsap.fromTo(cartIcon, { scale: 1 }, { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1, ease: "power2.out" });
    }
    saveCart();
    renderCartDrawer();
}

function removeFromCart(productId) {
    const product = state.products.find(p => p.id === productId);
    state.cart = state.cart.filter(item => item.id !== productId);
    saveCart();
    renderCartDrawer();
    showToast(`${product?.name || 'Produk'} dihapus dari keranjang`, 'info');
}

function updateQuantity(productId, newQty) {
    const item = state.cart.find(i => i.id === productId);
    if (item) {
        if (newQty <= 0) removeFromCart(productId);
        else { item.quantity = newQty; saveCart(); renderCartDrawer(); }
    }
}

function getCartTotal() {
    return state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function updateCartUI() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('#cartCount, #bottomCartCount, #mobileCartCount').forEach(el => { if (el) el.textContent = totalItems; });
}

// ========== WISHLIST FUNCTIONS (LENGKAP) ==========
function loadWishlist() {
    const saved = localStorage.getItem('ruangestetika_wishlist');
    if (saved) {
        state.wishlist = JSON.parse(saved);
    } else {
        state.wishlist = [];
    }
    updateWishlistUI();
}

// ========== FIX: WISHLIST SYNC WITH USER ACCOUNT ==========

// Override loadWishlist function to load from user account
const originalLoadWishlist = loadWishlist;
window.loadWishlist = function() {
    // Jika user login, load wishlist dari user data
    if (currentUser && currentUser.wishlist) {
        state.wishlist = currentUser.wishlist;
        updateWishlistUI();
        // Simpan juga ke localStorage untuk fallback
        localStorage.setItem('ruangestetika_wishlist', JSON.stringify(state.wishlist));
    } else {
        // Jika tidak login, load dari localStorage
        originalLoadWishlist();
    }
};

// Override saveWishlist function to save to user account
const originalSaveWishlist = saveWishlist;
window.saveWishlist = function() {
    // Simpan ke localStorage dulu
    originalSaveWishlist();
    
    // Jika user login, simpan juga ke user data
    if (currentUser) {
        currentUser.wishlist = state.wishlist;
        
        // Update di users array
        const users = JSON.parse(localStorage.getItem('ruangestetika_users') || '[]');
        const userIndex = users.findIndex(u => u.email === currentUser.email);
        if (userIndex !== -1) {
            users[userIndex].wishlist = state.wishlist;
            localStorage.setItem('ruangestetika_users', JSON.stringify(users));
        }
        
        // Update currentUser
        saveUser();
    }
};

// Override toggleWishlist function
const originalToggleWishlist = toggleWishlist;
window.toggleWishlist = function(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;
    
    if (state.wishlist.includes(productId)) {
        // Hapus dari wishlist
        state.wishlist = state.wishlist.filter(id => id !== productId);
        showToast(`${product.name} dihapus dari wishlist`, 'info');
        
        // Animasi heart
        const wishlistBtn = document.querySelector(`.wishlist-btn[data-id="${productId}"] i`);
        if (wishlistBtn) {
            gsap.fromTo(wishlistBtn, 
                { scale: 1, color: '#999' },
                { scale: 0, duration: 0.2, onComplete: () => {
                    wishlistBtn.className = 'far fa-heart';
                    gsap.to(wishlistBtn, { scale: 1, duration: 0.2 });
                }}
            );
        }
    } else {
        if (state.wishlist.length >= 50) {
            showToast('Wishlist maksimal 50 produk', 'warning');
            return;
        }
        state.wishlist.push(productId);
        showToast(`${product.name} ditambahkan ke wishlist`, 'success');
        
        // Animasi heart
        const wishlistBtn = document.querySelector(`.wishlist-btn[data-id="${productId}"] i`);
        if (wishlistBtn) {
            gsap.fromTo(wishlistBtn, 
                { scale: 1, color: '#999' },
                { scale: 1.3, color: '#ef4444', duration: 0.2, yoyo: true, repeat: 1, onComplete: () => {
                    wishlistBtn.className = 'fas fa-heart';
                    wishlistBtn.style.color = '#ef4444';
                }}
            );
        }
    }
    
    // Simpan perubahan
    saveWishlist();
    
    // Refresh tampilan yang sedang aktif
    if (state.currentPage === 'catalog') {
        renderCatalogProducts();
    } else if (state.currentPage === 'home') {
        renderBestSellers();
    } else if (state.currentPage === 'promo') {
        renderPromoProducts();
    }
    
    // Jika dashboard wishlist sedang terbuka, refresh juga
    if (document.getElementById('dashboardModal')?.classList.contains('open')) {
        renderDashboardWishlist();
    }
};

// Update renderDashboardWishlist function (perbaiki jika sudah ada)
function renderDashboardWishlist() {
    const container = document.getElementById('dashboardWishlistList');
    if (!container) return;
    
    const wishlistProducts = state.products.filter(p => state.wishlist.includes(p.id));
    
    if (wishlistProducts.length === 0) {
        container.innerHTML = `
            <div class="empty-orders">
                <i class="far fa-heart"></i>
                <p>Belum ada produk di wishlist</p>
                <button class="btn-outline" id="dashboardWishlistShopBtn">Jelajahi Produk</button>
            </div>
        `;
        const shopBtn = document.getElementById('dashboardWishlistShopBtn');
        if (shopBtn) {
            shopBtn.addEventListener('click', () => {
                closeDashboardModal();
                navigateTo('catalog');
            });
        }
        return;
    }
    
    container.innerHTML = wishlistProducts.map(p => `
        <div class="wishlist-dashboard-item" data-id="${p.id}">
            <img src="${p.image}" alt="${p.name}">
            <div class="wishlist-dashboard-info">
                <div class="wishlist-dashboard-title">${p.name}</div>
                <div class="wishlist-dashboard-category">${p.category}</div>
                <div class="wishlist-dashboard-price">${formatRupiah(p.price)}</div>
                <div class="wishlist-dashboard-actions">
                    <button class="add-to-cart-wishlist-dash" data-id="${p.id}">
                        <i class="fas fa-shopping-cart"></i> Keranjang
                    </button>
                    <button class="remove-wishlist-dash" data-id="${p.id}">
                        <i class="fas fa-trash"></i> Hapus
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add event listeners for dashboard wishlist buttons
    document.querySelectorAll('.add-to-cart-wishlist-dash').forEach(btn => {
        btn.removeEventListener('click', handleDashboardAddToCart);
        btn.addEventListener('click', handleDashboardAddToCart);
    });
    
    document.querySelectorAll('.remove-wishlist-dash').forEach(btn => {
        btn.removeEventListener('click', handleDashboardRemoveWishlist);
        btn.addEventListener('click', handleDashboardRemoveWishlist);
    });
}

// Handler for dashboard add to cart
function handleDashboardAddToCart(e) {
    e.stopPropagation();
    const id = parseInt(e.currentTarget.dataset.id);
    addToCart(id);
    showToast('Produk ditambahkan ke keranjang', 'success');
}

// Handler for dashboard remove from wishlist
function handleDashboardRemoveWishlist(e) {
    e.stopPropagation();
    const id = parseInt(e.currentTarget.dataset.id);
    state.wishlist = state.wishlist.filter(wid => wid !== id);
    saveWishlist();
    renderDashboardWishlist();
    showToast('Produk dihapus dari wishlist', 'info');
}

// Update login function to load user's wishlist
const originalLogin = login;
window.login = function(email, password) {
    const users = JSON.parse(localStorage.getItem('ruangestetika_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = { ...user };
        delete currentUser.password;
        saveUser();
        updateUserUI();
        
        // Load user's wishlist
        if (currentUser.wishlist) {
            state.wishlist = currentUser.wishlist;
            localStorage.setItem('ruangestetika_wishlist', JSON.stringify(state.wishlist));
        } else {
            // If user has no wishlist yet, create empty array
            state.wishlist = [];
            currentUser.wishlist = [];
        }
        updateWishlistUI();
        
        // Refresh current page to update wishlist icons
        if (state.currentPage === 'catalog') {
            renderCatalogProducts();
        } else if (state.currentPage === 'home') {
            renderBestSellers();
        } else if (state.currentPage === 'promo') {
            renderPromoProducts();
        }
        
        closeAccountModal();
        showToast(`Selamat datang kembali, ${user.name}!`, 'success');
        return true;
    } else {
        showToast('Email atau password salah!', 'error');
        return false;
    }
};

// Update register function to include empty wishlist
const originalRegister = register;
window.register = function(name, email, password, confirmPassword) {
    if (password !== confirmPassword) {
        showToast('Password tidak cocok!', 'error');
        return false;
    }
    
    if (password.length < 6) {
        showToast('Password minimal 6 karakter!', 'error');
        return false;
    }
    
    const users = JSON.parse(localStorage.getItem('ruangestetika_users') || '[]');
    
    if (users.find(u => u.email === email)) {
        showToast('Email sudah terdaftar!', 'error');
        return false;
    }
    
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password,
        phone: '',
        birthdate: '',
        address: null,
        wishlist: [],  // <-- TAMBAHKAN INI
        orders: [],
        registeredAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('ruangestetika_users', JSON.stringify(users));
    
    currentUser = { ...newUser };
    delete currentUser.password;
    saveUser();
    updateUserUI();
    
    // Initialize empty wishlist for new user
    state.wishlist = [];
    saveWishlist();
    updateWishlistUI();
    
    closeAccountModal();
    showToast(`Selamat datang, ${name}! Akun Anda berhasil dibuat.`, 'success');
    return true;
};

// Update showDashboardModal to refresh wishlist section
const originalShowDashboardModal = window.showDashboardModal;
window.showDashboardModal = function() {
    if (!currentUser) {
        showAccountModal();
        return;
    }
    
    // Update dashboard with user data
    document.getElementById('dashboardUserName').textContent = currentUser.name;
    document.getElementById('dashboardUserEmail').textContent = currentUser.email;
    document.getElementById('profileName').value = currentUser.name;
    document.getElementById('profileEmail').value = currentUser.email;
    document.getElementById('profilePhone').value = currentUser.phone || '';
    document.getElementById('profileBirthdate').value = currentUser.birthdate || '';
    
    // Load address
    if (currentUser.address) {
        document.getElementById('addressFull').value = currentUser.address.full || '';
        document.getElementById('addressCity').value = currentUser.address.city || '';
        document.getElementById('addressPostal').value = currentUser.address.postal || '';
        displaySavedAddress();
    } else {
        document.getElementById('addressFull').value = '';
        document.getElementById('addressCity').value = '';
        document.getElementById('addressPostal').value = '';
    }
    
    // Load orders
    renderDashboardOrders();
    
    // Load wishlist for dashboard (refresh from current state)
    renderDashboardWishlist();
    
    const dashboardModal = document.getElementById('dashboardModal');
    if (dashboardModal) {
        dashboardModal.classList.add('open');
        document.body.style.overflow = 'hidden';
        gsap.fromTo(".dashboard-modal", 
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(0.5)" }
        );
    }
};

// Add CSS for wishlist dashboard items
function addWishlistDashboardStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .wishlist-dashboard-category {
            font-size: 0.7rem;
            color: var(--sage-green);
            margin-bottom: 5px;
            text-transform: uppercase;
        }
        
        .wishlist-dashboard-item {
            cursor: pointer;
        }
        
        .wishlist-dashboard-item:hover {
            background: var(--off-white);
        }
        
        .add-to-cart-wishlist-dash, .remove-wishlist-dash {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

// Call this after initialization
setTimeout(addWishlistDashboardStyles, 100);

function saveWishlist() {
    localStorage.setItem('ruangestetika_wishlist', JSON.stringify(state.wishlist));
    updateWishlistUI();
}

function toggleWishlist(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;
    
    if (state.wishlist.includes(productId)) {
        state.wishlist = state.wishlist.filter(id => id !== productId);
        showToast(`${product.name} dihapus dari wishlist`, 'info');
        
        const wishlistBtn = document.querySelector(`.wishlist-btn[data-id="${productId}"] i`);
        if (wishlistBtn) {
            gsap.fromTo(wishlistBtn, 
                { scale: 1, color: '#999' },
                { scale: 0, duration: 0.2, onComplete: () => {
                    wishlistBtn.className = 'far fa-heart';
                    gsap.to(wishlistBtn, { scale: 1, duration: 0.2 });
                }}
            );
        }
    } else {
        if (state.wishlist.length >= 50) {
            showToast('Wishlist maksimal 50 produk', 'warning');
            return;
        }
        state.wishlist.push(productId);
        showToast(`${product.name} ditambahkan ke wishlist`, 'success');
        
        const wishlistBtn = document.querySelector(`.wishlist-btn[data-id="${productId}"] i`);
        if (wishlistBtn) {
            gsap.fromTo(wishlistBtn, 
                { scale: 1, color: '#999' },
                { scale: 1.3, color: '#ef4444', duration: 0.2, yoyo: true, repeat: 1, onComplete: () => {
                    wishlistBtn.className = 'fas fa-heart';
                    wishlistBtn.style.color = '#ef4444';
                }}
            );
        }
    }
    saveWishlist();
    
    if (state.currentPage === 'catalog') {
        renderCatalogProducts();
    } else if (state.currentPage === 'home') {
        renderBestSellers();
    } else if (state.currentPage === 'promo') {
        renderPromoProducts();
    }
}

function isInWishlist(productId) {
    return state.wishlist.includes(productId);
}

function updateWishlistUI() {
    const total = state.wishlist.length;
    document.querySelectorAll('#wishlistCount, #bottomWishCount, #mobileWishCount').forEach(el => {
        if (el) el.textContent = total;
    });
}

function showWishlistModal() {
    const wishlistModal = document.getElementById('wishlistModal');
    const wishlistBody = document.getElementById('wishlistBody');
    if (!wishlistModal || !wishlistBody) return;
    
    const wishlistProducts = state.products.filter(p => state.wishlist.includes(p.id));
    
    if (wishlistProducts.length === 0) {
        wishlistBody.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <i class="far fa-heart" style="font-size: 4rem; color: #ccc;"></i>
                <p style="margin-top: 16px; color: #666;">Belum ada produk di wishlist</p>
                <button class="btn-primary" id="goToCatalogWishlist" style="margin-top: 20px;">
                    Jelajahi Produk <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        const goToCatalog = document.getElementById('goToCatalogWishlist');
        if (goToCatalog) {
            goToCatalog.addEventListener('click', () => {
                wishlistModal.classList.remove('open');
                navigateTo('catalog');
            });
        }
    } else {
        wishlistBody.innerHTML = `
            <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
                <p style="color: #666;">${wishlistProducts.length} produk dalam wishlist</p>
                <button id="clearAllWishlist" class="btn-outline" style="padding: 6px 12px; font-size: 0.75rem;">
                    Hapus Semua
                </button>
            </div>
            <div class="wishlist-products">
                ${wishlistProducts.map(p => `
                    <div class="wishlist-item" data-id="${p.id}">
                        <img src="${p.image}" alt="${p.name}" class="wishlist-item-img">
                        <div class="wishlist-item-info">
                            <div class="wishlist-item-title">${p.name}</div>
                            <div class="wishlist-item-category">${p.category}</div>
                            <div class="wishlist-item-price">${formatRupiah(p.price)}</div>
                            <div class="wishlist-item-actions">
                                <button class="add-to-cart-wishlist" data-id="${p.id}">
                                    <i class="fas fa-shopping-cart"></i> Keranjang
                                </button>
                                <button class="remove-wishlist-item" data-id="${p.id}">
                                    <i class="fas fa-trash"></i> Hapus
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        document.querySelectorAll('.add-to-cart-wishlist').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.dataset.id);
                addToCart(id);
                showToast('Produk ditambahkan ke keranjang', 'success');
            });
        });
        
        document.querySelectorAll('.remove-wishlist-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.dataset.id);
                state.wishlist = state.wishlist.filter(wid => wid !== id);
                saveWishlist();
                showWishlistModal();
                showToast('Produk dihapus dari wishlist', 'info');
            });
        });
        
        const clearAllBtn = document.getElementById('clearAllWishlist');
        if (clearAllBtn) {
            clearAllBtn.addEventListener('click', () => {
                if (confirm('Hapus semua produk dari wishlist?')) {
                    state.wishlist = [];
                    saveWishlist();
                    showWishlistModal();
                    showToast('Semua produk dihapus dari wishlist', 'info');
                }
            });
        }
        
        gsap.utils.toArray(".wishlist-item").forEach((item, i) => {
            gsap.fromTo(item, 
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, duration: 0.3, delay: i * 0.05 }
            );
        });
    }
    
    wishlistModal.classList.add('open');
    gsap.fromTo(".modal-content", 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(0.5)" }
    );
    
    const closeWishlist = document.getElementById('closeWishlistModal');
    if (closeWishlist) {
        closeWishlist.onclick = () => wishlistModal.classList.remove('open');
    }
    wishlistModal.onclick = (e) => { 
        if (e.target === wishlistModal) wishlistModal.classList.remove('open'); 
    };
}

// ========== PRODUCT CARD WITH WISHLIST ==========
function createProductCardWithWishlist(product) {
    const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;
    const isWishlisted = isInWishlist(product.id);
    
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                ${product.badge ? `<div class="product-badge">${product.badge === 'best' ? '⭐ Best Seller' : '🔥 Sale'}</div>` : ''}
                ${discount > 0 ? `<div class="product-badge" style="top: 50px; background: #EF4444;">-${discount}%</div>` : ''}
                <button class="wishlist-btn" data-id="${product.id}" aria-label="Wishlist">
                    <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
                </button>
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-title">${product.name}</div>
                <div class="product-rating">
                    ${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 >= 0.5 ? '½' : ''}${'☆'.repeat(5 - Math.ceil(product.rating))}
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-price">
                    ${formatRupiah(product.price)}
                    ${product.oldPrice ? `<span style="text-decoration: line-through; color: #999; font-size: 0.8rem; margin-left: 8px;">${formatRupiah(product.oldPrice)}</span>` : ''}
                </div>
                <button class="add-to-cart" data-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i> Tambah ke Keranjang
                </button>
            </div>
        </div>
    `;
}

function handleWishlistClick(e) {
    e.stopPropagation();
    const id = parseInt(e.currentTarget.dataset.id);
    toggleWishlist(id);
}

function attachProductEventsWithWishlist() {
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.removeEventListener('click', handleAddToCart);
        btn.addEventListener('click', handleAddToCart);
    });
    
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.removeEventListener('click', handleWishlistClick);
        btn.addEventListener('click', handleWishlistClick);
    });
    
    document.querySelectorAll('.product-card').forEach(card => {
        card.removeEventListener('click', handleProductClick);
        card.addEventListener('click', handleProductClick);
    });
}

function handleAddToCart(e) { e.stopPropagation(); const id = parseInt(e.currentTarget.dataset.id); addToCart(id); }
function handleProductClick(e) { if (e.target.classList.contains('add-to-cart') || e.target.classList.contains('wishlist-btn') || e.target.closest('.wishlist-btn')) return; const id = parseInt(e.currentTarget.dataset.id); showProductModal(id); }

// ========== FILTER FUNCTIONS ==========
function getFilteredProducts() {
    let filtered = [...state.products];
    filtered = filtered.filter(p => p.price <= state.currentBudget);
    if (state.currentCategory !== 'all') filtered = filtered.filter(p => p.category === state.currentCategory);
    if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filtered = filtered.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
    }
    if (state.sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (state.sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    else filtered.sort((a, b) => a.id - b.id);
    return filtered;
}

// ========== RENDER FUNCTIONS ==========
function renderCategories() {
    const categories = ['Meja', 'Kursi', 'Sofa', 'Kasur', 'Lampu', 'Dekorasi'];
    const icons = {
        'Meja': 'fa-chair', 'Kursi': 'fa-couch', 'Sofa': 'fa-loveseat',
        'Kasur': 'fa-bed', 'Lampu': 'fa-lightbulb', 'Dekorasi': 'fa-palette'
    };
    const container = document.getElementById('categoriesGrid');
    if (!container) return;
    
    container.innerHTML = categories.map(cat => `
        <div class="category-card" data-category="${cat}">
            <i class="fas ${icons[cat]}"></i>
            <h3>${cat}</h3>
            <p>${state.products.filter(p => p.category === cat).length} produk</p>
        </div>
    `).join('');
    
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            state.currentCategory = card.dataset.category;
            const categorySelect = document.getElementById('categorySelect');
            if (categorySelect) categorySelect.value = state.currentCategory;
            navigateTo('catalog');
        });
    });
}

function renderBestSellers() {
    const bestSellers = state.products.filter(p => p.badge === 'best').slice(0, 6);
    const container = document.getElementById('bestSellerGrid');
    if (container) {
        container.innerHTML = bestSellers.map(p => createProductCardWithWishlist(p)).join('');
        attachProductEventsWithWishlist();
        gsap.utils.toArray("#bestSellerGrid .product-card").forEach((card, i) => {
            gsap.fromTo(card, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, delay: i * 0.1 });
        });
    }
}

function renderCatalogProducts() {
    const filtered = getFilteredProducts();
    const start = (state.currentPageNum - 1) * state.itemsPerPage;
    const paginated = filtered.slice(start, start + state.itemsPerPage);
    const container = document.getElementById('catalogGrid');
    const resultsCount = document.getElementById('resultsCount');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    if (container) {
        if (paginated.length === 0) {
            container.innerHTML = `<div style="text-align: center; padding: 60px;"><i class="fas fa-search" style="font-size: 3rem; color: #ccc;"></i><p style="margin-top: 16px;">Tidak ada produk ditemukan</p><button class="btn-primary" id="clearFiltersBtn" style="margin-top: 16px;">Reset Filter</button></div>`;
            const clearBtn = document.getElementById('clearFiltersBtn');
            if (clearBtn) clearBtn.addEventListener('click', () => {
                state.currentBudget = 5000000;
                state.currentCategory = 'all';
                state.sortBy = 'default';
                state.searchQuery = '';
                const budgetSlider = document.getElementById('budgetSlider');
                const budgetValue = document.getElementById('budgetValue');
                const categorySelect = document.getElementById('categorySelect');
                const sortSelect = document.getElementById('sortSelect');
                if (budgetSlider) budgetSlider.value = 5000000;
                if (budgetValue) budgetValue.textContent = formatRupiah(5000000);
                if (categorySelect) categorySelect.value = 'all';
                if (sortSelect) sortSelect.value = 'default';
                const searchInputs = [document.getElementById('searchInput'), document.getElementById('mobileSearchInput')];
                searchInputs.forEach(inp => { if (inp) inp.value = ''; });
                renderCatalogProducts();
                showToast('Filter telah direset', 'success');
            });
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        } else {
            container.innerHTML = paginated.map(p => createProductCardWithWishlist(p)).join('');
            if (loadMoreBtn) loadMoreBtn.style.display = filtered.length > state.currentPageNum * state.itemsPerPage ? 'block' : 'none';
        }
        attachProductEventsWithWishlist();
        gsap.utils.toArray("#catalogGrid .product-card").forEach((card, i) => {
            gsap.fromTo(card, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.4, delay: i * 0.05 });
        });
    }
    if (resultsCount) resultsCount.textContent = `Menampilkan ${filtered.length} produk dari ${state.products.length}`;
}

function renderPromoProducts() {
    const promoProducts = state.products.filter(p => p.oldPrice).slice(0, 8);
    const container = document.getElementById('promoGrid');
    if (container) {
        container.innerHTML = promoProducts.map(p => createProductCardWithWishlist(p)).join('');
        attachProductEventsWithWishlist();
        gsap.utils.toArray("#promoGrid .product-card").forEach((card, i) => {
            gsap.fromTo(card, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.5, delay: i * 0.1 });
        });
    }
}

function renderInspirationGrid() {
    const inspirations = [
        { title: "Ruang Tamu Modern", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400", style: "Modern Minimalis" },
        { title: "Kamar Tidur Cozy", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400", style: "Scandinavian" },
        { title: "Ruang Kerja Elegan", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400", style: "Industrial" },
        { title: "Taman Belakang", image: "https://images.unsplash.com/photo-1532372320978-9b4d4a3a2f5c?w=400", style: "Tropical" },
        { title: "Dapur Minimalis", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400", style: "Modern" },
        { title: "Ruang Makan Mewah", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400", style: "Classic" }
    ];
    const container = document.getElementById('inspirationGrid');
    if (container) {
        container.innerHTML = inspirations.map(insp => `
            <div class="inspiration-card">
                <img src="${insp.image}" alt="${insp.title}" loading="lazy">
                <div class="inspiration-overlay">
                    <h3>${insp.title}</h3>
                    <p>${insp.style}</p>
                </div>
            </div>
        `).join('');
        gsap.utils.toArray(".inspiration-card").forEach((card, i) => {
            gsap.fromTo(card, { opacity: 0, scale: 0.95 }, {
                opacity: 1, scale: 1, duration: 0.6, delay: i * 0.1,
                scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" }
            });
        });
    }
}

function renderTestimonials() {
    const testimonials = [
        { name: "Siti Rahma", location: "Jakarta", rating: 5, text: "Pelayanan sangat baik, produk berkualitas. Meja yang saya beli sangat kokoh dan sesuai dengan gambar." },
        { name: "Budi Santoso", location: "Surabaya", rating: 5, text: "Sofa nya sangat nyaman, cocok untuk keluarga. Desainnya modern dan materialnya premium." },
        { name: "Dewi Lestari", location: "Bandung", rating: 4, text: "Kursi rotan kualitas bagus, pengiriman tepat waktu." },
        { name: "Ahmad Fauzi", location: "Yogyakarta", rating: 5, text: "Lampu gantungnya cantik banget! Bikin ruangan jadi lebih elegan." }
    ];
    const container = document.getElementById('testimonialGrid');
    if (container) {
        container.innerHTML = testimonials.map(t => `
            <div class="testimonial-card">
                <i class="fas fa-quote-left"></i>
                <p>"${t.text}"</p>
                <div style="margin-top: 15px;">
                    <strong>${t.name}</strong>
                    <p style="font-size: 0.75rem; color: #999;">${t.location}</p>
                    <div style="color: #FFB800;">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
                </div>
            </div>
        `).join('');
        gsap.utils.toArray(".testimonial-card").forEach((card, i) => {
            gsap.fromTo(card, { opacity: 0, x: -30 }, {
                opacity: 1, x: 0, duration: 0.6, delay: i * 0.1,
                scrollTrigger: { trigger: ".testimonial-grid", start: "top 80%", toggleActions: "play none none reverse" }
            });
        });
    }
}

function renderCartDrawer() {
    const container = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    if (!container) return;
    
    if (state.cart.length === 0) {
        container.innerHTML = `<div style="text-align: center; padding: 40px;"><i class="fas fa-shopping-cart" style="font-size: 3rem; color: #ccc;"></i><p style="margin-top: 16px;">Keranjang kosong</p><button class="btn-outline" id="continueShoppingBtn" style="margin-top: 16px;">Mulai Belanja</button></div>`;
        const continueBtn = document.getElementById('continueShoppingBtn');
        if (continueBtn) continueBtn.addEventListener('click', () => { document.getElementById('cartOverlay')?.classList.remove('open'); navigateTo('catalog'); });
        if (totalEl) totalEl.textContent = formatRupiah(0);
        return;
    }
    
    container.innerHTML = state.cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${formatRupiah(item.price)}</div>
                <div class="cart-item-quantity">
                    <button class="qty-btn qty-decr" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn qty-incr" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}" style="margin-left: 10px; background: none; border: none; color: #999; cursor: pointer;"><i class="fas fa-trash"></i></button>
                </div>
            </div>
            <div style="font-weight: 600;">${formatRupiah(item.price * item.quantity)}</div>
        </div>
    `).join('');
    if (totalEl) totalEl.textContent = formatRupiah(getCartTotal());
    
    document.querySelectorAll('.qty-decr').forEach(btn => btn.addEventListener('click', () => { const id = parseInt(btn.dataset.id); const item = state.cart.find(i => i.id === id); if (item) updateQuantity(id, item.quantity - 1); }));
    document.querySelectorAll('.qty-incr').forEach(btn => btn.addEventListener('click', () => { const id = parseInt(btn.dataset.id); const item = state.cart.find(i => i.id === id); if (item) updateQuantity(id, item.quantity + 1); }));
    document.querySelectorAll('.remove-item').forEach(btn => btn.addEventListener('click', () => { const id = parseInt(btn.dataset.id); removeFromCart(id); }));
}

function showProductModal(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = `
        <div style="text-align: center;">
            <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 16px; margin-bottom: 16px;">
            <h3>${product.name}</h3>
            <div class="product-category">${product.category}</div>
            <div class="product-rating" style="justify-content: center; margin: 10px 0;">
                ${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 >= 0.5 ? '½' : ''} (${product.reviews} ulasan)
            </div>
            <div class="product-price" style="font-size: 1.5rem; margin: 16px 0;">
                ${formatRupiah(product.price)}
                ${product.oldPrice ? `<span style="text-decoration: line-through; font-size: 1rem; margin-left: 8px;">${formatRupiah(product.oldPrice)}</span>` : ''}
            </div>
            <p style="margin-bottom: 20px; color: #666;">${product.description}</p>
            <div style="margin-bottom: 16px; color: ${product.stock > 0 ? 'green' : 'red'};">
                <i class="fas ${product.stock > 0 ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                ${product.stock > 0 ? `Stok tersedia (${product.stock} unit)` : 'Stok habis'}
            </div>
            <button class="btn-primary" id="modalAddToCart" style="width: 100%;">Tambah ke Keranjang</button>
        </div>
    `;
    modal.classList.add('open');
    gsap.fromTo(".modal-content", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(0.5)" });
    document.getElementById('modalAddToCart')?.addEventListener('click', () => { addToCart(product.id); modal.classList.remove('open'); });
}

function renderCurrentPage() {
    if (state.currentPage === 'home') renderBestSellers();
    else if (state.currentPage === 'catalog') renderCatalogProducts();
    else if (state.currentPage === 'promo') renderPromoProducts();
    else if (state.currentPage === 'inspiration') renderInspirationGrid();
    else if (state.currentPage === 'testimonial') renderTestimonials();
}

// ========== NAVIGATION ==========
function navigateTo(page) {
    state.currentPage = page;
    state.currentPageNum = 1;
    animatePageTransition(page);
    
    document.querySelectorAll('.nav-link, .mobile-nav-link, .bottom-nav-item').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) link.classList.add('active');
    });
    
    window.location.hash = page;
    renderCurrentPage();
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) mobileMenu.classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== COUNTDOWN TIMER ==========
function startCountdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    targetDate.setHours(23, 59, 59);
    
    function update() {
        const now = new Date();
        const diff = targetDate - now;
        if (diff <= 0) { const countdownEl = document.getElementById('countdown'); if (countdownEl) countdownEl.innerHTML = '<div>Promo Berakhir!</div>'; return; }
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (86400000)) / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        const countdownEl = document.getElementById('countdown');
        if (countdownEl) {
            countdownEl.innerHTML = `<div><span>${String(days).padStart(2, '0')}</span><small>Hari</small></div><div><span>${String(hours).padStart(2, '0')}</span><small>Jam</small></div><div><span>${String(minutes).padStart(2, '0')}</span><small>Menit</small></div><div><span>${String(seconds).padStart(2, '0')}</span><small>Detik</small></div>`;
        }
    }
    update();
    setInterval(update, 1000);
}

function animateStats() {
    gsap.utils.toArray(".stat-num").forEach(stat => {
        const target = parseInt(stat.dataset.target);
        let obj = { count: 0 };
        gsap.to(obj, {
            count: target,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => { stat.textContent = Math.floor(obj.count).toLocaleString(); },
            scrollTrigger: { trigger: ".hero-stats", start: "top 80%", toggleActions: "play none none reverse" }
        });
    });
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
    document.querySelectorAll('[data-page]').forEach(link => link.addEventListener('click', (e) => { e.preventDefault(); const page = link.dataset.page; if (page) navigateTo(page); }));
    document.getElementById('logoHome')?.addEventListener('click', (e) => { e.preventDefault(); navigateTo('home'); });
    document.getElementById('shopNowBtn')?.addEventListener('click', () => navigateTo('catalog'));
    document.getElementById('exploreBtn')?.addEventListener('click', () => navigateTo('catalog'));
    
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    if (menuBtn && mobileMenu) menuBtn.addEventListener('click', () => { mobileMenu.classList.toggle('active'); gsap.fromTo(".mobile-nav-links li", { opacity: 0, x: -30 }, { opacity: 1, x: 0, stagger: 0.05, duration: 0.3 }); });
    if (closeMenuBtn && mobileMenu) closeMenuBtn.addEventListener('click', () => mobileMenu.classList.remove('active'));
    
    const cartIcon = document.getElementById('cartIcon');
    const bottomCartBtn = document.getElementById('bottomCartBtn');
    const mobileCart = document.getElementById('mobileCart');
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const checkoutBtn = document.getElementById('checkoutBtn');
    function openCart() { cartOverlay?.classList.add('open'); gsap.fromTo(".cart-drawer", { x: 100 }, { x: 0, duration: 0.4, ease: "power2.out" }); }
    function closeCart() { cartOverlay?.classList.remove('open'); }
    if (cartIcon) cartIcon.addEventListener('click', openCart);
    if (bottomCartBtn) bottomCartBtn.addEventListener('click', openCart);
    if (mobileCart) mobileCart.addEventListener('click', (e) => { e.preventDefault(); openCart(); });
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', (e) => { if (e.target === cartOverlay) closeCart(); });
    if (checkoutBtn) checkoutBtn.addEventListener('click', () => showToast('Fitur checkout akan segera hadir!', 'info'));
    
    const wishlistIcon = document.getElementById('wishlistIcon');
    const bottomWishlist = document.getElementById('bottomWishlist');
    const mobileWishlist = document.getElementById('mobileWishlist');
    if (wishlistIcon) wishlistIcon.addEventListener('click', showWishlistModal);
    if (bottomWishlist) bottomWishlist.addEventListener('click', (e) => { e.preventDefault(); showWishlistModal(); });
    if (mobileWishlist) mobileWishlist.addEventListener('click', (e) => { e.preventDefault(); showWishlistModal(); });
    
    const userIcon = document.getElementById('userIcon');
    const mobileAccount = document.getElementById('mobileAccount');
    if (userIcon) userIcon.addEventListener('click', () => showToast('✨ Fitur Akun akan segera hadir! Stay tuned! ✨', 'info'));
    if (mobileAccount) mobileAccount.addEventListener('click', (e) => { e.preventDefault(); showToast('✨ Fitur Akun akan segera hadir! Stay tuned! ✨', 'info'); });
    
    const filterToggle = document.getElementById('filterToggle');
    const filterOptions = document.getElementById('filterOptions');
    if (filterToggle && filterOptions) filterToggle.addEventListener('click', () => { filterOptions.classList.toggle('show'); if (filterOptions.classList.contains('show')) gsap.fromTo(filterOptions.children, { opacity: 0, y: -10 }, { opacity: 1, y: 0, stagger: 0.05, duration: 0.3 }); });
    
    const budgetSlider = document.getElementById('budgetSlider');
    const budgetValue = document.getElementById('budgetValue');
    if (budgetSlider && budgetValue) budgetSlider.addEventListener('input', (e) => { state.currentBudget = parseInt(e.target.value); budgetValue.textContent = formatRupiah(state.currentBudget); renderCatalogProducts(); });
    
    const categorySelect = document.getElementById('categorySelect');
    if (categorySelect) categorySelect.addEventListener('change', (e) => { state.currentCategory = e.target.value; renderCatalogProducts(); });
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) sortSelect.addEventListener('change', (e) => { state.sortBy = e.target.value; renderCatalogProducts(); });
    const resetFilter = document.getElementById('resetFilter');
    if (resetFilter) resetFilter.addEventListener('click', () => { state.currentBudget = 5000000; state.currentCategory = 'all'; state.sortBy = 'default'; state.searchQuery = ''; if (budgetSlider) budgetSlider.value = 5000000; if (budgetValue) budgetValue.textContent = formatRupiah(5000000); if (categorySelect) categorySelect.value = 'all'; if (sortSelect) sortSelect.value = 'default'; const searchInputs = [document.getElementById('searchInput'), document.getElementById('mobileSearchInput')]; searchInputs.forEach(inp => { if (inp) inp.value = ''; }); renderCatalogProducts(); if (filterOptions) filterOptions.classList.remove('show'); showToast('Filter telah direset', 'success'); });
    
    function performSearch() { const searchInput = document.getElementById('searchInput'); const mobileSearch = document.getElementById('mobileSearchInput'); const query = (searchInput?.value || mobileSearch?.value || '').trim(); state.searchQuery = query; if (state.currentPage !== 'catalog') navigateTo('catalog'); else renderCatalogProducts(); if (query) showToast(`Mencari: "${query}"`, 'info'); }
    document.getElementById('searchBtn')?.addEventListener('click', performSearch);
    document.getElementById('searchInput')?.addEventListener('keypress', (e) => { if (e.key === 'Enter') performSearch(); });
    document.getElementById('mobileSearchInput')?.addEventListener('keypress', (e) => { if (e.key === 'Enter') performSearch(); });
    
    document.getElementById('loadMoreBtn')?.addEventListener('click', () => { state.currentPageNum++; renderCatalogProducts(); });
    document.getElementById('contactForm')?.addEventListener('submit', (e) => { e.preventDefault(); showToast('✅ Pesan terkirim! Kami akan segera menghubungi Anda.', 'success'); e.target.reset(); });
    
    const modal = document.getElementById('productModal');
    const modalClose = document.getElementById('closeModalBtn');
    if (modalClose) modalClose.addEventListener('click', () => modal?.classList.remove('open'));
    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });
    
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => { if (backToTop) { if (window.scrollY > 300) backToTop.classList.add('show'); else backToTop.classList.remove('show'); } });
    if (backToTop) backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    
    window.addEventListener('hashchange', () => { const hash = window.location.hash.substring(1); if (['home', 'catalog', 'promo', 'inspiration', 'testimonial', 'contact'].includes(hash)) navigateTo(hash); });
}

// ========== PRELOADER ==========
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        gsap.to(preloader, { opacity: 0, duration: 0.5, onComplete: () => { preloader.style.display = 'none'; } });
    }
}
// ========== ACCOUNT SYSTEM (LENGKAP) ==========

// User data structure
let currentUser = null;

// Load user from localStorage
function loadUser() {
    const savedUser = localStorage.getItem('ruangestetika_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserUI();
    }
}

// Save user to localStorage
function saveUser() {
    if (currentUser) {
        localStorage.setItem('ruangestetika_user', JSON.stringify(currentUser));
    }
}

// Update UI based on login status
function updateUserUI() {
    const userIcon = document.getElementById('userIcon');
    const mobileAccount = document.getElementById('mobileAccount');
    
    if (currentUser) {
        if (userIcon) {
            userIcon.innerHTML = `<i class="fas fa-user-check"></i>`;
            userIcon.title = currentUser.name;
        }
        if (mobileAccount) {
            mobileAccount.innerHTML = `<i class="fas fa-user-check"></i> ${currentUser.name}`;
        }
    } else {
        if (userIcon) {
            userIcon.innerHTML = `<i class="far fa-user"></i>`;
            userIcon.title = 'Akun Saya';
        }
        if (mobileAccount) {
            mobileAccount.innerHTML = `<i class="far fa-user"></i> Akun Saya`;
        }
    }
}

// Show account modal (login/register)
function showAccountModal() {
    if (currentUser) {
        showDashboardModal();
    } else {
        const accountModal = document.getElementById('accountModal');
        if (accountModal) {
            accountModal.classList.add('open');
            gsap.fromTo(".account-modal", 
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(0.5)" }
            );
        }
    }
}

// Close account modal
function closeAccountModal() {
    const accountModal = document.getElementById('accountModal');
    if (accountModal) accountModal.classList.remove('open');
}

// Show dashboard modal
function showDashboardModal() {
    if (!currentUser) {
        showAccountModal();
        return;
    }
    
    // Update dashboard with user data
    document.getElementById('dashboardUserName').textContent = currentUser.name;
    document.getElementById('dashboardUserEmail').textContent = currentUser.email;
    document.getElementById('profileName').value = currentUser.name;
    document.getElementById('profileEmail').value = currentUser.email;
    document.getElementById('profilePhone').value = currentUser.phone || '';
    document.getElementById('profileBirthdate').value = currentUser.birthdate || '';
    
    // Load address
    if (currentUser.address) {
        document.getElementById('addressFull').value = currentUser.address.full || '';
        document.getElementById('addressCity').value = currentUser.address.city || '';
        document.getElementById('addressPostal').value = currentUser.address.postal || '';
        displaySavedAddress();
    }
    
    // Load orders
    renderDashboardOrders();
    
    // Load wishlist for dashboard
    renderDashboardWishlist();
    
    const dashboardModal = document.getElementById('dashboardModal');
    if (dashboardModal) {
        dashboardModal.classList.add('open');
        gsap.fromTo(".dashboard-modal", 
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(0.5)" }
        );
    }
}

// Close dashboard modal
function closeDashboardModal() {
    const dashboardModal = document.getElementById('dashboardModal');
    if (dashboardModal) dashboardModal.classList.remove('open');
}

// Display saved address
function displaySavedAddress() {
    const container = document.getElementById('savedAddress');
    if (container && currentUser?.address?.full) {
        container.innerHTML = `
            <h4>Alamat Tersimpan:</h4>
            <p>${currentUser.address.full}</p>
            <p>${currentUser.address.city}, ${currentUser.address.postal}</p>
        `;
    } else if (container) {
        container.innerHTML = '<p style="color: #999;">Belum ada alamat tersimpan</p>';
    }
}

// Render orders in dashboard
function renderDashboardOrders() {
    const container = document.getElementById('ordersList');
    if (!container) return;
    
    const orders = currentUser?.orders || [];
    
    if (orders.length === 0) {
        container.innerHTML = `
            <div class="empty-orders">
                <i class="fas fa-box-open"></i>
                <p>Belum ada pesanan</p>
                <button class="btn-outline" id="startShoppingBtn">Mulai Belanja</button>
            </div>
        `;
        const startBtn = document.getElementById('startShoppingBtn');
        if (startBtn) {
            startBtn.addEventListener('click', () => {
                closeDashboardModal();
                navigateTo('catalog');
            });
        }
        return;
    }
    
    container.innerHTML = orders.map(order => `
        <div class="order-card">
            <div class="order-header">
                <span class="order-id">#${order.id}</span>
                <span class="order-date">${order.date}</span>
                <span class="order-status status-${order.status}">${getStatusText(order.status)}</span>
            </div>
            <div class="order-items">
                ${order.items.map(item => `
                    <div class="order-item">
                        <span>${item.name} x${item.quantity}</span>
                        <span>${formatRupiah(item.price * item.quantity)}</span>
                    </div>
                `).join('')}
            </div>
            <div class="order-total">
                Total: ${formatRupiah(order.total)}
            </div>
        </div>
    `).join('');
}

function getStatusText(status) {
    const statusMap = {
        'delivered': 'Selesai',
        'processing': 'Diproses',
        'shipped': 'Dikirim'
    };
    return statusMap[status] || status;
}

// Render wishlist in dashboard
function renderDashboardWishlist() {
    const container = document.getElementById('dashboardWishlistList');
    if (!container) return;
    
    const wishlistProducts = state.products.filter(p => state.wishlist.includes(p.id));
    
    if (wishlistProducts.length === 0) {
        container.innerHTML = `
            <div class="empty-orders">
                <i class="far fa-heart"></i>
                <p>Belum ada produk di wishlist</p>
                <button class="btn-outline" id="dashboardWishlistShopBtn">Jelajahi Produk</button>
            </div>
        `;
        const shopBtn = document.getElementById('dashboardWishlistShopBtn');
        if (shopBtn) {
            shopBtn.addEventListener('click', () => {
                closeDashboardModal();
                navigateTo('catalog');
            });
        }
        return;
    }
    
    container.innerHTML = wishlistProducts.map(p => `
        <div class="wishlist-dashboard-item">
            <img src="${p.image}" alt="${p.name}">
            <div class="wishlist-dashboard-info">
                <div class="wishlist-dashboard-title">${p.name}</div>
                <div class="wishlist-dashboard-price">${formatRupiah(p.price)}</div>
                <div class="wishlist-dashboard-actions">
                    <button class="add-to-cart-wishlist-dash" data-id="${p.id}">🛒 Keranjang</button>
                    <button class="remove-wishlist-dash" data-id="${p.id}">🗑️ Hapus</button>
                </div>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.add-to-cart-wishlist-dash').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            addToCart(id);
        });
    });
    
    document.querySelectorAll('.remove-wishlist-dash').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            state.wishlist = state.wishlist.filter(wid => wid !== id);
            saveWishlist();
            renderDashboardWishlist();
            showToast('Produk dihapus dari wishlist', 'info');
        });
    });
}

// Login function
function login(email, password) {
    const users = JSON.parse(localStorage.getItem('ruangestetika_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = { ...user };
        delete currentUser.password;
        saveUser();
        updateUserUI();
        closeAccountModal();
        showToast(`Selamat datang kembali, ${user.name}!`, 'success');
        return true;
    } else {
        showToast('Email atau password salah!', 'error');
        return false;
    }
}

// Register function
function register(name, email, password, confirmPassword) {
    if (password !== confirmPassword) {
        showToast('Password tidak cocok!', 'error');
        return false;
    }
    
    if (password.length < 6) {
        showToast('Password minimal 6 karakter!', 'error');
        return false;
    }
    
    const users = JSON.parse(localStorage.getItem('ruangestetika_users') || '[]');
    
    if (users.find(u => u.email === email)) {
        showToast('Email sudah terdaftar!', 'error');
        return false;
    }
    
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password,
        phone: '',
        birthdate: '',
        address: null,
        orders: [],
        registeredAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('ruangestetika_users', JSON.stringify(users));
    
    currentUser = { ...newUser };
    delete currentUser.password;
    saveUser();
    updateUserUI();
    closeAccountModal();
    showToast(`Selamat datang, ${name}! Akun Anda berhasil dibuat.`, 'success');
    return true;
}

// Logout function
function logout() {
    currentUser = null;
    localStorage.removeItem('ruangestetika_user');
    updateUserUI();
    closeDashboardModal();
    showToast('Anda telah keluar dari akun.', 'info');
}

// Update profile
function updateProfile(name, phone, birthdate) {
    if (!currentUser) return;
    
    currentUser.name = name;
    currentUser.phone = phone;
    currentUser.birthdate = birthdate;
    
    // Update in users array
    const users = JSON.parse(localStorage.getItem('ruangestetika_users') || '[]');
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex].name = name;
        users[userIndex].phone = phone;
        users[userIndex].birthdate = birthdate;
        localStorage.setItem('ruangestetika_users', JSON.stringify(users));
    }
    
    saveUser();
    updateUserUI();
    document.getElementById('dashboardUserName').textContent = name;
    showToast('Profil berhasil diperbarui!', 'success');
}

// Update address
function updateAddress(full, city, postal) {
    if (!currentUser) return;
    
    currentUser.address = { full, city, postal };
    
    const users = JSON.parse(localStorage.getItem('ruangestetika_users') || '[]');
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex].address = { full, city, postal };
        localStorage.setItem('ruangestetika_users', JSON.stringify(users));
    }
    
    saveUser();
    displaySavedAddress();
    showToast('Alamat berhasil disimpan!', 'success');
}

// Add order (called when checkout)
function addOrder(items, total) {
    if (!currentUser) {
        showToast('Silakan login terlebih dahulu!', 'warning');
        showAccountModal();
        return false;
    }
    
    const newOrder = {
        id: 'ORD' + Date.now(),
        date: new Date().toLocaleDateString('id-ID'),
        items: items.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity
        })),
        total: total,
        status: 'processing'
    };
    
    if (!currentUser.orders) currentUser.orders = [];
    currentUser.orders.unshift(newOrder);
    
    // Update in users array
    const users = JSON.parse(localStorage.getItem('ruangestetika_users') || '[]');
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex].orders = currentUser.orders;
        localStorage.setItem('ruangestetika_users', JSON.stringify(users));
    }
    
    saveUser();
    return true;
}

// ========== ACCOUNT EVENT LISTENERS ==========
function setupAccountEventListeners() {
    // Account icon click
    const userIcon = document.getElementById('userIcon');
    const mobileAccount = document.getElementById('mobileAccount');
    
    if (userIcon) userIcon.addEventListener('click', showAccountModal);
    if (mobileAccount) mobileAccount.addEventListener('click', (e) => {
        e.preventDefault();
        showAccountModal();
    });
    
    // Close account modal
    const closeAccountModalBtn = document.getElementById('closeAccountModal');
    if (closeAccountModalBtn) closeAccountModalBtn.addEventListener('click', closeAccountModal);
    
    // Tab switching
    document.querySelectorAll('.account-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            document.querySelectorAll('.account-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            document.querySelectorAll('.account-form').forEach(form => form.classList.remove('active'));
            document.getElementById(`${tabName}Form`).classList.add('active');
        });
    });
    
    // Switch tab links
    document.querySelectorAll('.switch-tab').forEach(link => {
        link.addEventListener('click', () => {
            const tabName = link.dataset.tab;
            document.querySelectorAll('.account-tab').forEach(t => t.classList.remove('active'));
            document.querySelector(`.account-tab[data-tab="${tabName}"]`).classList.add('active');
            document.querySelectorAll('.account-form').forEach(form => form.classList.remove('active'));
            document.getElementById(`${tabName}Form`).classList.add('active');
        });
    });
    
    // Login button
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;
            if (email && password) {
                login(email, password);
            } else {
                showToast('Harap isi email dan password!', 'warning');
            }
        });
    }
    
    // Register button
    const registerBtn = document.getElementById('registerBtn');
    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            const name = document.getElementById('registerName').value.trim();
            const email = document.getElementById('registerEmail').value.trim();
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;
            
            if (name && email && password) {
                register(name, email, password, confirmPassword);
            } else {
                showToast('Harap isi semua field!', 'warning');
            }
        });
    }
    
    // Close dashboard modal
    const closeDashboardModalBtn = document.getElementById('closeDashboardModal');
    if (closeDashboardModalBtn) closeDashboardModalBtn.addEventListener('click', closeDashboardModal);
    
    // Dashboard navigation
    document.querySelectorAll('.dashboard-nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const section = item.dataset.dashboard;
            if (section === 'logout') return;
            
            document.querySelectorAll('.dashboard-nav-item').forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            document.querySelectorAll('.dashboard-section').forEach(sectionEl => sectionEl.classList.remove('active'));
            document.getElementById(`${section}Section`).classList.add('active');
        });
    });
    
    // Update profile
    const updateProfileBtn = document.getElementById('updateProfileBtn');
    if (updateProfileBtn) {
        updateProfileBtn.addEventListener('click', () => {
            const name = document.getElementById('profileName').value.trim();
            const phone = document.getElementById('profilePhone').value;
            const birthdate = document.getElementById('profileBirthdate').value;
            if (name) {
                updateProfile(name, phone, birthdate);
            } else {
                showToast('Nama tidak boleh kosong!', 'warning');
            }
        });
    }
    
    // Update address
    const updateAddressBtn = document.getElementById('updateAddressBtn');
    if (updateAddressBtn) {
        updateAddressBtn.addEventListener('click', () => {
            const full = document.getElementById('addressFull').value.trim();
            const city = document.getElementById('addressCity').value.trim();
            const postal = document.getElementById('addressPostal').value.trim();
            if (full && city) {
                updateAddress(full, city, postal);
            } else {
                showToast('Alamat lengkap dan kota harus diisi!', 'warning');
            }
        });
    }
    
    // Dashboard logout
    const dashboardLogout = document.getElementById('dashboardLogout');
    if (dashboardLogout) {
        dashboardLogout.addEventListener('click', () => {
            closeDashboardModal();
            logout();
        });
    }
    
    // Enter key on login/register
    document.getElementById('loginPassword')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') document.getElementById('loginBtn').click();
    });
    document.getElementById('registerConfirmPassword')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') document.getElementById('registerBtn').click();
    });
}

// Update checkout button to use account system
function setupCheckoutWithAccount() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        // Remove old listener and add new one
        const newCheckoutBtn = checkoutBtn.cloneNode(true);
        checkoutBtn.parentNode.replaceChild(newCheckoutBtn, checkoutBtn);
        newCheckoutBtn.addEventListener('click', () => {
            if (state.cart.length === 0) {
                showToast('Keranjang kosong!', 'warning');
                return;
            }
            
            if (!currentUser) {
                showToast('Silakan login terlebih dahulu untuk checkout!', 'warning');
                closeCartDrawer();
                showAccountModal();
                return;
            }
            
            if (addOrder(state.cart, getCartTotal())) {
                state.cart = [];
                saveCart();
                renderCartDrawer();
                closeCartDrawer();
                showToast('Pesanan berhasil dibuat! Cek dashboard untuk detail.', 'success');
                showDashboardModal();
            }
        });
    }
}

// Add to setupEventListeners call
const originalSetupEventListeners = setupEventListeners;
window.setupEventListeners = function() {
    originalSetupEventListeners();
    setupAccountEventListeners();
    setupCheckoutWithAccount();
};

// ========== INITIALIZATION ==========
function init() {
    loadCart();
    loadWishlist();  // Ini akan memuat wishlist dari localStorage
    loadUser();      // Load user data
    // Setelah user loaded, sinkronkan wishlist
    if (currentUser && currentUser.wishlist) {
        state.wishlist = currentUser.wishlist;
        updateWishlistUI();
    }
    renderCategories();
    renderBestSellers();
    renderPromoProducts();
    renderInspirationGrid();
    renderTestimonials();
    setupEventListeners();
    setupAccountEventListeners();
    setupCheckoutWithAccount();
    startCountdown();
    animateStats();
    initGSAPAnimations();
    hidePreloader();
    fixModalCloseButtons();
    fixExistingModals();
    addWishlistDashboardStyles();
    document.body.classList.add('loaded');
    
    const hash = window.location.hash.substring(1);
    if (['home', 'catalog', 'promo', 'inspiration', 'testimonial', 'contact'].includes(hash)) navigateTo(hash);
    else navigateTo('home');
    
    setTimeout(() => showToast('👋 Selamat datang di RuangEstetika!', 'info'), 1500);
}

// Start the app
init();