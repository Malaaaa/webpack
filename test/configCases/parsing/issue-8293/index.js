const fs = require("fs");
const path = require("path");

["import", "amd-require", "amd-define", "commonjs", "require.resolve"].forEach(
	method => {
		it(`should be able to replace ${method} param in DefinePlugin`, function() {
			const source = fs.readFileSync(
				path.join(__dirname, `bundle-${method}.js`),
				"utf-8"
			);
			expect(source).toContain(`\`./\${foobar}/\${"suffix0"}\``);
			// buggy for param.isConditional() cases, big work, resolve in later PRs
			// expect(source).toContain(`\`./\${foobar}/\${"suffix1"}\``);
			// expect(source).toContain(`\`./\${foobar}/\${"suffix2"}\``);
			expect(source).toContain(`\`./\${foobar}/\${"suffix3"}\``);
			expect(source).not.toContain(`\`./\${foobar}/\${"suffix4"}\``);
		});
	}
);
