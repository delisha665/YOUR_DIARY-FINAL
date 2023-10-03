function add() {
    // selection=document.getElementById("country").selectedIndex;
    // console.log(selection);
    // country=document.getElementById("country").options[selection].text;
    // document.getElementById("output").innerHTML=country;
    option=document.getElementById("option").innerHTML;
    console.log(option);
    document.getElementById("output").innerHTML=option + "you can change it";
    document.getElementById("output2").innerHTML=option+ "you can change it";
    document.getElementById("output3").innerHTML=option+ "you can change it";
}
function back() {
    window.location="choose.html"
}