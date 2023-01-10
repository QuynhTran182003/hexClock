function updateTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if(h<=9) {h = '0'+h;}
    if(m<=9) {m = '0'+m;}
    if(s<=9) {s = '0'+s;}
    var hexColor = '#' + h + m + s;
    document.getElementById('hexTime').innerHTML = hexColor;
    document.getElementById('background').style.backgroundColor = hexColor;
    setTimeout(updateTime, 1000);
}
updateTime();
// $("div.background").css("background-color", hexColor);
// $("span#hexNumber").text(color);