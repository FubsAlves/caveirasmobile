interface ItemProps {
  id: number;
  name: string;
  logoSrc?: string;
  secondaryLogoSrc?: string; 
  imageSrc: string;
  description: string;
  price: string;
  category: string;
}

export const itemImages : ItemProps[] = [
  {
    id: 1,
    name: "CB Rodeio",
    logoSrc: "https://i.imgur.com/x9CbQ65.png",
    imageSrc: "https://i.imgur.com/kieF08b.jpg",
    description: "Pão de gergelim, dois smash burguer, cheddar, barbecue, onion e maionese defumada.",
    price: "27.99",
    category: "Tradicional",
  },
  {
    id: 2,
    name: "Quarteirão Caveira",
    logoSrc: "https://i.imgur.com/KMhZKCl.png",
    imageSrc: "https://i.imgur.com/4Q0VGtL.jpg",
    description: "Pão de gergelim, hambúrguer artesanal, cheddar, Mostarda, Ketchup, cebola picada e picles.",
    price: "25.99",
    category: "Tradicional",
  },
  {
    id: 3,
    name: "CB Melt",
    logoSrc: "https://i.imgur.com/5ajpgmK.png",
    imageSrc: "https://i.imgur.com/n7dAsqW.jpg",
    description: "Pão de gegelim escuro, hambúrguer 100g, molho cheddar cremoso e cebola ao molho shoyu.",
    price: "26.99",
    category: "Tradicional",
  },
  {
    id: 5,
    name: "CB Melt Bacon",
    logoSrc: "https://i.imgur.com/5ajpgmK.png",
    imageSrc: "https://i.imgur.com/M6auVrG.jpg",
    secondaryLogoSrc: "https://i.imgur.com/MyGn9Lo.jpg",
    description: "Pão de gergelim escuro, hambúrguer artesanal, cheddar melt, cebola caramelizada e bacon.",
    price: "28.99",
    category: "Tradicional",
  },
  {
    id: 6,
    name: "CB Chicken Luxo",
    logoSrc: "https://i.imgur.com/Dq0010u.jpg",
    imageSrc: "https://i.imgur.com/kz8vLiP.png",
    description: "Pão de gergelim, hambúrguer de frango empanado, alface americana e maionese.",
    price: "30.00",
    category: "Frango",
  },
  {
    id: 7,
    name: "Chicken Melt Bacon",
    logoSrc: "https://i.imgur.com/ACNMGeL.jpg",
    imageSrc: "https://i.imgur.com/xEmdavg.jpg",
    description: "Pão de gergelim, hambúrguer de frango empanado, alface americana e maionese.",
    price: "35.00",
    category: "Frango",
  },
  {
    id: 8,
    name: "Rei Caveira",
    imageSrc: "https://i.imgur.com/SIvNUeo.jpg",
    description: "Pão de gergelim, hambúrguer de frango empanado, alface americana e maionese.",
    price: "35.00",
    category: "Assinatura",
  },
  {
    id: 9,
    name: "Esqueleto Rings",
    imageSrc: "https://i.imgur.com/QNgdYWL.jpg",
    description: "Pão de gergelim, hambúrguer de frango empanado, alface americana e maionese.",
    price: "40.00",
    category: "Assinatura",
  },
  {
    id: 10,
    name: "Double Skull",
    imageSrc: "https://i.imgur.com/rqkY9S7.jpg",
    description: "Pão de brioche, 2 carnes de hamburguer 150g, e cheddar.",
    price: "34.99",
    category: "Assinatura"
  },
  {
    id: 11  ,
    name: "Chicken Spicy",
    logoSrc: "https://i.imgur.com/2puiK3w.jpg",
    imageSrc: "https://i.imgur.com/xEmdavg.jpg",
    description: "Pão de gergelim, hambúrguer de frango empanado, alface americana e maionese.",
    price: "35.00",
    category: "Frango",
  },
  {
    id: 4,
    name: "CB Chicken",
    logoSrc: "https://i.imgur.com/VF8nQNp.png",
    imageSrc: "https://i.imgur.com/vp3p4Dd.jpg",
    description: "Pão de gergelim, hambúrguer de frango empanado, alface americana e maionese.",
    price: "23.99",
    category: "Frango",
  },
]