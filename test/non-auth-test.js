const assert = require('assert')
  , alis = require('../index.js');

describe('api call without authentication', function () {
  describe('search.articles', function() {
    it('check err', function(done) {
      alis.search.articles({query: "alis"}, {}, (err, json) => {
        assert.equal(err, null);
        done();
      })
    })
  })
  describe('articles.recent', function() {
    it('check err', function(done) {
      alis.articles.recent((err, json) => {
        assert.equal(err, null);
        done();
      })
    })
    it('check items', function(done) {
      alis.articles.recent((err, json) => {
        assert(json.Items.length > 0)
        done();
      })
    })
  })
  describe('articles.popular', function() {
    it('check err', function(done) {
      alis.articles.popular((err, json) => {
        assert.equal(err, null);
        done();
      })
    })
  })
})
