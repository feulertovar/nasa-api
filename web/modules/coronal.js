
  function CORONAL() {

   var startDate=$("#coroDays").data('daterangepicker').startDate.format('YYYY-MM-DD');
   var endDate=$("#coroDays").data('daterangepicker').endDate.format('YYYY-MM-DD');

        //var myDate = document.getElementById("numDays").start
        fetch(`https://api.nasa.gov/DONKI/CME?start_date=${startDate}&end_date=${endDate}&api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf`)
        .then(response => response.json())
        .then(data => {

           let length = Object.keys(data).length;
             if ( length > 10 ){
              length = 10
           }

           for (let i = 0; i < length; i++) {
              var startTime = data[i].startTime;
              var url = data[i].link;
              var location = data[i].sourceLocation;

              document.getElementById("coronalinfodiv").innerHTML += `<div class="row">
            <div class="col-3"> </div> <div class="col-2"> </div><div class="col-2">`
                 + startTime + `</div> <div class="col-3">` + `<a href="` + url + `">` + url + `</a>` + `</div></div>`

           }
           console.log(length);
           console.log(data);

        });

        console.log("my start date = " + startDate);
        console.log("my end date = " + endDate);
     }
export { CORONAL };
