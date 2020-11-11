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

// to wire up the search functionality. Instead of requiring 
// that the user "submit" what they're searching, it'd be cool to 
// filter the list as they type.
const search = document.querySelector(".songlist__form-input");

search.addEventListener("input", function(e){
  const userSearch = search.value;
  const userPick = songList.filter((el) => {
    if (el.title.toLowerCase().includes(userSearch.toLowerCase().trim()) || el.artist.toLowerCase().includes(userSearch.toLowerCase().trim())) {
      return el;
    }
  })
  tableBody.innerHTML = '';
  populateTable(userPick);
})

// to wire up the "pick a song" functionality. The end result 
// should just show that one song in the table.
const numOfSongs = songList.length;
const randomSong = document.querySelector(".songlist__link-text");

const getRandomInt = (num) => {
  return Math.floor(Math.random() * (num));
}

randomSong.addEventListener("click", function(e){
  //preventDefault prevents the link from reloading the page
  e.preventDefault();
  let randomNum = getRandomInt(numOfSongs);
  let song = [(songList[randomNum])];
  tableBody.innerHTML = '';
  populateTable(song);
  //show random song in the input
  search.value = songList[randomNum].title;
});

//manually trigger search input after random song is selected.
const e = new Event("change"); //I know you said this should be on "input" not "change" but it doesn't work for some reason. with input I'm getting error: "Uncaught TypeError: Cannot set property 'innerHTML' of undefined at line 71
search.dispatchEvent(e);

// SORTING: Artists should be sorted A-Z by default, 
// but clicking/tapping that header should reverse the search. If 
// they click/tap on the Song header, it should sort those A-Z, or 
// Z-A if they click/tap again. The icon changes so that the blue arrow shows the current direction. The currently sorted header is also reflected by color.
const artistHeader = document.querySelector(".songlist__head-item--artist");
const songHeader = document.querySelector(".songlist__head-item--song");
const orderIcon = document.querySelectorAll(".songlist__head-icon ");
const iconClasses = ["songlist__icon--unselected", "songlist__head-icon--sorted", "songlist__head-icon--reversed"];
const headRow = document.querySelector(".songlist__head-row");

//function to alphabetize song list by artist
const sortByArtist = (arr) => {
  arr.sort((a, b) => {
    if (a.artist > b.artist) {
      return 1;
    } else {
      return -1;
    }
  })
}

//function to reverse order of artists
const reverseSortByArtist = (arr) => {
  arr.sort((a, b) => {
    if (a.artist < b.artist) {
      return 1;
    } else {
      return -1;
    }
  })
}

//function to order song list alphabetically by song title
const sortBySong = (arr) => {
  arr.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else {
      return -1;
    }
  })
}

//function to reverse order list by song title
const reverseSortBySong = (arr) => {
  arr.sort((a, b) => {
    if (a.title < b.title) {
      return 1;
    } else {
      return -1;
    }
  })
}

//default state has artists alphabetized
sortByArtist(songList);

//click listener on artist header to sort list by artist name and toggle sort icons
artistHeader.addEventListener("click", function(){

  //when artist icon clicked, remove classes from song icon
  orderIcon[1].classList.remove(...iconClasses);
  //Add unsorted class to song icon
  orderIcon[1].classList.add("songlist__head-icon--unsorted");
  //empty the table
  tableBody.innerHTML = "";
  //add class to table head row to change background color
  headRow.classList.add("songlist__head-row--artist-clicked");

  //if artist icon is the unsorted icon
  if(orderIcon[0].classList.contains("songlist__head-icon--unsorted")){
    //remove unsorted icon
    orderIcon[0].classList.remove("songlist__head-icon--unsorted");
    //add sorted class
    orderIcon[0].classList.add("songlist__head-icon--sorted");
    //run function to alphabetize song list by artist
    sortByArtist(songList);

    //if artist icon is sorted icon
  } else if (orderIcon[0].classList.contains("songlist__head-icon--sorted")){
    //remove sorted icon, add reverse sort icon
    orderIcon[0].classList.remove("songlist__head-icon--sorted");
    orderIcon[0].classList.add("songlist__head-icon--reversed");
    //run function to reverse artist order
    reverseSortByArtist(songList);

    //if artist icon is currently the reverse icon
  } else if (orderIcon[0].classList.contains("songlist__head-icon--reversed")) {
    //remove reverse icon, add sorted icon
    orderIcon[0].classList.remove("songlist__head-icon--reversed");
    orderIcon[0].classList.add("songlist__head-icon--sorted");
    //alphabetize list by artist
    sortByArtist(songList);
  }
  //repopulate table in new order
  populateTable(songList);
})

//click listener on song header to sort list by song title and toggle sort icons
songHeader.addEventListener("click", function(){
  //when song icon clicked, remove classes from artist icon, and set it to the unsorted icon
  orderIcon[0].classList.remove(...iconClasses);
  orderIcon[0].classList.add("songlist__head-icon--unsorted");
  tableBody.innerHTML = "";
  //remove class to change background color
  headRow.classList.remove("songlist__head-row--artist-clicked");

  if (orderIcon[1].classList.contains("songlist__head-icon--unsorted")){
    //remove unsorted class/icon, add sorted class
    orderIcon[1].classList.remove("songlist__head-icon--unsorted");
    orderIcon[1].classList.add("songlist__head-icon--sorted");
    //run function to sort by song title
    sortBySong(songList);

  } else if (orderIcon[1].classList.contains("songlist__head-icon--sorted")){
    orderIcon[1].classList.remove("songlist__head-icon--sorted");
    orderIcon[1].classList.add("songlist__head-icon--reversed");
    //run function to reverse sort by song title
    reverseSortBySong(songList);

  } else if (orderIcon[1].classList.contains("songlist__head-icon--reversed")){
    orderIcon[1].classList.remove("songlist__head-icon--reversed");
    orderIcon[1].classList.add("songlist__head-icon--sorted");
    //function to sort by song title
    sortBySong(songList);
  } 
  populateTable(songList);
})



// Updating the current/total song counts. Count all of the songs on page 
// load and display that as the total. Then keep updating the 
// current count as the user searches, etc.
 
let currentListLength = document.querySelector(".songlist__text-current-list");
currentListLength.textContent = numOfSongs;
let currentListNum = 0;

const totalListLength = document.querySelector(".songlist__text-total-list");
totalListLength.textContent = numOfSongs;

const tableBottomText = document.querySelector(".songlist__table-bottom-text");
const noMatch = document.querySelector(".songlist__text-song-unavailable");

//Populating table with JS array:
// Create a variable for the table body.
const tableBody = document.querySelector(".songlist__table-body");
// Create a variable for the first row of your table body variable.
const tableRow = document.querySelector(".songlist__body-row");

// Remove all inner HTML from the table body (to remove the sample row / outdated info).
tableBody.innerHTML = "";

const populateTable = (arr) => {
  // For each song in the song list...
  for (let song of arr) {
    // Clone the first row variable (https://gomakethings.com/how-to-copy-or-clone-an-element-with-vanilla-js/).
    const rowClone = tableRow.cloneNode(true);

    // Change the text of the cloned row's first column to i's artist.
    rowClone.children[0].textContent = song.artist;

    // Change the text of the cloned row's second column to i's title.
    rowClone.children[1].textContent = song.title;

    // Change the href of the cloned row's third column's link to i's link value.
    rowClone.children[2].setAttribute("href", song.link);

    // Append the cloned/new row to the table body.
    tableBody.appendChild(rowClone);
  // End for
    currentListNum += 1;
    currentListLength.textContent = currentListNum.toString();
  } 
  //if no songs found, set current songs displayed to 0, and display text
  if (arr.length === 0) {
    currentListLength.textContent = 0;
    tableBottomText.classList.add("songlist__text-song-unavailable--shown");
  } else {
    tableBottomText.classList.remove("songlist__text-song-unavailable--shown");
  }
  //reset current list
  currentListNum = 0;
}

populateTable(songList);
