
// task-3

function calculateElectronicsBudget(laptop, tablet, mobile){
    totalMoneyRequired = (35000 * laptop) + (15000 * tablet) + (20000 * mobile);
    return totalMoneyRequired;
}
const totalBudget = calculateElectronicsBudget(1, 2, 3);
console.log(totalBudget);