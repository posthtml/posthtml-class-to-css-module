import Reflect from 'core-js/fn/reflect';

export default (options = {}) => tree => tree.match(
	{attrs: {class: /.+/}},
	node => {
		node.attrs = Object.assign(node.attrs, {'css-module': node.attrs.class});

		if (Reflect.has(options, 'removeClass') && options.removeClass) {
			delete node.attrs.class;
		}

		return node;
	}
);
