export declare const NepaliMonth: {
    name: string[];
    shortName: string[];
    englishName: string[];
    englishShortName: string[];
};
export declare const NepaliDay: {
    name: string[];
    shortname: string[];
    minName: string[];
    englishName: string[];
    englishShortName: string[];
};
export declare const EnglishMonth: {
    name: string[];
    shortName: string[];
};
export declare const EnglishDay: {
    name: string[];
    shortName: string[];
};
/**
 * Convert (AD to BS) or (BS to AD)
 * Code ported to typescript from
 * https://github.com/techgaun/ad-bs-converter
 */
export default class ADBSConverter {
    static NepaliMonth: {
        name: string[];
        shortName: string[];
        englishName: string[];
        englishShortName: string[];
    };
    static NepaliDay: {
        name: string[];
        shortname: string[];
        minName: string[];
        englishName: string[];
        englishShortName: string[];
    };
    static EnglishMonth: {
        name: string[];
        shortName: string[];
    };
    static EnglishDay: {
        name: string[];
        shortName: string[];
    };
    private static daysInYear;
    private static base_ad;
    private static base_bs;
    /**
     * ad2bs conversion
     * @param {string} adDate format is `yyyy/mm/dd`
     */
    static ad2bs: (adDate: string) => {
        ne: {
            year: string;
            month: string;
            day: string;
            strMonth: string;
            strShortMonth: string;
            dayOfWeek: string;
            strDayOfWeek: string;
            strShortDayOfWeek: string;
            totalDaysInMonth: string;
        };
        en: {
            year: string;
            month: string;
            day: string;
            strMonth: string;
            strShortMonth: string;
            dayOfWeek: string;
            strDayOfWeek: string;
            strShortDayOfWeek: string;
            totalDaysInMonth: string;
        };
    };
    /**
     * bs2ad conversion
     * @param {string} bsDate format is `yyyy/mm/dd`
     */
    static bs2ad: (bsDate: string) => {
        year: string;
        month: string;
        strMonth: string;
        strShortMonth: string;
        day: number;
        dayOfWeek: number;
        strDayOfWeek: string;
        strShortDayOfWeek: string;
    };
    /**
     * Get how many days there are in a year
     *
     * @param year string
     */
    private static countDaysInYear;
    /**
     * Check if year is leap year or not
     *
     * @param year string
     */
    static isLeapYear: (year: "1978" | "1979" | "1980" | "1981" | "1982" | "1983" | "1984" | "1985" | "1986" | "1987" | "1988" | "1989" | "1990" | "1991" | "1992" | "1993" | "1994" | "1995" | "1996" | "1997" | "1998" | "1999" | "2000" | "2001" | "2002" | "2003" | "2004" | "2005" | "2006" | "2007" | "2008" | "2009" | "2010" | "2011" | "2012" | "2013" | "2014" | "2015" | "2016" | "2017" | "2018" | "2019" | "2020" | "2021" | "2022" | "2023" | "2024" | "2025" | "2026" | "2027" | "2028" | "2029" | "2030" | "2031" | "2032" | "2033" | "2034" | "2035" | "2036" | "2037" | "2038" | "2039" | "2040" | "2041" | "2042" | "2043" | "2044" | "2045" | "2046" | "2047" | "2048" | "2049" | "2050" | "2051" | "2052" | "2053" | "2054" | "2055" | "2056" | "2057" | "2058" | "2059" | "2060" | "2061" | "2062" | "2063" | "2064" | "2065" | "2066" | "2067" | "2068" | "2069" | "2070" | "2071" | "2072" | "2073" | "2074" | "2075" | "2076" | "2077" | "2078" | "2079" | "2080" | "2081" | "2082" | "2083" | "2084" | "2085" | "2086" | "2087" | "2088" | "2089" | "2090" | "2091" | "2092") => boolean;
    /**
     * Count BS Days from base date
     *
     * @param date string in format `yyyy/mm/dd`
     */
    private static countBSDays;
    /**
     * Count AD Days from base date
     *
     * @param date string in format `yyyy/mm/dd`
     */
    private static countADDays;
}
