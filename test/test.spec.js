	var assert = require("assert");
	import {SurfLookup} from '../processes/surf-lookup';
	import {SurfReport} from '../models/surf-report';
	import { cords, forcast } from '../lib/forcast';
	
	describe("As a surfer I wan a forcast based on zip", ()  => {
		 
		
		before(() => {
			 
		});
		
		describe("Get a valid Surf report given a valid zip", () => {
			it("get a cords object object", () => {
				var result = cords('22207');
				assert(result);
			} ); 
			
			it("get a forcast object object", () => {
				var result = forcast('12', '33');
				assert(result);
			} ); 
		});
				 
	});