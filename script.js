/* ============================================
   RUANGESTETIKA - MAIN JAVASCRIPT (FIXED)
   Toast Notification Fixed | Semua Fitur Berfungsi
   Version: 3.1.0
   ============================================ */

'use strict';

// ========== DATA PRODUK (60+ Produk Lengkap) ==========
const productsData = [
    // Meja Collection (10 produk)
    { id: 1, name: "Meja Makan Ekstra Panjang", category: "Meja", price: 3250000, oldPrice: 4250000, rating: 4.9, reviews: 128, image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400", badge: "best", stock: 15, description: "Meja makan premium dari kayu jati solid dengan finishing natural. Cocok untuk keluarga besar dengan kapasitas 8-10 orang." },
    { id: 2, name: "Meja Kerja Minimalis", category: "Meja", price: 1890000, oldPrice: 2350000, rating: 4.8, reviews: 94, image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400", badge: null, stock: 23, description: "Meja kerja modern dengan desain minimalis, dilengkapi laci tersembunyi untuk penyimpanan." },
    { id: 3, name: "Meja Kopi Nordic", category: "Meja", price: 1250000, oldPrice: 1750000, rating: 4.7, reviews: 67, image: "https://images.unsplash.com/photo-1532372320978-9b4d4a3a2f5c?w=400", badge: "sale", stock: 8, description: "Meja kopi bergaya Skandinavia dengan kaki kayu solid dan permukaan marmer." },
    { id: 4, name: "Meja TV Modern", category: "Meja", price: 2150000, oldPrice: 2850000, rating: 4.6, reviews: 52, image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400", badge: null, stock: 31, description: "Meja TV dengan desain floating dan ruang penyimpanan yang luas." },
    { id: 5, name: "Meja Lipat Multifungsi", category: "Meja", price: 890000, oldPrice: 1250000, rating: 4.5, reviews: 203, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400", badge: "sale", stock: 45, description: "Meja lipat yang praktis, cocok untuk ruang terbatas." },
    { id: 6, name: "Meja Rias Elegan", category: "Meja", price: 2750000, oldPrice: 3450000, rating: 4.9, reviews: 88, image: "https://images.unsplash.com/photo-1513553404607-988bf2703777?w=400", badge: "best", stock: 12, description: "Meja rias dengan cermin besar dan laci-laci cantik." },
    { id: 7, name: "Meja Belajar Anak", category: "Meja", price: 750000, oldPrice: 1050000, rating: 4.7, reviews: 156, image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=400", badge: null, stock: 38, description: "Meja belajar ergonomis untuk anak dengan ketinggian adjustable." },
    { id: 8, name: "Meja Konsol Entryway", category: "Meja", price: 1650000, oldPrice: 2250000, rating: 4.6, reviews: 43, image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=400", badge: null, stock: 19, description: "Meja konsol elegan untuk area pintu masuk rumah." },
    { id: 9, name: "Meja Bar Tinggi", category: "Meja", price: 2450000, oldPrice: 3150000, rating: 4.8, reviews: 71, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400", badge: null, stock: 14, description: "Meja bar dengan desain industrial, cocok untuk kafe di rumah." },
    { id: 10, name: "Meja Kantor Eksekutif", category: "Meja", price: 4250000, oldPrice: 5850000, rating: 4.9, reviews: 62, image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=400", badge: "best", stock: 7, description: "Meja kantor mewah dengan material premium dan desain ergonomis." },
    
    // Kursi Collection (10 produk)
    { id: 11, name: "Kursi Makan Kayu Jati", category: "Kursi", price: 850000, oldPrice: 1150000, rating: 4.8, reviews: 112, image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400", badge: null, stock: 42, description: "Kursi makan dengan desain klasik dan kenyamanan maksimal." },
    { id: 12, name: "Kursi Santai Rotan", category: "Kursi", price: 990000, oldPrice: 1350000, rating: 4.7, reviews: 89, image: "https://images.unsplash.com/photo-1532372320978-9b4d4a3a2f5c?w=400", badge: "sale", stock: 27, description: "Kursi rotan alami yang nyaman untuk bersantai." },
    { id: 13, name: "Kursi Kantor Ergonomis", category: "Kursi", price: 1750000, oldPrice: 2450000, rating: 4.9, reviews: 234, image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400", badge: "best", stock: 18, description: "Kursi kantor dengan dukungan lumbar dan adjustable height." },
    { id: 14, name: "Kursi Gantung Ayunan", category: "Kursi", price: 1290000, oldPrice: 1890000, rating: 4.6, reviews: 67, image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400", badge: null, stock: 9, description: "Kursi gantung unik untuk relaksasi di teras atau taman." },
    { id: 15, name: "Kursi Lipat Portable", category: "Kursi", price: 450000, oldPrice: 650000, rating: 4.5, reviews: 312, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400", badge: "sale", stock: 78, description: "Kursi lipat praktis untuk acara outdoor." },
    { id: 16, name: "Kursi Bar Tinggi", category: "Kursi", price: 750000, oldPrice: 1050000, rating: 4.7, reviews: 54, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400", badge: null, stock: 34, description: "Kursi bar dengan desain modern dan footrest." },
    { id: 17, name: "Kursi Tamu Mewah", category: "Kursi", price: 1950000, oldPrice: 2650000, rating: 4.8, reviews: 76, image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400", badge: null, stock: 11, description: "Kursi tamu dengan velvet premium dan bingkai kayu solid." },
    { id: 18, name: "Kursi Belajar Anak", category: "Kursi", price: 550000, oldPrice: 850000, rating: 4.6, reviews: 145, image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=400", badge: null, stock: 56, description: "Kursi belajar ergonomis untuk postur tubuh anak." },
    { id: 19, name: "Kursi Teras Minimalis", category: "Kursi", price: 650000, oldPrice: 950000, rating: 4.5, reviews: 98, image: "https://images.unsplash.com/photo-1532372320978-9b4d4a3a2f5c?w=400", badge: null, stock: 43, description: "Kursi teras tahan cuaca dengan desain minimalis." },
    { id: 20, name: "Kursi Gaming Premium", category: "Kursi", price: 2850000, oldPrice: 3850000, rating: 4.9, reviews: 167, image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400", badge: "best", stock: 22, description: "Kursi gaming dengan fitur recline dan headrest." },
    
    // Sofa Collection (10 produk)
    { id: 21, name: "Sofa L-Shape Mewah", category: "Sofa", price: 4250000, oldPrice: 5850000, rating: 4.9, reviews: 143, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400", badge: "best", stock: 8, description: "Sofa L-Shape dengan fabric premium dan ottoman." },
    { id: 22, name: "Sofa Minimalis Modern", category: "Sofa", price: 2850000, oldPrice: 3650000, rating: 4.8, reviews: 112, image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=400", badge: null, stock: 15, description: "Sofa minimalis dengan desain clean dan kaki kayu." },
    { id: 23, name: "Sofa Bed Folding", category: "Sofa", price: 3250000, oldPrice: 4450000, rating: 4.7, reviews: 98, image: "https://images.unsplash.com/photo-1551298370-9d3d53740c6c?w=400", badge: "sale", stock: 12, description: "Sofa 2-in-1 yang bisa diubah menjadi tempat tidur." },
    { id: 24, name: "Sofa Kulit Asli", category: "Sofa", price: 5850000, oldPrice: 7850000, rating: 5.0, reviews: 67, image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400", badge: "best", stock: 5, description: "Sofa kulit asli Italia dengan kualitas premium." },
    { id: 25, name: "Sofa Single Armchair", category: "Sofa", price: 1850000, oldPrice: 2450000, rating: 4.6, reviews: 87, image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400", badge: null, stock: 23, description: "Armchair elegan untuk sudut baca favorit Anda." },
    { id: 26, name: "Sofa Modular", category: "Sofa", price: 4850000, oldPrice: 6450000, rating: 4.9, reviews: 54, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400", badge: null, stock: 6, description: "Sofa modular yang bisa disusun sesuai keinginan." },
    { id: 27, name: "Sofa Klasik Eropa", category: "Sofa", price: 7250000, oldPrice: 9850000, rating: 4.9, reviews: 43, image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400", badge: "best", stock: 3, description: "Sofa bergaya Eropa klasik dengan detail carving." },
    { id: 28, name: "Sofa Daybed", category: "Sofa", price: 3650000, oldPrice: 4850000, rating: 4.7, reviews: 76, image: "https://images.unsplash.com/photo-1551298370-9d3d53740c6c?w=400", badge: null, stock: 9, description: "Sofa daybed multifungsi untuk bersantai." },
    { id: 29, name: "Sofa Teras Rotan", category: "Sofa", price: 2450000, oldPrice: 3250000, rating: 4.6, reviews: 92, image: "https://images.unsplash.com/photo-1532372320978-9b4d4a3a2f5c?w=400", badge: "sale", stock: 17, description: "Sofa rotan alami tahan cuaca untuk outdoor." },
    { id: 30, name: "Sofa Minimalis Kecil", category: "Sofa", price: 2150000, oldPrice: 2850000, rating: 4.8, reviews: 134, image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=400", badge: null, stock: 28, description: "Sofa 2-seater untuk apartemen dan ruang kecil." },
    
    // Kasur Collection (8 produk)
    { id: 31, name: "Kasur Spring Bed Premium", category: "Kasur", price: 2850000, oldPrice: 3850000, rating: 4.9, reviews: 234, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400", badge: "best", stock: 45, description: "Kasur dengan pocket spring dan latex untuk kenyamanan maksimal." },
    { id: 32, name: "Kasur Busa Inoac", category: "Kasur", price: 1750000, oldPrice: 2350000, rating: 4.7, reviews: 312, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400", badge: "sale", stock: 67, description: "Kasur busa berkualitas tinggi dengan density optimal." },
    { id: 33, name: "Kasur Lipat Portable", category: "Kasur", price: 850000, oldPrice: 1250000, rating: 4.5, reviews: 189, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400", badge: null, stock: 34, description: "Kasur lipat praktis untuk tamu." },
    { id: 34, name: "Kasur Mewah Orthopedic", category: "Kasur", price: 4850000, oldPrice: 6850000, rating: 5.0, reviews: 98, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400", badge: "best", stock: 12, description: "Kasur orthopedic dengan teknologi memory foam." },
    { id: 35, name: "Kasur Bayi Anti Alergi", category: "Kasur", price: 650000, oldPrice: 950000, rating: 4.8, reviews: 156, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400", badge: null, stock: 43, description: "Kasur bayi dengan bahan anti alergi dan bakteri." },
    { id: 36, name: "Kasur Latex Alami", category: "Kasur", price: 3850000, oldPrice: 5250000, rating: 4.9, reviews: 87, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400", badge: "best", stock: 8, description: "Kasur latex alami dengan ventilasi udara optimal." },
    { id: 37, name: "Kasur Queen Size", category: "Kasur", price: 3250000, oldPrice: 4450000, rating: 4.8, reviews: 145, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400", badge: null, stock: 23, description: "Kasur ukuran queen dengan kenyamanan ekstra." },
    { id: 38, name: "Kasur King Size Mewah", category: "Kasur", price: 5250000, oldPrice: 7250000, rating: 4.9, reviews: 76, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400", badge: "best", stock: 5, description: "Kasur king size premium untuk kenyamanan maksimal." },
    
    // Lampu Collection (8 produk)
    { id: 39, name: "Lampu Gantung Crystal", category: "Lampu", price: 1250000, oldPrice: 1850000, rating: 4.8, reviews: 89, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400", badge: "sale", stock: 15, description: "Lampu gantung mewah dengan kristal berkualitas." },
    { id: 40, name: "Lampu Meja Minimalis", category: "Lampu", price: 450000, oldPrice: 650000, rating: 4.6, reviews: 134, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400", badge: null, stock: 34, description: "Lampu meja dengan desain minimalis dan cahaya hangat." },
    { id: 41, name: "Lampu Dinding Nordic", category: "Lampu", price: 650000, oldPrice: 950000, rating: 4.7, reviews: 78, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400", badge: null, stock: 27, description: "Lampu dinding bergaya Skandinavia." },
    { id: 42, name: "Lampu Hias Kayu", category: "Lampu", price: 350000, oldPrice: 550000, rating: 4.5, reviews: 112, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400", badge: null, stock: 43, description: "Lampu hias dari kayu solid dengan ukiran artistik." },
    { id: 43, name: "Lampu Lantai Modern", category: "Lampu", price: 950000, oldPrice: 1350000, rating: 4.8, reviews: 67, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400", badge: null, stock: 18, description: "Lampu lantai dengan adjustable height dan dimmer." },
    { id: 44, name: "Lampu Taman Solar", category: "Lampu", price: 250000, oldPrice: 450000, rating: 4.4, reviews: 234, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400", badge: "sale", stock: 56, description: "Lampu taman dengan panel solar cell." },
    { id: 45, name: "Lampu Tidur Smart", category: "Lampu", price: 550000, oldPrice: 850000, rating: 4.7, reviews: 98, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400", badge: null, stock: 22, description: "Lampu tidur dengan kontrol remote dan 7 warna." },
    { id: 46, name: "String Lights", category: "Lampu", price: 150000, oldPrice: 250000, rating: 4.6, reviews: 345, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400", badge: null, stock: 89, description: "Lampu hias untuk dekorasi ruangan." },
    
    // Dekorasi Collection (14 produk)
    { id: 47, name: "Vas Bunga Keramik", category: "Dekorasi", price: 275000, oldPrice: 425000, rating: 4.7, reviews: 89, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400", badge: null, stock: 34, description: "Vas keramik handmade dengan glasir premium." },
    { id: 48, name: "Lukisan Dinding Abstrak", category: "Dekorasi", price: 850000, oldPrice: 1250000, rating: 4.8, reviews: 67, image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400", badge: null, stock: 12, description: "Lukisan kanvas abstrak ukuran besar." },
    { id: 49, name: "Jam Dinding Kayu", category: "Dekorasi", price: 350000, oldPrice: 550000, rating: 4.6, reviews: 134, image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400", badge: null, stock: 28, description: "Jam dinding dari kayu solid dengan desain unik." },
    { id: 50, name: "Karpet Bulu Premium", category: "Dekorasi", price: 1250000, oldPrice: 1850000, rating: 4.9, reviews: 98, image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400", badge: "best", stock: 9, description: "Karpet bulu dengan ketebalan premium." },
    { id: 51, name: "Hiasan Dinding Macrame", category: "Dekorasi", price: 185000, oldPrice: 285000, rating: 4.5, reviews: 234, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400", badge: "sale", stock: 45, description: "Hiasan dinding macrame buatan tangan." },
    { id: 52, name: "Set Peralatan Makan", category: "Dekorasi", price: 450000, oldPrice: 650000, rating: 4.7, reviews: 156, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400", badge: null, stock: 32, description: "Set peralatan makan keramik premium." },
    { id: 53, name: "Tatakan Buku", category: "Dekorasi", price: 150000, oldPrice: 250000, rating: 4.5, reviews: 189, image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400", badge: null, stock: 67, description: "Tatakan buku dari kayu dengan desain geometris." },
    { id: 54, name: "Patung Hias Modern", category: "Dekorasi", price: 550000, oldPrice: 850000, rating: 4.6, reviews: 78, image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400", badge: null, stock: 14, description: "Patung abstrak dari resin berkualitas." },
    { id: 55, name: "Tirai Gorden Premium", category: "Dekorasi", price: 750000, oldPrice: 1150000, rating: 4.7, reviews: 112, image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400", badge: null, stock: 23, description: "Gorden blackout dengan bahan premium." },
    { id: 56, name: "Bantal Sofa Set", category: "Dekorasi", price: 250000, oldPrice: 450000, rating: 4.8, reviews: 234, image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400", badge: null, stock: 56, description: "Set 4 bantal sofa dengan berbagai motif." },
    { id: 57, name: "Tempat Lilin", category: "Dekorasi", price: 95000, oldPrice: 150000, rating: 4.5, reviews: 345, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400", badge: "sale", stock: 78, description: "Tempat lilin minimalis untuk aromaterapi." },
    { id: 58, name: "Rak Dinding Floating", category: "Dekorasi", price: 350000, oldPrice: 550000, rating: 4.7, reviews: 134, image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400", badge: null, stock: 34, description: "Rak dinding minimalis untuk pajangan." },
    { id: 59, name: "Mirror Decorative", category: "Dekorasi", price: 650000, oldPrice: 950000, rating: 4.8, reviews: 89, image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400", badge: null, stock: 11, description: "Cermin dekoratif dengan bingkai kayu." },
    { id: 60, name: "Tatakan Pot Bunga", category: "Dekorasi", price: 125000, oldPrice: 225000, rating: 4.4, reviews: 278, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400", badge: null, stock: 67, description: "Tatakan pot bunga dari rotan alami." }
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
    itemsPerPage: 12
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

// ========== TOAST NOTIFICATION FIXED ==========
let toastTimeout = null;

function showToast(message, type = 'info') {
    // Hapus toast yang sudah ada
    const existingToast = document.querySelector('.custom-toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Buat elemen toast baru
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    
    // Set icon berdasarkan type
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '❌';
    if (type === 'warning') icon = '⚠️';
    if (type === 'info') icon = '💡';
    
    toast.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.2rem;">${icon}</span>
            <span>${message}</span>
        </div>
        <div class="toast-progress"></div>
    `;
    
    document.body.appendChild(toast);
    
    // Trigger reflow untuk animasi
    toast.offsetHeight;
    toast.classList.add('show');
    
    // Clear timeout sebelumnya
    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }
    
    // Hilangkan toast setelah 3 detik
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) toast.remove();
        }, 300);
    }, 3000);
}

// ========== CART FUNCTIONS ==========
function loadCart() {
    const saved = localStorage.getItem('ruangestetika_cart');
    if (saved) {
        state.cart = JSON.parse(saved);
    }
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
        state.cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
        showToast(`${product.name} ditambahkan ke keranjang`, 'success');
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
        if (newQty <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQty;
            saveCart();
            renderCartDrawer();
        }
    }
}

function getCartTotal() {
    return state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function updateCartUI() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    
    document.querySelectorAll('#cartCount, #bottomCartCount, #mobileCartCount').forEach(el => {
        if (el) el.textContent = totalItems;
    });
}

// ========== WISHLIST FUNCTIONS ==========
function loadWishlist() {
    const saved = localStorage.getItem('ruangestetika_wishlist');
    if (saved) {
        state.wishlist = JSON.parse(saved);
    }
    updateWishlistUI();
}

function saveWishlist() {
    localStorage.setItem('ruangestetika_wishlist', JSON.stringify(state.wishlist));
    updateWishlistUI();
}

function toggleWishlist(productId) {
    if (state.wishlist.includes(productId)) {
        state.wishlist = state.wishlist.filter(id => id !== productId);
        showToast('Dihapus dari wishlist', 'info');
    } else {
        state.wishlist.push(productId);
        showToast('Ditambahkan ke wishlist', 'success');
    }
    saveWishlist();
    renderCurrentPage();
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

// ========== FILTER & SORT FUNCTIONS ==========
function getFilteredProducts() {
    let filtered = [...state.products];
    
    filtered = filtered.filter(p => p.price <= state.currentBudget);
    
    if (state.currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === state.currentCategory);
    }
    
    if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.category.toLowerCase().includes(query)
        );
    }
    
    switch(state.sortBy) {
        case 'price-asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        default:
            filtered.sort((a, b) => a.id - b.id);
    }
    
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

function createProductCard(product) {
    const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;
    
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                ${product.badge ? `<div class="product-badge">${product.badge === 'best' ? '⭐ Best Seller' : '🔥 Sale'}</div>` : ''}
                ${discount > 0 ? `<div class="product-badge" style="top: 50px; background: #EF4444;">-${discount}%</div>` : ''}
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

function renderBestSellers() {
    const bestSellers = state.products.filter(p => p.badge === 'best').slice(0, 6);
    const container = document.getElementById('bestSellerGrid');
    if (container) {
        container.innerHTML = bestSellers.map(p => createProductCard(p)).join('');
        attachProductEvents();
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
            container.innerHTML = `<div style="text-align: center; padding: 60px;"><i class="fas fa-search" style="font-size: 3rem; color: #ccc;"></i><p style="margin-top: 16px;">Tidak ada produk ditemukan</p></div>`;
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        } else {
            container.innerHTML = paginated.map(p => createProductCard(p)).join('');
            if (loadMoreBtn) {
                loadMoreBtn.style.display = filtered.length > state.currentPageNum * state.itemsPerPage ? 'block' : 'none';
            }
        }
        attachProductEvents();
    }
    
    if (resultsCount) {
        resultsCount.textContent = `Menampilkan ${filtered.length} produk dari ${state.products.length}`;
    }
}

function renderPromoProducts() {
    const promoProducts = state.products.filter(p => p.oldPrice).slice(0, 8);
    const container = document.getElementById('promoGrid');
    if (container) {
        container.innerHTML = promoProducts.map(p => createProductCard(p)).join('');
        attachProductEvents();
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
    }
}

function renderTestimonials() {
    const testimonials = [
        { name: "Siti Rahma", location: "Jakarta", rating: 5, text: "Pelayanan sangat baik, produk berkualitas. Meja yang saya beli sangat kokoh dan sesuai dengan gambar. Pengiriman cepat dan packing aman. Terima kasih RuangEstetika!" },
        { name: "Budi Santoso", location: "Surabaya", rating: 5, text: "Sofa nya sangat nyaman, cocok untuk keluarga. Desainnya modern dan materialnya premium. Recommended banget!" },
        { name: "Dewi Lestari", location: "Bandung", rating: 4, text: "Kursi rotan kualitas bagus, pengiriman tepat waktu. Harganya worth it dengan kualitas yang didapat." },
        { name: "Ahmad Fauzi", location: "Yogyakarta", rating: 5, text: "Lampu gantungnya cantik banget! Bikin ruangan jadi lebih elegan. Terima kasih!" }
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
    }
}

function renderCartDrawer() {
    const container = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    
    if (!container) return;
    
    if (state.cart.length === 0) {
        container.innerHTML = `<div style="text-align: center; padding: 40px;"><i class="fas fa-shopping-cart" style="font-size: 3rem; color: #ccc;"></i><p style="margin-top: 16px;">Keranjang kosong</p><button class="btn-outline" id="continueShoppingBtn" style="margin-top: 16px;">Mulai Belanja</button></div>`;
        const continueBtn = document.getElementById('continueShoppingBtn');
        if (continueBtn) {
            continueBtn.addEventListener('click', () => {
                document.getElementById('cartOverlay')?.classList.remove('open');
                navigateTo('catalog');
            });
        }
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
                    <button class="remove-item" data-id="${item.id}" style="margin-left: 10px; background: none; border: none; color: #999; cursor: pointer;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div style="font-weight: 600;">${formatRupiah(item.price * item.quantity)}</div>
        </div>
    `).join('');
    
    if (totalEl) totalEl.textContent = formatRupiah(getCartTotal());
    
    document.querySelectorAll('.qty-decr').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const item = state.cart.find(i => i.id === id);
            if (item) updateQuantity(id, item.quantity - 1);
        });
    });
    
    document.querySelectorAll('.qty-incr').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const item = state.cart.find(i => i.id === id);
            if (item) updateQuantity(id, item.quantity + 1);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            removeFromCart(id);
        });
    });
}

function attachProductEvents() {
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.removeEventListener('click', handleAddToCart);
        btn.addEventListener('click', handleAddToCart);
    });
    
    document.querySelectorAll('.product-card').forEach(card => {
        card.removeEventListener('click', handleProductClick);
        card.addEventListener('click', handleProductClick);
    });
}

function handleAddToCart(e) {
    e.stopPropagation();
    const id = parseInt(e.currentTarget.dataset.id);
    addToCart(id);
}

function handleProductClick(e) {
    if (e.target.classList.contains('add-to-cart')) return;
    const id = parseInt(e.currentTarget.dataset.id);
    showProductModal(id);
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
                ${product.stock > 0 ? `Stok tersedia (${product.stock} unit)` : 'Stok habus'}
            </div>
            <button class="btn-primary" id="modalAddToCart" style="width: 100%;">Tambah ke Keranjang</button>
        </div>
    `;
    
    modal.classList.add('open');
    
    document.getElementById('modalAddToCart')?.addEventListener('click', () => {
        addToCart(product.id);
        modal.classList.remove('open');
    });
}

function renderCurrentPage() {
    if (state.currentPage === 'home') {
        renderBestSellers();
    } else if (state.currentPage === 'catalog') {
        renderCatalogProducts();
    } else if (state.currentPage === 'promo') {
        renderPromoProducts();
    } else if (state.currentPage === 'inspiration') {
        renderInspirationGrid();
    } else if (state.currentPage === 'testimonial') {
        renderTestimonials();
    }
}

// ========== NAVIGATION FUNGSI UTAMA ==========
function navigateTo(page) {
    state.currentPage = page;
    state.currentPageNum = 1;
    
    // Update semua halaman
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active-page');
    });
    
    const targetPage = document.getElementById(`${page}Page`);
    if (targetPage) {
        targetPage.classList.add('active-page');
    }
    
    // Update semua navigasi links (Desktop, Mobile, Bottom)
    const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, .bottom-nav-item');
    allNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) {
            link.classList.add('active');
        }
    });
    
    // Update breadcrumb
    const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
    if (breadcrumbCurrent) {
        const pageNames = {
            home: 'Beranda',
            catalog: 'Katalog',
            promo: 'Promo',
            inspiration: 'Inspirasi',
            testimonial: 'Testimoni',
            contact: 'Kontak'
        };
        breadcrumbCurrent.textContent = pageNames[page] || page;
    }
    
    // Update URL hash tanpa reload
    window.location.hash = page;
    
    // Render konten halaman
    renderCurrentPage();
    
    // Tutup mobile menu jika terbuka
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.remove('active');
    }
    
    // Scroll ke atas
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
        
        if (diff <= 0) {
            const countdownEl = document.getElementById('countdown');
            if (countdownEl) countdownEl.innerHTML = '<div>Promo Berakhir!</div>';
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (86400000)) / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        
        const countdownEl = document.getElementById('countdown');
        if (countdownEl) {
            countdownEl.innerHTML = `
                <div><span>${String(days).padStart(2, '0')}</span><small>Hari</small></div>
                <div><span>${String(hours).padStart(2, '0')}</span><small>Jam</small></div>
                <div><span>${String(minutes).padStart(2, '0')}</span><small>Menit</small></div>
                <div><span>${String(seconds).padStart(2, '0')}</span><small>Detik</small></div>
            `;
        }
    }
    
    update();
    setInterval(update, 1000);
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
    // Navigasi Desktop & Mobile & Bottom
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            if (page) navigateTo(page);
        });
    });
    
    // Logo home
    const logoHome = document.getElementById('logoHome');
    if (logoHome) {
        logoHome.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('home');
        });
    }
    
    // Hero buttons
    const shopNowBtn = document.getElementById('shopNowBtn');
    const exploreBtn = document.getElementById('exploreBtn');
    
    if (shopNowBtn) shopNowBtn.addEventListener('click', () => navigateTo('catalog'));
    if (exploreBtn) exploreBtn.addEventListener('click', () => navigateTo('catalog'));
    
    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('active'));
    }
    if (closeMenuBtn && mobileMenu) {
        closeMenuBtn.addEventListener('click', () => mobileMenu.classList.remove('active'));
    }
    
    // Cart drawer
    const cartIcon = document.getElementById('cartIcon');
    const bottomCartBtn = document.getElementById('bottomCartBtn');
    const mobileCart = document.getElementById('mobileCart');
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    function openCart() { cartOverlay?.classList.add('open'); }
    function closeCart() { cartOverlay?.classList.remove('open'); }
    
    if (cartIcon) cartIcon.addEventListener('click', openCart);
    if (bottomCartBtn) bottomCartBtn.addEventListener('click', openCart);
    if (mobileCart) mobileCart.addEventListener('click', (e) => { e.preventDefault(); openCart(); });
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', (e) => { if (e.target === cartOverlay) closeCart(); });
    if (checkoutBtn) checkoutBtn.addEventListener('click', () => { showToast('Fitur checkout akan segera hadir!', 'info'); });
    
    // Wishlist
    const wishlistIcon = document.getElementById('wishlistIcon');
    const bottomWishlist = document.getElementById('bottomWishlist');
    const mobileWishlist = document.getElementById('mobileWishlist');
    
    function showWishlistModal() {
        const wishlistModal = document.getElementById('wishlistModal');
        const wishlistBody = document.getElementById('wishlistBody');
        if (!wishlistModal || !wishlistBody) return;
        
        if (state.wishlist.length === 0) {
            wishlistBody.innerHTML = '<div style="text-align: center; padding: 40px;"><i class="far fa-heart" style="font-size: 3rem; color: #ccc;"></i><p style="margin-top: 16px;">Belum ada produk di wishlist</p></div>';
        } else {
            const wishlistProducts = state.products.filter(p => state.wishlist.includes(p.id));
            wishlistBody.innerHTML = wishlistProducts.map(p => `
                <div style="display: flex; gap: 12px; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee;">
                    <img src="${p.image}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
                    <div style="flex: 1;">
                        <div style="font-weight: 600;">${p.name}</div>
                        <div style="color: var(--warm-walnut);">${formatRupiah(p.price)}</div>
                        <button class="remove-wishlist" data-id="${p.id}" style="background: none; border: none; color: #999; cursor: pointer; font-size: 0.7rem;">Hapus</button>
                    </div>
                </div>
            `).join('');
            
            document.querySelectorAll('.remove-wishlist').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = parseInt(btn.dataset.id);
                    state.wishlist = state.wishlist.filter(wid => wid !== id);
                    saveWishlist();
                    showWishlistModal();
                });
            });
        }
        
        wishlistModal.classList.add('open');
        const closeWishlist = document.getElementById('closeWishlistModal');
        if (closeWishlist) {
            closeWishlist.onclick = () => wishlistModal.classList.remove('open');
        }
        wishlistModal.onclick = (e) => { if (e.target === wishlistModal) wishlistModal.classList.remove('open'); };
    }
    
    if (wishlistIcon) wishlistIcon.addEventListener('click', showWishlistModal);
    if (bottomWishlist) bottomWishlist.addEventListener('click', (e) => { e.preventDefault(); showWishlistModal(); });
    if (mobileWishlist) mobileWishlist.addEventListener('click', (e) => { e.preventDefault(); showWishlistModal(); });
    
    // User account (demo) - dengan popup notifikasi
    const userIcon = document.getElementById('userIcon');
    const mobileAccount = document.getElementById('mobileAccount');
    
    if (userIcon) {
        userIcon.addEventListener('click', () => showToast('✨ Fitur Akun akan segera hadir! Stay tuned! ✨', 'info'));
    }
    if (mobileAccount) {
        mobileAccount.addEventListener('click', (e) => { 
            e.preventDefault(); 
            showToast('✨ Fitur Akun akan segera hadir! Stay tuned! ✨', 'info');
        });
    }
    
    // Filter toggle (mobile)
    const filterToggle = document.getElementById('filterToggle');
    const filterOptions = document.getElementById('filterOptions');
    if (filterToggle && filterOptions) {
        filterToggle.addEventListener('click', () => filterOptions.classList.toggle('show'));
    }
    
    // Budget filter
    const budgetSlider = document.getElementById('budgetSlider');
    const budgetValue = document.getElementById('budgetValue');
    if (budgetSlider && budgetValue) {
        budgetSlider.addEventListener('input', (e) => {
            state.currentBudget = parseInt(e.target.value);
            budgetValue.textContent = formatRupiah(state.currentBudget);
            renderCatalogProducts();
        });
    }
    
    // Category filter
    const categorySelect = document.getElementById('categorySelect');
    if (categorySelect) {
        categorySelect.addEventListener('change', (e) => {
            state.currentCategory = e.target.value;
            renderCatalogProducts();
        });
    }
    
    // Sort filter
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            state.sortBy = e.target.value;
            renderCatalogProducts();
        });
    }
    
    // Reset filter
    const resetFilter = document.getElementById('resetFilter');
    if (resetFilter) {
        resetFilter.addEventListener('click', () => {
            state.currentBudget = 5000000;
            state.currentCategory = 'all';
            state.sortBy = 'default';
            state.searchQuery = '';
            
            if (budgetSlider) budgetSlider.value = 5000000;
            if (budgetValue) budgetValue.textContent = formatRupiah(5000000);
            if (categorySelect) categorySelect.value = 'all';
            if (sortSelect) sortSelect.value = 'default';
            
            const searchInputs = [document.getElementById('searchInput'), document.getElementById('mobileSearchInput')];
            searchInputs.forEach(inp => { if (inp) inp.value = ''; });
            
            renderCatalogProducts();
            if (filterOptions) filterOptions.classList.remove('show');
            showToast('Filter telah direset', 'success');
        });
    }
    
    // Search functionality
    function performSearch() {
        const searchInput = document.getElementById('searchInput');
        const mobileSearch = document.getElementById('mobileSearchInput');
        const query = (searchInput?.value || mobileSearch?.value || '').trim();
        state.searchQuery = query;
        if (state.currentPage !== 'catalog') {
            navigateTo('catalog');
        } else {
            renderCatalogProducts();
        }
        if (query) showToast(`Mencari: "${query}"`, 'info');
    }
    
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) searchBtn.addEventListener('click', performSearch);
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') performSearch(); });
    
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    if (mobileSearchInput) mobileSearchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') performSearch(); });
    
    // Load more
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            state.currentPageNum++;
            renderCatalogProducts();
        });
    }
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('✅ Pesan terkirim! Kami akan segera menghubungi Anda.', 'success');
            contactForm.reset();
        });
    }
    
    // Modal close
    const modal = document.getElementById('productModal');
    const modalClose = document.getElementById('closeModalBtn');
    if (modalClose) modalClose.addEventListener('click', () => modal?.classList.remove('open'));
    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });
    
    // Back to top
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        }
    });
    if (backToTop) backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    
    // Handle hash change for direct navigation
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.substring(1);
        if (['home', 'catalog', 'promo', 'inspiration', 'testimonial', 'contact'].includes(hash)) {
            navigateTo(hash);
        }
    });
}

// ========== PRELOADER ==========
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hide');
            setTimeout(() => { preloader.style.display = 'none'; }, 500);
        }, 800);
    }
}

// ========== INITIALIZATION ==========
function init() {
    loadCart();
    loadWishlist();
    renderCategories();
    renderBestSellers();
    renderPromoProducts();
    renderInspirationGrid();
    renderTestimonials();
    setupEventListeners();
    startCountdown();
    hidePreloader();
    document.body.classList.add('loaded');
    
    // Check hash on load
    const hash = window.location.hash.substring(1);
    if (['home', 'catalog', 'promo', 'inspiration', 'testimonial', 'contact'].includes(hash)) {
        navigateTo(hash);
    }
    
    // Tampilkan selamat datang
    setTimeout(() => {
        showToast('👋 Selamat datang di RuangEstetika!', 'info');
    }, 1500);
}

// Start the app
init();