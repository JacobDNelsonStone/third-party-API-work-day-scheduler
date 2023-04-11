// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var userSaveButtonInputs = [""]
var currentTime = dayjs();
var currentTimeHeader = $('#currentDay');
var timeOfEvent = $('')
var hour
var savedhour
var eventTitle = $('.description');
var eventText = eventTitle.textContent;
var savedText
var twentyFourHrTime = currentTime.format("H");
var saveButton = $('button');
var mainContainer = $('.container-lg')


function loadFromLocalStorage(){
  if(userSaveButtonInputs == null) {
    userSaveButtonInputs = []
    
    userSaveButtonInputs = JSON.parse(localStorage.getItem('workdayEvents'))
  }
}

loadFromLocalStorage()

console.log(userSaveButtonInputs)

function saveToStorage() {
  userSaveButtonInputs = localStorage.setItem('workdayEvents', JSON.stringify(userSaveButtonInputs))
};
saveToStorage()


var workdayRows = [
  {
    timeField: "9AM",
    twentyfourhrVal: 9,
    dataset: "09"
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

$(function () {

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

// TODO: Add code to display the current date in the header of the page.
currentTimeHeader.text(currentTime.format("dddd, MMMM D"));

function makeNewDiv() {
  for( let i = 0; i<workdayRows.length; i++ ) {
    // console.log(workdayRows[i].dataset)
    // console.log(twentyFourHrTime);
    var newDivPast = $(`<div id="hour-${workdayRows[i].dataset}" class="row time-block past">
    <div class="col-2 col-md-1 hour text-center py-3">${workdayRows[i].timeField}</div>
    <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
    <button class="btn saveBtn col-2 col-md-1" aria-label="save" data-hour="${workdayRows[i].dataset}">
    <i class="fas fa-save" aria-hidden="true"></i>
    </button>
    </div>`);
    
    var newDivPresent = $(`<div id="hour-${workdayRows[i].dataset}" class="row time-block present">
    <div class="col-2 col-md-1 hour text-center py-3">${workdayRows[i].timeField}</div>
    <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
    <button class="btn saveBtn col-2 col-md-1" aria-label="save" data-hour="${workdayRows[i].dataset}">
    <i class="fas fa-save" aria-hidden="true"></i>
    </button>
    </div>`);
    
    var newDivFuture = $(`<div id="hour-${workdayRows[i].dataset}" class="row time-block future">
    <div class="col-2 col-md-1 hour text-center py-3">${workdayRows[i].timeField}</div>
    <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
    <button class="btn saveBtn col-2 col-md-1" aria-label="save" data-hour="${workdayRows[i].dataset}">
    <i class="fas fa-save" aria-hidden="true"></i>
    </button>
    </div>`);
    
    if( workdayRows[i].dataset == twentyFourHrTime ) {
      mainContainer.append(newDivPresent)
    } else if( workdayRows[i].dataset > twentyFourHrTime ) {
      mainContainer.append(newDivFuture) 
    } else if ( workdayRows[i].dataset < twentyFourHrTime ) {
      mainContainer.append(newDivPast)
    }
    
  }
  
  $('.saveBtn').on('click', function(event){
    console.log("clicked");
    console.log(event.target)
    console.log(event.target.dataset)
    
    
    
    function handleSaveRequest(userSaveButtonInputs) {
      localStorage.setItem('workdayEvents', JSON.stringify(userSaveButtonInputs))
    }
    handleSaveRequest()
  });
}
makeNewDiv();

let nineAM = $('hour-09 .description');
let tenAM = $('hour-10 .description');
let elevenAM = $('hour-11 .description');
let noon = $('hour-12 .description');
let onePM = $('hour-13 .description');
let twoPM = $('hour-14 .description');
let threePM = $('hour-15 .description');
let fourPM = $('hour-16 .description');
let fivePM = $('hour-17 .description');

let request = [ nineAM.val(), tenAM.val(), elevenAM.val(), noon.val(), onePM.val(), twoPM.val(), threePM.val(), fourPM.val(), fivePM.val() ]
userSaveButtonInputs = request;


});
