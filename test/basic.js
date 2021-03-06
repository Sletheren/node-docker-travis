process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/index.js');
let should = chai.should();
chai.use(chaiHttp);

describe('/GET', () => {
    it('it should say hello', (done) => {
      chai.request(server)
          .get('/')
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
});

