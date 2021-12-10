function Rover1() {
  var sol = document.querySelector("#sol").value

  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf`)
    .then(response => response.json())
    .then(data => {
      let length = Object.keys(data.photos).length;

      if (length > 100) {
        length = 100
      }

      let quantity = document.querySelector("#quantity").value

      if ( ( length > 0) && ( data.photos[quantity]!= null)) {
        var date = data.photos[quantity].earth_date
        var url = data.photos[quantity].img_src

        if (url != null) {
          let imgsrc = '<img src="' + url + '">';
          document.getElementById("sol1picdiv").innerHTML = imgsrc;
          document.getElementById("sol1date").value = date;
        } else {
          document.getElementById("sol1date").value = "no images";
        }
      } else {
        document.getElementById("sol1date").value = "no images";
      }

      console.log("size is " + length);
      console.log(data);
    });
}
export { Rover1 };