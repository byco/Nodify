var helper = require("./common.js");
helper.setObject("customer");

var Resource = helper.resource();


helper.nock(helper.test_shop)
  .get('/admin/customers.json')
  .reply(200, helper.load("customers"), { server: 'nginx',
  	 status: '200 OK',
});


helper.nock(helper.test_shop)
  .get('/admin/customers/450789469.json')
  .reply(200, helper.load("customer"), { server: 'nginx',
  	 status: '200 OK',
});



describe('Customer', function() {
	var site = helper.endpoint; 
	var resource = new Resource(site);

	it('should get all customers', function(done) {
		resource.all(function(err, res){
		  res.should.not.be.empty;
		  res[0].should.have.property('id');
		  done();
		});

	});


	it('should get a customer', function(done) {
	    resource.get("450789469", function(err, res){
	      res.should.be.a("object");
	      done();
	    });
 	});





});
