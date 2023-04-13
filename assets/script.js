// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var userSaveButtonInputs = [ ]
var currentTime = dayjs();
var currentTimeHeader = $('#currentDay');
var timeOfEvent = $('')
var hour
var savedhour
var eventTitle = $('#textarea');
var eventText = eventTitle.val();
var savedText
var twentyFourHrTime = currentTime.format("H");
var saveButton = $('button');
var mainContainer = $('.container-lg')
var newArray = []


function loadFromLocalStorage(){
  if(userSaveButtonInputs == null) {
    userSaveButtonInputs = []
    
  }
  userSaveButtonInputs = JSON.parse(localStorage.getItem('workdayEvents'))
 
}

loadFromLocalStorage()

console.log(userSaveButtonInputs)



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
      var newDivPast = $(`<div id="hour-" class="row time-block past">
      <div class="col-2 col-md-1 hour text-center py-3">${workdayRows[i].timeField}</div>
      <textarea id="hour-${workdayRows[i].dataset} "class="col-8 col-md-10 description past" rows="3"></textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save" data-hour="${workdayRows[i].dataset}">
      <i class="fas fa-save" aria-hidden="true"></i>
      </button>
      </div>`);
      
      var newDivPresent = $(`<div id="hour-" class="row time-block present">
      <div class="col-2 col-md-1 hour text-center py-3">${workdayRows[i].timeField}</div>
      <textarea id="hour-${workdayRows[i].dataset}" class="col-8 col-md-10 description present" rows="3"></textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save" data-hour="${workdayRows[i].dataset}">
      <i class="fas fa-save" aria-hidden="true"></i>
      </button>
      </div>`);
      
      var newDivFuture = $(`<div id="hour-" class="row time-block future">
      <div class="col-2 col-md-1 hour text-center py-3">${workdayRows[i].timeField}</div>
      <textarea id="hour-${workdayRows[i].dataset}" class="col-8 col-md-10 description future" rows="3"></textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save" data-hour="${workdayRows[i].dataset}">
      <i class="fas fa-save" aria-hidden="true"></i>
      </button>
      </div>`);

      console.log( workdayRows[i].dataset + "|" + twentyFourHrTime )
      
      if( workdayRows[i].twentyfourhrVal == twentyFourHrTime ) {
        mainContainer.append(newDivPresent)
      } else if( parseInt(workdayRows[i].twentyfourhrVal) > twentyFourHrTime ) {
        console.log("future")
        mainContainer.append(newDivFuture) 
        console.log("past")
      } else if ( parseInt(workdayRows[i].twentyfourhrVal) < twentyFourHrTime ) {
        mainContainer.append(newDivPast)
      }
      
    }
    
  }
  makeNewDiv();
  
  $('.saveBtn').on('click', function(event){
    event.preventDefault()
    console.log("clicked");
    console.log(event.target)
    console.log(event.target.dataset)

    //var textarea = $(this).parent().children("textarea");

    console.log( $(this).data("hour") );
    //console.log(textarea.val());

    // update the global array with the new data
     var userSaveButtonInputs = [
      { 
        hour: $(this).data("hour"), 
        eventName: $(this).parent().children($('#hour-09'))[1].value 
      },
      { 
        hour: $(this).data("hour"), 
        eventName: $(this).parent().children($('#hour-10'))[1].value 
      },
      { 
        hour: $(this).data("hour"), 
        eventName: $(this).parent().children($('#hour-11'))[1].value 
      },
      { 
        hour: $(this).data("hour"), 
        eventName: $(this).parent().children($('#hour-12'))[1].value 
      },
      { 
        hour: $(this).data("hour"), 
        eventName: $(this).parent().children($('#hour-13'))[1].value 
      },
      { 
        hour: $(this).data("hour"), 
        eventName: $(this).parent().children($('#hour-14'))[1].value 
      },
      { 
        hour: $(this).data("hour"), 
        eventName: $(this).parent().children($('#hour-15'))[1].value 
      },
      { 
        hour: $(this).data("hour"), 
        eventName: $(this).parent().children($('#hour-16'))[1].value 
      },
      { 
        hour: $(this).data("hour"), 
        eventName: $(this).parent().children($('#hour-17'))[1].value 
      }
  
  ]
    
    // stringify that array
    //defineUserSave()
    console.log(userSaveButtonInputs);

    function saveToStorage() {
      localStorage.setItem('workdayEvents', JSON.stringify(userSaveButtonInputs))
    };
    saveToStorage()
    console.log(userSaveButtonInputs);

    // put that array into local storage
    // function loopOverUserArray(){
    //   var newArray = [ ]
    //   for(var i = 0; i<userSaveButtonInputs.length; i++ ){
        

    //     newArray.push(userSaveButtonInputs);
        
    //   }
    // }
    // loopOverUserArray()
    // iterate over current global array
    // 
    // if the array obj isn't the one being changed; push it into new array

    // push the new object from the input
    
    // console.log(newArray)
    
    function handleSaveRequest(userSaveButtonInputs) {
      userSaveButtonInputs = JSON.parse(localStorage.getItem('workdayEvents'))
    }
    handleSaveRequest()
    saveToStorage()
    
    
});
// let nineAM = $('.saveBtn').parent().children("div").val();
// let tenAM = $('hour-10 .col-8').val();
// let elevenAM = $('hour-11 .col-8').val();
// let noon = $('hour-12 .col-8').val();
// let onePM = $('hour-13 .col-8').val();
// let twoPM = $('hour-14 .col-8').val();
// let threePM = $('hour-15 .col-8').val();
// let fourPM = $('hour-16 .col-8').val();
// let fivePM = $('hour-17 .col-8').val();

// let request = [ nineAM, tenAM, elevenAM, noon, onePM, twoPM, threePM, fourPM, fivePM ]

// userSaveButtonInputs = request;

});
