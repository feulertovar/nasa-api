function Rover2() {
  var sol2 = document.querySelector("#sol2").value

  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=${sol2}&api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf`)
    .then(response => response.json())
    .then(data => {
      let length = Object.keys(data.photos).length;

      if (length > 100) {
        length = 100
      }

      let quantity = document.querySelector("#quantity2").value

      if ( ( length > 0) && ( data.photos[quantity]!= null)) {
        var date = data.photos[quantity].earth_date
        var url = data.photos[quantity].img_src;

        if (url != null) {
          let imgsrc = '<img src="' + url + '">';
          document.getElementById("sol2picdiv").innerHTML = imgsrc;
          document.getElementById("sol2date").value = date;
        } else {
          document.getElementById("sol2date").value = "no images";
        }
      } else {
        document.getElementById("sol2date").value = "no data";
      }

      console.log("size is " + length);
      console.log(data);
    });
}
export { Rover2 };