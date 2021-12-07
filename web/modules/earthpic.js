function EarthPhoto() {
    fetch(`https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=2014-02-01&dim=0.15&api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf`)
    .then(response => response.json())
    .then(data => {
        let imgsrc = ``;
        imgsrc = '<img src="' + data.url + '">';
        document.getElementById("geopic").innerHTML = imgsrc;
        console.log(data);
    });
 }
export {EarthPhoto};