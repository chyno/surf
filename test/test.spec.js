	var assert = require("assert");
	import {SurfLookup} from '../processes/surf-lookup';
	import {SurfReport} from '../models/surf-report';
	
	describe("As a surfer I wan a forcast based on zip", ()  => {
		var surfReport, result;
		
		before(() => {
			surfReport = new SurfLookup();
			 result = surfReport.getSurfReport('22207');
		});
		
		describe("Get a valid Surf report given a valid zip", () => {
			it("get a report object", () => {
				assert(result);
			} );
			
			it("Surf report has temperature", () => {
				
				assert(result.temp);
			} );
			
			it("Surf report has direction", () => {
				assert(result.direction);
			} ); 
			
			it("Surf report has gust", () => {
				assert(result.gust);
			} ); 
		});
		
		describe("Get a valid Surf report given based on previos zip", () => {
			 
			
			it("Surf report has temperature", () => {
				
				 var lastZip = surfReport.GetLastZip("foo@yahoo.com");
				 assert(lastZip);
				 
			} );
			
			 
		});
	});