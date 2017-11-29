var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		newArr = [];
		arr.forEach(function(element){
			newArr.push(element **2);
		})
		return newArr;
	},

	sum: function (arr) {
		return arr.reduce((num, currentNumber) => num + currentNumber, 0);
	},

	findDuplicates: function (arr) {
		//create a new array
		var duplicates = [];
		//for each item in the original arr
		arr.forEach(function(item, index){
			//check for duplicates starting from the next index
			if(arr.indexOf(item, index + 1) != -1){
				//check the item is not already in the duplicates array
				if(duplicates.indexOf(item) === -1){
					//add the item to the duplicate array
					duplicates.push(item);
				}
			}
		})
		return duplicates;
	},

	removeAndClone: function (arr, valueToRemove) {
		return arr.filter(value => value !== valueToRemove);
	},

	findIndexesOf: function (arr, itemToFind) {
		var indices = [];
		var index = arr.indexOf(itemToFind);
		while(index != -1){
			indices.push(index);
			index = arr.indexOf(itemToFind, index + 1);
		}
		return indices;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var evenNumbers = [];
		arr.forEach(function(item){
			if(item % 2 === 0){
				evenNumbers.push(item);
			}
		})
		return this.sum(this.square(evenNumbers));
	}

}

module.exports = arrayTasks;
