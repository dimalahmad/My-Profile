# Projects Images

Folder ini berisi gambar-gambar untuk Featured Projects.

## Struktur File yang Diperlukan

### Leadership & Management Roles

1. **PAD Project** (Website Sistem Manajemen Obat – Klinik Hewan dr. Hendrik)
   - `pad-1.png`
   - `pad-2.png`

2. **PMLD Project** (Website Company Profile and Store – PT INVIRO)
   - `pmld-1.png`
   - `pmld-2.png`

3. **GaiaEcho Project** (Carbon Calculator & Waste Bank Map)
   - `gaiaecho-1.png`
   - `gaiaecho-2.png`

4. **EduKita Project** (Education Database for Indonesia)
   - `edukita-1.png`
   - `edukita-2.png`

### Development Projects

5. **Blangkis Project** (E-commerce Store Platform)
   - `blangkis-1.png`
   - `blangkis-2.png`
   - `blangkis-3.png`

6. **Android Development Projects**
   - `android-1.png`
   - `android-2.png`

7. **Web Development Projects**
   - `web-1.png`
   - `web-2.png`

8. **PAD Autotesting Suite** (Automated Testing Framework)
   - `autotesting-pad-1.png`
   - `autotesting-pad-2.png`

## Format Gambar

- Format: PNG atau JPG
- Ukuran disarankan: 800x600px atau lebih besar
- Rasio aspek: 4:3 atau 16:9
- Kualitas: High resolution untuk tampilan yang jelas

## Menambahkan Link ke Gambar

Untuk menambahkan link ke gambar (opsional), edit file `src/components/Projects.jsx` dan tambahkan property `link` pada object gambar:

```javascript
images: [
  { 
    src: '/assets/projects/pad-1.png', 
    alt: 'PAD Project 1',
    link: 'https://example.com' // Opsional
  }
]
```

Jika gambar tidak ditemukan, sistem akan otomatis menggunakan placeholder image.

