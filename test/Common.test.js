// common.test.js (테스트 파일)
import {Common} from "../src/common/Common.js";

describe('Common.getClassName', () => {
    test('should return className when condition is true', () => {
        const result = Common.getClassName('my-class', true);
        expect(result).toBe('my-class');
    });

    test('should return undefined when condition is false', () => {
        const result = Common.getClassName('my-class', false);
        expect(result).toBeUndefined();
    });

    test('should return undefined when className is empty and condition is false', () => {
        const result = Common.getClassName('', false);
        expect(result).toBeUndefined();
    });

    test('should return empty string when className is empty and condition is true', () => {
        const result = Common.getClassName('', true);
        expect(result).toBe('');
    });
});
