var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY, h:mm:ss a"));

var container = $('.container');

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
      var timeSection = $(`<div class="row align-items-start d-flex"><div class="col-2 hour">${time}</div><textarea id=${time} class="col txtArea"></textarea><div class="col-1 saveBtn">Save</div><div class="col-1 clearBtn">Clear</div></div>`)
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
  loadSaved();
};


var saveButton = $(`.saveBtn`);

function saveInfo(event) {
  event.preventDefault();
  var textContent1 = document.getElementById('9AM');
  var textContent2 = document.getElementById('10AM');
  var textContent3 = document.getElementById('11AM');
  var textContent4 = document.getElementById('12PM');
  var textContent5 = document.getElementById('1PM');
  var textContent6 = document.getElementById('2PM');
  var textContent7 = document.getElementById('3PM');
  var textContent8 = document.getElementById('4PM');
  var textContent9 = document.getElementById('5PM');
  localStorage.setItem('text1', textContent1.value);
  localStorage.setItem('text2', textContent2.value);
  localStorage.setItem('text3', textContent3.value);
  localStorage.setItem('text4', textContent4.value);
  localStorage.setItem('text5', textContent5.value);
  localStorage.setItem('text6', textContent6.value);
  localStorage.setItem('text7', textContent7.value);
  localStorage.setItem('text8', textContent8.value);
  localStorage.setItem('text9', textContent9.value);

}

saveButton.on('click', saveInfo);

function loadSaved () {
  document.getElementById('9AM').textContent = localStorage.getItem('text1');
  if ('text1' == null) {
    document.getElementById('9AM').textContent = null;
  }
  document.getElementById('10AM').textContent = localStorage.getItem('text2');
  if ('text2' == null) {
    document.getElementById('10AM').textContent = null;
  }
  document.getElementById('11AM').textContent = localStorage.getItem('text3');
  if ('text3' == null) {
    document.getElementById('11AM').textContent = null;
  }
  document.getElementById('12PM').textContent = localStorage.getItem('text4');
  if ('text4' == null) {
    document.getElementById('12PM').textContent = null;
  }
  document.getElementById('1PM').textContent = localStorage.getItem('text5');
  if ('text5' == null) {
    document.getElementById('1PM').textContent = null;
  }
  document.getElementById('2PM').textContent = localStorage.getItem('text6');
  if ('text6' == null) {
    document.getElementById('2PM').textContent = null;
  }
  document.getElementById('3PM').textContent = localStorage.getItem('text7');
  if ('text7' == null) {
    document.getElementById('3PM').textContent = null;
  }
  document.getElementById('4PM').textContent = localStorage.getItem('text8');
  if ('text8' == null) {
    document.getElementById('4PM').textContent = null;
  }
  document.getElementById('5PM').textContent = localStorage.getItem('text9');
  if ('text9' == null) {
    document.getElementById('5PM').textContent = null;
  }
}

var clearButton = $(`.clearBtn`);
clearButton.on('click', clearInfo);

function clearInfo(event) {
  event.preventDefault();
  document.getElementById('9AM').textContent = localStorage.setItem('text1', "");
  document.getElementById('10AM').textContent = localStorage.setItem('text2', "");
  document.getElementById('11AM').textContent = localStorage.setItem('text3', "");
  document.getElementById('12PM').textContent = localStorage.setItem('text4', "");
  document.getElementById('1PM').textContent = localStorage.setItem('text5', "");
  document.getElementById('2PM').textContent = localStorage.setItem('text6', "");
  document.getElementById('3PM').textContent = localStorage.setItem('text7', "");
  document.getElementById('4PM').textContent = localStorage.setItem('text8',"");
  document.getElementById('5PM').textContent = localStorage.setItem('text9', "");

}

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