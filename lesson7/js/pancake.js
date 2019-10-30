var d = new Date();
var currentdate = d.getDay();
if (currentdate == 5) {
    document.getElementsByClassName("pancakebanner")[0].classList.toggle("banner");
}