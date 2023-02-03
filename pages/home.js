let total = 0;
let row = 1;
let index = 0;
function v() {
    var z = document.getElementById("date").value
    if (z == "") {
        alert("Enter Date");
        document.getElementById("date").focus();
        return false;
    }
    var x = document.getElementById("item").value
    if (x == "") {
        alert("Enter Item");
        document.getElementById("item").focus();
        return false;
    }
    var y = document.getElementById("amt").value
    if (y == "" || isNaN(y)) {
        alert("Enter Amount");
        document.getElementById("amt").focus();
        document.getElementById("amt").value = "";
        return false;
    }
    var table = document.getElementById('table');
    row++;
    index++;
    total += parseFloat(y);
    var nrow = table.insertRow(row);
    var c1 = nrow.insertCell();
    var c2 = nrow.insertCell();
    var c3 = nrow.insertCell();
    var c4 = nrow.insertCell();
    c1.style.textAlign = "center";
    c2.style.textAlign = "center";
    c3.style.textAlign = "center";
    c4.style.textAlign = "center";
    c1.innerHTML = index;
    c2.innerHTML = z;
    c3.innerHTML = y;
    c4.innerHTML = x;
    var c5 = document.getElementById('total');
    c5.innerHTML = total;
    c5.style.textAlign = "left";
    r();


}

function r() {
    document.getElementById("date").value = "";
    document.getElementById("item").value = "";
    document.getElementById("amt").value = "";
}


