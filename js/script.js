// Complete Day 1 goals here

var homeSong = {
  title : "Home",
  artist : "Edward Sharpe and the Magnetic Zeros",
  image : "https://cdn.glitch.global/98016f2c-a3fe-41df-b545-722efd1efb47/download.jpg?v=1644965713407",
  link : "https://www.youtube.com/watch?v=DHEOF_rcND8",
};
var heatWavesSong = {
  title : "Heat Waves",
  artist : "Glass Animals",
  image : "https://charts-static.billboard.com/img/2020/07/glass-animals-rtd-heat-waves-o3i-180x180.jpg",
  link : "https://www.youtube.com/watch?v=mRD0-GxqHVo"
};
var good4uSong = {
  title : "Good 4 U",
  artist : "Olivia Rodrigo",
  image : "https://charts-static.billboard.com/img/2021/05/olivia-rodrigo-3wl-good-4-u-7ek-180x180.jpg",
  link : "https://www.youtube.com/watch?v=gNi_6U5Pm_o"
};
let SongObjects = [homeSong,heatWavesSong,good4uSong];
// for (let i = 1; i < songTitles.length; i++) {
//   songsSum += songTitles[i];
// }

function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  SongObjects.forEach(function(songObj) {
  console.log(songObj);
 
    $(".songs").append(`<div class = "container"><h4>${songObj.title}</h4></div>`);

    $(".artists").append(`<div class = "container"><h5>${songObj.artist}</h5></div>`)
    $(".images").append(`<div class = "container"><a href = ${songObj.link}><img src = ${songObj.image}></a></div>`);
  });
  // break line
  
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
  var newSong = {
    title : $(".title").val(),
    artist : $(".artist").val(),
    image : $(".image").val(),
    link : $(".link").val(),
  };
  SongObjects.push(newSong);
}

$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
  $("h2").text(SongObjects.length + " songs");
});

displaySongInfo();
