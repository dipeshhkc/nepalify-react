import NepaliDate from "./NepaliDate";
export declare const NumberNepali2English: string[];
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
    static generateMonthDays(date: string, format?: "ad" | "bs"): NepaliDate[];
    /**
     * Get days in month separated weekly.
     * Some week days not present in current month is given as `null` so use
     * cautiously.
     *
     * @param date string `yyyy/mm/dd` | 'yyyy/mm'
     * @param format string `ad|bs`
     */
    static generateWeeklyDays(date: string, format?: "ad" | "bs"): NepaliDate[][];
    /**
     * Get nepali number
     *
     */
    static getNepaliNumber(num: string): string;
}
