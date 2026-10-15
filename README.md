# Task 3 – UI Automation Testing

## Gambaran Umum

Project ini merupakan bagian dari take-home test QA Engineer yang berfokus pada pengujian UI secara otomatis menggunakan Playwright dan JavaScript pada website SauceDemo.

Pengujian mencakup proses login dan alur checkout produk **Sauce Labs Onesie**, mulai dari menambahkan produk ke keranjang hingga memastikan proses checkout berhasil diselesaikan.

**Website:** https://www.saucedemo.com/

## Skenario Pengujian

### 1. Login (`login.spec.js`)

Memastikan pengguna dapat login menggunakan kredensial yang valid dan berhasil mengakses halaman produk.

### 2. Authentication (`auth.setup.js`)

Menyiapkan proses autentikasi untuk kebutuhan pengujian. File ini digunakan sesuai konfigurasi authentication yang diterapkan pada project.

### 3. Checkout (`checkout.spec.js`)

Memastikan alur checkout berjalan sesuai dengan skenario berikut:

1. Login ke SauceDemo.
2. Memilih produk Sauce Labs Onesie.
3. Menambahkan produk ke keranjang.
4. Membuka halaman keranjang.
5. Melanjutkan ke halaman checkout.
6. Mengisi informasi yang diperlukan.
7. Menyelesaikan proses checkout.
8. Memastikan muncul konfirmasi bahwa pesanan berhasil diselesaikan.

## Struktur Project

```text
task-3-ui-automation/
├── .github/
├── node_modules/
├── reports/
├── tests/
│   ├── auth.setup.js
│   ├── checkout.spec.js
│   └── login.spec.js
├── utils/
│   └── users.js
├── _probe.js
├── package.json
├── package-lock.json
└── playwright.config.js
```

### Keterangan Folder dan File

- `tests/` – Berisi script automation untuk login, autentikasi, dan checkout.
- `utils/users.js` – Menyimpan data pengguna yang digunakan dalam pengujian.
- `reports/` – Direktori untuk menyimpan laporan hasil pengujian.
- `.github/` – Direktori untuk konfigurasi workflow GitHub jika digunakan.
- `playwright.config.js` – Konfigurasi Playwright, seperti browser dan pengaturan test.
- `package.json` – Berisi informasi project, dependensi, dan script untuk menjalankan test.
- `_probe.js` – File pendukung untuk pengecekan atau eksperimen selama pengembangan test.

## Tools yang Digunakan

- **Playwright:** Framework untuk UI automation testing.
- **JavaScript:** Bahasa pemrograman untuk test script.
- **Node.js dan npm:** Menjalankan project dan mengelola dependensi.
- **Git dan GitHub:** Version control dan penyimpanan source code.

## Persiapan

Pastikan Node.js sudah terpasang di komputer, kemudian jalankan perintah berikut dari direktori project:

```bash
npm install
npx playwright install
```

## Menjalankan Test

Menjalankan seluruh test:

```bash
npx playwright test
```

Menjalankan test login:

```bash
npx playwright test tests/login.spec.js
```

Menjalankan test checkout:

```bash
npx playwright test tests/checkout.spec.js
```

Menjalankan test dengan tampilan browser:

```bash
npx playwright test --headed
```

Menampilkan laporan HTML:

```bash
npx playwright show-report
```

Perintah laporan HTML dapat digunakan jika konfigurasi Playwright sudah menghasilkan report dalam format HTML.

## Hasil Pengujian

Hasil pengujian dicatat berdasarkan eksekusi automation yang sebenarnya. Status test menunjukkan apakah skenario berhasil dijalankan atau mengalami kegagalan.

Jika ditemukan kegagalan, analisis dilakukan berdasarkan pesan error, langkah pengujian, dan bukti pendukung yang tersedia.

## Catatan

Project ini dibuat untuk menguji fungsi login dan proses checkout pada SauceDemo sesuai dengan kebutuhan take-home test QA Engineer. Seluruh hasil dan laporan pengujian didasarkan pada hasil eksekusi test yang sebenarnya.
