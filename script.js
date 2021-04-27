function compute()
{
    p = document.getElementById("principal").value;
    years = document.getElementById("years").value;
    rate = document.getElementById("rate").value;
    currentYear = new Date().getFullYear()
    finalYear = currentYear + years
    amount = (p * rate * years / 100)
    out = "If you deposit <span class='highlight'>" + p + "</span>,<br> at an interest rate of <span class='highlight'>" + rate + "%</span>.<br>You will receive an amount of <span class='highlight'>" + amount + "</span>,<br>in the year <span class='highlight'>" + finalYear + "</span>"
    console.log(out)
    document.getElementById("calcOutput").innerHTML=out
}
        