
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-xl font-bold bg-orange-light-gradient bg-clip-text text-transparent">
                Pazari Auto
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Jemi themeluar para 3 vitesh dhe specializohemi në importin e makinave nga Korea. 
              Platforma më e mirë për blerje dhe shitje makinash në Shqipëri me çmimet më të përballueshme.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brand-orange">Lidhje të Shpejta</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-brand-orange transition-colors">Ballina</Link></li>
              <li><Link to="/kerko" className="text-gray-400 hover:text-brand-orange transition-colors">Kërko Makinë</Link></li>
              <li><Link to="/rreth-nesh" className="text-gray-400 hover:text-brand-orange transition-colors">Rreth Nesh</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brand-orange">Kontakti</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand-orange" />
                <span className="text-gray-400">069 971 1350</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-orange" />
                <span className="text-gray-400">info@vrum.al</span>
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
                href="https://www.facebook.com/shqiperiabehetsupporters"
                target="_blank"
                rel="noopener noreferrer"
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
            © 2025 Pazari Auto. Të gjitha të drejtat të rezervuara.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
