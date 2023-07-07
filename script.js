const productsArray = [
  // Produto 1
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  // Produto 2
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  // Produto 3
  {
    image: "assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$ 99,00",
    type: "Paintings",
  },
  // Produto 4
  {
    image: "assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$ 275,00",
    type: "Paintings",
  },
  // Produto 5
  {
    image: "assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$ 160,00",
    type: "Paintings",
  },
  // Produto 6
  {
    image: "assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$ 120,00",
    type: "Paintings",
  },
  // Produto 7
  {
    image: "assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$ 700,00",
    type: "Action Figures",
  },
  // Produto 8
  {
    image: "assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$ 950,00",
    type: "Action Figures",
  },
  // Produto 9
  {
    image: "assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$ 1030,00",
    type: "Action Figures",
  },
  // Produto 10
  {
    image: "assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$ 870,00",
    type: "Action Figures",
  },
  // Produto 11
  {
    image: "assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$ 510,00",
    type: "Action Figures",
  },
];

function renderProducts(list) {
  const paintingList = document.querySelector('.painting-action');
  const actionFigureList = document.querySelector('.action-figures-list');

  for (let i = 0; i < list.length; i++) {
    const product = list[i];

    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'card');

    const cardPhoto = document.createElement('img');
    cardPhoto.setAttribute('class', 'cardPhoto');
    cardPhoto.src = product.image;
    cardPhoto.alt = product.name;

    const imageTitle = document.createElement('h1');
    imageTitle.setAttribute('class', 'titleFigure');
    imageTitle.innerText = product.name;

    const prices = document.createElement('p');
    prices.innerText = product.price;

    if (product.type === 'Paintings') {
      paintingList.appendChild(listItem);
    } else if (product.type === 'Action Figures') {
      actionFigureList.appendChild(listItem);
    }

    listItem.appendChild(cardPhoto);
    listItem.appendChild(imageTitle);
    listItem.appendChild(prices);
  }
}

renderProducts(productsArray);