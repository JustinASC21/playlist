// Complete Day 1 goals here
let songTitles = ["Home","Heat Waves", "Good 4 U"];
let songArtists = ["Edward Sharpe and the Magne","Glass Animals","Olivia Rodrigo"];
let songImages = ["https://cdn.glitch.global/98016f2c-a3fe-41df-b545-722efd1efb47/download.jpg?v=1644965713407","https://charts-static.billboard.com/img/2020/07/glass-animals-rtd-heat-waves-o3i-180x180.jpg","https://charts-static.billboard.com/img/2021/05/olivia-rodrigo-3wl-good-4-u-7ek-180x180.jpg"];
let songLinks = ["https://www.youtube.com/watch?v=DHEOF_rcND8","https://www.youtube.com/watch?v=mRD0-GxqHVo","https://www.youtube.com/watch?v=gNi_6U5Pm_o"];
let songsSum = 3;
// for (let i = 1; i < songTitles.length; i++) {
//   songsSum += songTitles[i];
// }

function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  songTitles.forEach(function(songTitle) {
  console.log(songTitle);
  $(".songs").append(`<h4>${songTitle}</h4>`);
});
  songArtists.forEach(function(songArtist) {
    $(".artists").append(`<h5>${songArtist}</h5>`)
  });
  songImages.forEach(function(image,index) {
    $(".images").append(`<a href = ${songLinks[index]}><img src = ${image}></a>`);
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
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
  let title = $(".title").val();
  songTitles.push(title);
  let author = $(".artist").val();
  songArtists.push(author);
  console.log(songTitles);
  let imageLink = $(".image").val();
  songImages.push(imageLink);
  let songLink = $(".link").val();
  songLinks.push(songLink);
  songsSum += 1;
}

$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
  $("h2").text(songsSum + " songs");
});

displaySongInfo();
