let balance = 0;
let speedLevel = 0;
let lastClaimTime = Date.now();

const speeds = [25, 50, 75, 100]; // Монет в час
const upgradeCosts = [150, 200, 250]; // Стоимость улучшений в звездах

// Обновление баланса
function updateBalance() {
    const now = Date.now();
    const timePassed = (now - lastClaimTime) / 1000 / 3600; // Время в часах
    const minedCoins = Math.floor(timePassed * speeds[speedLevel]);
    balance += minedCoins;
    lastClaimTime = now;
    document.getElementById('balance').innerText = `Баланс: ${balance} монет`;
}

// Забрать награду
document.getElementById('claim').addEventListener('click', () => {
    updateBalance();
});

// Улучшения
document.getElementById('upgrade1').addEventListener('click', () => {
    if (balance >= 10000) {
        balance -= 10000;
        speedLevel = 1;
        updateBalance();
    } else {
        alert('Недостаточно монет!');
    }
});

document.getElementById('upgrade2').addEventListener('click', () => {
    if (balance >= 15000) {
        balance -= 15000;
        speedLevel = 2;
        updateBalance();
    } else {
        alert('Недостаточно монет!');
    }
});

document.getElementById('upgrade3').addEventListener('click', () => {
    if (balance >= 20000) {
        balance -= 20000;
        speedLevel = 3;
        updateBalance();
    } else {
        alert('Недостаточно монет!');
    }
});