module.exports = function(BasePlugin) {

	var shortcode = require('shortcode-parser');

	var Plugin = BasePlugin.extend({

		name: 'shortcodeparser',

		config: {
			codes: [],
			extension: 'sc'
		},

		constructor: function() {
			Plugin.__super__.constructor.apply(this, arguments);

			this.config.codes.forEach(function(code) {
				shortcode.add(code.tag, code.cb);
			});
		},


		render: function(opts, next) {
			if (opts.inExtension !== this.config.extension) return next();

			opts.content = shortcode.parse(opts.content, opts.templateData);

			return next();
		}
	});

	return Plugin;
};