	var assert = require("assert");
	import {Foo} from '../foo';
	
	describe("First Tests", ()  => {
		describe("Get something to work", () => {
			it("first test", () => {
				let name = 'john';
				let foo = new Foo(name);
				assert(foo.bar === name);
			});
		});
	});