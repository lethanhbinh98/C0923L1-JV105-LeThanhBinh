function Changemoney() {
    let a = document.getElementById('amount').value;
    let b = document.getElementById('frcountry').value;
    let c = document.getElementById('tocountry').value;
    let Result;
    if (b == 'USD' && c == 'VND')
        Result = 'Result : '+ (a*23000) + 'VND'
    else if (b == 'VND' && c == 'USD')
        Result = 'Result : '+ (a/23000)+ 'USD'
    else if (b == 'VND')
        Result = 'Result : '+ a + 'VND'
    else
        Result = 'Result : '+ a + 'USA'
    document.getElementById("Result").innerHTML = Result;
}