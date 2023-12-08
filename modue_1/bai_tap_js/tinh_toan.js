function maytinh (){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let tinh = document.getElementById('tinh').value;
    switch (tinh){
        case 1:
            let Result = 'Result: ' + (Number(a) + Number(b));
            document.getElementById("Result").innerHTML = Result;
            break;
        case 2:
            let Result = 'Result: ' + (Number(a) - Number(b));
            document.getElementById("Result").innerHTML = Result;
            break;
        case 3:
            let Result = 'Result: ' + (Number(a) * Number(b));
            document.getElementById("Result").innerHTML = Result;
            break;
        case 4:
            let Result = 'Result: ' + (Number(a) / Number(b));
            document.getElementById("Result").innerHTML = Result;
            break;
    }
}
