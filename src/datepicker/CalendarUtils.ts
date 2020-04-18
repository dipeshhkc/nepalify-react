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
    static generateMonthDays(date: string, format: NepaliDateTypes){
        console.log(date, format);
    }

    /**
     * Get nepali number
     * 
     */
    static getNepaliNumber(num: string){
        let retString = "";
        for(let char of num){
            const charNum = Number(char);
            if(charNum in NumberNepali2English){
                retString += NumberNepali2English[charNum];
            }else{
                retString += char;
            }
        }
        return retString;
    }

}