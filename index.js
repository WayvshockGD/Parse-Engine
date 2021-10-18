
/**
 * @param {string} str
 * @param {import("./types/type").ContentArray} content
 * @returns {Promise<string>}
 */
module.exports = function parseVariables(str, content) {
    let is = isString(str) ?? { str: true, msg: "String" };

    return new Promise((res, rej) => {

        if (!is.str) return rej(is.message);

        for (let rule of content) {
            str = str.replaceAll(rule.variable, rule.replace);
        }

        res(str);
    })
}

/**
 * @param {string} s
 * @returns {import("./types/type").isCodes}
 */
function isString(s) {
    if (!typeof s === "string") return {
        str: false,
        msg: `Content is not a string. Recieved: ${typeof s}`
    };
}