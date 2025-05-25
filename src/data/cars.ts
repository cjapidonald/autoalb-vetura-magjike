
export interface CarData {
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

export const mockCars: CarData[] = [
  {
    id: "1",
    brand: "BMW",
    model: "320i",
    year: 2019,
    kilometers: 45000,
    price: 28500,
    fuel: "Benzinë",
    transmission: "Automatik",
    color: "Blu",
    seats: 5,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop",
    description: "BMW 320i në gjendje të shkëlqyer, i mirëmbajtur rregullisht. Makinë elegante dhe e fuqishme, ideale për përdorim të përditshëm dhe udhëtime të gjata.",
    gallery: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=300&fit=crop"
    ],
    features: ["Navigacion GPS", "Ulëse lëkure", "Klimatizim automatik", "Bluetooth", "Kamera prapa"]
  },
  {
    id: "2", 
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2020,
    kilometers: 32000,
    price: 35000,
    fuel: "Diesel",
    transmission: "Automatik",
    color: "E zezë",
    seats: 5,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&h=300&fit=crop",
    description: "Mercedes-Benz C-Class me standarde të larta luksi dhe sigurie. Teknologji moderne dhe performancë e shkëlqyer.",
    gallery: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571607388263-1044be9e54c4?w=500&h=300&fit=crop"
    ],
    features: ["AMG Line", "Navigacion premium", "Sistemi i alarmit", "LED farë", "Kontrolli i kursimit të karburantit"]
  },
  {
    id: "3",
    brand: "Audi", 
    model: "A4",
    year: 2018,
    kilometers: 55000,
    price: 24000,
    fuel: "Benzinë",
    transmission: "Manual",
    color: "E bardhë",
    seats: 5,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&fit=crop",
    description: "Audi A4 me dizajn modern dhe performancë të lartë. Makinë shumë ekonomike dhe e besueshme.",
    gallery: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&h=300&fit=crop"
    ],
    features: ["Quattro drive", "Virtual cockpit", "Park assist", "Cruise control", "Heated seats"]
  },
  {
    id: "4",
    brand: "Volkswagen",
    model: "Golf",
    year: 2021,
    kilometers: 18000,
    price: 22000,
    fuel: "Benzinë",
    transmission: "Automatik", 
    color: "E kuqe",
    seats: 5,
    image: "https://images.unsplash.com/photo-1549399976-b4bb4129e961?w=500&h=300&fit=crop",
    description: "Volkswagen Golf i ri me teknologji të avancuar dhe konsum të ulët karburanti. Perfekt për qytet.",
    gallery: [
      "https://images.unsplash.com/photo-1549399976-b4bb4129e961?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1493238792000-8113da705763?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=300&fit=crop"
    ],
    features: ["Start/Stop", "Multimedial system", "Lane assist", "Emergency brake", "Wireless charging"]
  },
  {
    id: "5",
    brand: "Toyota",
    model: "Corolla",
    year: 2019,
    kilometers: 38000,
    price: 18500,
    fuel: "Hybrid",
    transmission: "CVT",
    color: "Gri", 
    seats: 5,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&h=300&fit=crop",
    description: "Toyota Corolla Hybrid ekonomike dhe miqësore me mjedisin. Cilësi e lartë japoneze.",
    gallery: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=500&h=300&fit=crop"
    ],
    features: ["Toyota Safety Sense", "Hybrid engine", "Low emissions", "Touch screen", "Rear camera"]
  },
  {
    id: "6",
    brand: "Ford",
    model: "Focus",
    year: 2020,
    kilometers: 25000,
    price: 16800,
    fuel: "Benzinë",
    transmission: "Manual",
    color: "Blu e errët",
    seats: 5,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&h=300&fit=crop",
    description: "Ford Focus dinamik dhe sportiv. Makinë e përshtatshme për të rinjtë dhe familjet e vogla.",
    gallery: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&h=300&fit=crop"
    ],
    features: ["SYNC 3", "Sport mode", "Traction control", "Electronic stability", "Alloy wheels"]
  }
];

export const brands = ["BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Toyota", "Ford", "Renault", "Peugeot", "Nissan", "Honda"];
export const fuelTypes = ["Benzinë", "Diesel", "Hybrid", "Elektrike"];
export const transmissionTypes = ["Manual", "Automatik", "CVT"];
