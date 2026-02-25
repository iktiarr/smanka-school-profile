// src/components/sections/Hero.tsx
export default function Hero() {
  return (
    <section className="relative h-[500px] flex items-center justify-center bg-blue-900 text-white overflow-hidden">
      {/* Background Placeholder */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1523050853064-dbad35009711?q=80&w=2070')] bg-cover bg-center" />
      
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Selamat Datang di Portal Resmi <span className="text-yellow-400">SMAN 1 Ketapang</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Mencetak generasi yang cerdas, berkarakter, dan siap menghadapi tantangan global di era digital.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition">
            Jelajahi Profil
          </button>
          <button className="border-2 border-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-blue-900 transition">
            Lihat Pengumuman
          </button>
        </div>
      </div>
    </section>
  );
}