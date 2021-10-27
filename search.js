/*サムネイル動画取得*/
const geturl = () =>{
let url = document.getElementById("search");
let value = url.value;

/*https://youtu.be/LSuBacDDg-c*/

movieId = value.substring(17,value.length);
document.getElementById("cuturl").innerHTML = movieId;

const elem = document.getElementById("thum-img");
elem.src = "https://www.youtube.com/embed/" + movieId;


}
