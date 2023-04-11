// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var userSaveButtonInputs = []
var currentTime = dayjs();
var currentTimeHeader = $('#currentDay');
var timeOfEvent = $('')
var hour
var savedhour
var eventTitle = $('.description');
var eventText = eventTitle.textContent;
var savedText
var twentyFourHrTime = currentTime.format("H");

loadFromLocalStorage()

function loadFromLocalStorage(){

  userSaveButtonInputs = JSON.parse(localStorage.getItem('Workday Events'))
  if(userSaveButtonInputs == null) {
    userSaveButtonInputs = []
}
}

function saveToStorage() {
  userSaveButtonInputs = localStorage.setItem('Workday Events', JSON.stringify(userSaveButtonInputs))
}

var workdayRows = [
  {
    timeField: "9AM",
    twentyfourhrVal: 9,
    dataset: "9"
  },

  {
    timeField: "10AM",
    twentyfourhrVal: 10,
    dataset: "10"
  },

  {
    timeField: "11AM",
    twentyfourhrVal: 11,
    dataset: "11"
  },

  {
    timeField: "12PM",
    twentyfourhrVal: 12,
    dataset: "12"
  },

  {
    timeField: "1PM",
    twentyfourhrVal: 13,
    dataset: "13"
  },

  {
    timeField: "2PM",
    twentyfourhrVal: 14,
    dataset: "14"
  },
  
  {
    timeField: "3PM",
    twentyfourhrVal: 15,
    dataset: "15"
  },
  
  {
    timeField: "4PM",
    twentyfourhrVal: 16,
    dataset: "16"
  },
  
  {
    timeField: "5PM",
    twentyfourhrVal: 17,
    dataset: "17"
  },
  
]
// function makeRows(){
//   var rowTimeBlock = $('<div></div>').addClass("row", "time-block");
//   rowHourTime = $('<div></div>').css({ class:"col-2 col-md-1 hour text-center py-3" }).text(workdayRows.timeField)
//   rowTextArea = $('<textarea> </textarea>').css({ class:"col-8 col-md-10 description", rows:"3"});
//   rowButton = $('<button></button>').css({ class:"btn saveBtn col-2 col-md-1" }).attr("aria-label", 'save').attr("data-hour", workdayRows.dataset);
//   rowItag = $('<i></i>').css({ class:"fas fa-sav" }).attr("aria-hidden", "true");

//   rowButton.append(rowItag);
//   rowTextArea.append(rowButton);
//   rowHourTime.append(rowTextArea);
//   rowTimeBlock.append(rowHourTime);
//   $('.container-lg px-5').append(rowTimeBlock);
// }

// makeRows()


$(function () {
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.saveBtn').on('click', function(event){
    console.log("clicked");
    console.log(event.target)
    console.log(event.target.dataset)
    console.log()
    
    var request = { hour: event.target.dataset.hour, eventName: eventTitle.textContent}
    userSaveButtonInputs.push(request);

    function handleSaveRequest(request) {
    localStorage.setItem('Workday Events', JSON.stringify(userSaveButtonInputs))
    }
    handleSaveRequest()
  });
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function verifyTime(){
    var twentyFourHrTime = 11
    if(twentyFourHrTime == workdayRows.twentyfourhrVal ) {
      $('.time-block').addClass('present')
      $('.time-block').removeClass('past')
      $('.time-block').removeClass('future')
    } else if( twentyFourHrTime < workdayRows.twentyfourhrVal ){
      $('.time-block').addClass('future')
      $('.time-block').removeClass('present')
      $('.time-block').removeClass('past')
    } else {
      $('.time-block').addClass('past')
    }
  }

  verifyTime()
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // TODO: Add code to display the current date in the header of the page.
  currentTimeHeader.text(currentTime.format("dddd, MMMM D"));
});