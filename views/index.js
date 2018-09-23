const addPage = require("./addPage");
const editPage = require("./editPage");
const main = require("./main");
const userList = require("./userList");
const userPages = require("./userPages");
const wikiPage = require("./wikiPage");
const marked = require('marked');
console.log(marked('I am using __markdown__.'));

module.exports = { addPage, editPage, main, userList, userPages, wikiPage };
