import { IProduct } from "../types";
import image1 from "@/assets/img/1.png";
import image2 from "@/assets/img/2.png";
import image3 from "@/assets/img/3.png";
import image4 from "@/assets/img/4.png";
import image5 from "@/assets/img/5.png";

export const Product: IProduct[] = [
  {
    id: "1",
    title: "Óculos Rift",
    description: "Fone de ouvido para jogos com microfone",
    price: 2198.99,
    img: image1,
    availableQuantity: 3,
    flashSale: {},
    inStock: true,
  },
  {
    id: "2",
    title: "Cadeira Gamer",
    description: "Cadeira ergonômica para jogos",
    price: 859.99,
    img: image2,
    availableQuantity: 10,
    flashSale: {},
    inStock: true,
  },
  {
    id: "3",
    title: "Teclado Mecânico",
    description: "Teclado mecânico RGB para gamers",
    price: 399.99,
    img: image3,
    availableQuantity: 15,
    flashSale: {},
    inStock: true,
  },
  {
    id: "4",
    title: "Mouse Gamer",
    description: "Mouse óptico com DPI ajustável",
    price: 249.99,
    img: image4,
    availableQuantity: 20,
    flashSale: {},
    inStock: true,
  },
  {
    id: "5",
    title: "Monitor 4K",
    description: "Monitor 4K UHD para uma experiência de jogo imersiva",
    price: 1899.99,
    img: image5,
    availableQuantity: 7,
    flashSale: {},
    inStock: true,
  },
  {
    id: "6",
    title: "Headset Wireless",
    description: "Headset sem fio com cancelamento de ruído",
    price: 999.99,
    img: image5,
    availableQuantity: 12,
    flashSale: {},
    inStock: true,
  },
  {
    id: "7",
    title: "Controle para Console",
    description: "Controle wireless para console de última geração",
    price: 349.99,
    img: image4,
    availableQuantity: 25,
    flashSale: {},
    inStock: true,
  },
  {
    id: "8",
    title: "Notebook Gamer",
    description: "Notebook de alta performance para jogos",
    price: 4999.99,
    img: image3,
    availableQuantity: 5,
    flashSale: {},
    inStock: true,
  },
  {
    id: "9",
    title: "Console de Video Game",
    description: "Console de última geração com suporte a 4K",
    price: 2999.99,
    img: image2,
    availableQuantity: 8,
    flashSale: {},
    inStock: true,
  },
  {
    id: "10",
    title: "Câmera de Streaming",
    description: "Câmera Full HD para streaming e videochamadas",
    price: 599.99,
    img: image1,
    availableQuantity: 18,
    flashSale: {},
    inStock: true,
  },
];
