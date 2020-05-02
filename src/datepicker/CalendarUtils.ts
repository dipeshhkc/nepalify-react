import NepaliDate from "./NepaliDate";

type NepaliDateTypes = "AD" | "BS"

export const NumberNepali2English = [
    '०',
    '१',
    '२',
    '३',
    '४',
    '५',
    '६',
    '७',
    '८',
    '९'
]

/**
 * Datepicker/Calendar Utility Functions
 */
export default class CalendarUtils {

    /**
     * 
     * Generate all the days in a month from given date input
     * 
     * @param date string `yyyy/mm/dd` | `yyyy/mm`
     * @param format 
     */
    static generateMonthDays(date: string, format: "ad" | "bs" = "ad") {
        let [y, m, d] = date.split("/").map(match => Number(match));
        if(!d){
            d = 1;
        }
        const ndate = `${y}/${m}/${d}`;
        console.log(ndate);
        const dateObject = new NepaliDate(ndate, format);
        const totalDaysInMonth = dateObject.getADBSObject().en.totalDaysInMonth
        const year = dateObject.getADBSObject().en.year;
        const month = dateObject.getADBSObject().en.month;
        const monthDays = [];
        for (let i = 1; i <= Number(totalDaysInMonth); i++) {
            const day = i;
            monthDays.push(new NepaliDate(`${year}/${month}/${day}`, "bs"));
        }
        return monthDays;
    }

    /**
     * Get days in month separated weekly.
     * Some week days not present in current month is given as `null` so use
     * cautiously. 
     * 
     * @param date string `yyyy/mm/dd` | 'yyyy/mm'
     * @param format string `ad|bs`
     */
    static generateWeeklyDays(date: string, format: "ad" | "bs" = "ad") {
        const monthDays = CalendarUtils.generateMonthDays(date, format);
        const monthWeekDays = [];
        let weeklyDays = [];
        for (let i = 0; i < monthDays.length; i++) {
            const dayOfWeek = Number(monthDays[0].getADBSObject().en.dayOfWeek);
            if (i == 0 && dayOfWeek != 0) {
                for (let j = 0; j < dayOfWeek; j++) {
                    weeklyDays.push(null);
                }
            }
           
            weeklyDays.push(monthDays[i]);

            if (weeklyDays.length === 7) {
                monthWeekDays.push(weeklyDays);
                weeklyDays = [];
            }

        }
        if(weeklyDays.length > 0){
            for(let i = weeklyDays.length - 1; i < 6; i++){
                weeklyDays.push(null);
            }
            monthWeekDays.push(weeklyDays);
        }
        return monthWeekDays;
    }

    /**
     * Get nepali number
     * 
     */
    static getNepaliNumber(num: string) {
        let retString = "";
        for (let char of num) {
            const charNum = Number(char);
            if (charNum in NumberNepali2English) {
                retString += NumberNepali2English[charNum];
            } else {
                retString += char;
            }
        }
        return retString;
    }

}