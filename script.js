const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//Function #1
function getMyTaxes (salary) {
    return this.tax * salary;
};
console.log('Tax in the country: ' +getMyTaxes.call(litva, 5000));

//Function #2
function  getMiddleTaxes() {
    return this.tax * this.middleSalary;
};
console.log('Avarege tax in Ukraine: ' + getMiddleTaxes.call(ukraine));
console.log('Avarege tax in Latvia: ' + getMiddleTaxes.call(latvia));
console.log('Avarege tax in Litva: ' + getMiddleTaxes.call(litva));            

//Function #3
function getTotalTaxes () {
    return this.tax * this.middleSalary * this.vacancies;
};
console.log('Amount of tax in the county: ' + getTotalTaxes.call(ukraine));

//Function #4
function getMySalary(country) {
    const min = 1500;
    const max = 2000;
    let timerId = setInterval(() => {
        let salary = Number(Math.floor(Math.random() * (max - min)) + min);
        const taxes = Number(salary * country.tax).toFixed(2);
        const profit = Number((salary - taxes).toFixed(2));
        console.log({salary, taxes, profit});
    }, 10000);
    setTimeout(() => clearInterval(timerId), 30000);
}
console.log('Array: ' +getMySalary(ukraine));