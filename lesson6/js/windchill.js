
/* intput: The ueser ia able to unput the different amounts and conditions of there investment.
 * Processing: The program uses the forula to calcuate the amout of groth with the Investment over time.
 *  Output: the user and then type and of the intup the need to get the groth resualts.
 */

function doFV() {
    var Principal = parseFloat(document.getElementById('Principal').value);
 	var annualRate = parseFloat(document.getElementById('annualRate').value);
 	var years = parseFloat(document.getElementById('years').value);
 	var periodsPerYear = parseFloat(document.getElementById('periodsPerYear').value);
 	var comp = computeFutureValue(principal, annualRate, years, periodsPerYear);
		document.getElementById('output').innerHTML = wind;

	}



 
