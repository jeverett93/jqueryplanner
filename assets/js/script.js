$(document).ready(function(){

// Getting current time to pop up
var dayAndTime = moment().format('LLLL');
var container = $("#container");
var workHours = ["9 AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

$("#currentDay").append(dayAndTime);

function createTimeBlocks() {
    var blocks = "";
    for (var i = 0; i < workHours.length; i++) {
        var hourBlock = "" +
            '<div class="input-group mb-3">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text">' + workHours[i] + '</span>' +
            '</div>' +
            '<input type="text" class="form-control" id="user-input"' + workHours[i] + '">' +
            '<div class="input-group-append">' +
            '<button class="btn btn-primary" id="save-button" data-time="'  + workHours[i] + '"><i class="fa fa-save"></i></button>' +
            '</div>' +
            '</div>';
        blocks += hourBlock;
    }
    container.append(blocks);

    $("#save-button").on("click", function() {
        var userTask = $("#user-input").val();
        alert(userTask);
        savedTasks.push(userTask);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
    });


    
}

createTimeBlocks();
console.log(savedTasks);


    


})

// Display only standard working hours (i.e. 9 AM - 5 PM) and color code each block based on the current time. (Hint: HTML elements should be dynamically created.)
    // dynamically populate container with time blocks (grab container id to do this)
    // create timeblocks using a variable
    // use for loop to add input attribute to timeblocks
// Clicking each block allows the user to add text.
// Clicking a save button/icon will save the content to localStorage.
