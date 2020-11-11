// const e = require("express");

const songList = [
  {
    artist: "A Perfect Circle",
    title: "Judith",
    link: "https://www.youtube.com/watch?v=xTgKRCXybSM&ab_channel=APerfectCircleVEVO"
  },
  {
    artist: "Alanis Morissette",
    title: "You Oughta Know",
    link: "https://www.youtube.com/watch?v=NPcyTyilmYY&ab_channel=AlanisMorissette"
  },
  {
    artist: "Amy Winehouse",
    title: "Rehab",
    link: "https://www.youtube.com/watch?v=KUmZp8pR1uc&ab_channel=AmyWinehouseVEVO"
  },
  {
    artist: "Aretha Franklin",
    title: "Respect",
    link: "https://www.youtube.com/watch?v=6FOUqQt3Kg0&ab_channel=TatanBrown"
  },
  {
    artist: "Audioslave",
    title: "Like a Stone",
    link: "https://www.youtube.com/watch?v=7QU1nvuxaMA&ab_channel=AudioslaveVEVO"
  },
  {
    artist: "The Smashing Pumpkins",
    title: "1979",
    link: "https://www.youtube.com/watch?v=4aeETEoNfOg"
  }, 
  {
    artist: "Tool",
    title: "Forty Six & 2",
    link: "https://www.youtube.com/watch?v=GIuZUCpm9hc"
  },
  {
    artist: "Tool",
    title: "Sober",
    link: "youtube.com/watch?v=nspxAG12Cpc&ab_channel=TOOLVEVO"
  },
  {
    artist: "Aladdin",
    title: "A Whole New World",
    link: "https://www.youtube.com/watch?v=MJLOCAWkRoc&ab_channel=DisneyLyrics18"
  },
  {
    artist: "Motorhead",
    title: "Ace of Spades",
    link: "https://www.youtube.com/watch?v=3mbvWn1EY6g&ab_channel=Mot%C3%B6rheadOfficial"
  },
  {
    artist: "Toto",
    title: "Africa",
    link: "https://www.youtube.com/watch?v=FTQbiNvZqaY&ab_channel=TotoVEVO"
  },
  {
    artist: "Green Day",
    title: "American Idiot",
    link: "https://www.youtube.com/watch?v=Ee_uujKuJMI&ab_channel=GreenDay"
  },
  {
    artist: "American Pie",
    title: "Don Mclean",
    link: "https://www.youtube.com/watch?v=iX_TFkut1PM&ab_channel=DonMcLean-Topic"
  },
  {
    artist: "Amish Paradise",
    title: "Weird Al Yankovic",
    link: "https://www.youtube.com/watch?v=lOfZLb33uCg"
  },
  {
    artist: "Jet",
    title: "Are You Gonna Be My Girl",
    link: "Jet - Are You Gonna Be My Girl"
  },
  {
    artist: "Sir Mix-A-Lot",
    title: "Baby Got Back",
    link: "https://www.youtube.com/watch?v=X53ZSxkQ3Ho"
  },
  {
    artist: "Dean Martin",
    title: "Baby, It's Cold Outside",
    link: "https://www.youtube.com/watch?v=crFQpOCDfEc&ab_channel=Oda"
  },
  {
    artist: "Britney Spears",
    title: "...Baby One More Time",
    link: "https://www.youtube.com/watch?v=C-u5WLJ9Yk4"
  },
  {
    artist: "Bloodhound Gang",
    title: "The Bad Touch",
    link: "https://www.youtube.com/watch?v=xat1GVnl8-k"
  },
  {
    artist: "Sweet",
    title: "Ballroom Blitz",
    link: "https://www.youtube.com/watch?v=z_jdiU47bFA"
  },  
  {
    artist: "Green Day",
    title: "Basket Case",
    link: "https://www.youtube.com/watch?v=mDbSFyReulk&ab_channel=GreenDay"
  },  
  {
    artist: "Deftones",
    title: "Be Quiet And Drive",
    link: "https://www.youtube.com/watch?v=KvknOXGPzCQ"
  },  
  {
    artist: "Afroman",
    title: "Because I Got High",
    link: "https://www.youtube.com/watch?v=WeYsTmIzjkw"
  },  
  {
    artist: "Reel Big Fish",
    title: "Beer",
    link: "https://www.youtube.com/watch?v=gql9220Qon8&ab_channel=ReelBigFishTv"
  }, 
  {
    artist: "Carrie Underwood",
    title: "Before He Cheats",
    link: "https://www.youtube.com/watch?v=WaSy8yy-mr8"
  }, 
  {
    artist: "Elton John",
    title: "Benny And The Jets",
    link: "https://www.youtube.com/watch?v=p5rQHoaQpTw&ab_channel=RewindMusicGroup"
  }, 
  {
    artist: "KT Tunstall",
    title: "Big Black Horse and the Cherry Tree",
    link: "https://www.youtube.com/watch?v=PQmDUEv939A"
  }, 
  {
    artist: "Billy Joel",
    title: "Big Shot",
    link: "https://www.youtube.com/watch?v=bEea624OBzM"
  },
  {
    artist: "Michael Jackson",
    title: "Billie Jean",
    link: "https://www.youtube.com/watch?v=Zi_XLOBDo_Y"
  },
  {
    artist: "Ram Jam",
    title: "Black Betty",
    link: "https://www.youtube.com/watch?v=I_2D8Eo15wE"
  },
  {
    artist: "Soundgarden",
    title: "Black Hole Sun",
    link: "https://www.youtube.com/watch?v=3mbBbFH9fAg"
  },
  {
    artist: "Alannah Myles",
    title: "Black Velvet",
    link: "https://www.youtube.com/watch?v=tT4d1LQy4es"
  }, 
  {
    artist: "Violent Femmes",
    title: "Blister in the Sun",
    link: "https://www.youtube.com/watch?v=hYZkoI1ggEw&ab_channel=armytype77"
  }, 
  {
    artist: "The Ramones",
    title: "Blitzkrieg Bop",
    link: "https://www.youtube.com/watch?v=268C3N2dDYk"
  }, 
  {
    artist: "Queen",
    title: "Bohemian Rhapsody",
    link: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ"
  },
  {
    artist: "Bruce Springsteen",
    title: "Born To Run",
    link: "https://www.youtube.com/watch?v=IxuThNgl3YA"
  },
  {
    artist: "Melanie",
    title: "Brand New Key",
    link: "https://www.youtube.com/watch?v=lKcpodt0YCU"
  },
  {
    artist: "Evanescence",
    title: "Bring Me To Life",
    link: "https://www.youtube.com/watch?v=3YxaaGgTQYM"
  },
  {
    artist: "Van Morrison",
    title: "Brown Eyed Girl",
    link: "https://www.youtube.com/watch?v=UfmkgQRmmeE"
  },
  {
    artist: "Weezer",
    title: "Buddy Holly",
    link: "https://www.youtube.com/watch?v=kemivUKb4f4"
  },
  {
    artist: "The Foundations",
    title: "Build Me Up Buttercup",
    link: "https://www.youtube.com/watch?v=FvluBVhfGcw&ab_channel=TheFoundations-Topic"
  },
  {
    artist: "Smashing Pumpkins",
    title: "Bullet With Butterfly Wings",
    link: "https://www.youtube.com/watch?v=8-r-V0uK4u0"
  },
  {
    artist: "Rage Against The Machine",
    title: "Bulls On Parade",
    link: "https://www.youtube.com/watch?v=3L4YrGaR8E4&ab_channel=RATMVEVO"
  },
  {
    artist: "Elvis Presley",
    title: "Can't Help Falling In Love",
    link: "https://www.youtube.com/watch?v=vGJTaP6anOU"
  },
]

const search = document.querySelector(".songlist__form-input");
const randomSong = document.querySelector(".songlist__link-text");
const headRow = document.querySelector(".songlist__head-row");
const artistHeader = document.querySelector(".songlist__head-item--artist");
const songHeader = document.querySelector(".songlist__head-item--song");
const orderIcon = document.querySelectorAll(".songlist__head-icon ");
const tableBody = document.querySelector(".songlist__table-body");
const tableRow = document.querySelector(".songlist__body-row");
const tableBottomText = document.querySelector(".songlist__table-bottom-text");
const noMatch = document.querySelector(".songlist__text-song-unavailable");
let currentListLength = document.querySelector(".songlist__text-current-list");
const totalListLength = document.querySelector(".songlist__text-total-list");

currentListLength.textContent = numOfSongs;
let currentListNum = 0;

totalListLength.textContent = numOfSongs;
const numOfSongs = songList.length;

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
    // Clone the first row variable (https://gomakethings.com/how-to-copy-or-clone-an-element-with-vanilla-js/).
    const rowClone = tableRow.cloneNode(true);
    rowClone.children[0].textContent = song.artist;
    rowClone.children[1].textContent = song.title;
    rowClone.children[2].setAttribute("href", song.link);
    tableBody.appendChild(rowClone);
    currentListNum += 1;
    currentListLength.textContent = currentListNum.toString();
  } 
  // if no songs found, set current songs displayed to 0, and display text via css class
  if (arr.length === 0) {
    currentListLength.textContent = 0;
    tableBottomText.classList.add("songlist__text-song-unavailable--shown");
  } else {
    tableBottomText.classList.remove("songlist__text-song-unavailable--shown");
  }
  // reset current list count
  currentListNum = 0;
}

const init = () => {
  sortByArtist(songList);
  tableBody.innerHTML = "";
  populateTable(songList);
}

search.addEventListener("input", function(e){
  const userSearch = search.value;
  const userPick = songList.filter((el) => {
    if (el.title.toLowerCase().includes(userSearch.toLowerCase().trim()) || el.artist.toLowerCase().includes(userSearch.toLowerCase().trim())) {
      return el;
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
artistHeader.addEventListener("click", function(){
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

init();