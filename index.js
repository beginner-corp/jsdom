let jsdom = require("jsdom")

function factory (input) {
  return new jsdom.JSDOM(input)
}

factory.fragment = jsdom.JSDOM.fragment

module.exports = factory
// usage
// let jsdom = require('@begin/jsdom')
// let dom = jsdom('<p>omg hi</p>')
// console.log(dom.window.document.querySelector("p").textContent);
