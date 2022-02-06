
function MarsCarousel2(){
  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf`)
  .then(response => response.json())
  .then(data => {

      let imgsrc = '<img src="' + data.photos[19].img_src + '">';
      document.getElementById("mars2").innerHTML = imgsrc;
      console.log(data.photos[2].img_src);
  });
}
export { MarsCarousel2};

