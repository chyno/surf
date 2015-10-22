	var assert = require("assert");
	import {SurfLookup} from '../processes/surf-lookup';
	import {SurfReport} from '../models/surf-report';
	
	describe("View Surf Report", ()  => {
		var surfReport;
		
		 
		
		before(() => {
			//arrange the data
			
			surfReport = new SurfLookup();
		});
		
		describe("Get a valid SUrf report given a valid zip", () => {
			it("get a report object", () => {
				var result = surfReport.getSurfReport('22207');
				assert(result);
			} );
			
			it("sur report has temperature", () => {
				var result = surfReport.getSurfReport('22207');
				assert(result.temp);
			} );
			
			it("sur report has temperature", () => {
				var result = surfReport.getSurfReport('22207');
				assert(result.temp);
			} );
			
			
			 
		});
	});