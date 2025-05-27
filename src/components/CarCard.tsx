
import { useState } from "react";
import { Car, Calendar, Gauge, Fuel, Users, Eye } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface CarData {
  id: string;
  brand: string;
  model: string;
  year: number;
  kilometers: number;
  price: number;
  fuel: string;
  transmission: string;
  color: string;
  seats: number;
  image: string;
  description: string;
  gallery: string[];
  features: string[];
}

interface CarCardProps {
  car: CarData;
}

const CarCard = ({ car }: CarCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('sq-AL', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatKilometers = (km: number) => {
    return new Intl.NumberFormat('sq-AL').format(km);
  };

  return (
    <>
      <div 
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer border border-gray-200 hover:border-brand-orange/30"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative overflow-hidden">
          <img 
            src={car.image} 
            alt={`${car.brand} ${car.model}`}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4">
            <Badge className="bg-orange-gradient text-white border-0">
              {formatPrice(car.price)}
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center space-x-1 text-white">
              <Eye className="h-4 w-4" />
              <span className="text-sm">Shiko detajet</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">
            {car.brand} {car.model}
          </h3>
          
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4 text-brand-orange" />
              <span>{car.year}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Gauge className="h-4 w-4 text-brand-orange" />
              <span>{formatKilometers(car.kilometers)} km</span>
            </div>
            <div className="flex items-center space-x-1">
              <Fuel className="h-4 w-4 text-brand-orange" />
              <span>{car.fuel}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4 text-brand-orange" />
              <span>{car.seats} ulëse</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              {car.transmission} • {car.color}
            </div>
            <div className="text-2xl font-bold text-brand-orange">
              {formatPrice(car.price)}
            </div>
          </div>
        </div>
      </div>

      {/* Car Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-brand-orange">
              {car.brand} {car.model} ({car.year})
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative">
                <img 
                  src={car.gallery[currentImageIndex] || car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                  {currentImageIndex + 1} / {car.gallery.length || 1}
                </div>
              </div>
              
              {car.gallery.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {car.gallery.map((img, index) => (
                    <img 
                      key={index}
                      src={img}
                      alt={`${car.brand} ${car.model} ${index + 1}`}
                      className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${
                        currentImageIndex === index ? 'border-brand-orange' : 'border-gray-200'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Car Details */}
            <div className="space-y-6">
              <div className="text-3xl font-bold text-brand-orange">
                {formatPrice(car.price)}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-brand-orange" />
                    <span className="font-semibold">Viti:</span>
                    <span>{car.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Gauge className="h-5 w-5 text-brand-orange" />
                    <span className="font-semibold">Kilometra:</span>
                    <span>{formatKilometers(car.kilometers)} km</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Fuel className="h-5 w-5 text-brand-orange" />
                    <span className="font-semibold">Karburanti:</span>
                    <span>{car.fuel}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Car className="h-5 w-5 text-brand-orange" />
                    <span className="font-semibold">Transmisioni:</span>
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-brand-orange" />
                    <span className="font-semibold">Ulëse:</span>
                    <span>{car.seats}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Ngjyra:</span>
                    <span className="ml-2">{car.color}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Përshkrimi</h4>
                <p className="text-gray-600 leading-relaxed">
                  {car.description}
                </p>
              </div>

              {car.features.length > 0 && (
                <div>
                  <h4 className="font-semibold text-lg mb-2">Karakteristika</h4>
                  <div className="flex flex-wrap gap-2">
                    {car.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="border-brand-orange text-brand-orange">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t">
                <button className="w-full bg-orange-gradient text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                  Kontakto për këtë makinë
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CarCard;
