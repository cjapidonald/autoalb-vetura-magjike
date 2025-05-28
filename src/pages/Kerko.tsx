
import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { brands, fuelTypes, transmissionTypes } from "@/data/cars";
import { useCars } from "@/hooks/useCars";
import { Search, Filter, X, Car, SlidersHorizontal, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const Kerko = () => {
  const { data: cars = [], isLoading, error } = useCars();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [yearRange, setYearRange] = useState([2015, 2024]);
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [kmRange, setKmRange] = useState([0, 300000]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      const matchesSearch = searchTerm === "" || 
        car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesBrand = selectedBrand === "" || selectedBrand === "all" || car.brand === selectedBrand;
      const matchesFuel = selectedFuel === "" || selectedFuel === "all" || car.fuel === selectedFuel;
      const matchesTransmission = selectedTransmission === "" || selectedTransmission === "all" || car.transmission === selectedTransmission;
      const matchesYear = car.year >= yearRange[0] && car.year <= yearRange[1];
      const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];
      const matchesKm = car.kilometers >= kmRange[0] && car.kilometers <= kmRange[1];

      return matchesSearch && matchesBrand && matchesFuel && matchesTransmission && 
             matchesYear && matchesPrice && matchesKm;
    });
  }, [cars, searchTerm, selectedBrand, selectedFuel, selectedTransmission, yearRange, priceRange, kmRange]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedBrand("");
    setSelectedFuel("");
    setSelectedTransmission("");
    setYearRange([2015, 2024]);
    setPriceRange([0, 50000]);
    setKmRange([0, 300000]);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('sq-AL', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatKm = (km: number) => {
    return new Intl.NumberFormat('sq-AL').format(km);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-12">
            <Car className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Gabim në ngarkim
            </h3>
            <p className="text-gray-600">
              Ka ndodhur një gabim gjatë ngarkimit të makinave. Ju lutem provoni përsëri.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-albanian-gradient py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-float">
            Kërko Makinën <span className="text-albanian-gold">Perfekte</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Gjej makinën e ëndrrave tua nga inventari ynë i gjerë
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-albanian-red" />
                  <span>Filtrat</span>
                </h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="text-albanian-red hover:bg-albanian-red/10"
                >
                  <X className="h-4 w-4 mr-1" />
                  Pastro
                </Button>
              </div>

              <div className="space-y-6">
                {/* Search Input */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Kërko</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Marka, modeli..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 border-gray-300 focus:border-albanian-red focus:ring-albanian-red"
                    />
                  </div>
                </div>

                {/* Brand Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Marka</label>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger>
                      <SelectValue placeholder="Zgjedh markën" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Të gjitha markat</SelectItem>
                      {brands.map(brand => (
                        <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Fuel Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Karburanti</label>
                  <Select value={selectedFuel} onValueChange={setSelectedFuel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Zgjedh karburantin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Të gjitha llojet</SelectItem>
                      {fuelTypes.map(fuel => (
                        <SelectItem key={fuel} value={fuel}>{fuel}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Transmission Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Transmisioni</label>
                  <Select value={selectedTransmission} onValueChange={setSelectedTransmission}>
                    <SelectTrigger>
                      <SelectValue placeholder="Zgjedh transmisionin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Të gjitha llojet</SelectItem>
                      {transmissionTypes.map(transmission => (
                        <SelectItem key={transmission} value={transmission}>{transmission}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Year Range */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700">
                    Viti: {yearRange[0]} - {yearRange[1]}
                  </label>
                  <Slider
                    value={yearRange}
                    onValueChange={setYearRange}
                    min={2010}
                    max={2024}
                    step={1}
                    className="w-full"
                  />
                </div>

                {/* Price Range */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700">
                    Çmimi: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={0}
                    max={50000}
                    step={1000}
                    className="w-full"
                  />
                </div>

                {/* Kilometers Range */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700">
                    Kilometra: {formatKm(kmRange[0])} - {formatKm(kmRange[1])} km
                  </label>
                  <Slider
                    value={kmRange}
                    onValueChange={setKmRange}
                    min={0}
                    max={300000}
                    step={5000}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Cars Grid */}
          <div className="lg:w-3/4">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
              <Button 
                onClick={() => setShowFilters(!showFilters)}
                className="w-full bg-red-gradient text-white"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filtrat ({filteredCars.length} rezultate)
              </Button>
            </div>

            {/* Results Header */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Duke ngarkuar...</span>
                    </div>
                  ) : (
                    `${filteredCars.length} makina të gjetura`
                  )}
                </h2>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Car className="h-5 w-5" />
                  <span>Rezultatet e kërkimit</span>
                </div>
              </div>
            </div>

            {/* Cars Grid */}
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
            ) : filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nuk u gjetën rezultate
                </h3>
                <p className="text-gray-600 mb-6">
                  Provo të ndryshosh kriteret e kërkimit ose pastro filtrat për të parë më shumë makina.
                </p>
                <Button 
                  onClick={clearFilters}
                  className="bg-red-gradient text-white"
                >
                  Pastro Filtrat
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Kerko;
