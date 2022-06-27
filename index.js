
let state = {
  items: [
    {
      id: 1,
      name: "beetroot",
      price: 0.35,
      itemNumber: 0,
      image: "assets/icons/001-beetroot.svg",
    },
    {
      id: 2,
      name: "carrot",
      price: 0.35,
      itemNumber: 0,
      image: "assets/icons/002-carrot.svg",
    },
    {
      id: 3,
      name: "apple",
      price: 0.35,
      itemNumber: 0,
      image: "assets/icons/003-apple.svg",
    },
    {
      id: 4,
      name: "apricot",
      price: 0.35,
      itemNumber: 0,
      image: "assets/icons/004-apricot.svg",
    },
    {
      id: 5,
      name: "avocado",
      price: 0.35,
      itemNumber: 0,
      image: "assets/icons/005-avocado.svg",
    },
    {
      id: 6,
      name: "banana",
      price: 0.35,
      itemNumber: 0,
      image: "assets/icons/006-bananas.svg",
    },
    {
      id: 7,
      name: "bell-pepper",
      price: 0.35,
      itemNumber: 0,
      image: "assets/icons/007-bell-pepper.svg",
    },
    {
      id: 8,
      name: "berry",
      price: 0.35,
      itemNumber: 0,
      image: "assets/icons/008-berry.svg"
    },
    {
      id: 9,
      name: "blueberry",
      price: 0.35,
      itemNumber: 0,
      image: "assets/icons/009-blueberry.svg"
    },
    {
      id: 10,
      name: "eggplant",
      price: 0.35,
      itemNumber: 0,
      image: "assets/icons/010-eggplant.svg"
    },
  ],
};


  function createItem(item) {
    let liEl = document.createElement("li");
    let divEl = document.createElement("div");
    divEl.className = "store--item-icon";
    let imgEl = document.createElement("img");

    
      imgEl.src = item.image;
      imgEl.alt = item.name;

    divEl.appendChild(imgEl);
    let buttonEl = document.createElement("button");
    buttonEl.textContent = "Add to cart";
    
    
    buttonEl.addEventListener("click", function() {
        item.itemNumber++;
        cartItem(item);

    })

    liEl.append(divEl, buttonEl);

    let storeUl = document.querySelector(".item-list.store--item-list");
    storeUl.append(liEl);
    this.removeEventListener("click", createItem);
  }

for(let item of state.items) {
  createItem(item);
}

function cartItem(item){
  let cartUl = document.querySelector(".item-list.cart--item-list");
  let liEl = document.createElement("li");

  let imgEl = document.createElement("img");
  imgEl.className = "cart--item-icon";
  imgEl.src = item.image;
  imgEl.alt = item.name;

  let pEl = document.createElement("span");
  pEl.textContent = item.name.toUpperCase();

  let buttonEl = document.createElement("button");
  buttonEl.textContent = "-";
  buttonEl.addEventListener("click", function() {
    item.itemNumber--;
    numberOfItems.textContent = item.itemNumber;  
  })
  let numberOfItems = document.createElement("span");
  numberOfItems.textContent = item.itemNumber;
  console.log(numberOfItems);

  let buttonEl2 = document.createElement("button");
  buttonEl2.textContent = "+";
  buttonEl2.addEventListener("click", function () {
    item.itemNumber++;
    numberOfItems.textContent = item.itemNumber;
  });

  

  liEl.append(imgEl,pEl, buttonEl, numberOfItems, buttonEl2);
  cartUl.append(liEl);
}
function getPrice(item) {
  return item.price;
}
function getNumberOfItems(item) {
  return item.itemNumber;
}
function totalPrice() {
  let spanEl = document.querySelector(".total-number");
  let total = 0;
  spanEl.innerHTML = "";
  for (let item of state.items) {
    total += getNumberOfItems(item) * getPrice(item);
  }
  spanEl.textContent = `£${total.toFixed(2)}`;
  console.log(total);
}

console.log(state.items);





function render() { 

  createItem();
  cartItem();
  totalPrice();
}

render();
