
function MarsCarousel0(){
  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf`)
  .then(response => response.json())
  .then(data => {

      let imgsrc = '<img src="' + data.photos[0].img_src + '">';
      document.getElementById("mars0").innerHTML = imgsrc;
      console.log(data.photos[0].img_src);
  });
}
export { MarsCarousel0 };

