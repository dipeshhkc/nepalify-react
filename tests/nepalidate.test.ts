import { describe } from "mocha";
import Nepali, { NepaliDate, INepaliDateFormat } from '../build';
import { assert } from "chai";

describe('#nepaliDateObject', function(){

    describe('Should give javascript date object', function(){
        
        it('Should give date from date object', function(){
            const testDay = "1997-03-19";
            const birthday = new Date(testDay);
            const nepaliDate = new NepaliDate(birthday);
            const dateObject = nepaliDate.getDateObject();
            
            const expectedDate = {
                "year": 1997,
                "month": 2,
                "day": 19
            };

            const testDate = {
                "year": dateObject.getFullYear(),
                "month": dateObject.getMonth(),
                "day": dateObject.getDate()
            };

            assert.deepEqual(testDate, expectedDate);

        });
        
        
    });

    describe('Check formating of date object', function(){

        it('Should give date from string format yyyy/mm/dd -ne', function(){
            const testDay = "1997/03/19";
            const testFormat = "तपाइको जन्मदिन {y} साल {m} महिना {d} दिन मा पर्यो";
            const expectedOutput = "तपाइको जन्मदिन २०५३ साल १२ महिना ६ दिन मा पर्यो"
            const dateObject = new NepaliDate(testDay);
            const testOutput = dateObject.format(testFormat, "ne");
            assert.equal(testOutput, expectedOutput);
        });

        it('Should give date from string format yyyy/mm/dd -en -padding', function(){
            const testDay = "1997/03/19";
            const testFormat = "Your birthday is on {y} year {m} month {d|2} day.";
            const expectedOutput = "Your birthday is on 2053 year 12 month 06 day."
            const dateObject = new NepaliDate(testDay);
            const testOutput = dateObject.format(testFormat);
            assert.equal(testOutput, expectedOutput);
        });

        it("Should give default format", function(){
            const testDay = "1997/03/19";
            const expectedOutputEn = "2053/12/06";
            const expectedOutputNe = "२०५३/१२/०६";
            const dateObject = new NepaliDate(testDay);
            let testOutput = dateObject.toDefaultFormat("en");
            assert.equal(testOutput, expectedOutputEn);

            testOutput = dateObject.toDefaultFormat("ne");
            assert.equal(testOutput, expectedOutputNe);
        });

    });

    describe("Check if it gives adbs object", function(){

        it("Should give adbs object", function(){
            const expectedDate: {
                en: INepaliDateFormat,
                ne: INepaliDateFormat
            } = {
                en: {
                    year: "2077",
                    month: "1",
                    day: "6",
                    strMonth: "Baisakh",
                    strShortMonth: "Bai",
                    dayOfWeek: "6",
                    strDayOfWeek: "Sanibar",
                    strShortDayOfWeek: "Sani",
                    totalDaysInMonth: "31"
                },
                ne: {
                    year: "२०७७",
                    month: "१",
                    day: "६",
                    strMonth: "बैशाख",
                    strShortMonth: "बै",
                    dayOfWeek: "६",
                    strDayOfWeek: "शनिबार",
                    strShortDayOfWeek: "शनि",
                    totalDaysInMonth: "३१"
                }
            };
            
            const testDate = '2077/01/06';
            const dateObject = new NepaliDate(testDate, "bs");

            const testDateObject = dateObject.getADBSObject();
            assert.deepEqual(testDateObject, expectedDate);
        });
        
    });

});