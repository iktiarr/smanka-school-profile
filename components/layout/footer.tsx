// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Kolom 1: Tentang */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">SMAN 1 KETAPANG</h3>
          <p className="text-sm leading-relaxed">
            Jl. Raya Ketapang No. 123, Lampung Selatan. Sekolah penggerak yang berfokus pada pengembangan bakat dan minat siswa.
          </p>
        </div>

        {/* Kolom 2: Link Cepat */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Tautan Cepat</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400 transition">Data Guru</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Fasilitas Sekolah</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Perpustakaan Digital</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Alumni</a></li>
          </ul>
        </div>

        {/* Kolom 3: Kontak */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Kontak Kami</h3>
          <p className="text-sm">Email: info@sman1ketapang.sch.id</p>
          <p className="text-sm">Telp: (0721) 123456</p>
          <div className="mt-4 flex gap-4">
            {/* Social Media Icons Placeholder */}
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-6 text-center text-xs">
        <p>© 2026 SMAN 1 Ketapang. All Rights Reserved.</p>
      </div>
    </footer>
  );
}