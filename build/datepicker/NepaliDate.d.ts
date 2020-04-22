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
    private en;
    private ne;
    private dateObject;
    formatKeyMap: {
        y: string;
        m: string;
        d: string;
        M: string;
        sM: string;
        w: string;
        W: string;
        sW: string;
        tdm: string;
    };
    adDateStr: string;
    adBsObject: {
        en: INepaliDateFormat;
        ne: INepaliDateFormat;
    };
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
     * Format the date
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
