$(document).ready(function(){

    var quantitiy=0;
      $('#btnplus1').click(function(e){
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            // If is not undefined
                $('#quantity').val(quantity + 1);
               // Increment
        });

        $('#btnminus1').click(function(e){
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            // If is not undefined
                // Increment
                if(quantity>0){
                $('#quantity').val(quantity - 1);
                }
        });

        $('#btnplus2').click(function(e){
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity2').val());
            // If is not undefined
                $('#quantity2').val(quantity + 1);
               // Increment
        });

        $('#btnminus2').click(function(e){
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity2').val());
            // If is not undefined
                // Increment
                if(quantity>0){
                $('#quantity2').val(quantity - 1);
                }
        });

        $('#btnplus3').click(function(e){
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity3').val());
            // If is not undefined
                $('#quantity3').val(quantity + 1);
               // Increment
        });

        $('#btnminus3').click(function(e){
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity3').val());
            // If is not undefined
                // Increment
                if(quantity>0){
                $('#quantity3').val(quantity - 1);
                }
        });

    });