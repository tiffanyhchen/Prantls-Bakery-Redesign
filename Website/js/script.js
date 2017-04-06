function showTab(event, sectionID) {
    var menuInfo = document.getElementsByClassName("menu-info");
    for (var i = 0; i < menuInfo.length; i++) {
        menuInfo[i].style.display = "none";
    }
    document.getElementById("intro").style.display = "none";
    var tablinks = document.getElementsByClassName("tab");
    for (var j = 0; j < tablinks.length; j++) {
        tablinks[j].style.className = "tab";
        tablinks[j].style.backgroundColor = "#81c584";
    }
    document.getElementById(sectionID).style.display = "block";
    event.currentTarget.style.backgroundColor = "#f49093";
}

function validate() {
    /*var zipcode = document.getElementsByName("zipcode");
    console.log(zipcode);
    if (isNaN(zipcode)) {
        alert("Zipcode is not valid or not in a valid format.");
        return false;
    }*/
}