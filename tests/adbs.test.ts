import { describe } from "mocha";
import { INepaliDateFormat } from "../build/datepicker/NepaliDate";
import { ADBSConverter } from "../build";
import { assert } from "chai";

/**
 * ADBS Converter test
 */
describe('#ad2bs', function(){
    it('Converts 2020/4/18 to 2077/1/6', function(){
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
        const testDate = '2020/4/18';
        const outputDate = ADBSConverter.ad2bs(testDate)
        assert.deepEqual(outputDate, expectedDate);
    });

    it('Converts 1997/3/19 to 2053/12/6', function(){
        const expectedDate: {
            en: INepaliDateFormat,
            ne: INepaliDateFormat
        } = {
            en: {
                year: "2053",
                month: "12",
                day: "6",
                strMonth: "Chaitra",
                strShortMonth: "Chai",
                dayOfWeek: "3",
                strDayOfWeek: "Budhabar",
                strShortDayOfWeek: "Budha",
                totalDaysInMonth: "30"
            },
            ne: {
                year: "२०५३",
                month: "१२",
                day: "६",
                strMonth: "चैत्र",
                strShortMonth: "चै",
                dayOfWeek: "३",
                strDayOfWeek: "बुधबार",
                strShortDayOfWeek: "बुध",
                totalDaysInMonth: "३०"
            }
        };
        const testDate = '1997/3/19';
        const outputDate = ADBSConverter.ad2bs(testDate)
        assert.deepEqual(outputDate, expectedDate);
    });
});

describe("#CheckLeapYear", function(){
    it('Checks if 2003 is leap year', function(){
        const expectedLeapYear = true;
        const outputLeapYear = ADBSConverter.isLeapYear("2003");
        assert.equal(outputLeapYear, expectedLeapYear);
    });
});

describe("#bsad", function(){
    it("Converts 2053/12/6 to 1997/3/19", function(){
        const expectedDate: INepaliDateFormat = {
            year: "1997",
            month: "3",
            day: "19",
            dayOfWeek: "3",
            strDayOfWeek: "Wednesday",
            strMonth: "March",
            strShortMonth: "Mar",
            strShortDayOfWeek: "Wed"
        };
        const testDate = "2053/12/6";
        const outputDate = ADBSConverter.bs2ad(testDate);
        assert.deepEqual(outputDate, expectedDate);
    });

    it("Converts 2077/1/6 to 2020/4/18", function(){
        const expectedDate: INepaliDateFormat = {
            year: "2020",
            month: "4",
            day: "18",
            dayOfWeek: "6",
            strDayOfWeek: "Saturday",
            strMonth: "April",
            strShortMonth: "Apr",
            strShortDayOfWeek: "Sat"
        };
        const testDate = "2077/1/6";
        const outputDate = ADBSConverter.bs2ad(testDate);
        assert.deepEqual(outputDate, expectedDate);
    });
});