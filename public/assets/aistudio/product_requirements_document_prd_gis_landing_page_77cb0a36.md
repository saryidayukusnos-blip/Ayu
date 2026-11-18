# Product Requirements Document (PRD)

**Nama Produk:** Landing Page Kemasukan Program Kemahiran Elektrik (18+)  
**Organisasi:** Global Institute of Studies (GIS)  
**Versi Dokumen:** 1.0  
**Tarikh:** November 2026  
**Status:** Diluluskan untuk Pembangunan  

---

## 1. Ringkasan Eksekutif (Executive Summary)
Dokumen ini memperincikan keperluan produk, reka bentuk antaramuka pengguna (UI/UX), fungsi teknikal, dan strategi penukaran (*conversion*) bagi *landing page* rasmi **Program Kemahiran Elektrik** di **Global Institute of Studies (GIS)**. Halaman ini direka khusus untuk menarik pendaftaran pelajar berumur 18 tahun ke atas dengan meyakinkan ibu bapa/penjaga terhadap aspek kos pembiayaan, pendedahan industri sebenar, dan jaminan prospek kerjaya.

---

## 2. Objektif & Metrik Kejayaan (Goals & KPIs)

### 2.1 Objektif Utama
1. **Menjawab Kerisauan Ibu Bapa:** Memberikan penerangan yang telus mengenai penyelesaian kewangan (PTPTN, PTPK, KWSP/EPF, Ansuran 0%, dan Tunai) serta laluan kerjaya pelajar.
2. **Menarik Minat Golongan Muda (18+):** Memaparkan suasana pembelajaran amali (**80% Praktikal : 20% Teori**) dan persekitaran kampus yang kondusif, berbilang kaum, serta berdisiplin.
3. **Menjana Prospek Berkualiti (*Lead Generation*):** Memudahkan ibu bapa atau pelajar menghantar maklumat semakan kelayakan terus ke WhatsApp pegawai kemasukan GIS.

### 2.2 Petunjuk Prestasi Utama (KPI)
* **Kadar Penukaran (*Conversion Rate*):** Sekurang-kurangnya **8% – 12%** pelawat mengisi borang semakan kelayakan atau menekan butang WhatsApp.
* **Prestasi Mudah Alih (*Mobile Speed*):** Skor Google PageSpeed Insights **> 90** pada peranti mudah alih.
* **Kadar Lantunan (*Bounce Rate*):** Kurang daripada **40%** melalui susun atur *White Screen Cinematic* yang bersih dan menarik.

---

## 3. Sasaran Pengguna (Target Personas)

| Persona | Profil & Demografi | Keperluan & Motivasi | Titik Kesakitan (*Pain Points*) |
| :--- | :--- | :--- | :--- |
| **Persona A: Ibu Bapa / Penjaga** *(Pembuat Keputusan & Pembiaya)* | Berumur 40–60 tahun di Malaysia. Mempunyai anak lepasan sekolah (18 tahun ke atas). | Inginkan masa depan anak yang terjamin, institusi yang dipercayai, dan pilihan pembiayaan yang tidak membebankan. | Risau kos pengajian tinggi, takut anak menganggur selepas tamat belajar, dan risau anak tiada hala tuju. |
| **Persona B: Pelajar Lepasan Sekolah** *(Pengguna Akhir)* | Berumur 18–24 tahun (pelbagai kaum). Lebih cenderung kepada kemahiran teknikal berbanding teori semata-mata. | Mahu cepat bekerja, memperoleh kemahiran praktikal, dan belajar dalam suasana kampus yang moden serta mesra. | Kurang minat membaca buku teori semata-mata, tiada asas elektrik, atau keputusan akademik sederhana. |

---

## 4. Keperluan Fungsian (Functional Requirements)

### FR-01: Navigasi & Bar Pengumuman (Header)
* **FR-01.1:** Memaparkan bar pengumuman di bahagian paling atas mengenai pengambilan sesi baharu untuk pelajar berumur 18 tahun ke atas.
* **FR-01.2:** Bar navigasi melekat (*sticky header*) dengan logo **Global Institute of Studies (GIS)**, pautan pantas ke setiap seksyen, menu responsif untuk telefon pintar, dan butang CTA utama *"Semak Kelayakan"*.

### FR-02: Main Banner (*White Screen Cinematic Hero Section*)
* **FR-02.1:** Menggunakan latar belakang cerah sepenuhnya (*Light Mode* / *White Screen Cinematic*) tanpa sebarang elemen *dark mode*.
* **FR-02.2:** Memaparkan gambar utama pelajar lelaki dan perempuan berbilang kaum berpakaian sopan memegang buku dan menggalas beg menuju ke kelas, lengkap dengan bingkai sinematik moden dan kesan gerak perlahan (*Ken Burns effect*).
* **FR-02.3:** Memaparkan 5 lencana skim pembiayaan utama secara jelas: **PTPTN, PTPK, KWSP (EPF), Ansuran 0% Faedah, dan Tunai (Cash)**.
* **FR-02.4:** Menyediakan dua butang tindakan utama: *"Semak Kelayakan Sekarang"* (tatal ke borang) dan *"Konsultasi WhatsApp"* (buka pautan terus ke WhatsApp).

### FR-03: Matriks Kerisauan Ibu Bapa vs Penyelesaian GIS
* **FR-03.1:** Memaparkan 4 kad perbandingan berstruktur bagi menjawab 4 kerisauan utama:
  1. Masalah Kewangan -> 5 Pilihan Pembiayaan Mudah.
  2. Masa Depan Anak -> Laluan Kerjaya Teknikal & Usahawan yang Jelas.
  3. Jaminan Pekerjaan -> Bantuan Penempatan Kerja & Permintaan Tinggi Industri.
  4. Pendedahan Industri -> 80% Latihan Amali Bengkel & Latihan Industri (*Internship*).

### FR-04: Struktur Kursus (80:20) & Laluan Kerjaya
* **FR-04.1:** Visualisasi nisbah pembelajaran **80% Praktikal & Amali** berbanding **20% Teori**.
* **FR-04.2:** Perincian 4 modul teras: Pendawaian Domestik & Industri, Penyelenggaraan Motor Elektrik, Kawalan Automasi & Panel, serta Keselamatan & Akta Elektrik.
* **FR-04.3:** Senarai 4 prospek kerjaya utama: Juruteknik Elektrik, Pendawai Elektrik Bertauliah (*Wireman*), Juruteknik Penyelenggaraan Fasiliti, dan Usahawan Kontraktor Elektrik.

### FR-05: Penapis Interaktif Skim Pembiayaan
* **FR-05.1:** Tab interaktif berasaskan JavaScript yang membolehkan pengguna menukar paparan butiran antara **PTPTN, PTPK, KWSP (EPF Akaun 2), Ansuran 0% Faedah, dan Tunai (Cash)**.
* **FR-05.2:** Butang tindakan di dalam setiap tab akan menatal ke borang pendaftaran dan memilih jenis pembiayaan tersebut secara automatik (*auto-preselect*).

### FR-06: Bukti Sosial & Soalan Lazim (FAQ)
* **FR-06.1:** Memaparkan testimoni daripada ibu bapa dan alumni yang telah bekerja.
* **FR-06.2:** Akordion interaktif (*expand/collapse*) bagi menjawab soalan lazim seperti syarat kemasukan tanpa asas elektrik, bantuan pengurusan pinjaman, kemudahan asrama, dan pengiktirafan sijil.

### FR-07: Borang Semakan Kelayakan & Integrasi WhatsApp
* **FR-07.1:** Borang ringkas yang mengumpul: Nama Penuh, No. Telefon/WhatsApp, Status Pemohon (Ibu Bapa atau Pelajar 18+), Pilihan Pembiayaan, dan Negeri.
* **FR-07.2:** Pengesahan input (*client-side validation*) sebelum menghantar data.
* **FR-07.3:** Menjana mesej WhatsApp pra-isi (*pre-filled message*) yang teratur dan membuka aplikasi WhatsApp (`wa.me`) secara automatik ke nombor pegawai kemasukan GIS.
* **FR-07.4:** Butang WhatsApp terapung (*Floating Action Button*) sentiasa kelihatan di sudut kanan bawah skrin.

---

## 5. Keperluan Bukan Fungsian & Reka Bentuk (Non-Functional & UI/UX Requirements)

### 5.1 Sistem Warna & Tema (Strictly Light Mode)
* **Latar Belakang Utama:** Putih Bersih (`#FFFFFF`) & Kelabu Lembut (`#F8FAFC`).
* **Warna Primer (Kepercayaan):** Biru Diraja / Navy (`#1E3A8A` & `#0F172A`).
* **Warna Aksen (Tenaga Elektrik & CTA):** Kuning Amber / Oren Elektrik (`#FBBF24`, `#F59E0B`, `#EA580C`).
* **Larangan Reka Bentuk:** Dilarang menggunakan tema gelap (*dark mode*) pada keseluruhan halaman termasuk bahagian *Hero* dan *Footer* bagi mengekalkan estetika *White Screen Cinematic*.

### 5.2 Tipografi & Animasi
* **Fon Tajuk:** *Plus Jakarta Sans* (Tebal & Moden).
* **Fon Kandungan:** *Inter* (Kemas & Mudah dibaca pada skrin kecil).
* **Transisi & Animasi:**
  * *Hero Entrance:* Animasi teks muncul berperingkat (`cinematicTextReveal`) dengan kesan *blur-to-sharp*.
  * *Scroll Reveal:* Menggunakan `IntersectionObserver` supaya setiap seksyen dan kad muncul secara lancar apabila pengguna menatal ke bawah.

### 5.3 Kebolehcapaian & Responsif (*Mobile-First*)
* Susun atur fleksibel menggunakan sistem grid CSS/Tailwind yang menyesuaikan paparan untuk telefon pintar (`< 640px`), tablet (`768px`), dan desktop (`> 1024px`).
* Saiz butang minimum `44px` tinggi untuk memudahkan klik menggunakan ibu jari pada peranti mudah alih.

---

## 6. Spesifikasi Teknikal & Seni Bina Sistem
* **Teknologi Frontend:** HTML5 Semantik, Tailwind CSS, dan Vanilla JavaScript (ES6+).
* **Ikonografi:** Lucide Icons.
* **Pengehosan (*Deployment*):** Boleh dihoskan secara statik (*static hosting*) di mana-mana pelayan web (cPanel, Vercel, Netlify, Cloudflare Pages) tanpa kebergantungan pangkalan data yang kompleks.

---

## 7. Pelan Pengujian & Penerimaan (UAT Checklist)
- [ ] Semua bahagian halaman dipaparkan dalam mod cerah (*Light Mode*) tanpa kontras gelap yang mengganggu.
- [ ] Gambar banner memaparkan pelajar berbilang kaum berpakaian sopan memegang buku dan menggalas beg dengan jelas serta responsif.
- [ ] Animasi teks utama (*Hero*) dan transisi seksyen semasa menatal berfungsi lancar tanpa *lag*.
- [ ] Semua 5 tab pembiayaan (PTPTN, PTPK, EPF, Ansuran, Cash) memaparkan maklumat yang tepat dan memaut terus ke pilihan borang.
- [ ] Borang pendaftaran menyekat penghantaran jika medan wajib kosong, dan berjaya membuka WhatsApp dengan mesej pra-isi yang lengkap.