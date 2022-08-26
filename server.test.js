const test = require('tape');
const jsonist = require('jsonist');
const getPortSync = require('get-port-sync');

const PORT  = process.env.PORT || getPortSync()
const server = require('./server')

const urlBase = `http://localhost:${PORT}`

test('should respond hello', (t) => {
  jsonist.get(urlBase, (err, body) => {
    if (err) return t.error(err)

    t.equal(body.msg, 'hello')
    t.end()
  })
})

test('cleanup', function (t) {
  server.close()
  t.end()
})
