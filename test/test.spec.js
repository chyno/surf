	var assert = require("assert");
	import {SurfLookup} from '../processes/surf-lookup';
	import {SurfReport} from '../models/surf-report';
	import { cords, forcast } from '../lib/forcast';
	
	describe("As a user I want to get forcast", ()  => {
		 var crsp  = true;
		before((done) => {
			 cords('22207')
			  .then((res) =>
				{
					 this.crsp = res.results[0].geometry;
					 done();
				});
		});
		
		describe("Get a valid Surf report given a valid zip", () => {
			it("get a cords object object", () => {
				 
				assert(this.crsp.location.lat);
				assert(this.crsp.location.lng);
				
			} ); 
			
			it("get a forcast object object", () => {
				var result = forcast('12', '33');
				assert(result);
			} ); 
		});
				 
	});