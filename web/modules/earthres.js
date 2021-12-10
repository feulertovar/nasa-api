function ResPic() {
/*
    fetch(`https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf`)
    .then(response => response.json())
    .then(data => {/*
        let imgsrc = '<img src="' + data.url + '">';
        document.getElementById("geopicdiv").innerHTML = imgsrc;
*

        console.log(data);
    });*/
    let imgsrc = '<img src="https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf">';
    document.getElementById("respicdiv").innerHTML = imgsrc;

 }
export {ResPic};