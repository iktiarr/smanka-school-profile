// src/data/data_header.ts

export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href?: string; // Digunakan jika tidak ada children
  children?: NavChild[]; // Digunakan jika ingin ada dropdown
}

export const navigationData: NavItem[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil",
    children: [
      { label: "Sejarah", href: "/profil/sejarah", description: "Asal usul dan perjalanan sekolah." },
      { label: "Visi & Misi", href: "/profil/visi-misi", description: "Tujuan dan target masa depan kami." },
      { label: "Struktur Organisasi", href: "/profil/struktur", description: "Kepengurusan dan staf sekolah." },
    ],
  },
  {
    label: "Akademik",
    children: [
      { label: "Kurikulum", href: "/akademik/kurikulum", description: "Sistem pembelajaran yang diterapkan." },
      { label: "Jurusan", href: "/akademik/jurusan", description: "Pilihan peminatan bagi siswa." },
      { label: "Ekstrakurikuler", href: "/akademik/ekskul", description: "Kegiatan pengembangan diri siswa." },
      { label: "Kurikulum", href: "/akademik/kurikulum", description: "Sistem pembelajaran yang diterapkan." },
      { label: "Jurusan", href: "/akademik/jurusan", description: "Pilihan peminatan bagi siswa." },
      { label: "Ekstrakurikuler", href: "/akademik/ekskul", description: "Kegiatan pengembangan diri siswa." },
      { label: "Kurikulum", href: "/akademik/kurikulum", description: "Sistem pembelajaran yang diterapkan." },
      { label: "Jurusan", href: "/akademik/jurusan", description: "Pilihan peminatan bagi siswa." },
      { label: "Ekstrakurikuler", href: "/akademik/ekskul", description: "Kegiatan pengembangan diri siswa." },
      { label: "Kurikulum", href: "/akademik/kurikulum", description: "Sistem pembelajaran yang diterapkan." },
      { label: "Jurusan", href: "/akademik/jurusan", description: "Pilihan peminatan bagi siswa." },
      { label: "Ekstrakurikuler", href: "/akademik/ekskul", description: "Kegiatan pengembangan diri siswa." },
    ],
  },
  { label: "Berita", href: "/berita" },
  { label: "Kontak", href: "/kontak" },
];