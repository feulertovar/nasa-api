
function MarsCarousel1(){
  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf`)
  .then(response => response.json())
  .then(data => {

      let imgsrc = '<img src="' + data.photos[14].img_src + '">';
      document.getElementById("mars1").innerHTML = imgsrc;
      console.log(data.photos[1].img_src);
  });
}
export { MarsCarousel1 };

