	var assert = require("assert");
	import {SurfLookup} from '../processes/surf-lookup';
	import {SurfReport} from '../models/surf-report';
	import { cords, forcast } from '../lib/forcast';
	
	xdescribe("As a user I want to get lat longitude", ()  => {
		 var crsp;
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
		});			 
	});
	
	
	describe("As a user I want to get forcast", ()  => {
		 var frcst;
		before((done) => {
			//38.932453,-77.081608
			 forcast('38.932453','-77.081608')
			  .then((res) =>
				{
					 this.frcst = res;
					 done();
				});
		});
		
		describe("Get a valid Surf report given a valid zip", () => {
			it("get a forcast object object", () => {
				 assert(this.frcst.currently.windSpeed);
				 assert(this.frcst.currently.windBearing);
			} ); 
		});
				 
	});