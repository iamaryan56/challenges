document.getElementsByClassName('totals')[0].style.display = 'none';
const menuItems = [
  {
    name: 'French Fries with Ketchup',
    price: 223,
    image: 'plate__french-fries.png',
    alt: 'French Fries',
    count: 0
  },
  {
    name: 'Salmon and Vegetables',
    price: 512,
    image: 'plate__salmon-vegetables.png',
    alt: 'Salmon and Vegetables',
    count: 0
  },
  {
    name: 'Spaghetti Meat Sauce',
    price: 782,
    image: 'plate__spaghetti-meat-sauce.png',
    alt: 'Spaghetti with Meat Sauce',
    count: 0
  },
  {
    name: 'Bacon, Eggs, and Toast',
    price: 599,
    image: 'plate__bacon-eggs.png',
    alt: 'Bacon, Eggs, and Toast',
    count: 0
  },
  {
    name: 'Chicken Salad with Parmesan',
    price: 698,
    image: 'plate__chicken-salad.png',
    alt: 'Chicken Salad with Parmesan',
    count: 0
  },
  {
    name: 'Fish Sticks and Fries',
    price: 634,
    image: 'plate__fish-sticks-fries.png',
    alt: 'Fish Sticks and Fries',
    count: 0
  }
];
const newListElement = (i) => {
  const li = document.createElement('li');
  li.innerHTML = document.getElementById('block').innerHTML;
  li.innerHTML = li.innerHTML
    // `<img src=images/${menuItems[i].image} alt=${menuItems[i].alt} class="plate" />`
    .replace(/{IMAGE}/g, `images/${menuItems[i].image}`)
    .replace(/{ALT}/g, menuItems[i].alt)
    .replace(/{NAME}/g, menuItems[i].name)
    .replace(/{PRICE}/g, menuItems[i].price / 100)
    .replace(
      /{SUBTOTAL}/g,
      (menuItems[i].price / 100) * (menuItems[i].count += 1)
    );
  document.getElementsByTagName('ul')[1].appendChild(li);
};

const updateTotal = () => {
  //  const subtotal = document.getElementsByClassName('amount price subtotal')[0];
  //  const tax = document.getElementsByClassName('amount price tax')[0];
  //  const total = document.getElementsByClassName('amount price total')[0];
};

const elements = document.getElementsByClassName('add');

for (let i = 0; i < elements.length; i += 1) {
  elements[i].addEventListener('click', () => {
    document.getElementsByClassName('empty')[0].style.display = 'none';
    document.getElementsByClassName('totals')[0].style.display = 'block';

    elements[i].classList.add('in-cart');
    elements[i].innerHTML =
      ' <img src="images/check.svg" alt="Check" />In Cart';
    newListElement(i);
    updateTotal();
  });
}

// const ChildCount = document.getElementsByTagName('ul')[1].childElementCount;
