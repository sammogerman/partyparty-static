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
  }

]

// We need:

// to wire up the search functionality. Instead of requiring 
// that the user "submit" what they're searching, it'd be cool to 
// filter the list as they type.

// to wire up the "pick a song" functionality. The end result 
// should just show that one song in the table. I have a couple of 
// ideas on how we could make this work, but you should give it the first shot.
const songs = Object.keys(songList);
const numOfSongs = songs.length;
const randomSong = document.querySelector(".songlist__text"); //need to change this query selector back to .songlist__link-text

function getRandomIntInclusive(max) {
  return Math.floor(Math.random() * (max)); //The maximum is inclusive and the minimum is inclusive 
}

randomSong.addEventListener("click", function(){
  let randomSong = getRandomIntInclusive(numOfSongs);
  let song = (songs[randomSong]);
  console.log(song);
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

// Hint: Instead of populating the table with all of the songs on 
// page load, it might be easiest to have a JS object that contains 
// that information and then generate the table from it. Then when sorting, 
// filtering, etc., you can work off of that object and regenerate the table 
// based on whatever changes you've made to copies of it. Otherwise you'd 
// have to build really tedious table HTML, and reading information from it 
// when filtering/sorting would suck even more. It'll also make it easier 
// to maintain as y'all learn more songs.
