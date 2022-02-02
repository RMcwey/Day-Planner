var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var container = $('.container');

var textContent = $('textarea');
var currentTime = moment().format("hh");

// var timeSlotCurrentTime = moment('');

renderSchedule();

function renderSchedule() {
  for (let startTime = 9; startTime < 20; startTime++) {
      console.log(startTime)
      let hour;
      if (startTime < 10) {
          hour = `0${startTime}`
      } else {
          hour = startTime.toString()
      }
      // console.log('hour', hour)

      let time = moment(hour, "HH").format("hA")
      // console.log(time)
      var timeSection = $(`<div class="row align-items-start d-flex"><div class="col-2 hour">${time}</div><textarea class="col"></textarea><div class="col-2 saveBtn">Save</div></div>`)
      container.append(timeSection);

      // function renderColors() {
      var textArea = $('textarea');
      textArea.addClass('present')
      
      }


  };



// function timeInSlot (t) {
//   timeSlot = 
//   t = 09;
//   for (var i = 09; i < abilities.length; i++)
// }





// I need to set the time of the first block between 9 and 9:59. I likely need to add a for loop of some type to add an hour for each time after that till the 5pm spot. Then I need to create an if statement that validates the time of each block and adds the appropriate class.  


// var time = moment();
// var timesContainter = $('#container');
// var currentDate = now.format("MM DD YYYY");
// moment().format('MMMM Do YYYY, h:mm:ss a');

// var currentDay = $('#currentDay');

// currentDay.text("Today's Date: " + currentDate);




//   Auto Complete function
  // $( function() {
  //   var availableTags = [
  //     "ActionScript",
  //     "AppleScript",
  //     "Asp",
  //     "BASIC",
  //     "C",
  //     "C++",
  //     "Clojure",
  //     "COBOL",
  //     "ColdFusion",
  //     "Erlang",
  //     "Fortran",
  //     "Groovy",
  //     "Haskell",
  //     "Java",
  //     "JavaScript",
  //     "Lisp",
  //     "Perl",
  //     "PHP",
  //     "Python",
  //     "Ruby",
  //     "Scala",
  //     "Scheme"
  //   ];
  //   $( "#tags" ).autocomplete({
  //     source: availableTags
  //   });
  // } );
