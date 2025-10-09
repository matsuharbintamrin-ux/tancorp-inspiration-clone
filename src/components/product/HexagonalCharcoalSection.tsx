import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const HexagonalCharcoalSection = () => {
  return (
    <section className="bg-[#0f0f0f] text-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* 🟢 Judul */}
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent tracking-wide">
            Mengapa Kami Adalah Pilihan Tepat bagi Pengguna Arang Hexagonal?
          </h2>
          <p className="text-white/80 leading-relaxed">
            Surya Grisse, kami bangga menyediakan arang hexagonal premium yang menjamin kualitas, performa, dan keandalan tinggi.
          </p>
        </div>

        {/* 🟢 Konten utama */}
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Arang hexagonal kami dibuat dari bahan kayu alami yang ramah lingkungan dan berkelanjutan. Jadi, Anda dapat yakin bahwa arang kami dapat terbakar bersih tanpa berdampak negatif terhadap lingkungan.
          </p>
          <p>
            Kami menawarkan harga yang kompetitif, pengiriman tepat waktu, dan layanan pelanggan yang luar biasa. Sebagai salah satu pemasok arang terkemuka di wilayah ini, kami menjadi mitra tepercaya untuk kebutuhan arang Anda — baik untuk restoran maupun keperluan BBQ di rumah.
          </p>
          <p>
            Tergantung pada ukuran potongan dan suhu pembakaran, arang hexagonal kami biasanya dapat menyala selama dua hingga tiga jam.
          </p>
        </div>

        {/* 🟢 Bagian FAQ (Accordion Interaktif) */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-accent mb-8 text-center uppercase tracking-wider">
            Pertanyaan yang Sering Diajukan
          </h3>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium text-white hover:text-accent">
                1. Terbuat dari apa arang hexagonal ini?
              </AccordionTrigger>
              <AccordionContent className="text-white/70">
                Arang hexagonal kami dibuat dari 100% bahan alami seperti tempurung kelapa dan kayu keras tropis, tanpa bahan kimia tambahan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium text-white hover:text-accent">
                2. Berapa lama arang hexagonal ini dapat menyala?
              </AccordionTrigger>
              <AccordionContent className="text-white/70">
                Biasanya, arang kami dapat menyala selama 2–3 jam tergantung pada sirkulasi udara dan jenis panggangan yang digunakan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium text-white hover:text-accent">
                3. Apakah Surya Grisse Charcoal ramah lingkungan?
              </AccordionTrigger>
              <AccordionContent className="text-white/70">
                Ya. Proses produksi kami menggunakan metode ramah lingkungan yang meminimalkan emisi dan hanya memakai bahan baku terbarukan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium text-white hover:text-accent">
                4. Apakah tersedia harga grosir atau pembelian dalam jumlah besar?
              </AccordionTrigger>
              <AccordionContent className="text-white/70">
                Tentu saja. Kami menyediakan harga grosir yang kompetitif untuk restoran, distributor, dan pengecer. Silakan hubungi tim penjualan kami untuk informasi lebih lanjut.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium text-white hover:text-accent">
                5. Bagaimana cara memesan produk ini?
              </AccordionTrigger>
              <AccordionContent className="text-white/70">
                Anda dapat melakukan pemesanan langsung melalui situs web kami atau menghubungi tim kami untuk layanan dan pengaturan pengiriman yang lebih personal.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default HexagonalCharcoalSection;
