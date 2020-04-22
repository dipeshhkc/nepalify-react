interface INepaliDateFormat {
    year: string;
    month: string;
    day: string;
    strMonth: string;
    strShortMonth: string;
    dayOfWeek: string;
    strDayOfWeek: string;
    strShortDayOfWeek: string;
    totalDaysInMonth: string;
}
/**
 * Nepali Date class that includes some additional functionality
 * to the date object like formatting.
 */
declare class NepaliDate {
    private formatKeyMap;
    private adDateStr;
    private adBsObject;
    private javascriptDate;
    /**
     *
     * @param bsDate {string} in format `yyyy/mm/dd`
     */
    constructor(dateInput?: string | Date, type?: "ad" | "bs");
    /**
     * To get internal javascript date object
     *
     * @returns {Date} javascript date object
     */
    getDateObject: () => Date;
    /**
     * get `ADBSConverter` date object
     *
     */
    getADBSObject: () => {
        en: INepaliDateFormat;
        ne: INepaliDateFormat;
    };
    /**
     * typescript hasKey https://dev.to/kingdaro/indexing-objects-in-typescript-1cgi
     */
    private hasKey;
    /**
     * @param formatStr {string} - format string used to define how to format
     *
     * ```
     *  'y': 'year',
     *  'm': 'month',
     *  'd': 'day',
     *  'M': 'strMonth',
     *  'sM': 'strShortMonth',
     *  'w': 'dayOfWeek',
     *  'W': 'strDayOfWeek',
     *  'sW': 'strShortDayOfWeek',
     *  'tdm': 'totalDaysInMonth'
     * ```
     *
     * Default formating looks like `{y}/{m|2}/{d|2}` where pipe symbol is used for giving padding
     * to output string
     */
    format: (formatStr: string, type?: "en" | "ne") => string;
    /**
     * Default format the string.
     * The format used for this function is `{y}/{m|2}/{d|2}`
     */
    toDefaultFormat: (type?: "en" | "ne") => string;
}
export default NepaliDate;
export { INepaliDateFormat };
