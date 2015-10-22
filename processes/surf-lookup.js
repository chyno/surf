import {SurfReport} from '../models/surf-report';
export class SurfLookup
{
	constructor() {
		
	}
	
	 getSurfReport(zip)
	{
		return new SurfReport('20', '30', 'SW', '50');
	}
}