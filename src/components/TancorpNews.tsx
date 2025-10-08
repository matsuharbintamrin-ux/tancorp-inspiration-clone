import { Card, CardContent } from "@/components/ui/card";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const TancorpNews = () => {
  const newsItems = [
    {
      image: news1,
      title: "Hermanto Tanoko bagikan Tips Gen Z agar Bisnis berkelanjutan",
      date: "Mar 18, 2024",
      excerpt: "Hermanto Tanoko selaku Komisaris Utama Avia Avian sekaligus CEO Tancorp hadir menjadi pembicara di acara Fortune Indonesia Summit (FIS) 2024 dengan tema The Stories That Matter pada Kamis (7/3/2024) di Hotel Tribrata Darmawangsa, Jakarta. Fortune Indonesia..."
    },
    {
      image: news2,
      title: "Topping Off, Komitmen Tanrise Kembangkan Kyo Society",
      date: "Jul 20, 2023",
      excerpt: "PT Jaya Sukses Makmur Sentosa Tbk (RISE) atau yang lebih dikenal dengan Tanrise Property berkomitmen menyelesaikan pembangunan tepat waktu. Salah satunya dengan melaksanakan topping off, Kamis (25/5/2023). \"Topping off merupakan momen penting bagi kami karena..."
    },
    {
      image: news3,
      title: "Gion Creative Market, Tempat Kuliner Baru yang Cozy di Surabaya",
      date: "Jul 20, 2023",
      excerpt: "PT Jaya Sukses Makmur Sentosa Tbk (RISE) atau yang lebih dikenal dengan Tanrise Property menghadirkan tempat kuliner terbaru di Surabaya bernama Gion Creative Hub, tepatnya di jalan MERR. Dengan konsep Modern Food Arcade dengan puluhan pilihan tenant, tempatnya..."
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Berita Terbaru
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {item.date}
                </p>
                
                <p className="text-muted-foreground leading-relaxed line-clamp-4">
                  {item.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="inline-block px-12 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg font-medium"
          >
            « Older Entries
          </a>
        </div>
      </div>
    </section>
  );
};

export default TancorpNews;
