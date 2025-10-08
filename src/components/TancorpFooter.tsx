import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

const TancorpFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="careers" className="bg-primary text-primary-foreground pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="font-bold text-3xl mb-6">TANCORP</div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Perusahaan induk terkemuka yang menghadirkan nilai, membangun dampak sosial, 
              dan mendorong keberlanjutan.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wide">Tentang</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Profil Perusahaan
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Visi & Misi
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Budaya CINTA
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Penghargaan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wide">Business Units</h3>
            <ul className="space-y-3">
              <li className="text-primary-foreground/80">TanBiz Brand</li>
              <li className="text-primary-foreground/80">TanLink Distribution</li>
              <li className="text-primary-foreground/80">TanRise Property</li>
              <li className="text-primary-foreground/80">TanLife Health & Beauty</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wide">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Gedung Tancorp<br />
                  Jl. Raya Darmo No. 123<br />
                  Surabaya, Jawa Timur 60264
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">+62 31 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">info@tancorp.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Tancorp. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TancorpFooter;
