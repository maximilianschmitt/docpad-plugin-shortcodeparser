# docpad-plugin-shortcodeparser

Easy shortcodes for DocPad using [shortcode-parser](https://github.com/derdesign/shortcode-parser).

## Usage

### 1. Add Shortcodes

To add shortcodes, edit your docpad.js-file to include a custom configuration for shortcodeparser:

```
module.exports = {
	shortcodeparser: {
		codes: [
			// [img src="path.png" alt="text"] becomes <img src="path.png" alt="text" />
			{
				tag: 'img',
				cb: function(buf, opts, document) {
					return '<img src="' + opts.src + '" alt="' + opts.alt + '" />';
				}
			},

			// [b]Bold text![/b] becomes <strong>Bold text!</strong>
			{
				tag: 'b',
				cb: function(buf, opts, document) {
					return '<strong>' + buf + '</strong>';
				}
			}
		]
	}
};
```

### 2. Use File Extensions

Now you can use shortcodes, for example, in your markdown-documents by adjusting the file-extension to "document-name.html.md.sc". You can also set a custom file-extension in your docpad.js-file by setting the key `shortcodeparser.extension`.
