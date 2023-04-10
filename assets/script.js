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
var savedText

var data = loadFromLocalStorage()

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
    id: "hour-9"
  },

  {
    timeField: "10AM",
    twentyfourhrVal: 10,
    id: "hour-10"
  },

  {
    timeField: "11AM",
    twentyfourhrVal: 11,
    id: "hour-11"
  },

  {
    timeField: "12PM",
    twentyfourhrVal: 12,
    id: "hour-12"
  },

  {
    timeField: "1PM",
    twentyfourhrVal: 13,
    id: "hour-13"
  },

  {
    timeField: "2PM",
    twentyfourhrVal: 14,
    id: "hour-14"
  },

  {
    timeField: "3PM",
    twentyfourhrVal: 15,
    id: "hour-15"
  },

  {
    timeField: "4PM",
    twentyfourhrVal: 16,
    id: "hour-16"
  },

  {
    timeField: "5PM",
    twentyfourhrVal: 17,
    id: "hour-17"
  },

]

$(function () {
  
  $('.saveBtn').on('click', function(event){
    console.log("clicked");
    console.log(event.target)
    console.log(event.target.dataset)
    
    var request = { hour: event.target.dataset.hour, eventTitle: eventTitle.textContent }
    userSaveButtonInputs.push(request);

    handleSaveRequest(request)
    localStorage.setItem('Workday Events',JSON.stringify(userSaveButtonInputs))


    
  });

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  currentTimeHeader.text(currentTime.format("dddd, MMMM D"));
});