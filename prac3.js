function prac3()
{
    var pc1 = document.getElementById("pc1").value;
    var pc2 = document.getElementById("pc2").value;
    if (pc1.length < 8 || pc2.length < 8) {alert("Either the first or second password is less than 8 letters.")}
    else if (pc1 != pc2) {alert("The passwords are different from each other.")}
    else {alert("The passwords are greater than 8 letters and match. The password is good.")}
}
