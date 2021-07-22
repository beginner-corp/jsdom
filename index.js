const jsdom = require("jsdom")
const { JSDOM } = jsdom

function factory (input) {
  return new JSDOM(input)
}

module.exports = {
  parse: factory,
  fragment: JSDOM.fragment
}

// usage
// let { dom, fragment } = require('@begin/jsdom')
// let dom = parse('<p>YOLO</p>')
// let el = fragment('<p>orphan</p>')
// console.log(dom.window.document.querySelector("p").textContent);
