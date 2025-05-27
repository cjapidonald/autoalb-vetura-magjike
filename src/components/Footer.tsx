
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-xl font-bold bg-orange-light-gradient bg-clip-text text-transparent">
                Auto Pazar
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Platforma më e mirë për blerje dhe shitje makinash në Shqipëri. 
              Makinat më të mira me çmimet më të përballueshme.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brand-orange">Lidhje të Shpejta</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-400 hover:text-brand-orange transition-colors">Ballina</a></li>
              <li><a href="/kerko" className="text-gray-400 hover:text-brand-orange transition-colors">Kërko Makinë</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">Rreth Nesh</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brand-orange">Kontakti</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand-orange" />
                <span className="text-gray-400">+355 69 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-orange" />
                <span className="text-gray-400">info@autopazar.al</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-brand-orange" />
                <span className="text-gray-400">Tiranë, Shqipëri</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brand-orange">Na Ndiqni</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-800 hover:bg-pink-600 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-800 hover:bg-brand-orange rounded-lg transition-all duration-300 hover:scale-110"
              >
                <div className="h-5 w-5 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-xs font-bold text-brand-orange">T</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Auto Pazar. Të gjitha të drejtat të rezervuara.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
