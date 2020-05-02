import {describe} from 'mocha';
import Nepali, {CalendarUtils, NepaliDate} from '../build';
import { assert } from 'chai';

describe('#english2NepaliNumber', () => {
    const expectedNumber = "१२३४५६७८९०";
    const testNumber = "1234567890";
    const outputNumber = CalendarUtils.getNepaliNumber(testNumber); 
    assert.equal(expectedNumber,outputNumber)
});

describe("#generateMonthDays", () => {
    const date = '2076/04/13';
    const dateObj = new NepaliDate(date, "bs");
    const totalDaysInMonth = dateObj.getADBSObject().en.totalDaysInMonth;
    const outputArray = CalendarUtils.generateMonthDays(date, "bs");
    it("should have equal length", () => {
        assert.equal(outputArray.length, Number(totalDaysInMonth));
    });
    it("should have first index equal to first day in month", () => {
        const firstIndex = outputArray[0].toDefaultFormat();
        const testDate = '2076/04/01';
        assert.equal(firstIndex, testDate);
    });
    it("should have last index equal to last day in month", () => {
        const lastIndex = outputArray[outputArray.length - 1].toDefaultFormat();
        const testDate = `2076/04/${totalDaysInMonth}`;
        assert.equal(lastIndex, testDate);
    });
    it("should accept yyyy/mm", () => {
        const date = '2076/04';
        const outputArray = CalendarUtils.generateMonthDays(date, "bs");
        assert.equal(outputArray.length, Number(totalDaysInMonth));
    })
});

describe("#generateWeeklyDays", () => {
    it("should generate same number of days as total days in month", () => {
        const date = '2076/04/13';
        const weeklyDays = CalendarUtils.generateWeeklyDays(date, "bs");
        const expectedDaysInMonth = (new NepaliDate(date, "bs")).getADBSObject().en.totalDaysInMonth; 
        let outputDaysInMonth = 0;
        for(let weeks of weeklyDays){
            for(let day of weeks){
                if(day){
                    outputDaysInMonth++;
                }
            }
        }
        assert.equal(outputDaysInMonth, Number(expectedDaysInMonth));
    });
});