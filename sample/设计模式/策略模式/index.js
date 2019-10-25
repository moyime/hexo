let strategy = {
    "S": function (salary) {
        return salary * 4;
    },
    "A": function (salary) {
        return salary * 3
    },
    "B": function (salary) {
        return salary * 2;
    }
}

function calculateBonus(level, salary) {
    return strategy[level](salary);
}
calculateBonus('A', 10000) // 30000