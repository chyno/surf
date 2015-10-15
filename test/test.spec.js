	var assert = require("assert");
	
	describe("First Tests", ()  => {
		describe("Get something to work", () => {
			it("first test", () => {
				let name = 'john';
				let foo = {bar: name};
				assert(foo.bar === name);
			});
		});
	});