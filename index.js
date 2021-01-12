const franc = require('franc');
const langs = require('langs');
const colors = require('colors');
const args = process.argv.slice(2);

try {
    // Detect language and return three-letter language code.
    const langCode = franc(`${args}`);

    // Return language object with .name property for full name.
    const langObject = langs.where("3", `${langCode}`);

    console.log(langObject.name.green);
} catch (e) {
    console.log("Could not match a language Please try again with a larger sample.".red)
}




