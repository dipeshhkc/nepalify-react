import * as React from 'react';
interface INepaliProps {
    initialValue: string;
    value: string;
    inputType: "textarea" | "text";
    valueChange: (event: any, value: string) => {};
    funcname: "preetify" | "unicodify";
}
interface INepaliState {
    value: string;
}
/**
 * **Nepali input component** (main component)
 *
 * Props are:
 * - `funcname`  String
 * - `value` String
 * - `valueChange`  (evt, value) => {}
 * - `inputType` String (`textarea`/`text`)
 * - `initialValue` String
 */
export declare class Nepali extends React.Component<INepaliProps, INepaliState> {
    state: {
        value: string;
    };
    componentDidUpdate(prevProps: INepaliProps): void;
    /**
     * Calculate the key mappings and then set the state accordingly
     */
    calculate: (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /**
     * don't override event instead let event play and then
     * set the selection range after 10ms, bit hacky but works
     */
    adjustCursor: (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    changeHandler: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    render: () => JSX.Element;
}
export default Nepali;
