

  function NEOWS() {

   var startDate=$("#numDays").data('daterangepicker').startDate.format('YYYY-MM-DD');
   var endDate=$("#numDays").data('daterangepicker').endDate.format('YYYY-MM-DD');

        //var myDate = document.getElementById("numDays").start
        fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf`)
        .then(response => response.json())
        .then(data => {
           let lengthStart = Object.keys(data['near_earth_objects'][startDate]).length;
           let lengthEnd = Object.keys(data['near_earth_objects'][endDate]).length;
           if ( lengthStart > 10 ){
              lengthStart = 10
           }
           if ( lengthEnd > 10 ){
            lengthEnd = 10
          }

           for (let i = 0; i < lengthStart; i++) {
              var name = data['near_earth_objects'][startDate][i].name;
              var url = data['near_earth_objects'][startDate][i].nasa_jpl_url;
              var danger = data['near_earth_objects'][startDate][i].is_potentially_hazardous_asteroid;

              document.getElementById("neowsinfodiv").innerHTML += `<div class="row">
            <div class="col-3"> </div> <div class="col-1"> </div><div class="col-2">`
                 + name + `</div> <div class="col-3">` + `<a href="` + url + `">` + url + `</a>` + `</div>
            <div class="col-2">` + danger + `</div> </div>`
           }



           //Object.keys(data.near_earth_objects + '.' + starDate + '.[0].' + length
            //document.getElementById("numDays").innerHTML = imgsrc;
            console.log(lengthStart);
           console.log(data);

        });

        console.log("my start date = " + startDate);
        console.log("my end date = " + endDate);
     }
export { NEOWS };

