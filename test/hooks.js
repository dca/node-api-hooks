var app = require('../app'),
	request = require('supertest');

console.log = function () {};

describe('req', function () {
	describe('.query', function () {
		it('should default to {}', function (done) {

			request(app)
				.post('/hooks')
				.send({ 'name': 'testing' })
				.set('Accept', 'application/json')

				.expect('Content-Type', /json/)
				.expect(/body/)
				.end(done);
		})

	})
})
