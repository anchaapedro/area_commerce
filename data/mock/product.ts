import { IPricing, IProduct } from "../types";
import image1 from "@/assets/img/1.png";
import image2 from "@/assets/img/2.png";
import image3 from "@/assets/img/3.png";
import image4 from "@/assets/img/4.png";
import image5 from "@/assets/img/5.png";

export const Product: IProduct[] = [
  {
    name: "Óculos Rift",
    description: "Fone de ouvido para jogos com microfone",
    category: "Óculos",
    price: 2198.99,
    quantity: 3,
    availability: true,
    image: image1,
  },
  {
    name: "Cadeira Gamer",
    description: "Cadeira ergonômica para jogos",
    category: "Cadeira",
    price: 859.99,
    quantity: 10,
    availability: true,
    image: image2,
  },
  {
    name: "Teclado Mecânico",
    description: "Teclado mecânico RGB para gamers",
    category: "Teclado",
    price: 399.99,
    quantity: 15,
    availability: true,
    image: image3,
  },
  {
    name: "Mouse Gamer",
    description: "Mouse óptico com DPI ajustável",
    category: "Mouse",
    price: 249.99,
    quantity: 20,
    availability: true,
    image: image4,
  },
  {
    name: "Monitor 4K",
    description: "Monitor 4K UHD para uma experiência de jogo imersiva",
    category: "Monitor",
    price: 1899.99,
    quantity: 7,
    availability: true,
    image: image5,
  },
  {
    name: "Headset Wireless",
    description: "Headset sem fio com cancelamento de ruído",
    category: "Headset",
    price: 999.99,
    quantity: 12,
    availability: true,
    image: image5,
  },
  {
    name: "Controle para Console",
    description: "Controle wireless para console de última geração",
    category: "Controle",
    price: 349.99,
    quantity: 25,
    availability: true,
    image: image4,
  },
  {
    name: "Notebook Gamer",
    description: "Notebook de alta performance para jogos",
    category: "Notebook",
    price: 4999.99,
    quantity: 5,
    availability: true,
    image: image3,
  },
  {
    name: "Console de Video Game",
    description: "Console de última geração com suporte a 4K",
    category: "Console",
    price: 2999.99,
    quantity: 8,
    availability: true,
    image: image2,
  },
  {
    name: "Câmera de Streaming",
    description: "Câmera Full HD para streaming e videochamadas",
    category: "Câmera",
    price: 599.99,
    quantity: 18,
    availability: true,
    image: image1,
  },
];
