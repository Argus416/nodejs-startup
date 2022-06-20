exports.main = (req, res) => {
	const multiplier = ({ a, b }) => a * b;

	const result = multiplier({ a: 2, b: 3 });

	res.render("../view/main.ejs", { result });
};
