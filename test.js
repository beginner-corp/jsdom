const test = require('tape')
// test source
//const { parse, fragment } = require('./index')
// test built
const { parse, fragment } = require('.')

test('jsdom parse should exist', t => {
  t.ok(parse, 'jsdom parse exists')
  t.end()
})

test('jsdom fragment should exist', t => {
  t.ok(fragment, 'jsdom fragment exists')
  t.end()
})

test('jsdom parse should parse html string', t => {
  t.equal(parse('<p>YOLO</p>').window.document.querySelector('p').textContent, 'YOLO', 'jsdom parses html string')
  t.end()
})

test('jsdom fragment should create dom fragment from html string', t => {
  t.equal(fragment('<p>YOLO</p>').querySelector('p').textContent, 'YOLO', 'jsdom parses html string')
  t.end()
})
