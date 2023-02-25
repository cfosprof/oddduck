'use strict';

let Product = (name, imagePath) => {
  let state = {
    name,
    imagePath,
    views: 0,
    votes: 0,
    maxClicksAllowed: 25,
  };

  let incrementViews = () => {
    state.views++;
  };

  let incrementVotes = () => {
    state.votes++;
  };

  let canVote = () => {
    return state.votes < state.maxClicksAllowed;
  };

  return {
    incrementViews,
    incrementVotes,
    canVote,
    get name() {
      return state.name;
    },
    get imagePath() {
      return state.imagePath;
    },
    get views() {
      return state.views;
    },
    get votes() {
      return state.votes;
    },
  };
};

let createProducts = (candidates) => {
  let products = candidates.map((candidate) => {
    let name = candidate.split('.')[0];
    let imagePath = `img/${candidate}`;
    return Product(name, imagePath);
  });
  return products;
};

let saveToLocalStorage = (state) => {
  localStorage.setItem('state', JSON.stringify(state));
};

let loadStateFromStorage = () => {
  let savedState = JSON.parse(localStorage.getItem('state'));
  return savedState || {};
};

let createInitialState = () => {
  let state = {
    products: [],
    maxClicksAllowed: 25,
    votes: [],
    views: [],
  };
  return {
    ...state,
    ...loadStateFromStorage(),
  };
};

export { createProducts, createInitialState, saveToLocalStorage };
