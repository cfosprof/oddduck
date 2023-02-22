'use strict';

let productContainer = document.querySelector('section');
let resultButton = document.querySelector('button');
let image1 = document.querySelector('.product-image-1');
let image2 = document.querySelector('.product-image-2');
let image3 = document.querySelector('.product-image-3');
let canvas = document.getElementById('myChart');

const state = {
  products: [],
  maxClicksAllowed: 25
};


// Constructor function for Product objects
function Product(name, imagePath) {
  this.name = name;
  this.imagePath = imagePath;
  this.views = 0;
  this.votes = 0;
}


// Display the products
function displayProducts() {
  let product1, product2, product3;
  //get random product
  do {
    product1 = state.products[Math.floor(Math.random() * state.products.length)];
    product2 = state.products[Math.floor(Math.random() * state.products.length)];
    product3 = state.products[Math.floor(Math.random() * state.products.length)];
  // make sure the products are not the same
  } while (product1 === product2 || product1 === product3 || product2 === product3);
  //increment the times shown
  product1.views++;
  product2.views++;
  product3.views++;
  //display the products
  image1.src = product1.imagePath;
  image2.src = product2.imagePath;
  image3.src = product3.imagePath;
  image1.title = product1.name;
  image2.title = product2.name;
  image3.title = product3.name;
}
function handleProductClick(event){
  if (event.target === productContainer) {
    alert('Please click on an image');
  } else {
    for (let i = 0; i < state.products.length; i++) {
      if (event.target.title === state.products[i].name) {
        if (state.products[i].votes >= state.products[i].maxClicksAllowed) {
          alert('You have already clicked this product the maximum number of times!');
        } else {
          /* Incrementing the votes property of the product object. */
          state.products[i].votes++;
        }
        break;
      }
    }
    let totalVotes = 0;
    for (let i = 0; i < state.products.length; i++) {
      totalVotes += state.products[i].votes;
    }
    if (totalVotes === state.maxClicksAllowed) {
      productContainer.removeEventListener('click', handleProductClick);
      resultButton.addEventListener('click', renderResults);
      resultButton.className = 'clicks-allowed';
      productContainer.className = 'no-voting';
    } else {
      displayProducts();
    }
  }
}

function renderResults() {
  // If the voting rounds are over, display the results
  let ul = document.querySelector('ul');
  ul.innerHTML = ''; // clear any previous results
  // for (let i = 0; i < state.products.length; i++) {
  //   let li = document.createElement('li');
  //   li.textContent = `${state.products[i].name} had ${state.products[i].votes} votes, and was shown ${state.products[i].views} times.`;
  //   ul.appendChild(li);
  // }

  // Create the chart data
  let chartData = {
    labels: state.products.map(product => product.name),
    datasets: [
      {
        label: 'Times Clicked',
        data: state.products.map(product => product.votes),
        backgroundColor: 'black',
        borderColor: 'black',
        borderWidth: 1
      },
      {
        label: 'Times Viewed',
        data: state.products.map(product => product.views),
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 1
      }
    ]
  };

  // Create the chart options
  let chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false
          }
        }
      ]
    }
  };

  new Chart(canvas, {
    type: 'bar',
    data: chartData,
    options: chartOptions
  });

  canvas.style.display = 'block';
}

/* A for loop to loop through the array of products */
let candidates = ['bag.jpg','banana.jpg', 'bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg','pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg', 'tauntaun.jpg','unicorn.jpg', 'water-can.jpg','wine-glass.jpg'];

for (let item of candidates) {
  let name = item.split('.')[0];
  let path = (`img/${item}`);
  state.products.push(new Product(name, path));
}


console.log(state.products);

displayProducts();

productContainer.addEventListener('click', handleProductClick);

resultButton.addEventListener('click', renderResults);
