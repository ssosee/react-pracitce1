export class Common {
    static getClassName(className, condition) {
        if(condition) {
            return className;
        }

        return undefined;
    }
}

// module.exports = Common;