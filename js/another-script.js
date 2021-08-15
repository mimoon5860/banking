// Deposit----------

const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function () {
    const depositInputText = document.getElementById('deposit-input');
    const depositText = document.getElementById('deposit');

    const depositInput = parseFloat(depositInputText.value);
    const deposit = parseFloat(depositText.innerText);

    const depositTotal = depositInput + deposit;

    depositText.innerText = depositTotal;
    const balanceText = document.getElementById('balance');
    const balance = parseFloat(balanceText.innerText);
    const newBalance = balance + depositInput;

    balanceText.innerText = newBalance;


    depositInputText.value = '';
})

// Withdraw----
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function () {
    const withdrawInputText = document.getElementById('withdraw-input');
    const withdrawInput = parseFloat(withdrawInputText.value);

    const withdrawText = document.getElementById('withdraw');
    const withdraw = parseFloat(withdrawText.innerText);

    const newWithdraw = withdrawInput + withdraw;
    withdrawText.innerText = newWithdraw;

    const balanceText = document.getElementById('balance');
    const balance = parseFloat(balanceText.innerText);

    const newBalanceW = balance - withdrawInput;

    balanceText.innerText = newBalanceW;

    withdrawInputText.value = '';
})