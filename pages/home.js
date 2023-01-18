function v()
{
    var z = document.getElementById("date").value
    if(z=="")
    {
        alert("Enter Date");
        document.getElementById("date").focus();
        return false;
    }
    var x = document.getElementById("item").value
    if(x=="")
    {
        alert("Enter Item");
        document.getElementById("item").focus();
        return false;
    }

    var y = document.getElementById("amt").value
    if(y=="" || isNaN(y))
    {
        alert("Enter Amount");
        document.getElementById("amt").focus();
        document.getElementById("amt").value="";
        return false;
    }
}


