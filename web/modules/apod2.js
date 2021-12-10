  function Apod2() {
        fetch(`https://api.nasa.gov/planetary/apod?count=1&api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf`)
        .then(response => response.json())
        .then(data => {
          if (data.media_type === "video"){
            let vidsrc = "<video width='420' height='315' controls='0'><source src='" + data[0].url + "' type='video/mp4'>Your browser does not support the video tag.</video>";
            document.getElementById("2").innerHTML = vidsrc;
            console.log(data[0].url);
          }else{
           let imgsrc = '<img src="' + data[0].url + '">';
            document.getElementById("apod2").innerHTML = imgsrc;
            console.log(data[0].url);

          }
        });
     }
export { Apod2 };

