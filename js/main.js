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
    let total = 0;

    numBtns.forEach(numBtn => numBtn.addEventListener("click", () => {
        displayed += numBtn.textContent;
        screenNum.textContent = displayed;
    }))

    operationBtns.forEach(operationBtn => operationBtn.addEventListener("click", () => {
        if (total === 0) {
            firstNum = displayed;
        }
        displayed = '';
        currentSign = operationBtn.textContent;
    }))

    equalBtn.addEventListener("click", () => {
        secondNum = displayed;
        console.log(typeof(firstNum));
        if (total != 0) {
            firstNum = total;
            total = 0;
        }
        let res = operate(+firstNum, +secondNum, currentSign);
        total += res;
        firstNum = 0;
        if (total % 1 != 0) {
            screenNum.textContent = total.toFixed(2);
            secondNum = 0;
        } else {
            screenNum.textContent = total;
            secondNum = 0;
        }
        console.log(total);
    })

    clearBtn.addEventListener("click", () => {
        displayed = '';
        firstNum = 0;
        secondNum = 0;
        currentSign = '';
        total = 0;
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
                if (num2 == 0) {
                    alert("Error, can't divide by 0");
                    displayed = '';
                    firstNum = 0;
                    secondNum = 0;
                    currentSign = '';
                    total = 0;
                    screenNum.textContent = displayed;
                    break;
                }
                res = num1 / num2;
                break;
        }

        return res;
    };
};

main();