const app = require('./script');

const calApp = new app.CalculatorAPP();


test('Проверка сложения!', () => {
    // let c = new app.CalculatorAPP(10, 5);
    calApp.a = 10;
    calApp.b = 20;
    expect(calApp.addition()).toBe(30);
});

test('Проверка сложения c null!', () => {
    // let c = new app.CalculatorAPP(10, 5);
    calApp.a = null;
    calApp.b = 20;
    expect(calApp.addition()).toBe(undefined);
});

test('Проверка сложения c undefined!', () => {
    // let c = new app.CalculatorAPP(10, 5);
    calApp.a = undefined;
    calApp.b = 20;
    expect(calApp.addition()).toBe(undefined);
});


test('Проверка вычитания!', () => {
    // let c = new app.CalculatorAPP(10, 5);
    calApp.a = 100;
    calApp.b = 50;
    expect(calApp.substraction()).toBe(50);
});

test('Проверка деления!', () => {
    // let c = new app.CalculatorAPP(10, 5);
    calApp.a = 100;
    calApp.b = 50;
    expect(calApp.division()).toBe(2);
});

test('Проверка умножения!', () => {
    // let c = new app.CalculatorAPP(10, 5);
    calApp.a = 100;
    calApp.b = 50;
    expect(calApp.multiplication()).toBe(5000);
});

test('Проверка данных в переменной валидации!', () => {
    // let c = new app.CalculatorAPP(10, 5);
    calApp.a = 100;
    calApp.b = 50;
    expect([calApp.validNumbers]).toContainEqual({
        num_a: true,
        num_b: true,
        zero_b: true,
    });
});

test('Проверка данных в переменной валидации при b = 0!', () => {
    // let c = new app.CalculatorAPP(10, 5);
    calApp.a = 100;
    calApp.b = 0;
    expect(calApp.validNumbers).toEqual({
        num_a: true,
        num_b: true,
        zero_b: false, // если b = 0, то это видно в валидаторе
    });
});

test('Проверка данных в переменной валидации!', () => {
    // let c = new app.CalculatorAPP(10, 5);
    calApp.a = undefined;
    calApp.b = null;
    expect(calApp.validNumbers).toEqual({
        num_a: false,
        num_b: false,
        zero_b: false,
    });
});

test('Проверка на передачу текста в параметр!', () => {
    // let c = new app.CalculatorAPP(10, 5);
    calApp.a = "5,3";
    calApp.b = "12text";
    expect(calApp.validNumbers).toEqual({
        num_a: false,
        num_b: false,
        zero_b: true,
    });
});

test('Проверка на передачу текста в параметр!', () => {
    // let c = new app.CalculatorAPP(10, 5);
    calApp.a = null;
    calApp.b = null;
    expect(calApp.a).toBe(undefined);
    expect(calApp.b).toBe(undefined);
});
