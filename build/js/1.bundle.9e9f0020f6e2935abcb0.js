webpackJsonp([1],{

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	
	var template = __webpack_require__(20);
	var Backbone = __webpack_require__(3);
	var $ = __webpack_require__(9);
	__webpack_require__(14);

	module.exports = (function() {
	    'use strict';

	    var ComponentOneView = Backbone.View.extend({
	        template: template,

	        className: "w-component-one",

	        initialize: function() {
	            this.render();
	        },

	        render: function() {
	            this.$el.html(this.template());
	            $(".app").empty().html(this.$el);
	        }
	    });

	    return ComponentOneView;
	    
	})();


/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(22)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/tridjanovic/Documents/ibm_labs/webpack-presentation/node_modules/css-loader/index.js!/Users/tridjanovic/Documents/ibm_labs/webpack-presentation/node_modules/sass-loader/index.js!/Users/tridjanovic/Documents/ibm_labs/webpack-presentation/public/components/component-one/scss/component-one.scss", function() {
			var newContent = require("!!/Users/tridjanovic/Documents/ibm_labs/webpack-presentation/node_modules/css-loader/index.js!/Users/tridjanovic/Documents/ibm_labs/webpack-presentation/node_modules/sass-loader/index.js!/Users/tridjanovic/Documents/ibm_labs/webpack-presentation/public/components/component-one/scss/component-one.scss");
			if(typeof newContent === 'string') newContent = [module.id, newContent, ''];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	exports.push([module.id, ".w-component-one{width:980px;margin:0 auto;margin-top:20px;text-align:center}.w-component-one h1{color:red}", ""]);

/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(24).default.template(function (Handlebars,depth0,helpers,partials,data) {
	  this.compilerInfo = [4,'>= 1.0.0'];
	helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
	  


	  return "\n<h1>Welcome to component one</h1>\n\n<a href=\"#\">Go back to index page</a>\n";
	  });

/***/ }

});