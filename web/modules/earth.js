function GeoPic() {
    var lon = document.querySelector("#longitude").value
    var lat = document.querySelector("#latitude").value
    var geoDay=$("#geoDay").data('daterangepicker').startDate.format('YYYY-MM-DD');

    fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${geoDay}&dim=0.15&api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf`)
    .then(response => response.json())
    .then(data => {
        let imgsrc = '<img src="' + data.url + '">';
        document.getElementById("geopicdiv").innerHTML = imgsrc;

        console.log(geoDay);
        console.log(data);
    });
 }
export {GeoPic};