var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var container = $('.container');

// var textContent = document.getElementById('9AM');
// var textContent2 = $('input[name="10AMtoDo"]').val();
// var textContent3 = $('input[name="11AMtoDo"]').val();
// var textContent4 = $('input[name="12PMtoDo"]').val();
// var textContent5 = $('input[name="1PMtoDo"]').val();
// var textContent6 = $('input[name="2PMtoDo"]').val();
// var textContent7 = $('input[name="3PMtoDo"]').val();
// var textContent8 = $('input[name="4PMtoDo"]').val();
// var textContent9 = $('input[name="5PMtoDo"]').val();


renderSchedule();
// inputSavedToDos();
// creating funtion that renders the schedule
function renderSchedule() {
  // creating for loop to make sure that moment function works later on by adding a 0 to time that is less that 10. Also set the time frame for the planner with "startTime".
  for (let startTime = 9; startTime < 18; startTime++) {
      // console.log(startTime)
      let hour;
      if (startTime < 10) {
          hour = `0${startTime}`
      } else {
          hour = startTime.toString()
      }
      // console.log(hour)
      // defined time and put it into a create element Jquery function that will create as many elements as is indicated by loop above.
      let time = moment(hour, "HH").format("hA")
      // console.log(time)
      var timeSection = $(`<div class="row align-items-start d-flex"><div class="col-2 hour">${time}</div><textarea id=${time} class="col"></textarea><div class="col-2 saveBtn">Save</div></div>`)
      container.append(timeSection);

      var textArea = $(`#${time}`);
      // console.log(textArea);

      // created var that logs current hour
      var currentHour = moment().format('HH');
      // console.log(currentHour);
      // These are the if statements that handle generating the colors.
      if (hour === currentHour) {
        textArea.addClass('present')
      } else if (hour > currentHour) {
        textArea.addClass('future')
      } else if (hour < currentHour) {
        textArea.addClass('past')
      };
  };
};


var saveButton = $(`.saveBtn`);

function saveInfo(event) {
  event.preventDefault();
  var textContent = document.getElementById('9AM');
//   var textContent =  $('input[name="9AMtoDo"]').val();
//   var textContent2 = $('input[name="10AMtoDo"]').val();
//   var textContent3 = $('input[name="11AMtoDo"]').val();
//   var textContent4 = $('input[name="12PMtoDo"]').val();
//   var textContent5 = $('input[name="1PMtoDo"]').val();
//   var textContent6 = $('input[name="2PMtoDo"]').val();
//   var textContent7 = $('input[name="3PMtoDo"]').val();
//   var textContent8 = $('input[name="4PMtoDo"]').val();
//   var textContent9 = $('input[name="5PMtoDo"]').val();
  localStorage.setItem('text1', JSON.stringify(textContent.value))
//   localStorage.setItem('text2', JSON.stringify(textContent2))
//   localStorage.setItem('text3', JSON.stringify(textContent3))
//   localStorage.setItem('text4', JSON.stringify(textContent4))
//   localStorage.setItem('text5', JSON.stringify(textContent5))
//   localStorage.setItem('text6', JSON.stringify(textContent6))
//   localStorage.setItem('text7', JSON.stringify(textContent7))
//   localStorage.setItem('text8', JSON.stringify(textContent8))
//   localStorage.setItem('text9', JSON.stringify(textContent9))
}

// function inputSavedToDos () {
// textContent = localStorage.getItem("text1");
// // textLocation1.text(inputThing);
// }

// // function inputSavedToDos () {
// //   textContentInput1 = JSON.parse(localStorage.getItem("text1"));
// // }
saveButton.on('click', saveInfo);


// old code

// var mainTextInput = {
//   items: textContent.value,
// }
// var mainTextInput2;
// // for (let i=0; i < hour.length; i++){
// $(`#9AM, textarea`).on('input', function() {
// mainTextInput = ($(this).val());
// saveButton.on('click', function (event) {
// event.preventDefault();
// localStorage.setItem('text1', JSON.stringify(mainTextInput))
// });
// });
// $('#10AM, textarea').on('input', function() {
// mainTextInput2 = ($(this).val());
// saveButton.on('click', function (event) {
// event.preventDefault();
// localStorage.setItem('text2', JSON.stringify(mainTextInput2))
// });
// });


// function saveInfo () {
//   var textAreaInput = $("textarea").each(function() {
//     $(this).find(':input');
//     localStorage.setItem("text", JSON.stringify(textAreaInput));

//   // var textAreaInput = $(`textArea`).val('');
//     // console.log(localStorage.getItem('text'));
  
//   });
  
//   // console.log(saveButton);

//   // this is for all save buttons and is working.
// }
// var saveButton = $(`.saveBtn`);
// saveButton.on('click', saveInfo) 
// saveButton.css('background-color', 'green')

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