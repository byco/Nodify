var helper = require("./common.js");
helper.setObject("collection");

var Resource = helper.resource();


helper.nock(helper.test_shop)
  .get('/admin/collections.json')
  .reply(200, helper.load("collections"), { server: 'nginx',
  	 status: '200 OK',
});


helper.nock(helper.test_shop)
  .get('/admin/collections/450789469.json')
  .reply(200, helper.load("collection"), { server: 'nginx',
  	 status: '200 OK',
});


describe('Collection', function() {
	var site = helper.endpoint; 
	var resource = new Resource(site);

	it('should get all collections', function(done) {
		resource.all(function(err, res){
		  res.should.not.be.empty;
		  res[0].should.have.property('id');
		  done();
		});

	});


	it('should get an collection', function(done) {
	    resource.get("450789469", function(err, res){
	      res.should.be.a("object");
	      done();
	    });
 	});



});
