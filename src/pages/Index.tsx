import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { useCars } from "@/hooks/useCars";
import { Car, Star, Shield, Award, Users, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const { data: cars = [], isLoading } = useCars();
  const featuredCars = cars.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-brand-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
              Pazari <span className="text-brand-orange">Auto</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-4">
              Gjej makinën perfekte për ty
            </p>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Platforma më e besueshme për blerje dhe shitje makinash në Shqipëri me çmimet më konkurruese në treg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link 
                to="/kerko"
                className="bg-white text-brand-orange px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
              >
                Kërko Makinën Tënde
              </Link>
              <Link
                to="/rreth-nesh"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-brand-orange transition-all duration-300"
              >
                Rreth Nesh
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-brand-orange/20 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-white/10 rounded-full animate-float animation-delay-2000"></div>
      </section>

      {/* About Section - Made shorter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pse të zgjedhësh <span className="text-brand-orange">Pazari Auto</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jemi të angazhuar të sigurojmë shërbimin më të mirë për klientët tanë
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="w-14 h-14 bg-orange-gradient rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:animate-glow transition-all duration-300">
                <Car className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cilësi e Garantuar</h3>
              <p className="text-gray-600 text-sm">Çdo makinë kontrollohet nga ekspertët tanë</p>
            </div>

            <div className="text-center group">
              <div className="w-14 h-14 bg-orange-light-gradient rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:animate-glow transition-all duration-300">
                <Star className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Çmime Konkurruese</h3>
              <p className="text-gray-600 text-sm">Çmimet më të mira në treg për cilësinë e ofruar</p>
            </div>

            <div className="text-center group">
              <div className="w-14 h-14 bg-orange-gradient rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:animate-glow transition-all duration-300">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Siguri dhe Besueshmëri</h3>
              <p className="text-gray-600 text-sm">Transaksione të sigurta dhe transparente</p>
            </div>

            <div className="text-center group">
              <div className="w-14 h-14 bg-orange-light-gradient rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:animate-glow transition-all duration-300">
                <Award className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Shërbim i Shkëlqyer</h3>
              <p className="text-gray-600 text-sm">Mbështetje 24/7 për klientët tanë</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Makinat <span className="text-brand-orange">të Rekomanduara</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Zbuloni makinat më të mira nga inventari ynë me çmime të shkëlqyera
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                  <div className="w-full h-48 bg-gray-300"></div>
                  <div className="p-6 space-y-3">
                    <div className="h-6 bg-gray-300 rounded"></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-4 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded"></div>
                    </div>
                    <div className="flex justify-between">
                      <div className="h-4 bg-gray-300 rounded w-20"></div>
                      <div className="h-6 bg-gray-300 rounded w-24"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link 
              to="/kerko"
              className="inline-flex items-center space-x-2 bg-orange-gradient text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-brand-orange/30"
            >
              <span>Shiko të gjitha makinat</span>
              <Car className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-brand-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-brand-orange">500+</div>
              <div className="text-lg">Makinat të Shitura</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-brand-orange">98%</div>
              <div className="text-lg">Klientë të Kënaqur</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-brand-orange">50+</div>
              <div className="text-lg">Marka të Ndryshme</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-brand-orange">24/7</div>
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
