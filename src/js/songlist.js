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
    title: "A Whole New World`",
    link: "https://www.youtube.com/watch?v=MJLOCAWkRoc&ab_channel=DisneyLyrics18"
  },
  {
    artist: "Motorhead",
    title: "Ace of Spades",
    link: "https://www.youtube.com/watch?v=3mbvWn1EY6g&ab_channel=Mot%C3%B6rheadOfficial"
  },

]

//array of just the song titles:
const songListSongs = songList.map(function(song){
  return song.title;
});

//array of just the artists:
const songListArtists = songList.map(function(name){
  return name.artist;
});


// We need:

// to wire up the search functionality. Instead of requiring 
// that the user "submit" what they're searching, it'd be cool to 
// filter the list as they type.
const search = document.querySelector(".songlist__form-input");
// let userPick = songList.filter(el => el.title.toLowerCase().includes(userSearch.toLowerCase()));

//descructured version of code above:
//userPick = songList.filter(({ title }) => title.includes(userSearch));

search.addEventListener("input", function(e){
  const userSearch = search.value;
  console.log(search.value);
let userPick = songList.filter(({ title }) => title.includes(userSearch));  
console.log(userPick);
})


// to wire up the "pick a song" functionality. The end result 
// should just show that one song in the table. I have a couple of 
// ideas on how we could make this work, but you should give it the first shot.
const numOfSongs = songList.length;
const randomSong = document.querySelector(".songlist__link");

function getRandomIntInclusive(max) {
  return Math.floor(Math.random() * (max)); //The maximum is inclusive
}

randomSong.addEventListener("click", function(e){
  //preventDefault prevents the link from reloading the page
  e.preventDefault();
  let randomNum = getRandomIntInclusive(numOfSongs);
  let song = [(songList[randomNum])];
  console.log(song);
  tableBody.innerHTML = '';
  populateTable(song);
});

//For artists with multiple songs, need to loop through array of 
//songs and pick a random one


// to wire up the sorting. Artist should be sorted A-Z by default, 
// but clicking/tapping that header should reverse the search. If 
// they click/tap on the Song header, it should sort those A-Z, or 
// Z-A if they click/tap again. The icon changes so that the blue arrow shows the current direction. The currently sorted header is also reflected by color.

// to wire up the current/total song counts. You won't want to ever 
// update this by hand, so it should count all of the songs on page 
// load and display that as the total. Then keep updating the 
// current count as the user searches, etc.
 
let currentListLength = document.querySelector(".songlist__text-current-list");

const totalListLength = document.querySelector(".songlist__text-total-list");
totalListLength.textContent = numOfSongs;

//Populating table with JS array:
// Create a variable for the table body (you're already doing this).
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
  rowClone.cells[0].textContent = song.artist;

  // Change the text of the cloned row's second column to i's title.
  rowClone.cells[1].textContent = song.title;

  // Change the href of the cloned row's third column's link to i's link value.
  rowClone.cells[2].setAttribute("href", song.link);

  // Append the cloned/new row to the table body.
  tableBody.appendChild(rowClone);
// End for
}
}

populateTable(songList);



//OLD
// for (let i = 0; i < songList.length; i++) {
//   const row = document.createElement("tr");
//   row.classList.add("songlist__body-row");

//   const band = document.createElement('td');
//   band.classList.add("songlist__body-item", "songlist__body-item--artist");
//   band.textContent = songList[i].artist;

//   const song = document.createElement("td");
//   song.classList.add("songlist__body-item", "songlist__body-item--song", "text--black");
//   song.textContent = songList[i].title;

//   const linkDiv = document.createElement("td");
//   linkDiv.classList.add("songlist__body-item", "songlist__body-item--link");

//   const songLink = document.createElement("a");
//   songLink.setAttribute("href", songList[i].link);

//   const icon = document.createElement("img");
//   icon.classList.add("songlist__link-image")
//   icon.setAttribute("src", "/assets/icons/btn-youtube.svg");


//   tableBody.appendChild(row);
//   row.appendChild(band);
//   row.appendChild(song);
//   row.appendChild(linkDiv);
//   linkDiv.appendChild(songLink);
//   songLink.appendChild(icon);
// }