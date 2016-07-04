


var originalnumbers = ['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260'] 

var newnumbers = []
var addition =[]
for (i = 0; i < originalnumbers.length; i++) {
	cleannumber = originalnumbers[i].replace(/\D/g,'');
	newnumbers.push(cleannumber)
	
}

console.log(newnumbers);

function sumDigits(number) {
  var str = number.toString();
  var sum = 0;

  for (var i = 0; i < str.length; i++) {
    sum += parseInt(str.charAt(i), 10);
  }

  return sum;
  
}

sumDigits(newnumbers[0])

for (i = 0; i < newnumbers.length; i++) {
		newnum = sumDigits(newnumbers[i])
		addition.push(newnum)
}
console.log(addition)


function indexOfMax(arr) {

var max = arr[0];
var maxIndex = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

finalindex = indexOfMax(addition);

console.log(originalnumbers[finalindex])
