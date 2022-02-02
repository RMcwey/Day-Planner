var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var container = $('.container');

var textContent = $('textarea');

renderSchedule();

function renderSchedule() {
  for (let startTime = 9; startTime < 20; startTime++) {
      // console.log(startTime)
      let hour;
      if (startTime < 10) {
          hour = `0${startTime}`
      } else {
          hour = startTime.toString()
      }
      console.log(hour)

      let time = moment(hour, "HH").format("hA")
      console.log(time)
      var timeSection = $(`<div class="row align-items-start d-flex"><div class="col-2 hour">${time}</div><textarea id=${time} class="col"></textarea><div class="col-2 saveBtn">Save</div></div>`)
      container.append(timeSection);

      var textArea = $(`#${time}`);
      console.log(textArea);


      var currentHour = moment().format('HH');
      console.log(currentHour);

      if (hour === currentHour) {
        textArea.addClass('present')
      } else if (hour > currentHour) {
        textArea.addClass('future')
      } else if (hour < currentHour) {
        textArea.addClass('past')
      };
      
      // function renderColors() {
      // var textArea = $('hour');
      // var currentHour = moment().hour();
      // var currentHour = moment('11', 'HH').format('hA');
      // console.log(currentHour);
      // console.log(time);
      
      // if (time === currentHour) {
      //   textArea.addClass('present')
      // } else if (hour < currentHour) {
      //   textArea.addClass('past')
      // }

  };
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