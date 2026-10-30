# 💼 Portofolio Modern - Rivaldi Hidayatullah

Website portofolio **modern, responsif, dan elegan** dengan desain terkini. Dibangun dengan teknologi web terbaru untuk pengalaman pengguna yang optimal.

**🌐 Live Demo:** [https://codejaya.github.io/portofolio-utama/](https://codejaya.github.io/portofolio-utama/)

---

## ✨ Fitur Unggulan

### 🎨 Desain Modern
- **Gradient Design** - Perpaduan warna indigo-purple yang elegan
- **Glassmorphism Effects** - Efek blur dan transparansi yang smooth
- **Smooth Animations** - Animasi fade-in, slide-up, dan float
- **Hover Interactions** - Efek hover yang menarik di setiap elemen
- **Custom Scrollbar** - Scrollbar dengan gradient yang unik

### 📱 Responsif Sempurna
- **Mobile-First Design** - Dioptimalkan untuk semua ukuran layar
- **Touch-Friendly** - Navigasi mudah di perangkat sentuh
- **Adaptive Layout** - Layout yang menyesuaikan secara otomatis

### 🌍 Multi-Bahasa
- **Indonesia & English** - Switch bahasa dengan satu klik
- **Persistent Preference** - Pilihan bahasa tersimpan di browser
- **SEO Friendly** - Tag HTML lang berubah sesuai bahasa

### 🚀 Performa Tinggi
- **Lazy Loading** - Gambar dimuat secara optimal
- **Preloaded Resources** - Resource penting dimuat lebih dulu
- **Minimized Animations** - Animasi yang tidak membebani performa

### 🔍 SEO Optimized
- **Meta Tags Lengkap** - Description, keywords, Open Graph
- **Social Media Ready** - Preview menarik saat share di sosmed
- **Semantic HTML** - Struktur HTML yang meaningful

### ♿ Aksesibilitas
- **ARIA Labels** - Label untuk screen readers
- **Keyboard Navigation** - Navigasi dengan keyboard
- **Focus States** - Indikator focus yang jelas

### 📧 Contact Form dengan EmailJS
- **Form Kontak Langsung** - Pengunjung bisa kirim pesan tanpa buka email
- **EmailJS Integration** - Kirim email tanpa backend server
- **Form Validation** - Validasi client-side untuk UX yang lebih baik
- **Success/Error Messages** - Feedback visual untuk setiap aksi
- **Loading States** - Indikator saat email sedang dikirim
- **GitHub Pages Compatible** - Bekerja sempurna di GitHub Pages tanpa server

---

## 🎯 Bagian Website

| Section | Deskripsi |
|---------|-----------|
| **Hero** | Perkenalan dengan foto profil dan CTA buttons |
| **Experience** | Timeline pengalaman kerja dengan cards modern |
| **Projects** | Galeri proyek dengan slider dan lightbox |
| **Skills** | Daftar keahlian dengan ikon |
| **Education** | Riwayat pendidikan |
| **Certification** | Sertifikasi profesional |
| **Contact** | Link sosial media dan kontak |

---

## 🛠️ Teknologi

### Frontend
- **HTML5** - Struktur semantic
- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS** - Styling custom untuk efek modern
- **Vanilla JavaScript** - Interaktivitas tanpa framework

### Libraries
| Library | Fungsi |
|---------|--------|
| **Swiper.js v11** | Slider gambar proyek yang smooth |
| **Fancybox v5** | Lightbox zoom gambar yang elegant |
| **Font Awesome v6** | Ikon sosial media dan UI |
| **Google Fonts** | Font Plus Jakarta Sans |

### Tools
- **Tailwind CDN** - Styling tanpa build process
- **Custom Animations** - CSS animations untuk efek modern
- **Intersection Observer** - Scroll animations

---

## 📁 Struktur Proyek

```
portofolio-utama/
├── index.html                  # Halaman utama
├── languages.json              # Data multi-bahasa (ID & EN)
├── robots.txt                  # Konfigurasi SEO crawler
├── sitemap.xml                 # Peta situs XML
├── README.md                   # Dokumentasi
├── .gitignore                  # Git ignore rules
│
├── assets/
│   ├── css/
│   │   └── modern.css         # Custom modern styles
│   │
│   ├── js/
│   │   ├── language.js        # Logika switch bahasa
│   │   └── main.js            # Logika utama website
│   │
│   ├── img/
│   │   ├── profile.jpeg       # Foto profil
│   │   ├── favicon.png        # Browser favicon
│   │   └── projects/          # Screenshot proyek
│   │       ├── project1-1.png ... project1-5.png
│   │       ├── project2-1.png ... project2-5.png
│   │       ├── project3-1.png ... project3-4.png
│   │       └── project4-1.png ... project4-5.png
│   │
│   └── docs/
│       └── CV_Rivaldi_Hidayatullah.pdf
```

---

## 🚀 Quick Start

### 1. Clone atau Download

```bash
git clone https://github.com/Codejaya/portofolio-utama.git
cd portofolio-utama
```

### 2. Buka di Browser

Cukup buka file `index.html` di browser modern.

### 3. Deploy ke GitHub Pages

```bash
# Inisialisasi git
git init
git add .
git commit -m "Modern portfolio website"

# Push ke GitHub
git branch -M main
git remote add origin https://github.com/Codejaya/portofolio-utama.git
git push -u origin main
```

Lalu aktifkan GitHub Pages di **Settings → Pages → Source: main branch → / (root)**

---

## 📧 Setup Contact Form dengan EmailJS

Contact form menggunakan **EmailJS** untuk mengirim email tanpa memerlukan backend server. Sempurna untuk GitHub Pages!

### Langkah 1: Daftar EmailJS

1. Kunjungi [https://www.emailjs.com/](https://www.emailjs.com/)
2. Klik **"Sign Up for Free"**
3. Daftar menggunakan email Anda (rivaldihidayatullah00@gmail.com)
4. Verifikasi email Anda

### Langkah 2: Buat Email Service

1. Di dashboard EmailJS, klik **"Email Services"**
2. Klik **"Add New Service"**
3. Pilih **"Gmail"** (atau provider email Anda)
4. Login dengan akun Gmail Anda
5. Simpan service tersebut
6. **Catat Service ID** (contoh: `service_abc123`)

### Langkah 3: Buat Email Template

1. Klik **"Email Templates"**
2. Klik **"Create New Template"**
3. Setup template dengan format berikut:

**Subject:**
```
Pesan Baru dari {{from_name}} - {{subject}}
```

**Content:**
```html
<h2>Pesan Baru dari Portofolio</h2>

<p><strong>Dari:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Posisi yang Dilamar:</strong> {{subject}}</p>
<p><strong>Pesan:</strong></p>
<p>{{message}}</p>

<hr>
<p><small>Dikirim dari portofolio online</small></p>
```

**To Email:**
```
{{to_email}}
```

4. Simpan template
5. **Catat Template ID** (contoh: `template_xyz789`)

### Langkah 4: Dapatkan Public Key

1. Klik **"Account"** di menu atas
2. Scroll ke bagian **"API Keys"**
3. **Catat Public Key** (contoh: `AbCdEf123456`)

### Langkah 5: Update Konfigurasi

Edit file `assets/js/email.js` dan ganti dengan credentials Anda:

```javascript
const EMAILJS_CONFIG = {
    publicKey: 'AbCdEf123456',           // Ganti dengan Public Key Anda
    serviceId: 'service_abc123',         // Ganti dengan Service ID Anda
    templateId: 'template_xyz789'        // Ganti dengan Template ID Anda
};
```

### Langkah 6: Test Form

1. Buka website di browser
2. Scroll ke bagian Contact
3. Isi form dan kirim
4. Cek email Anda - pesan seharusnya masuk!

### 💡 Tips EmailJS

- **Free Tier:** 200 email/bulan (cukup untuk portofolio)
- **No Backend Required:** Bekerja langsung dari browser
- **GitHub Pages Compatible:** Tidak perlu server tambahan
- **Spam Protection:** EmailJS memiliki basic spam filter
- **Custom Templates:** Bisa customize format email sesuai kebutuhan

### 🔒 Security Note

Public Key EmailJS aman untuk di-expose di client-side karena:
- Hanya bisa mengirim email ke template yang sudah di-setup
- Tidak bisa membaca email yang sudah terkirim
- Rate limited untuk mencegah abuse

---

## 🎨 Kustomisasi

### Ganti Warna Tema

Edit `index.html` dan cari class gradient:

```html
<!-- Ganti gradient indigo-purple -->
from-indigo-600 to-purple-600

<!-- Contoh: ganti ke blue-cyan -->
from-blue-600 to-cyan-600
```

### Ganti Font

Edit di `index.html` bagian `<head>`:

```html
<!-- Ganti Plus Jakarta Sans dengan font lain -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### Tambah Proyek Baru

Copy salah satu `<article>` di section projects, lalu ubah:
- Path gambar di `data-fancybox` dan `src`
- Nama proyek di `data-key`
- Deskripsi dan tech stack

### Edit Konten

- **Teks & terjemahan:** Edit `languages.json`
- **Pengalaman kerja:** Edit section `#experience`
- **Skill & edukasi:** Edit sidebar di section `#experience`

---

## 🌐 Deploy

### GitHub Pages (Recommended)

1. Push repository ke GitHub
2. Buka **Settings** → **Pages**
3. Source: **Deploy from branch** → `main` → `/ (root)`
4. Website live di: `https://codejaya.github.io/portofolio-utama/`

### Netlify

1. Drag & drop folder ke [Netlify](https://netlify.com)
2. Atau connect dengan GitHub repository
3. Auto-deploy setiap ada push

### Vercel

1. Import repository di [Vercel](https://vercel.com)
2. Framework preset: **Other**
3. Deploy otomatis

---

## 📱 Preview

### Desktop
- Layout 2 kolom untuk hero dan experience
- Grid 2 kolom untuk projects
- Full navigation bar

### Tablet
- Layout adaptif
- Navigation tetap terlihat
- Projects dalam grid

### Mobile
- Single column layout
- Hamburger menu
- Touch-friendly buttons

---

## 🔧 Troubleshooting

### Gambar tidak muncul?
- Pastikan path gambar benar di `assets/img/`
- Cek nama file (case-sensitive)

### Slider tidak berjalan?
- Pastikan `swiper-bundle.min.js` sudah dimuat
- Cek console browser untuk error

### Bahasa tidak berganti?
- Pastikan `languages.json` valid (no syntax error)
- Cek console untuk error message

### Animasi tidak smooth?
- Disable animasi di device rendah (mobile)
- Cek browser compatibility

---

## 📊 Browser Support

| Browser | Status |
|---------|--------|
| Chrome | ✅ Full Support |
| Firefox | ✅ Full Support |
| Safari | ✅ Full Support |
| Edge | ✅ Full Support |
| Opera | ✅ Full Support |

---

## 📧 Kontak

- **Email:** rivaldihidayatullah00@gmail.com
- **WhatsApp:** +62 821-8900-4392
- **LinkedIn:** [rivaldihidayatullah](https://linkedin.com/in/rivaldihidayatullah)
- **Instagram:** [@rivaldihidayatullah_](https://instagram.com/rivaldihidayatullah_)
- **GitHub:** [Codejaya](https://github.com/Codejaya)

---

## 📄 Lisensi

© 2026 Rivaldi Hidayatullah. All Rights Reserved.

---

**⚡ Dibuat dengan ❤️ dan teknologi modern oleh Rivaldi Hidayatullah**

---

## 🙏 Apresiasi

Desain terinspirasi dari tren web modern 2024-2026:
- Gradient Design
- Glassmorphism
- Smooth Animations
- Minimalist UI
- Mobile-First Approach
