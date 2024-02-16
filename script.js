//display the tab
function displayContent(evt, divID) {
    console.log("venkatesh is the best")
    var i, tabcontent, tabButtons;

    //get all the tab contents
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].setAttribute("hidden", "hidden")
    }  
    //get all the tab buttons
    tabButtons = document.getElementsByClassName("tabButton");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }
  
    //set the selected tab to show
    document.getElementById(divID).removeAttribute("hidden")

    //get the div or whatever that called this function to have the active class to make it look like it was clicked :>
    evt.currentTarget.className += " active";
}

function downArrow(evt){
    evt.style.backgroundImage = "url('your-image-url')";
}

document.getElementById("default").click();
