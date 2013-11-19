(function() {
  var Base, SmartCollection,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Base = require('./base');

  SmartCollection = (function(_super) {

    __extends(SmartCollection, _super);

    SmartCollection.prototype.slug = "smart_collection";

    SmartCollection.prototype.prefix = "/smart_collections";

    function SmartCollection(site) {
      SmartCollection.__super__.constructor.call(this, site);
    }

    SmartCollection.prototype.find = function(by,val, callback) {
      var url, _ref;
      if (typeof params === 'function') {
        _ref = [callback, params], params = _ref[0], callback = _ref[1];
      }
      url = this.resource.queryString("" + "collection?"+by+"="+val);
      console.log(url)
      return this.resource.get(url, this.slug, callback);
    };
    return SmartCollection;

  })(Base);

  module.exports = SmartCollection;

}).call(this);
