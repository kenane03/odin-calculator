function main() {
    const numBtns = document.querySelectorAll(".num");
    const operationBtns = document.querySelectorAll(".operation");
    const screenNum = document.querySelector(".screen-num");
    const equalBtn = document.querySelector(".equal");
    const clearBtn = document.querySelector(".clear");
    const deleteBtn = document.querySelector(".delete");

    let displayed = '';
    let firstNum = 0;
    let secondNum = 0;
    let currentSign = '';

    numBtns.forEach(numBtn => numBtn.addEventListener("click", () => {
        displayed += numBtn.textContent;
        screenNum.textContent = displayed;
    }))

    operationBtns.forEach(operationBtn => operationBtn.addEventListener("click", () => {
        firstNum = displayed;
        displayed = '';
        currentSign = operationBtn.textContent;
    }))

    equalBtn.addEventListener("click", () => {
        secondNum = displayed;
        console.log(typeof(firstNum));
        let res = operate(+firstNum, +secondNum, currentSign);
        if (res % 1 != 0) {
            screenNum.textContent = res.toFixed(2);
        } else {
            screenNum.textContent = res;
        }
    })

    clearBtn.addEventListener("click", () => {
        displayed = '';
        firstNum = 0;
        secondNum = 0;
        currentSign = '';
        screenNum.textContent = displayed;
    })

    deleteBtn.addEventListener("click", () => {
        displayed = displayed.slice(0, -1);
        screenNum.textContent = displayed;
    })



    function operate(num1, num2, sign) {
        let res = 0;
        switch (sign) {
            case "+":
                res = num1 + num2;
                break;
            case "-":
                res = num1 - num2;
                break;
            case "*":
                res = num1 * num2;
                break;
            case "/":
                res = num1 / num2;
                break;
        }

        return res;
    };
};

main();