let value = "";
function onClick(val) {
    if (val == 1 || val == 2 || val == 3 || val == 4 || val == 5 || val == 6 || val == 7 || val == 8 || val == 9 || val == 0 || val == 0o0 || val == "/" || val == "*" || val == "-" || val == "+" || val == "." || val == "%") {

        document.getElementById("result").value += val;


    }
    if (val == 'AC') {
        document.getElementById("result").value = "";

    }
    if (val == "CE") {
        data = document.getElementById("result").value
        new1 = data.slice(0, -1)
        document.getElementById("result").value = new1
    }

}

function solve() {
    let x = document.getElementById("result").value
    let ans = math.evaluate(x)
    console.log(ans)

    document.getElementById("result").value = ans

}