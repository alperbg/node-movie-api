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
        it('it should GET all the directors',(done) =>{
            chai.request(server)
            .get('/api/directors')
            .set('x-access-token',token)
            .end((err,res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
        });
    });

    describe('/POST director',() => {
        it('it should POST a director',(done) => {
            const test_director = {
                name: 'Test_director_name',
                surname: 'Test_director_surname',
                bio: 'Test_director_biooooooooooooooooooooooooooooooooooooooooooo'
            };

            chai.request(server)
            .post('/api/directors')
            .send(test_director)
            .set('x-access-token',token)
            .end((err,res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('surname');
                res.body.should.have.property('bio');
                directorId = res.body._id;
                done();
            });
        });
    });
});