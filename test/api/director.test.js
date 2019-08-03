const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should;
const server = require('../../app');

chai.use(chaiHttp);

let token


describe('/api/directors tests',() => {

    before((done) => {
        chai.request(server)
        .post('/authenticate')
        .send({
            username: 'test',
            password: 'test123'
        })
        .end((err,res) => {
            token = res.body.token;
            done();
        });
    });
    describe('/GET directors',() => {
        it('it should get all the directors',(done) =>{
            chai.request(server)
            .get('/api/directors')
            .set('x-access-token',token)
            .end((err,res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            })
        })
    })
});