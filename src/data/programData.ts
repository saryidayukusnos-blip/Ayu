export type FundingId = 'ptptn' | 'ptpk' | 'kwsp' | 'ansuran' | 'tunai';

export interface FundingScheme {
  id: FundingId;
  shortLabel: string;
  fullTitle: string;
  subtitle: string;
  coverageSummary: string;
  eligibility: string[];
  paymentTerms: string;
  documentsNeeded: string[];
  formOptionValue: string;
}

export interface ConcernComparison {
  index: string;
  concernTitle: string;
  concernDetail: string;
  solutionTitle: string;
  solutionDetail: string;
  actionLabel?: string;
  targetSection?: string;
}

export interface CourseModule {
  code: string;
  title: string;
  practicalFocus: string;
  toolsCovered: string;
}

export interface CareerPath {
  title: string;
  sector: string;
  salaryRange: string;
  progression: string;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  category: 'Ibu Bapa' | 'Alumni';
  beforeState: string;
  outcomeQuote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const WHATSAPP_NUMBER = '60123456789';

export const HERO_STUDENT_IMAGE = '/src/assets/images/hero_gis_students_1794983864186.jpg';
export const WORKSHOP_PRACTICAL_IMAGE = '/src/assets/images/workshop_electrical_practical_1794983864789.jpg';
export const MOTOR_AUTOMATION_IMAGE = '/src/assets/images/student_motor_automation_1794983865575.jpg';

export const FUNDING_SCHEMES: FundingScheme[] = [
  {
    id: 'ptptn',
    shortLabel: 'PTPTN',
    fullTitle: 'Pinjaman Perbadanan Tabung Pendidikan Tinggi Nasional (PTPTN)',
    subtitle: 'Pembiayaan menyeluruh untuk program bertahap diploma & lanjutan yang diiktiraf.',
    coverageSummary: 'Meliputi sehingga 100% yuran pengajian dan elaun sara diri mengikut kelayakan pendapatan isi rumah.',
    eligibility: [
      'Warganegara Malaysia berumur 18 tahun ke atas',
      'Memenuhi syarat kemasukan program diiktiraf MQA / JPK',
      'Mempunyai akaun SSPN Prime yang aktif sebelum permohonan',
    ],
    paymentTerms: 'Bayaran balik bermula 12 bulan selepas tamat pengajian atau setelah bekerja.',
    documentsNeeded: [
      'Salinan Kad Pengenalan Pemohon & Ibu Bapa / Penjaga',
      'Slip gaji terkini atau surat pengesahan pendapatan penjaga',
      'Surat tawaran rasmi kemasukan daripada GIS',
    ],
    formOptionValue: 'PTPTN',
  },
  {
    id: 'ptpk',
    shortLabel: 'PTPK',
    fullTitle: 'Pinjaman Perbadanan Tabung Pembangunan Kemahiran (PTPK)',
    subtitle: 'Khusus untuk laluan latihan kemahiran teknikal & vokasional (TVET) di Malaysia.',
    coverageSummary: 'Membiayai penuh yuran latihan kemahiran berserta elaun sara diri bulanan RM400–RM600 sepanjang pengajian.',
    eligibility: [
      'Warganegara Malaysia berumur 18 hingga 45 tahun',
      'Mengikuti program kemahiran elektrik berdaftar di bawah JPK',
      'Pendapatan isi rumah dalam had kelayakan semasa PTPK',
    ],
    paymentTerms: 'Tempoh tangguh bayaran balik selepas tamat latihan dengan kadar caj pentadbiran minimum 1% setahun.',
    documentsNeeded: [
      'Salinan MyKad pelatih & penjamin berpendapatan tetap',
      'Penyata gaji penjamin 3 bulan terkini',
      'Salinan penyata akaun bank pelatih yang aktif',
    ],
    formOptionValue: 'PTPK',
  },
  {
    id: 'kwsp',
    shortLabel: 'KWSP (EPF)',
    fullTitle: 'Pengeluaran Pendidikan Akaun 2 KWSP (EPF)',
    subtitle: 'Ibu bapa atau pelajar bekerja boleh membiayai yuran tanpa menambah komitmen pinjaman.',
    coverageSummary: 'Pengeluaran terus daripada Akaun Sejahtera (Akaun 2) ahli untuk menampung yuran pengajian semester atau penuh.',
    eligibility: [
      'Ahli KWSP (ibu bapa, penjaga sah, atau pelajar sendiri) berumur bawah 55 tahun',
      'Mempunyai baki mencukupi di dalam Akaun 2 KWSP',
      'Program kemahiran berdaftar secara rasmi di GIS',
    ],
    paymentTerms: 'Tiada hutang atau faedah selepas tamat pengajian; pasukan GIS membantu urusan surat pengesahan institusi.',
    documentsNeeded: [
      'Borang pengeluaran pendidikan KWSP melalui i-Akaun atau kaunter',
      'Surat tawaran pengajian & resit atau invois yuran daripada GIS',
      'Dokumen bukti pertalian (Sijil Lahir) jika menggunakan akaun ibu bapa',
    ],
    formOptionValue: 'KWSP (EPF Akaun 2)',
  },
  {
    id: 'ansuran',
    shortLabel: 'Ansuran 0%',
    fullTitle: 'Pelan Ansuran Dalaman Tanpa Faedah (0% Interest)',
    subtitle: 'Alternatif fleksibel terus bersama pengurusan kewangan GIS tanpa melibatkan pihak bank.',
    coverageSummary: 'Pembahagian yuran pengajian kepada bayaran bulanan tetap dengan 0% faedah sepanjang tempoh kursus.',
    eligibility: [
      'Terbuka kepada semua ibu bapa atau pelajar 18+ tahun',
      'Kelulusan segera tanpa semakan rekod kredit bank yang rumit',
      'Deposit pendaftaran awal yang rendah untuk mengunci tempat bengkel',
    ],
    paymentTerms: 'Bayaran bulanan tetap sehingga tamat pengajian tanpa sebarang caj tambahan atau penalti tersembunyi.',
    documentsNeeded: [
      'Salinan Kad Pengenalan pelajar dan pembayar (ibu bapa/penjaga)',
      'Perjanjian jadual ansuran rasmi bersama Unit Kewangan GIS',
      'Resit deposit pendaftaran sesi kemasukan',
    ],
    formOptionValue: 'Ansuran 0% Faedah',
  },
  {
    id: 'tunai',
    shortLabel: 'Tunai (Cash)',
    fullTitle: 'Pembayaran Tunai Penuh & Rebat Pendaftaran Awal',
    subtitle: 'Penyelesaian paling pantas dengan penjimatan terus daripada jumlah yuran keseluruhan.',
    coverageSummary: 'Layak menerima potongan rebat khas pendaftaran awal serta keutamaan penempatan asrama pelajar.',
    eligibility: [
      'Terbuka kepada ibu bapa, penjaga, atau penaja korporat',
      'Pembayaran melalui pindahan bank rasmi atau kad debit di kampus',
      'Pengesahan pendaftaran serta-merta pada hari permohonan',
    ],
    paymentTerms: 'Bayaran sekali gus atau dua fasa (permulaan & pertengahan kursus) dengan resit rasmi institusi.',
    documentsNeeded: [
      'Salinan Kad Pengenalan pelajar',
      'Bukti pindahan tunai ke akaun rasmi Global Institute of Studies',
      'Borang pendaftaran pelajar baharu GIS',
    ],
    formOptionValue: 'Tunai (Cash)',
  },
];

export const PARENT_CONCERNS: ConcernComparison[] = [
  {
    index: '01',
    concernTitle: 'Risau kos pengajian membebankan keluarga',
    concernDetail:
      'Ramai ibu bapa menangguhkan pengajian anak kerana takut yuran pendahuluan tinggi dan kos sara diri yang sukar ditanggung serentak.',
    solutionTitle: '5 Pilihan Pembiayaan Mudah & Bimbingan Penuh',
    solutionDetail:
      'GIS menyediakan laluan PTPTN, PTPK (berserta elaun bulanan), KWSP Akaun 2, Ansuran 0% Faedah, serta Tunai. Pegawai kemasukan menguruskan semakan dokumen dari awal hingga lulus.',
    actionLabel: 'Bandingkan 5 skim pembiayaan',
    targetSection: '#pembiayaan',
  },
  {
    index: '02',
    concernTitle: 'Bimbang anak tiada hala tuju selepas SPM',
    concernDetail:
      'Pelajar yang kurang berminat menghafal teori buku teks sering hilang motivasi apabila dipaksa masuk ke aliran akademik konvensional.',
    solutionTitle: 'Laluan Kerjaya Teknikal & Usahawan yang Jelas',
    solutionDetail:
      'Silabus disusun daripada asas hingga persijilan pendawai bertauliah, membolehkan anak membina kerjaya tetap sebagai juruteknik atau membuka syarikat kontraktor elektrik sendiri.',
  },
  {
    index: '03',
    concernTitle: 'Takut anak menganggur selepas tamat belajar',
    concernDetail:
      'Persoalan utama penjaga ialah sama ada sijil yang diperoleh benar-benar laku di pasaran kerja atau sekadar disimpan di rumah.',
    solutionTitle: 'Bantuan Penempatan Kerja & Permintaan Tinggi Industri',
    solutionDetail:
      'Sektor pembinaan, pengilangan, penyelenggaraan bangunan, dan tenaga solar sentiasa kekurangan tenaga mahir tempatan. Unit kerjaya GIS memadankan graduan terus dengan rakan industri.',
  },
  {
    index: '04',
    concernTitle: 'Kurang pendedahan kerja sebenar di bengkel',
    concernDetail:
      'Graduan yang hanya belajar di dalam bilik kuliah sering kekok apabila diminta menguji papan agihan atau membaiki motor industri sebenar.',
    solutionTitle: '80% Latihan Amali Bengkel & Latihan Industri',
    solutionDetail:
      'Empat daripada lima hari pembelajaran berlangsung di bengkel bervoltan rendah dan automasi dengan bimbingan pengajar berpengalaman, diikuti latihan industri berstruktur.',
    actionLabel: 'Lihat struktur kursus 80:20',
    targetSection: '#struktur-kursus',
  },
];

export const COURSE_MODULES: CourseModule[] = [
  {
    code: '01',
    title: 'Pendawaian Domestik & Industri',
    practicalFocus: 'Pemasangan konduit GI/PVC, pendawaian satu fasa & tiga fasa, litar kuasa, serta pengujian rintangan penebatan.',
    toolsCovered: 'Papan agihan (DB) 3-fasa, Megger tester, multimeter digital & alat ujian RCCB.',
  },
  {
    code: '02',
    title: 'Penyelenggaraan Motor Elektrik',
    practicalFocus: 'Pemasangan litar pemula Direct-On-Line (DOL), Star-Delta, pengesanan kerosakan gegelung dan penyelenggaraan berkala.',
    toolsCovered: 'Motor aruhan 3-fasa, contactor, thermal overload relay & clamp meter.',
  },
  {
    code: '03',
    title: 'Kawalan Automasi & Panel',
    practicalFocus: 'Membaca lukisan skematik industri, pendawaian panel kawalan bersepadu, sensor serta asas kawalan logik boleh aturcara.',
    toolsCovered: 'Panel kawalan industri, geganti pemasa, PLC asas & suis had.',
  },
  {
    code: '04',
    title: 'Keselamatan & Akta Elektrik',
    practicalFocus: 'Pematuhan Akta Bekalan Elektrik, prosedur pengasingan selamat (LOTO), pembumian dan piawaian Suruhanjaya Tenaga.',
    toolsCovered: 'Peralatan perlindungan diri (PPE), kit LOTO & buku log pemeriksaan keselamatan.',
  },
];

export const CAREER_PATHS: CareerPath[] = [
  {
    title: 'Juruteknik Elektrik',
    sector: 'Kilang Pengilangan, Semikonduktor & Automasi',
    salaryRange: 'RM 2,200 – RM 3,400 / bulan',
    progression: 'Permulaan pantas selepas tamat latihan dengan elaun kerja lebih masa dan syif.',
  },
  {
    title: 'Pendawai Elektrik Bertauliah (Wireman)',
    sector: 'Projek Komersial, Kediaman & Pembinaan',
    salaryRange: 'RM 2,500 – RM 4,500 / bulan',
    progression: 'Laluan peningkatan ke lesen PW2 / PW4 untuk menandatangani kerja pendawaian sah.',
  },
  {
    title: 'Juruteknik Penyelenggaraan Fasiliti',
    sector: 'Hospital, Pusat Beli-Belah, Hotel & Kampus',
    salaryRange: 'RM 2,400 – RM 3,800 / bulan',
    progression: 'Kerjaya stabil jangka panjang mengurus sistem kuasa, penyaman udara dan pencahayaan.',
  },
  {
    title: 'Usahawan Kontraktor Elektrik',
    sector: 'Perniagaan Sendiri & Subkontraktor Berdaftar',
    salaryRange: 'RM 5,000 – RM 12,000+ / bulan',
    progression: 'Berpeluang mendaftar syarikat CIDB / Suruhanjaya Tenaga selepas memperoleh pengalaman lapangan.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Hajah Noraini binti Kassim',
    role: 'Ibu kepada Muhammad Danial (Graduan 2025)',
    location: 'Seremban, Negeri Sembilan',
    category: 'Ibu Bapa',
    beforeState: 'Anak kurang berminat dengan aliran teori selepas SPM dan keluarga risau memikirkan kos yuran.',
    outcomeQuote:
      'Pegawai GIS bantu kami urus permohonan PTPK sampai lulus berserta elaun bulanan. Dua bulan selepas tamat latihan industri, Danial terus diserap sebagai juruteknik tetap di kilang Nilai.',
  },
  {
    name: 'Encik Sivakumar a/l Subramaniam',
    role: 'Bapa kepada Arvindraj (Pelajar Semester Akhir)',
    location: 'Klang, Selangor',
    category: 'Ibu Bapa',
    beforeState: 'Mencari pusat kemahiran yang berdisiplin, selamat dan mempunyai bengkel praktikal yang teratur.',
    outcomeQuote:
      'Masa melawat kampus GIS, saya lihat sendiri pelajar berpakaian kemas, berbilang kaum dan tekun buat pendawaian papan agihan sebenar. Kami gunakan KWSP Akaun 2 dan prosesnya sangat lancar.',
  },
  {
    name: 'Muhammad Amirul Hakim',
    role: 'Juruteknik Penyelenggaraan Fasiliti (Alumni 2024)',
    location: 'Johor Bahru, Johor',
    category: 'Alumni',
    beforeState: 'Masuk tanpa sebarang asas elektrik dan hanya bekerja sambilan sebelum mendaftar pada umur 19 tahun.',
    outcomeQuote:
      'Oleh kerana 80% masa di bengkel, saya cepat faham litar Star-Delta dan ujian papan agihan. Waktu temu duga kerja, majikan terus uji kemahiran amali dan saya lulus serta-merta.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-asas',
    question: 'Adakah anak saya perlu mempunyai asas elektrik atau keputusan SPM cemerlang untuk memohon?',
    answer:
      'Tidak perlu. Program ini direka khusus untuk pelajar berumur 18 tahun ke atas bermula dari peringkat asas keselamatan, pengenalan komponen, sehingga pendawaian industri sebenar. Syarat utama ialah minat untuk belajar secara amali, disiplin diri, dan kebolehan membaca serta mengira asas.',
  },
  {
    id: 'faq-pembiayaan',
    question: 'Bagaimana GIS membantu ibu bapa menguruskan permohonan PTPTN, PTPK atau KWSP?',
    answer:
      'Unit Kemasukan & Bantuan Kewangan GIS menyediakan bimbingan langkah demi langkah — daripada semakan awal kelayakan, senarai semak dokumen penjamin, pengisian borang rasmi, hinggalah pengesahan surat tawaran untuk pengeluaran Akaun 2 KWSP atau permohonan pinjaman.',
  },
  {
    id: 'faq-asrama',
    question: 'Adakah kemudahan asrama disediakan untuk pelajar dari luar negeri?',
    answer:
      'Ya. Penginapan asrama pelajar yang selesa, berasingan lelaki dan perempuan, serta berdekatan kampus dan bengkel latihan disediakan bagi pelajar luar daerah atau negeri lain dengan penyeliaan warden.',
  },
  {
    id: 'faq-pengiktirafan',
    question: 'Adakah sijil kemahiran daripada GIS diiktiraf oleh industri dan majikan di Malaysia?',
    answer:
      'Ya. Kurikulum latihan dirangka selaras dengan piawaian kemahiran kebangsaan dan keperluan industri elektrik tempatan, memastikan graduan bersedia menduduki penilaian amali serta memenuhi kriteria pengambilan juruteknik oleh syarikat kejuruteraan, kilang dan kontraktor.',
  },
  {
    id: 'faq-tempoh',
    question: 'Berapa lamakah tempoh pengajian dan bilakah pelajar mula menjalani latihan industri?',
    answer:
      'Tempoh pengajian merangkumi fasa latihan intensif di bengkel GIS (80% amali dan 20% teori) diikuti fasa penempatan Latihan Industri bersama rakan syarikat kejuruteraan elektrik supaya pelajar menimba pengalaman kerja sebenar sebelum tamat kursus.',
  },
];

export const MALAYSIA_STATES: string[] = [
  'Selangor',
  'W.P. Kuala Lumpur',
  'Johor',
  'Negeri Sembilan',
  'Melaka',
  'Perak',
  'Pulau Pinang',
  'Kedah',
  'Perlis',
  'Pahang',
  'Terengganu',
  'Kelantan',
  'Sabah',
  'Sarawak',
  'W.P. Putrajaya',
  'W.P. Labuan',
];

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
