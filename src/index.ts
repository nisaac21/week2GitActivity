import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);

const result_subtract = calc.subtract(3,1) 

console.log(`result_add = ${result_add}`);

console.log('done.')

calc.hello();