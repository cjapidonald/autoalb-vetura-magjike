
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-black/95 backdrop-blur-md border-b border-brand-orange/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div>
              <h1 className="text-2xl font-bold bg-orange-light-gradient bg-clip-text text-transparent">
                Vrum Vrum
              </h1>
              <p className="text-xs text-gray-400">Makinat më të mira</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-brand-orange transition-colors duration-300 relative group"
            >
              Ballina
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/kerko" 
              className="text-white hover:text-brand-orange transition-colors duration-300 relative group flex items-center space-x-1"
            >
              <Search className="h-4 w-4" />
              <span>Kërko</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/rreth-nesh" 
              className="text-white hover:text-brand-orange transition-colors duration-300 relative group"
            >
              Rreth Nesh
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link 
              to="/kerko"
              className="bg-orange-gradient hover:scale-105 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-orange/50"
            >
              Kërko Makinë
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
