  function NasaPhoto() {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf`)
        .then(response => response.json())
        .then(data => {
          if (data.media_type === "video"){
            let vidsrc = "<video width='420' height='315' controls='0'><source src='" + data.url + "' type='video/mp4'>Your browser does not support the video tag.</video>";
            document.getElementById("apod").innerHTML = vidsrc;
            console.log(data);
          }else{
           let imgsrc = '<img src="' + data.url + '">';
            document.getElementById("apod").innerHTML = imgsrc;
            console.log(data.url);

          }
        });
     }
export { NasaPhoto };

