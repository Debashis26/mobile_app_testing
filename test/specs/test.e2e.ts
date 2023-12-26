import { expect } from '@wdio/globals'

describe('Testing the Calculator app', () => {

    it('should add two numbers correctly', async () => {
        const button_7 = await $('//android.widget.Button[@resource-id="com.google.android.calculator:id/digit_7"]');
        const button_Add = await $('//android.widget.Button[@content-desc="plus"]');
        const button_8 = await $('//android.widget.Button[@resource-id="com.google.android.calculator:id/digit_8"]');
        const button_Equals = await $('//android.widget.Button[@content-desc="equals"]');
        const result_Field = await $('//android.widget.TextView[@resource-id="com.google.android.calculator:id/formula"]');
        
        // const result_Field1 = await $('android.widget.TextView');

        await button_7.click();
        await button_Add.click();
        await button_8.click();
        await button_Equals.click();

        const result = await result_Field.getText();
        expect(result).toEqual('15');
    });

    // it('should subtract two numbers correctly', async () => {
    //     const button5 = await $('~button-5');
    //     const buttonSubtract = await $('~button-minus');
    //     const button3 = await $('~button-3');
    //     const buttonEquals = await $('~button-equals');
    //     const resultField = await $('~text-result');

    //     await button5.click();
    //     await buttonSubtract.click();
    //     await button3.click();
    //     await buttonEquals.click();

    //     const result = await resultField.getText();
    //     expect(result).toEqual('2');
    // });

    // it('should multiply two numbers correctly', async () => {
    //     const button4 = await $('~button-4');
    //     const buttonMultiply = await $('~button-multiply');
    //     const button6 = await $('~button-6');
    //     const buttonEquals = await $('~button-equals');
    //     const resultField = await $('~text-result');

    //     await button4.click();
    //     await buttonMultiply.click();
    //     await button6.click();
    //     await buttonEquals.click();

    //     const result = await resultField.getText();
    //     expect(result).toEqual('24');
    // });

    // it('should divide two numbers correctly', async () => {
    //     const button8 = await $('~button-8');
    //     const buttonDivide = await $('~button-divide');
    //     const button2 = await $('~button-2');
    //     const buttonEquals = await $('~button-equals');
    //     const resultField = await $('~text-result');

    //     await button8.click();
    //     await buttonDivide.click();
    //     await button2.click();
    //     await buttonEquals.click();

    //     const result = await resultField.getText();
    //     expect(result).toEqual('4');
    // });

   
})

