function compute()
{
    p = document.getElementById("principal").value;
    years = document.getElementById("years").value;
    rate = document.getElementById("rate").value;
    currentYear = new Date().getFullYear()
    finalYear = currentYear + years
    amount = (p * rate * years / 100)
    out = "If you deposit " + p + ",<br> at an interest rate of " + rate + "%.<br>You will receive an amount of " + amount + ",<br>in the year " + finalYear
    console.log(out)
    document.getElementById("calcOutput").innerHTML=out
}
        