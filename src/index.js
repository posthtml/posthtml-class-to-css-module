import Reflect from 'core-js/fn/reflect';

const clone = tree => tree.match(
	{attrs: {class: /.+/}},
	node => Object.assign(node, Object.assign(node.attrs, {'css-module': node.attrs.class}))
);

const removeClass = tree => tree.match(
	{attrs: {class: /.+/}},
	node => {
		console.log(node);
		delete node.attrs.class;

		return node;
	}
);

const cloneClassTo = (tree, options) => Promise.resolve(tree)
	.then(tree => clone(tree))
	.then(tree => (Reflect.has(options, 'removeClass') && options.removeClass) ? removeClass(tree) : tree)
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
