
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { mockCars } from "@/data/cars";
import { Car, Star, Shield, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredCars = mockCars.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-albanian-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
              Auto<span className="text-albanian-gold">Alb</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-4">
              "Makinat më të mira, çmimet më të përballueshme"
            </p>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Ne jemi platforma më e besueshme për blerje dhe shitje makinash në Shqipëri. 
              Ofrojmë makinat më cilësore me çmimet më konkurruese në treg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link 
                to="/kerko"
                className="bg-white text-albanian-red px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
              >
                Kërko Makinën Tënde
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-albanian-red transition-all duration-300">
                Rreth Nesh
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-albanian-gold/20 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-white/10 rounded-full animate-float animation-delay-2000"></div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pse të zgjedhësh <span className="text-albanian-red">AutoAlb</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jemi të angazhuar të sigurojmë shërbimin më të mirë për klientët tanë
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-red-gradient rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow transition-all duration-300">
                <Car className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cilësi e Garantuar</h3>
              <p className="text-gray-600">Çdo makinë kontrollohet nga ekspertët tanë</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gold-gradient rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow transition-all duration-300">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Çmime Konkurruese</h3>
              <p className="text-gray-600">Çmimet më të mira në treg për cilësinë e ofruar</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-red-gradient rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow transition-all duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Siguri dhe Besueshmëri</h3>
              <p className="text-gray-600">Transaksione të sigurta dhe transparente</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gold-gradient rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow transition-all duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Shërbim i Shkëlqyer</h3>
              <p className="text-gray-600">Mbështetje 24/7 për klientët tanë</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Makinat <span className="text-albanian-red">të Rekomanduara</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Zbuloni makinat më të mira nga inventari ynë me çmime të shkëlqyera
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/kerko"
              className="inline-flex items-center space-x-2 bg-red-gradient text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-albanian-red/30"
            >
              <span>Shiko të gjitha makinat</span>
              <Car className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-albanian-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-albanian-gold">500+</div>
              <div className="text-lg">Makinat të Shitura</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-albanian-gold">98%</div>
              <div className="text-lg">Klientë të Kënaqur</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-albanian-gold">50+</div>
              <div className="text-lg">Marka të Ndryshme</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-albanian-gold">24/7</div>
              <div className="text-lg">Mbështetje Klientësh</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
