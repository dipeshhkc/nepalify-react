declare type NepaliDateTypes = "AD" | "BS";
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
    static generateMonthDays(date: string, format: NepaliDateTypes): void;
    /**
     * Get nepali number
     *
     */
    static getNepaliNumber(num: string): string;
}
export {};
