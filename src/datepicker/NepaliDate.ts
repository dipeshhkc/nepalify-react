import { ADBSConverter } from ".";

interface INepaliDateFormat {
    year: string,
    month: string,
    day: string,
    strMonth: string,
    strShortMonth: string,
    dayOfWeek: string,
    strDayOfWeek: string,
    strShortDayOfWeek: string,
    totalDaysInMonth: string
}

/**
 * Nepali Date class that includes some additional functionality 
 * to the date object like formatting.
 */
class NepaliDate {
    

    private en: INepaliDateFormat;

    private ne: INepaliDateFormat;

    private dateObject: {
        en: INepaliDateFormat,
        ne: INepaliDateFormat
    };

    formatKeyMap = {
        'y': 'year',
        'm': 'month',
        'd': 'day',
        'M': 'strMonth',
        'sM': 'strShortMonth',
        'w': 'dayOfWeek',
        'W': 'strDayOfWeek',
        'sW': 'strShortDayOfWeek',
        'tdm': 'totalDaysInMonth'
    }

    adDateStr: string;

    adBsObject: {
        en: INepaliDateFormat,
        ne: INepaliDateFormat
    }

    /**
     * 
     * @param bsDate {string} in format `yyyy/mm/dd`
     */
    constructor(dateInput: string | Date = null, type: "ad" | "bs" = "ad") {
        let today = new Date();
        let dateStr;

        if (dateInput === null) {
            const date = new Date();
            dateStr = `${date.getFullYear()}/${date.getMonth() + 1}/${today.getDate()}`
        } else {
            if (dateInput.constructor === Date) {
                today = dateInput as Date;
                dateStr = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`
            }
            if (dateInput.constructor === String) {
                if (type === "bs") {
                    const adDate = ADBSConverter.bs2ad(dateInput as string);
                    dateStr = `${adDate.year}/${adDate.month}/${adDate.day}`;
                }
                if (type === "ad") {
                    dateStr = dateInput as string;
                }
            }
        }

        this.adDateStr = dateStr;
    }

    /**
     * To get internal javascript date object
     * 
     * @returns {Date} javascript date object
     */
    getDateObject = () => {
        const [year, month, day] = this.adDateStr.split("/").map(d => Number(d));
        const javascriptDate = new Date(year, month - 1, day);
        return javascriptDate;
    }

    /**
     * get `ADBSConverter` date object
     * 
     */
    getADBSObject = () => {
        if(!this.adBsObject){
            this.adBsObject = ADBSConverter.ad2bs(this.adDateStr);
        }
        return this.adBsObject;
    }


    /**
     * typescript hasKey https://dev.to/kingdaro/indexing-objects-in-typescript-1cgi
     */
    private hasKey<T>(obj: T, key: keyof any): key is keyof T {
        return key in obj;
    }

    /**
     * Format the date
     */
    format = (formatStr: string, type: "en" | "ne" = "en"): string => {
        let formattedString = formatStr.replace(/\{[^\{\}]*\}/g, (val) => {
            val = val.substr(1, val.length - 2);
            let [value, padding, fillString] = val.split("|");
            if(this.hasKey(this.formatKeyMap, value)){
                const key = this.formatKeyMap[value] as keyof INepaliDateFormat;
                const adBsObject = this.getADBSObject();
                const defaultPadString = (type === "ne" ? '०': '0');
                return adBsObject[type][key].padStart(Number(padding) || 0, fillString || defaultPadString);
            }
            return val;
        })
        return formattedString;
    }

    /**
     * Default format the string.
     * The format used for this function is `{y}/{m|2}/{d|2}`
     */
    toDefaultFormat = (type: "en"| "ne" = "en") => {
        return this.format('{y}/{m|2}/{d|2}', type);
    }

}

export default NepaliDate;
export {
    INepaliDateFormat
}