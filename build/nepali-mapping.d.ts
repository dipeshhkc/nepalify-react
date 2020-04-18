/**
 * Wrapper function for keymap function for unicode mapping
 * @param keyCode number
 * @returns string
 */
declare const unicodify: (keyCode: number) => string;
/**
 * Wrapper function for keymap function for traditional mapping
 * @param keyCode number
 * @returns string
 */
declare const preetify: (keyCode: number) => string;
/**
 * get the mapping function according to function name `mappingTypes`
 * @param funcName string
 */
declare const mappingFunction: (funcName: string) => (keyCode: number) => string;
export { unicodify, preetify, mappingFunction };
