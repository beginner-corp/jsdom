let jsdom = require("jsdom")
module.exports = function factory (input) {
  return new jsdom.JSDOM(input)
}
// usage
// let jsdom = require('@begin/jsdom')
// let dom = jsdom('<p>omg hi</p>')
// console.log(dom.window.document.querySelector("p").textContent);
