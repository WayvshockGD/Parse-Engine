let Engine = require("parse-engine");

(async () => {
    console.log(await Engine("ok {h}", [{ variable: "{h}", replace: "h" }]))
})();