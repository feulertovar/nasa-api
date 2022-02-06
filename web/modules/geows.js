

  function GEOWS() {

   var startDate=$("#stormDays").data('daterangepicker').startDate.format('YYYY-MM-DD');
   var endDate=$("#stormDays").data('daterangepicker').endDate.format('YYYY-MM-DD');

        //var myDate = document.getElementById("numDays").start
        fetch(`https://api.nasa.gov/DONKI/FLR?start_date=${startDate}&end_date=${endDate}&api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf`)
        .then(response => response.json())
        .then(data => {

           let length = Object.keys(data).length;

           if ( length > 10 ){
              length = 10
           }

           for (let i = 0; i < length; i++) {
              var loc = data[i].sourceLocation
              var url = data[i].link
              var peak =  data[i].peakTime

              document.getElementById("geowsinfodiv").innerHTML += `<div class="row">
            <div class="col-3"> </div> <div class="col-1"> </div><div class="col-2">`
                 + loc + `</div> <div class="col-3">` + `<a href="` + url + `">` + url + `</a>` + `</div></div>`
           }
           console.log(data);

        });

        console.log("my start date = " + startDate);
        console.log("my end date = " + endDate);
     }
export { GEOWS };

