var l, s
if (process.env.NODE_ENV === 'production') {
  l = require('next/dist/compiled/react-dom/cjs/react-dom-server-legacy.browser.production.js')
  s = require('next/dist/compiled/react-dom/cjs/react-dom-server.browser.production.js')
} else {
  l = require('next/dist/compiled/react-dom/cjs/react-dom-server-legacy.browser.development.js')
  s = require('next/dist/compiled/react-dom/cjs/react-dom-server.browser.development.js')
}

exports.version = l.version
exports.renderToString = l.renderToString
exports.renderToStaticMarkup = l.renderToStaticMarkup
exports.renderToReadableStream = s.renderToReadableStream
if (s.resume) {
  exports.resume = s.resume
}
