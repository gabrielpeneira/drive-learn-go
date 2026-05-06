export type CarStatus = "available" | "in_use" | "maintenance";

export interface Car {
  id: string;
  model: string;
  plate: string;
  battery: number;
  range: number;
  pricePerMin: number;
  status: CarStatus;
  distance: number;
  x: number; // map %
  y: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: "Iniciante" | "Intermediário" | "Avançado";
  lessons: number;
  rating: number;
  category: string;
  image: string;
  benefit: string;
}

export interface Trip {
  id: string;
  carModel: string;
  date: string;
  duration: string;
  cost: number;
}

export const cars: Car[] = [
  { id: "c1", model: "Fiat Mobi Elétrico", plate: "DRV-2401", battery: 87, range: 142, pricePerMin: 0.65, status: "available", distance: 120, x: 30, y: 40 },
  { id: "c2", model: "Renault Kwid E-Tech", plate: "DRV-1188", battery: 64, range: 98, pricePerMin: 0.75, status: "available", distance: 280, x: 55, y: 25 },
  { id: "c3", model: "VW e-Up!", plate: "DRV-0042", battery: 92, range: 220, pricePerMin: 0.85, status: "available", distance: 410, x: 70, y: 60 },
  { id: "c4", model: "BYD Dolphin", plate: "DRV-7733", battery: 45, range: 75, pricePerMin: 0.95, status: "in_use", distance: 180, x: 20, y: 70 },
  { id: "c5", model: "Chevrolet Onix", plate: "DRV-5510", battery: 12, range: 18, pricePerMin: 0.55, status: "maintenance", distance: 520, x: 80, y: 45 },
  { id: "c6", model: "Caoa Chery iCar", plate: "DRV-9001", battery: 78, range: 165, pricePerMin: 0.70, status: "available", distance: 90, x: 45, y: 55 },
];

export const courses: Course[] = [
  {
    id: "k1",
    title: "Direção Defensiva Avançada",
    description: "Antecipe situações de risco no trânsito urbano e desenvolva reflexos defensivos.",
    duration: "4h 30m",
    level: "Intermediário",
    lessons: 12,
    rating: 4.9,
    category: "Defensiva",
    image: "🛡️",
    benefit: "15% off em corridas",
  },
  {
    id: "k2",
    title: "Legislação de Trânsito 2026",
    description: "Atualizações do CTB, novas multas e direitos do condutor.",
    duration: "2h 15m",
    level: "Iniciante",
    lessons: 8,
    rating: 4.7,
    category: "Teoria",
    image: "📚",
    benefit: "+50 pontos",
  },
  {
    id: "k3",
    title: "Direção Urbana Inteligente",
    description: "Domine grandes centros: rotatórias, faixas exclusivas e estacionamento paralelo.",
    duration: "3h 00m",
    level: "Iniciante",
    lessons: 10,
    rating: 4.8,
    category: "Prática",
    image: "🏙️",
    benefit: "10% off em corridas",
  },
  {
    id: "k4",
    title: "Carros Elétricos & EV",
    description: "Tudo sobre veículos elétricos: autonomia, recarga e direção econômica.",
    duration: "1h 45m",
    level: "Iniciante",
    lessons: 6,
    rating: 4.9,
    category: "EV",
    image: "⚡",
    benefit: "1ª corrida grátis",
  },
  {
    id: "k5",
    title: "Alta Performance & Pista",
    description: "Técnicas avançadas de condução e controle do veículo.",
    duration: "5h 20m",
    level: "Avançado",
    lessons: 14,
    rating: 4.6,
    category: "Avançado",
    image: "🏁",
    benefit: "Selo Pro",
  },
];

export const trips: Trip[] = [
  { id: "t1", carModel: "VW e-Up!", date: "Hoje · 14:32", duration: "23 min", cost: 19.55 },
  { id: "t2", carModel: "Renault Kwid E-Tech", date: "Ontem · 09:10", duration: "47 min", cost: 35.25 },
  { id: "t3", carModel: "Fiat Mobi Elétrico", date: "3 mai · 18:44", duration: "15 min", cost: 9.75 },
];

export const adminUsers = [
  { id: "u1", name: "Marina Souza", email: "marina@drv.app", role: "Cliente", trips: 23, status: "Ativo" },
  { id: "u2", name: "Carlos Tavares", email: "carlos@drv.app", role: "Cliente", trips: 8, status: "Ativo" },
  { id: "u3", name: "Júlia Mendes", email: "julia@drv.app", role: "Admin", trips: 0, status: "Ativo" },
  { id: "u4", name: "Rafael Lima", email: "rafa@drv.app", role: "Cliente", trips: 41, status: "Suspenso" },
];
