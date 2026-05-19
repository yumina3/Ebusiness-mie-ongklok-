# Mie Ongklok Instan — Landing Page

## Struktur Folder

```
mie-ongklok-instan/
├── index.html                  ← Halaman utama
├── favicon.ico                 ← Icon tab browser (tambahkan sendiri)
├── css/
│   └── style.css               ← Semua styling
├── js/
│   └── main.js                 ← Navbar, scroll, animasi
└── assets/
    ├── images/
    │   ├── hero-pack-1.webp    ← Foto kemasan produk 1 (hero kiri)
    │   ├── hero-pack-2.webp    ← Foto kemasan produk 2 (hero kanan)
    │   ├── kuah-noodle.webp    ← Foto mie bowl (cooking guide tengah)
    │   └── dapur-wonosobo.webp ← Foto dapur/tungku (nutritional info)
    └── icons/
        ├── tanpa-pengawet.svg  ← Icon kartu fitur 1
        ├── ebi-asli.svg        ← Icon kartu fitur 2
        └── rempah.svg          ← Icon kartu fitur 3
```

---

## Cara Menambahkan Foto

Ganti placeholder emoji dengan foto asli di `index.html`:

### Hero — Kemasan Produk
Simpan foto kemasan sebagai `assets/images/hero-pack-1.webp` dan `hero-pack-2.webp`.
Foto akan otomatis tampil karena sudah ada tag `<img>` dengan `onerror` fallback.

### Cooking Guide — Foto Mie Bowl
Simpan foto mie sebagai `assets/images/kuah-noodle.webp`.

### Nutritional Info — Foto Dapur
Simpan foto dapur Wonosobo sebagai `assets/images/dapur-wonosobo.webp`.

---

## Cara Mengubah Konten

Semua teks ada di `index.html`, cari bagian yang ingin diubah:

| Yang diubah             | Cari teks ini di index.html              |
|-------------------------|------------------------------------------|
| Judul hero              | `CITA RASA AUTENTIK`                     |
| Deskripsi hero          | `Nikmati mie kuah kental`                |
| Link Shopee             | `https://shopee.co.id`                   |
| Nomor WhatsApp          | `https://wa.me/6281234567890`            |
| Email                   | `halo@mieongklokinstan.id`               |
| Alamat footer           | `Wonosobo, Jawa Tengah, Indonesia`       |

---

## Cara Mengubah Warna

Semua warna ada di `css/style.css` bagian `:root`:

```css
:root {
  --brown:       #3B1A06;   /* Coklat tua utama */
  --orange:      #C95C1A;   /* Oranye aksen      */
  --orange-btn:  #B84F12;   /* Oranye tombol     */
  --cream-bg:    #F5ECD8;   /* Latar belakang    */
}
```

Ganti nilai hex sesuai brand color kamu.

---

## Cara Upload ke Hosting

### Netlify (gratis, paling mudah)
1. Buka https://netlify.com → login
2. Drag & drop folder `mie-ongklok-instan/` ke dashboard
3. Website langsung live dengan URL gratis

### Vercel (gratis)
1. Buka https://vercel.com → login dengan GitHub
2. Upload folder atau connect ke GitHub repo
3. Deploy otomatis

### cPanel / Hosting Berbayar
1. Login ke cPanel → File Manager
2. Masuk ke folder `public_html`
3. Upload semua file dari folder `mie-ongklok-instan/`
4. Pastikan `index.html` ada di root `public_html`

---

## Menambahkan Favicon

1. Buka https://favicon.io
2. Pilih "Text" → ketik "M" → warna coklat `#3B1A06`
3. Download → ambil file `favicon.ico`
4. Letakkan di root folder (sejajar dengan `index.html`)

---

## Tips Foto

- Format **WebP** direkomendasikan (lebih kecil, lebih cepat)
- Ukuran ideal:
  - `hero-pack-1.webp` & `hero-pack-2.webp` → **600×400px**
  - `kuah-noodle.webp` → **800×600px**
  - `dapur-wonosobo.webp` → **800×600px**
- Konversi ke WebP gratis: https://squoosh.app
