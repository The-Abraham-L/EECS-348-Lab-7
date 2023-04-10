function prac2()
{
    var bR = document.getElementById("bR").value;
    var bG = document.getElementById("bG").value;
    var bB = document.getElementById("bB").value;
    var bwidth = document.getElementById("bwidth").value;
    var pR = document.getElementById("pR").value;
    var pG = document.getElementById("pG").value;
    var pB = document.getElementById("pB").value;

    var pag = document.getElementById("paragraph");
    pag.style.borderColor = `rgb(${bR},${bG},${bB})`;
    pag.style.borderWidth = bwidth
    pag.style.backgroundColor = `rgb(${pR},${pG},${pB})`;
}