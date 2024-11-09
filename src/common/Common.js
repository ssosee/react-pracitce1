export class Common {
    static getClassNameIfConditionIsTrue(className, condition) {
        if(condition) {
            return className;
        }

        return undefined;
    }
}

// module.exports = Common;