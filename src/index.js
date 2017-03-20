const clone = tree => tree.match(
	{attrs: {class: /.+/}},
	node => Object.assign(node, Object.assign(node.attrs, {'css-module': node.attrs.class}))
);

const cloneClassTo = tree => Promise.resolve(tree).then(tree => clone(tree)).then(tree => tree);

export default () => {
	return tree => new Promise((resolve, reject) => {
		if (!Array.isArray(tree)) {
			reject(new Error(`tree is not Array`));
		}

		if (tree.length === 0) {
			resolve(tree);
		}

		resolve(cloneClassTo(tree));
	});
};
