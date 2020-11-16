const search = document.querySelector(".songlist__form-input");
const randomSong = document.querySelector(".songlist__link-text");
const topLink = document.querySelector(".songlist__top-link");
const headRow = document.querySelector(".songlist__head-row");
const artistHeader = document.querySelector(".songlist__head-item--artist");
const songHeader = document.querySelector(".songlist__head-item--song");
const orderIcon = document.querySelectorAll(".songlist__head-icon");
const tableBody = document.querySelector(".songlist__table-body");
const tableRow = document.querySelector(".songlist__body-row");
const tableBottomText = document.querySelector(".songlist__table-bottom-text");
const noMatch = document.querySelector(".songlist__text-song-unavailable");
const currentListLength = document.querySelector(".songlist__text-current-list");
const totalListLength = document.querySelector(".songlist__text-total-list");
const numOfSongs = songList.length;
let currentListNum = 0;
const iconClasses = ["songlist__icon--unselected", "songlist__head-icon--sorted", "songlist__head-icon--reversed"];

const getRandomInt = (num) => {
  return Math.floor(Math.random() * (num));
}

const sortByArtist = (arr) => {
  arr.sort((a, b) => {
    if (a.artist > b.artist) {
      return 1;
    } else {
      return -1;
    }
  })
}

const reverseSortByArtist = (arr) => {
  arr.sort((a, b) => {
    if (a.artist < b.artist) {
      return 1;
    } else {
      return -1;
    }
  })
}

const sortBySong = (arr) => {
  arr.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else {
      return -1;
    }
  })
}

const reverseSortBySong = (arr) => {
  arr.sort((a, b) => {
    if (a.title < b.title) {
      return 1;
    } else {
      return -1;
    }
  })
}

const populateTable = (arr) => {
  for (let song of arr) {
    // Clone the first row variable
    const rowClone = tableRow.cloneNode(true);
    rowClone.children[0].textContent = song.artist;
    rowClone.children[1].textContent = song.title;
    rowClone.children[2].children[0].children[0].href = song.link;
    tableBody.appendChild(rowClone);
    currentListNum += 1;
  } 
  // if no songs found, set current songs displayed to 0, and display text via css class
  if (arr.length === 0) {
    currentListLength.textContent = 0;
    tableBottomText.classList.add("songlist__text-song-unavailable--shown");
  } else {
    currentListLength.textContent = currentListNum.toString();
    tableBottomText.classList.remove("songlist__text-song-unavailable--shown");
  }
  // reset current list count
  currentListNum = 0;
}

const init = () => {
  currentListLength.textContent = numOfSongs;
  totalListLength.textContent = numOfSongs;
  sortByArtist(songList);
  tableBody.innerHTML = "";
  populateTable(songList);
}

search.addEventListener("input", function(){
  const userSearch = search.value;
  const userPick = songList.filter((el) => {
    if (el.title.toLowerCase().includes(userSearch.toLowerCase().trim()) || el.artist.toLowerCase().includes(userSearch.toLowerCase().trim())) {
      return el;
    } else if (el.hasOwnProperty("synonyms")) {
      return (el.synonyms.toLowerCase().includes(userSearch.toLowerCase().trim()))
    }
  })
  tableBody.innerHTML = "";
  populateTable(userPick);
})

randomSong.addEventListener("click", function(e){
  // preventDefault prevents the link from reloading the page
  e.preventDefault();
  let randomNum = getRandomInt(numOfSongs);
  let song = [(songList[randomNum])];
  tableBody.innerHTML = '';
  populateTable(song);
  // show random song in the input
  search.value = songList[randomNum].title;
});

// click listener on artist header to sort list by artist name and toggle sort icons
artistHeader.addEventListener("click", function(e){
  orderIcon[1].classList.remove(...iconClasses);
  orderIcon[1].classList.add("songlist__head-icon--unsorted");
  tableBody.innerHTML = "";
  headRow.classList.add("songlist__head-row--artist-clicked");

  // if artist icon is the unsorted icon
  if (orderIcon[0].classList.contains("songlist__head-icon--unsorted")) {
    // remove unsorted class/icon
    orderIcon[0].classList.remove("songlist__head-icon--unsorted");
    // add sorted class/icon
    orderIcon[0].classList.add("songlist__head-icon--sorted");
    // run function to alphabetize song list by artist
    sortByArtist(songList);
  } else if (orderIcon[0].classList.contains("songlist__head-icon--sorted")) {
    // remove sorted icon, add reverse sort icon
    orderIcon[0].classList.remove("songlist__head-icon--sorted");
    orderIcon[0].classList.add("songlist__head-icon--reversed");
    reverseSortByArtist(songList);
  } else if (orderIcon[0].classList.contains("songlist__head-icon--reversed")) {
    //remove reverse icon, add sorted icon
    orderIcon[0].classList.remove("songlist__head-icon--reversed");
    orderIcon[0].classList.add("songlist__head-icon--sorted");
    sortByArtist(songList);
  }
  // repopulate table in new order
  populateTable(songList);
})

// click listener on song header to sort list by song title and toggle sort icons
songHeader.addEventListener("click", function(){
  // when song icon clicked, remove classes from artist icon, and set it to the unsorted icon
  orderIcon[0].classList.remove(...iconClasses);
  orderIcon[0].classList.add("songlist__head-icon--unsorted");
  tableBody.innerHTML = "";
  // remove class to change background color
  headRow.classList.remove("songlist__head-row--artist-clicked");

  if (orderIcon[1].classList.contains("songlist__head-icon--unsorted")){
    orderIcon[1].classList.remove("songlist__head-icon--unsorted");
    orderIcon[1].classList.add("songlist__head-icon--sorted");
    sortBySong(songList);

  } else if (orderIcon[1].classList.contains("songlist__head-icon--sorted")){
    orderIcon[1].classList.remove("songlist__head-icon--sorted");
    orderIcon[1].classList.add("songlist__head-icon--reversed");
    reverseSortBySong(songList);

  } else if (orderIcon[1].classList.contains("songlist__head-icon--reversed")){
    orderIcon[1].classList.remove("songlist__head-icon--reversed");
    orderIcon[1].classList.add("songlist__head-icon--sorted");
    sortBySong(songList);
  } 
  populateTable(songList);
})

// When the user scrolls down 1000px from the top of the document, show the button
window.addEventListener("scroll", function() {
  if (window.innerWidth <= 720) {
    if ((window.scrollY >= 1000) && (window.scrollY < 22000) && (!tableBottomText.classList.contains("songlist__text-song-unavailable--shown"))) {
      topLink.classList.add("songlist__top-link--visible");
    } else {
      topLink.classList.remove("songlist__top-link--visible");
    }
  } else {
    if ((window.scrollY >= 1250) && (window.scrollY < 18000) && (!tableBottomText.classList.contains("songlist__text-song-unavailable--shown"))) {
      topLink.classList.add("songlist__top-link--visible");
    } else {
      topLink.classList.remove("songlist__top-link--visible");
    }
  }
})

// When the user clicks on the button, scroll to the top of the table
topLink.addEventListener("click", function() {
  if (window.innerWidth <= 720) {
    document.body.scrollTop = 650; // For Safari
    document.documentElement.scrollTop = 650; // For Chrome, Firefox, IE and Opera
  } else {
    document.body.scrollTop = 750; // For Safari
    document.documentElement.scrollTop = 750; // For Chrome, Firefox, IE and Opera
  }
});

init();