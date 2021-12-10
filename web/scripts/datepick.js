$(function() {
    $('input[name="daterange1"]').daterangepicker({
      opens: 'left',
      //singleDatePicker: true
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });

  $(function() {
    $('input[name="daterange2"]').daterangepicker({
      opens: 'left',
      //singleDatePicker: true
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });


  $(function() {
    $('input[name="daterange3"]').daterangepicker({
      opens: 'left',
      singleDatePicker: true
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });

  $(function() {
    $('input[name="daterange4"]').daterangepicker({
      opens: 'left',
      //singleDatePicker: true
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });

  $(function() {
    $('input[name="daterange5"]').daterangepicker({
      opens: 'left',
      //singleDatePicker: true
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });

  $(function() {
    $('input[name="daterange6"]').daterangepicker({
      opens: 'left',
      //singleDatePicker: true
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });
