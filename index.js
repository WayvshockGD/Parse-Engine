
/**
 * @param {string} str
 * @param {Engine.ContentArray} content
 * @returns {Promise<string>}
 */
module.exports = function parseVariables(str, content) {
    let is = exports.isString(str);

    return new Promise((res, rej) => {

        if (!is.str) return rej(is);

        for (let rule of content) {
            str = str.replaceAll(rule.variable, rule.replace);
        }

        res(str);
    })
}

/**
 * @param {string} s
 * @returns {Engine.isCodes}
 */
function isString(s) {
    if (!typeof s === "string") return {
        str: false,
        msg: `Content is not a string. Recieved: ${typeof s}`
    };
}