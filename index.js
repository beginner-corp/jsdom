let jsdom = require("jsdom")

function factory (input) {
  return new jsdom.JSDOM(input)
}

module.exports = {
  parse: factory,
  fragment: jsdom.fragment
}

// usage
// let { dom, fragment } = require('@begin/jsdom')
// let dom = parse('<p>YOLO</p>')
// let el = fragment('<p>orphan</p>')
// console.log(dom.window.document.querySelector("p").textContent);
