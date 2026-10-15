# Task 3 – UI Automation Testing

## Gambaran Umum

Task ini berfokus pada pengujian UI secara otomatis pada website SauceDemo. Pengujian dilakukan untuk memastikan proses login dan alur checkout berjalan sesuai dengan yang diharapkan.

**Website:** https://www.saucedemo.com/

## Skenario Pengujian

### 1. Login

Memastikan pengguna dapat login ke aplikasi menggunakan kredensial yang valid dan berhasil masuk ke halaman produk.

### 2. End-to-End Checkout

Memastikan pengguna dapat menyelesaikan proses pembelian produk dari awal hingga akhir dengan langkah berikut:

1. Login ke SauceDemo.
2. Memilih produk **Sauce Labs Onesie**.
3. Menambahkan produk ke keranjang.
4. Membuka halaman keranjang.
5. Melanjutkan ke halaman checkout.
6. Mengisi informasi checkout yang diperlukan.
7. Melanjutkan proses checkout hingga selesai.
8. Memastikan halaman konfirmasi menampilkan bahwa pesanan berhasil diselesaikan.

## Tools yang Digunakan

- **Playwright:** Menjalankan pengujian UI secara otomatis.
- **JavaScript:** Bahasa pemrograman untuk test script.
- **Node.js dan npm:** Menjalankan project dan mengelola dependensi.
- **Git dan GitHub:** Version control dan penyimpanan source code.

## Struktur Project

```text
task-3-ui-automation/
├── tests/
│   └── checkout.spec.js
├── playwright.config.js
├── package.json
├── package-lock.json
├── README.md
└── reports/
```

Struktur di atas merupakan contoh. Sesuaikan dengan struktur folder dan nama file yang digunakan dalam project sebenarnya.

## Persiapan

Pastikan Node.js dan npm sudah terpasang di komputer.

Install dependensi project:

```bash
npm install
```

Jika Playwright belum terpasang, instal dengan:

```bash
npm install -D @playwright/test
npx playwright install
```

## Menjalankan Test

Jalankan seluruh test:

```bash
npx playwright test
```

Jalankan test dengan tampilan browser:

```bash
npx playwright test --headed
```

Tampilkan laporan hasil pengujian:

```bash
npx playwright show-report
```

Perintah tersebut digunakan jika konfigurasi Playwright project sudah sesuai.

## Laporan Pengujian

Hasil pengujian digunakan untuk mengetahui apakah proses login dan checkout berjalan sesuai dengan skenario yang dibuat.

Laporan dapat mencakup:

- Nama skenario pengujian.
- Status pengujian: Passed atau Failed.
- Detail error jika pengujian gagal.
- Screenshot atau bukti pendukung jika tersedia.

Hasil pengujian akhir dicatat berdasarkan eksekusi test yang sebenarnya.

## Catatan

Project ini dibuat untuk memenuhi kebutuhan take-home test Junior to Medior QA Engineer. Fokus pengujian adalah memastikan fungsi login dan proses checkout produk Sauce Labs Onesie berjalan sesuai dengan alur yang ditentukan dalam soal.
