interface ItemProps {
  id: number;
  name: string;
  logoSrc: string;
  secondaryLogoSrc?: string; 
  imageSrc: string;
  description: string;
  price: string;
}

export const itemImages : ItemProps[] = [
  {
    id: 1,
    name: "CB Rodeio",
    logoSrc: "https://i.imgur.com/x9CbQ65.png",
    imageSrc: "https://i.imgur.com/HThBRco.png",
    description: "Pão de gergelim, dois smash burguer, cheddar, barbecue, onion e maionese defumada.",
    price: "27.99",
  },
  {
    id: 2,
    name: "Quarteirão Caveira",
    logoSrc: "https://i.imgur.com/KMhZKCl.png",
    imageSrc: "https://i.imgur.com/3O5nBat.png",
    description: "Pão de gergelim, hambúrguer artesanal, cheddar, Mostarda, Ketchup, cebola picada e picles.",
    price: "25.99",
  },
  {
    id: 3,
    name: "CB Melt",
    logoSrc: "https://i.imgur.com/5ajpgmK.png",
    imageSrc: "https://i.imgur.com/B7rTEK6.png",
    description: "Pão de gegelim escuro, hambúrguer 100g, molho cheddar cremoso e cebola ao molho shoyu.",
    price: "26.99",
  },
  {
    id: 4,
    name: "CB Chicken",
    logoSrc: "https://i.imgur.com/VF8nQNp.png",
    imageSrc: "https://i.imgur.com/EVpAzKn.png",
    description: "Pão de gergelim, hambúrguer de frango empanado, alface americana e maionese.",
    price: "23.99",
  },
  {
    id: 5,
    name: "CB Melt Bacon",
    logoSrc: "https://i.imgur.com/5ajpgmK.png",
    imageSrc: "https://i.imgur.com/dvv6wqy.png",
    secondaryLogoSrc: "https://i.imgur.com/MyGn9Lo.jpg",
    description: "Pão de gergelim escuro, hambúrguer artesanal, cheddar melt, cebola caramelizada e bacon.",
    price: "28.99",
  },
  {
    id: 6,
    name: "CB Chicken Luxo",
    logoSrc: "https://i.imgur.com/5vfvgVC.jpg",
    imageSrc: "https://i.imgur.com/kz8vLiP.png",
    secondaryLogoSrc: "https://i.imgur.com/Dq0010u.jpg",
    description: "Pão de gergelim, hambúrguer de frango empanado, alface americana e maionese.",
    price: "30.00",
  }
]