function compute()
{
    var p = document.getElementById("principal").value;
    if (p <= 0 || p == undefined) {
        alert("Enter a positive number")
        document.getElementById("principal").focus()
    } else {
        var years = document.getElementById("years").value;
        var rate = document.getElementById("rate").value;
        var currentYear = new Date().getFullYear()
        var finalYear = currentYear + parseInt(years)
        var amount = (p * rate * years / 100)
        var out = "If you deposit <span class='highlight'>" + p + "</span>,<br> at an interest rate of <span class='highlight'>" + rate + "%</span>.<br>You will receive an amount of <span class='highlight'>" + amount + "</span>,<br>in the year <span class='highlight'>" + finalYear + "</span>"
        document.getElementById("calcOutput").innerHTML=out
    }
}

function clearOutput()
{
    document.getElementById("calcOutput").innerHTML=""
}
        