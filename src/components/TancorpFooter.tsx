import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const SuryaGrisseFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-primary-foreground pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logo}
                alt="Surya Grisse Logo"
                className="h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              />
              <span className="font-bold text-2xl tracking-wide">Surya Grisse</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Produsen arang premium berbahan dasar 100% tempurung kelapa. 
              Kami menghadirkan produk berkualitas tinggi, efisien, dan ramah lingkungan 
              untuk pasar lokal maupun ekspor.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent flex items-center justify-center rounded-full transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent flex items-center justify-center rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent flex items-center justify-center rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent flex items-center justify-center rounded-full transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Tentang Kami */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wide">Tentang Kami</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Profil Perusahaan
                </a>
              </li>
              <li>
                <a href="#vision" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Visi & Misi
                </a>
              </li>
              <li>
                <a href="#process" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Proses Produksi
                </a>
              </li>
              <li>
                <a href="#sustainability" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Keberlanjutan
                </a>
              </li>
            </ul>
          </div>

          {/* Produk */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wide">Produk Kami</h3>
            <ul className="space-y-3">
              <li className="text-primary-foreground/80">Briket Arang Shisha</li>
              <li className="text-primary-foreground/80">Briket Arang BBQ</li>
              <li className="text-primary-foreground/80">Coconut Charcoal</li>
              <li className="text-primary-foreground/80">Custom Order (OEM)</li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wide">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Jl. Raya Grisse No. 88<br />
                  Gresik, Jawa Timur, Indonesia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">+62 812 3456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">info@suryagrisse.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Surya Grisse. Seluruh hak cipta dilindungi.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SuryaGrisseFooter;
