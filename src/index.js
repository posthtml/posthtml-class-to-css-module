import Reflect from 'core-js/fn/reflect';

const clone = tree => tree.match(
	{attrs: {class: /.+/}},
	node => {
		node.attrs = Object.assign(node.attrs, {'css-module': node.attrs.class});

		return node;
	}
);

const removeClass = tree => tree.match(
	{attrs: {class: /.+/}},
	node => {
		node.attrs = Object.keys(node.attrs)
			.reduce((attrs, key) => Object.assign(attrs, key === 'class' ? {} : {[key]: node.attrs[key]}), {});

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
