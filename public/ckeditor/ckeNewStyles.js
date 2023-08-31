﻿CKEDITOR.stylesSet.add('my_styles',
[
    // Block-level styles
    { name: 'Blue Title', element: 'h2', styles: { 'color': 'Blue' } },
    { name: 'Red Title', element: 'h3', styles: { 'color': 'Red' } },

    // Inline styles
    { name: 'CSS Style', element: 'span', attributes: { 'class': 'my_style' } },
    { name: 'Marker: Yellow', element: 'span', styles: { 'background-color': 'Yellow' } }
]);


CKEDITOR.stylesSet.add('my_styles', [
	/* Block Styles */

	// These styles are already available in the "Format" combo ("format" plugin),
	// so they are not needed here by default. You may enable them to avoid
	// placing the "Format" combo in the toolbar, maintaining the same features.
	/*
	{ name: 'Paragraph',		element: 'p' },
	{ name: 'Heading 1',		element: 'h1' },
	{ name: 'Heading 2',		element: 'h2' },
	{ name: 'Heading 3',		element: 'h3' },
	{ name: 'Heading 4',		element: 'h4' },
	{ name: 'Heading 5',		element: 'h5' },
	{ name: 'Heading 6',		element: 'h6' },
	{ name: 'Preformatted Text',element: 'pre' },
	{ name: 'Address',			element: 'address' },
	*/

	{ name: 'Italic Title', element: 'h2', styles: { 'font-style': 'italic' } },
	{ name: 'Subtitle', element: 'h3', styles: { 'color': '#aaa', 'font-style': 'italic' } },
	{
	    name: 'Special Container',
	    element: 'div',
	    styles: {
	        padding: '5px 10px',
	        background: '#eee',
	        border: '1px solid #ccc'
	    }
	},

	/* Inline Styles */

	// These are core styles available as toolbar buttons. You may opt enabling
	// some of them in the Styles combo, removing them from the toolbar.
	// (This requires the "stylescombo" plugin)
	/*
	{ name: 'Strong',			element: 'strong', overrides: 'b' },
	{ name: 'Emphasis',			element: 'em'	, overrides: 'i' },
	{ name: 'Underline',		element: 'u' },
	{ name: 'Strikethrough',	element: 'strike' },
	{ name: 'Subscript',		element: 'sub' },
	{ name: 'Superscript',		element: 'sup' },
	*/

	{ name: 'Marker', element: 'span', attributes: { 'class': 'marker' } },

	{ name: 'Big', element: 'big' },
	{ name: 'Small', element: 'small' },
	{ name: 'Typewriter', element: 'tt' },

	{ name: 'Computer Code', element: 'code' },
	{ name: 'Keyboard Phrase', element: 'kbd' },
	{ name: 'Sample Text', element: 'samp' },
	{ name: 'Variable', element: 'var' },

	{ name: 'Deleted Text', element: 'del' },
	{ name: 'Inserted Text', element: 'ins' },

	{ name: 'Cited Work', element: 'cite' },
	{ name: 'Inline Quotation', element: 'q' },

	{ name: 'Language: RTL', element: 'span', attributes: { 'dir': 'rtl' } },
	{ name: 'Language: LTR', element: 'span', attributes: { 'dir': 'ltr' } },

	/* Object Styles */

	{
	    name: 'Styled image (left)',
	    element: 'img',
	    attributes: { 'class': 'left' }
	},

	{
	    name: 'Styled image (right)',
	    element: 'img',
	    attributes: { 'class': 'right' }
	},

	{
	    name: 'Compact table',
	    element: 'table',
	    attributes: {
	        cellpadding: '5',
	        cellspacing: '0',
	        border: '1',
	        bordercolor: '#ccc'
	    },
	    styles: {
	        'border-collapse': 'collapse'
	    }
	},

	{ name: 'Borderless Table', element: 'table', styles: { 'border-style': 'hidden', 'background-color': '#E6E6FA' } },
	{ name: 'Square Bulleted List', element: 'ul', styles: { 'list-style-type': 'square' } }
]);