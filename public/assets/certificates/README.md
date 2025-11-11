# Certificates Folder

Tempatkan file PDF sertifikat Anda di folder ini.

## Struktur File

Berdasarkan konfigurasi di `src/components/Certificates.jsx`, file PDF harus diberi nama sesuai dengan `pdfPath` yang sudah ditentukan:

1. `Huawei_HCIA_AI.pdf` - HUAWEI ICT ACADEMY - Sertifikat Penyelesaian
2. `seminar-amcc-2024.pdf` - Seminar Nasional AMCC 2024
2. `oracle-sql-2024.pdf` - DP Database Programming with SQL Learner
3. `dicoding-python-2024.pdf` - Getting Started Programming with Python
4. `digitalk-59-2023.pdf` - Digitalk 59
5. `det-19-ai-101-2023.pdf` - Digital Experts Talk #19 "AI 101"
6. `det-20-ai-talent-2023.pdf` - Digital Experts Talk #20
7. `revou-data-analytics-2023.pdf` - Intro Data Analytics
8. `dicoding-data-viz-2023.pdf` - Learning Basic Data Visualization
9. `edspert-flutter-2023.pdf` - How to Start Your Mobile Developer Career with Flutter
10. `edspert-excel-2023.pdf` - Start Your Career as Data Analytic with Microsoft Excel

## Cara Menambahkan Sertifikat Baru

1. Tambahkan file PDF ke folder ini dengan nama yang sesuai
2. Update `pdfPath` di `src/components/Certificates.jsx` sesuai nama file yang Anda tambahkan

Contoh:
```javascript
{
  id: 11,
  name: 'Nama Sertifikat Baru',
  // ... data lainnya
  pdfPath: '/assets/certificates/nama-file-baru.pdf'
}
```

## Catatan

- File PDF akan ditampilkan langsung di browser menggunakan object/iframe tag
- Pastikan nama file sesuai dengan `pdfPath` yang ada di komponen
- File harus berada di folder `public/assets/certificates/` agar bisa diakses

