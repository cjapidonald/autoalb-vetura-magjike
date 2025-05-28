
import { useState } from "react";
import { Calendar, Fuel, MapPin, Palette, Users, Zap, Phone } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  kilometers: number;
  fuel: string;
  transmission: string;
  color: string;
  seats: number;
  image: string;
  description?: string;
}

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

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

  const handleContactClick = () => {
    const message = `Përshëndetje! Jam i interesuar për ${car.brand} ${car.model} (${car.year}) me çmim ${formatPrice(car.price)}.`;
    const whatsappUrl = `https://wa.me/355699711350?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:scale-105">
          <div className="relative overflow-hidden">
            <img 
              src={car.image} 
              alt={`${car.brand} ${car.model}`}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-brand-orange text-white font-semibold">
                {car.year}
              </Badge>
            </div>
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-white/90 text-brand-orange font-bold">
                {formatPrice(car.price)}
              </Badge>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-orange transition-colors">
              {car.brand} {car.model}
            </h3>
            
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-brand-orange" />
                <span>{formatKilometers(car.kilometers)} km</span>
              </div>
              <div className="flex items-center space-x-2">
                <Fuel className="h-4 w-4 text-brand-orange" />
                <span>{car.fuel}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Palette className="h-4 w-4 text-brand-orange" />
                <span>{car.color}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-brand-orange" />
                <span>{car.seats} vende</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 text-gray-500">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Tiranë</span>
              </div>
              <span className="text-lg font-bold text-brand-orange">
                {formatPrice(car.price)}
              </span>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            {car.brand} {car.model} ({car.year})
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={car.image} 
                alt={`${car.brand} ${car.model}`}
                className="w-full h-64 lg:h-80 object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-brand-orange text-white font-bold text-lg px-3 py-1">
                  {formatPrice(car.price)}
                </Badge>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-5 w-5 text-brand-orange" />
                  <span className="font-semibold text-gray-700">Viti</span>
                </div>
                <p className="text-lg font-bold text-gray-900">{car.year}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="h-5 w-5 text-brand-orange" />
                  <span className="font-semibold text-gray-700">Kilometra</span>
                </div>
                <p className="text-lg font-bold text-gray-900">{formatKilometers(car.kilometers)} km</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Fuel className="h-5 w-5 text-brand-orange" />
                  <span className="font-semibold text-gray-700">Karburanti</span>
                </div>
                <p className="text-lg font-bold text-gray-900">{car.fuel}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="h-5 w-5 text-brand-orange" />
                  <span className="font-semibold text-gray-700">Transmisioni</span>
                </div>
                <p className="text-lg font-bold text-gray-900">{car.transmission}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Palette className="h-5 w-5 text-brand-orange" />
                  <span className="font-semibold text-gray-700">Ngjyra</span>
                </div>
                <p className="text-lg font-bold text-gray-900">{car.color}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="h-5 w-5 text-brand-orange" />
                  <span className="font-semibold text-gray-700">Vendet</span>
                </div>
                <p className="text-lg font-bold text-gray-900">{car.seats} vende</p>
              </div>
            </div>

            {car.description && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-2">Përshkrimi</h4>
                <p className="text-gray-600">{car.description}</p>
              </div>
            )}

            <div className="pt-4 border-t">
              <button 
                onClick={handleContactClick}
                className="w-full bg-orange-gradient text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-lg"
              >
                Kontakto për këtë makinë
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CarCard;
