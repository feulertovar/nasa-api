function Rover3() {
  var sol3 = document.querySelector("#sol3").value

  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=${sol3}&api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf`)
    .then(response => response.json())
    .then(data => {
      let length = Object.keys(data.photos).length;

      if (length > 100) {
        length = 100
      }
      let quantity = document.querySelector("#quantity3").value

      if ( ( length > 0) && ( data.photos[quantity]!= null)) {
        var date = data.photos[quantity].earth_date;
        var url = data.photos[quantity].img_src;

        if (url != null) {
          let imgsrc = '<img src="' + url + '">';
          document.getElementById("sol3picdiv").innerHTML = imgsrc;
          document.getElementById("sol3date").value = date;
        } else {
          document.getElementById("sol3date").value = "no images";
        }
      } else {
        document.getElementById("sol3date").value = "no data";
      }

      console.log("size is " + length);
      console.log(data);
    });
}
export { Rover3 };