
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Car, Star, Shield, Award, Users, Clock, Heart } from "lucide-react";

const RrethNesh = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-brand-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Rreth <span className="text-brand-orange">Nesh</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-4">
              "Makinat më të mira, çmimet më të përballueshme"
            </p>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Jemi themeluar para 3 vitesh dhe specializohemi në importin e makinave nga Korea. 
              Ne jemi platforma më e besueshme për blerje dhe shitje makinash në Shqipëri. 
              Ofrojmë makinat më cilësore me çmimet më konkurruese në treg.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-brand-orange/20 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-white/10 rounded-full animate-float animation-delay-2000"></div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Historia <span className="text-brand-orange">Jonë</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-brand-orange" />
                  <span className="text-lg font-semibold text-gray-900">3 Vite Përvojë</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Që nga themelimi ynë, ne kemi qenë të përkushtuar për të ofruar shërbimin më të mirë 
                  për klientët tanë. Specializimi ynë në importin e makinave nga Korea na ka bërë një nga 
                  kompanitë më të besueshme në treg.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Ne kuptojmë se blerja e një makine është një vendim i rëndësishëm, prandaj ne sigurojmë 
                  që çdo makinë në inventarin tonë të jetë kontrolluar dhe e certifikuar nga ekspertët tanë.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-gradient p-6 rounded-xl text-white">
                  <h3 className="text-xl font-semibold mb-3">Misioni Ynë</h3>
                  <p className="text-white/90">
                    Të bëhemi platforma kryesore për blerje dhe shitje makinash në Shqipëri, 
                    duke ofruar cilësinë më të lartë me çmimet më konkurruese.
                  </p>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Vizioni Ynë</h3>
                  <p className="text-gray-600">
                    Të transformojmë industrinë e makinave në Shqipëri duke sjellë transparencë, 
                    besueshmëri dhe shërbim të shkëlqyer për çdo klient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vlerat <span className="text-brand-orange">Tona</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Principet që na udhëheqin në çdo vendim dhe veprim
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-gradient rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow transition-all duration-300">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pasion</h3>
              <p className="text-gray-600">
                Ne jemi të apasionuar pas makinave dhe e duam atë që bëjmë. 
                Ky pasion reflektohet në çdo shërbim që ofrojmë.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-light-gradient rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow transition-all duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Besueshmëri</h3>
              <p className="text-gray-600">
                Transparenca dhe ndershmëria janë themelet e biznesit tonë. 
                Klientët tanë mund të mbështeten tek ne plotësisht.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-gradient rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow transition-all duration-300">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cilësi</h3>
              <p className="text-gray-600">
                Cilësia është prioriteti ynë kryesor. Çdo makinë kontrollohet 
                me kujdes për të garantuar standardet më të larta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ekipi <span className="text-brand-orange">Ynë</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Një ekip i përkushtuar ekspertësh që punojnë për ju
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-orange-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Ekspertë Teknike</h3>
              <p className="text-gray-600 text-sm">
                Specialistë me përvojë në kontrollin dhe vlerësimin e makinave
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-orange-light-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Konsulentë Shitjesh</h3>
              <p className="text-gray-600 text-sm">
                Profesionistë që ju ndihmojnë të gjeni makinën perfekte
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-orange-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Shërbim Klientësh</h3>
              <p className="text-gray-600 text-sm">
                Mbështetje 24/7 për çdo pyetje ose nevojë që mund të keni
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RrethNesh;
