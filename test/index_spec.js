const { api, expect } = require('./spec_helper');

describe('GET /*', () => {
  it('should return a 200', function(done) {
    // this.skip()
    api
      .get('/')
      .set('Accept', 'application/html')
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.status).to.eq(200);
        done();
      });
  });
  it('should return a html', function(done) {
    // this.skip()
    api
      .get('/')
      .set('Accept', 'application/html')
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.headers['content-type'])
          .to.eq('text/html; charset=UTF-8');
        done();
      });
  });
  it('should return the correct index.html with title Dog Walking App', function(done) {
    // this.skip()
    api
      .get('/')
      .set('Accept', 'application/html')
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.text)
          .to.contain('<title>Dog Walking App</title>');
        done();
      });
  });
  it('should return the correct index.html even when a non-valid endpoint is called', function(done) {
    // this.skip()
    api
      .get('/ThisObviouslyIsntARealEndPoint')
      .set('Accept', 'application/html')
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.text)
          .to.contain('<title>Dog Walking App</title>');
        done();
      });
  });
});
