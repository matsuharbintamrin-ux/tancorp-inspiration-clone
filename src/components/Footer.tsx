import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-primary-foreground pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">E</span>
              </div>
              <span className="font-bold text-xl">Excellence Corp</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Perusahaan induk terkemuka yang menghadirkan nilai, membangun dampak sosial, 
              dan mendorong keberlanjutan.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Tautan Cepat</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#business" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Unit Bisnis
                </a>
              </li>
              <li>
                <a href="#values" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Nilai Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Karir
                </a>
              </li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="font-bold text-lg mb-4">Unit Bisnis</h3>
            <ul className="space-y-3">
              <li className="text-primary-foreground/80">Manufaktur</li>
              <li className="text-primary-foreground/80">Distribusi & Retail</li>
              <li className="text-primary-foreground/80">Teknologi</li>
              <li className="text-primary-foreground/80">Properti</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Jl. Sudirman No. 123<br />Jakarta Pusat, 10220
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">+62 21 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">info@excellence.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Excellence Corporation. All rights reserved.
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

export default Footer;
