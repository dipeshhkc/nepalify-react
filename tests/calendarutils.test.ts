import {describe} from 'mocha';
import {CalendarUtils} from '../build';
import { assert } from 'chai';

describe('#english2NepaliNumber', () => {
    const expectedNumber = "१२३४५६७८९०";
    const testNumber = "1234567890";
    const outputNumber = CalendarUtils.getNepaliNumber(testNumber); 
    assert.equal(expectedNumber,outputNumber)
});
