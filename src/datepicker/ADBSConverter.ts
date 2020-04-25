


import { CalendarData } from "./CalendarData"
import { CalendarUtils } from "."


export const NepaliMonth = {
    name: ['बैशाख', 'जेष्ठ', 'आषाढ', 'श्रावण', 'भाद्र', 'आश्विन', 'कार्तिक', 'मंसिर', 'पौष', 'माघ', 'फाल्गुन', 'चैत्र'],
    shortName: ['बै', 'जे', 'आषा', 'श्रा', 'भा', 'आश', 'का', 'मं', 'पौ', 'मा', 'फा', 'चै'],
    englishName: ['Baisakh', 'Jestha', 'Ashadh', 'Shrawan', 'Bhadra', 'Ashwin', 'Kartik', 'Mangsir', 'Paush', 'Mangh', 'Falgun', 'Chaitra'],
    englishShortName: ['Bai', 'Je', 'As', 'Shra', 'Bha', 'Ash', 'Kar', 'Mang', 'Pau', 'Ma', 'Fal', 'Chai'],
}

export const NepaliDay = {
    name: ['आइतबार', 'सोमबार', 'मंगलबार', 'बुधबार', 'बिहिबार', 'शुक्रबार', 'शनिबार'],
    shortname: ['आइत', 'सोम', 'मंगल', 'बुध', 'बिहि', 'शुक्र', 'शनि'],
    minName: ['आ', 'सो', 'मं', 'बु', 'बि', 'शु', 'श'],
    englishName: ['Aaitabar', 'Sombar', 'Mangalbar', 'Budhabar', 'Bihibar', 'Shukrabar', 'Sanibar'],
    englishShortName: ['Aaita', 'Som', 'Mangal', 'Budha', 'Bihi', 'Shukra', 'Sani'],
}

export const EnglishMonth = {
    name: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    shortName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
}

export const EnglishDay = {
    name: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    shortName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
}


type CalendarDataKeys = keyof typeof CalendarData;

/**
 * Convert (AD to BS) or (BS to AD) 
 * Code ported to typescript from
 * https://github.com/techgaun/ad-bs-converter
 */
export default class ADBSConverter {

    public static NepaliMonth = NepaliMonth;
    public static NepaliDay = NepaliDay;
    public static EnglishMonth = EnglishMonth;
    public static EnglishDay = EnglishDay;

    private static daysInYear = 365

    // dayOfWeek: 0 for sunday and so on
    private static base_ad = { year: 2017, month: 2, day: 11, dayOfWeek: 6 }
    private static base_bs = { year: 2073, month: 10, day: 29, dayOfWeek: 6 }

    /**
     * ad2bs conversion
     * @param {string} adDate format is `yyyy/mm/dd`
     */
    static ad2bs = (adDate: string) => {
        const dayData = ADBSConverter.countADDays(adDate);
        let dayCount = dayData.diffDays;
        let bsDate = { ...ADBSConverter.base_bs };
        // forward from base date
        if (dayCount >= 0) {
            bsDate.day += dayCount;
            while (bsDate.day > CalendarData[bsDate.year.toString() as CalendarDataKeys][bsDate.month - 1]) {
                bsDate.day -= CalendarData[bsDate.year.toString() as CalendarDataKeys][bsDate.month - 1];
                bsDate.month++;
                if (bsDate.month > 12) {
                    bsDate.year++;
                    bsDate.month = 1;
                }
            }
        } else {
            dayCount = Math.abs(dayCount);
            while (dayCount >= 0) {
                if (dayCount < CalendarData[bsDate.year.toString() as CalendarDataKeys][bsDate.month - 1]) {
                    dayCount = CalendarData[bsDate.year.toString() as CalendarDataKeys][bsDate.month - 1] - dayCount;
                    break;
                }
                dayCount -= CalendarData[bsDate.year.toString() as CalendarDataKeys][bsDate.month - 1];
                bsDate.month--;
                if (bsDate.month === 0) {
                    bsDate.year--;
                    bsDate.month = 12;
                }
            }
            bsDate.day = dayCount;
        }

        const dateObject = {
            ne: {
                year: CalendarUtils.getNepaliNumber(bsDate.year.toString()),
                month: CalendarUtils.getNepaliNumber(bsDate.month.toString()),
                day: CalendarUtils.getNepaliNumber(bsDate.day.toString()),
                strMonth: NepaliMonth.name[bsDate.month - 1],
                strShortMonth: NepaliMonth.shortName[bsDate.month - 1],
                dayOfWeek: CalendarUtils.getNepaliNumber(dayData.dateInAd.getDay().toString()),
                strDayOfWeek: NepaliDay.name[dayData.dateInAd.getDay()],
                strShortDayOfWeek: NepaliDay.shortname[dayData.dateInAd.getDay()],
                totalDaysInMonth: CalendarUtils.getNepaliNumber(CalendarData[bsDate.year.toString() as CalendarDataKeys][bsDate.month - 1].toString())
            },
            en: {
                year: bsDate.year.toString(),
                month: bsDate.month.toString(),
                day: bsDate.day.toString(),
                strMonth: NepaliMonth.englishName[bsDate.month - 1],
                strShortMonth: NepaliMonth.englishShortName[bsDate.month - 1],
                dayOfWeek: dayData.dateInAd.getDay().toString(),
                strDayOfWeek: NepaliDay.englishName[dayData.dateInAd.getDay()],
                strShortDayOfWeek: NepaliDay.englishShortName[dayData.dateInAd.getDay()],
                totalDaysInMonth: CalendarData[bsDate.year.toString() as CalendarDataKeys][bsDate.month - 1].toString()
            }
        }

        return dateObject;
    }

    /**
     * bs2ad conversion
     * @param {string} bsDate format is `yyyy/mm/dd`
     */
    public static bs2ad = (bsDate: string) => {
        const dayCount = ADBSConverter.countBSDays(bsDate);
        
        const date = new Date(ADBSConverter.base_ad.year, ADBSConverter.base_ad.month - 1, ADBSConverter.base_ad.day);
        date.setDate(date.getDate() + dayCount);
        
        const month = date.getMonth(),
            dayOfWeek = date.getDay();

        const dateObj = {
            year: date.getFullYear().toString(),
            month: (month + 1).toString(),
            strMonth: EnglishMonth.name[month],
            strShortMonth: EnglishMonth.shortName[month],
            day: date.getDate().toString(),
            dayOfWeek: dayOfWeek.toString(),
            strDayOfWeek: EnglishDay.name[dayOfWeek],
            strShortDayOfWeek: EnglishDay.shortName[dayOfWeek]
        }
        return dateObj;
    }

    /**
     * Get how many days there are in a year
     * 
     * @param year string
     */
    private static countDaysInYear = (year: CalendarDataKeys) => {
        if (!(year in CalendarData)) {
            return ADBSConverter.daysInYear;
        }

        return CalendarData[year][12];
    }

    /**
     * Check if year is leap year or not
     * 
     * @param year string
     */
    public static isLeapYear = (year: CalendarDataKeys) => {
        return (ADBSConverter.daysInYear != ADBSConverter.countDaysInYear(year));
    }

    /**
     * Count BS Days from base date
     * 
     * @param date string in format `yyyy/mm/dd`
     */
    private static countBSDays = (date: string) => {
        let dayCount = 0;
        const dateArr = date.split('/').map(str => Number(str));

        const dateObj = { year: dateArr[0], month: dateArr[1], day: dateArr[2] };

        let inc = false;
        if (dateArr[0] > ADBSConverter.base_bs.year) {
            inc = true;
        }
        else if (dateArr[0] === ADBSConverter.base_bs.year && dateArr[1] > ADBSConverter.base_bs.month) {
            inc = true;
        }
        else if (dateArr[0] === ADBSConverter.base_bs.year && dateArr[1] === ADBSConverter.base_bs.month && dateArr[2] > ADBSConverter.base_bs.day) {
            inc = true;
        }

        let start: typeof dateObj;
        let end: typeof dateObj;
        let factor = 1;

        if (inc === true) {
            start = ADBSConverter.base_bs;
            end = dateObj;
        }
        else {
            start = dateObj;
            end = ADBSConverter.base_bs;
            factor = -1;
        }

        for (let i = start.year; i <= end.year; i++) {
            const index = i.toString() as CalendarDataKeys;
            dayCount += CalendarData[index][12];
        }

        for (let i = 0; i < start.month - 1; i++) {
            const year = start.year.toString() as CalendarDataKeys
            dayCount -= CalendarData[year][i];
        }

        //dayCount += calendar_data[start.year][12 - 1];

        for (let i = end.month - 1; i < 12; i++) {
            const year = end.year.toString() as CalendarDataKeys;
            dayCount -= CalendarData[year][i];
        }

        dayCount -= start.day;
        dayCount += end.day;
        return (dayCount * factor);
    }

    /**
     * Count AD Days from base date
     * 
     * @param date string in format `yyyy/mm/dd`
     */
    private static countADDays = (date: string) => {
        const dateArr = date.split('/').map((str) => Number(str));
        const dateObj = { year: dateArr[0], month: dateArr[1] - 1, day: dateArr[2] };

        const baseDate = new Date(ADBSConverter.base_ad.year, ADBSConverter.base_ad.month - 1, ADBSConverter.base_ad.day);
        const givenDate = new Date(dateObj.year, dateObj.month, dateObj.day);

        const timeDiff = givenDate.getTime() - baseDate.getTime();
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

        return {
            diffDays, dateInAd: givenDate
        }

    }

}