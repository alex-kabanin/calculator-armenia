function getNetSalary(grossSalary) {
    let incomeTax = grossSalary * 0.2;
    let socialContribution;
    if (grossSalary >= 1125000) {
        socialContribution = 1125000 * 0.1 - 25000;
    } else if (grossSalary >= 500000) {
        socialContribution = grossSalary * 0.1 - 25000;
    } else {
        socialContribution = grossSalary * 0.05;
    }

    let stampFee;
    if (grossSalary <= 100000) {
        stampFee = 1500;
    } else if (grossSalary <= 200000) {
        stampFee = 3000;
    } else if (grossSalary <= 500000) {
        stampFee = 5500;
    } else if (grossSalary <= 1000000) {
        stampFee = 8500;
    } else {
        stampFee = 15000;
    }

    let netSalary = grossSalary - incomeTax - socialContribution - stampFee;
    return netSalary;
}

let input = document.querySelector('#grosssalary');
let grossSalary;
input.onchange = function () {
    grossSalary = input.value;
    return grossSalary;
};
grossSalary = input.value;

document.getElementById("netsalary").innerHTML = getNetSalary(grossSalary);

function resultToDiv() {
    document.getElementById("netsalary").innerHTML = Math.floor(getNetSalary(grossSalary));
}