import Reflect from 'core-js/fn/reflect';

const clone = (tree, options) => tree.match(
	{attrs: {class: /.+/}},
	node => {
		node.attrs = Object.assign(node.attrs, {'css-module': node.attrs.class});

		if (Reflect.has(options, 'removeClass') && options.removeClass) {
			delete node.attrs.class;
		}

		return node;
	}
);

const cloneClassTo = (tree, options) => Promise.resolve(tree)
	.then(tree => clone(tree, options))
	.then(tree => tree);

export default (options = {}) => {
	return tree => new Promise((resolve, reject) => {
		if (!Array.isArray(tree)) {
			reject(new Error(`tree is not Array`));
		}

		if (tree.length === 0) {
			resolve(tree);
		}

		resolve(cloneClassTo(tree, options));
	});
};
