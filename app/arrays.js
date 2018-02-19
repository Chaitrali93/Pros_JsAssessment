
arraysAnswers = {
  /**
   * Find the 0 based index of item in arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to find in arr
   * @returns {Number} The index of item in arr, or -1 if item is not in arr.
   */
  indexOf: function indexOf(arr, item) {
    // Implement a function, that returns the 0 based index of an element in an array.
	for(var x=0;x<arr.length;x++) { 
   	   	 				if(arr[x]==item){     //if the element matches with the item then return its index
   	   	 					return x;
   	   	 				}	
   	   	 			}
    	    	    return -1;
	
	
  },

  /**
   * Determine the sum of the items of arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number} The numerical sum of all items in arr.
   */
  sum: function sum(arr) {
	  var total = 0;
	  for(var x=0;x<arr.length;x++)
	  { 	
   	   	 total = total + arr[x];   	   	 				
	   }	
		 return total;
  },

  /**
   * Create a new array with the same items as arr, excluding item 
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be excluded from the new array
   * @returns {Number[]} A new array containing all numbers from arr except item.
   */
  remove: function remove(arr, item) {
	  
    	  var arr2 = new Array();
    	  
    	  for (var i=0; i < arr.length; i++)
    				{
    					if (arr[i] != item)    //put all the elemnts excluding the item into another array
    					{
    					arr2.push(arr[i]);
    					}
    				}
    	  
    	  return arr2;
		  
  },
  
  
  
  
  
  
  /**
   * Create a new array with the same items as arr, excluding item 
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be excluded from the new array
   * @returns {Number[]} A new array containing all numbers from arr except item.
   */
  removeWithoutCopy: function removeWithoutCopy(arr, item) {
		     
	  
		for (var i=0; i < arr.length; i++)
		 {
			if (arr[i] === item)
				{
					arr.splice(i, 1);    // This will return an array by removing (item) from the given array
					i--;   // This will prevent skipping of an element
				}
		}
    return arr;
  },
  
  
  
  

  /**
   * Adds a number, item, to the end of an array, arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be appended to the end of arr
   * @returns {Number[]} The array arr, with item appended.
   */
  append: function append(arr, item) {
	  
		arr.push(item) // push method will append item to the end of an array
		return arr;
							

  },

  /**
   * Removes a number, item, from the end of an array, arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the last element removed..
   */
  truncate: function truncate(arr) {
	  
		arr.pop()   // pop method will remove the last element from the array
		return arr;

  },

  /**
   * Adds a number, item, to the beginning of an array arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to append to the beginning of arr.
   * @returns {Number[]} The array arr, with the first element item added
   */
  prepend: function prepend(arr, item) {
		
		arr.unshift(item)  // unshift method adds element to the beginning of the array
		return arr;
  },


  /**
   * Removes the first element from an array
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the first element item removed.
   */
  curtail: function curtail(arr) {
  
		arr.shift()  // shift method removes first element of the array and shifts all other elements to a lower index.
		return arr;

  },

  /**
   * Combines the two arrays arr1 and arr2 together
   * 
   * @param {Number[]} arr1 - An array of numbers
   * @param {Number[]} arr2 - An array of numbers
   * @returns {Number[]} A new array, with elements from arr1 and arr2 in that order.
   */
  concat: function concat(arr1, arr2) {
	  
	  return (arr1.concat(arr2));

  },

  /**
   * Insert a number item into an array arr at the 0 based position index.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be inerted into arr
   * @param {Number} index - A 0 based index into the array arr.
   * @returns {Number[]} The array arr, with the number item inserted at position index.
   */
  insert: function insert(arr, item, index) {

		arr.splice(index,0,item);
  		return arr;
	
  },

  /**
   * Counts the number of times a number item appears in an array arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to count in arr
   * @returns {Number} The count of the number of times the number item appeared in arr.
   */
  count: function count(arr, item) {
	  
	    var c=0;
  		for(var i=0;i<arr.length;i++)
  			{
  				if(arr[i]==item)
  					{
  						c++;
  				
  					}	
  			}
        	  
		  return c;
    	 
  },

  /**
   * Determines the number of duplicated numbers in the array arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} An array of numbers that appear in arr more than once.
   */
  duplicates: function duplicates(arr) {
	  
	  	  var newArr =[];
    	  for(var i=0;i<arr.length;i++)           //outer loop
    		  {
    		   for(var j=i+1;j<arr.length;j++)    // inner loop
    			   {
    			   		if(arr[i]===arr[j])       
    			   			{
    			   				if(!newArr.includes(arr[j])) //checking if an element is already present in an array
    			   					{
    			   						newArr.push(arr[j]);
    			   					}
							}
    			   }
    		  }
    	  return newArr;

  },

  /**
   * Squares each number in an array arr. Example: square([1, 2, 3]) returns [1, 4, 9].
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} A new array of numbers that contains the elements of arr squared.
   */
  square: function square(arr) {
	  
	   var newArr=[];
    	  var num;
    	  
    	  for(var i=0; i<arr.length;i++)
    		  {
    		  		num = arr[i] * arr[i];
    		  		newArr.push(num);
    		  }
    	  
    	  return newArr;
	
  },

  /**
   * Finds the indices of the occurrences of a number target in an array of numbers arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} target - A number to find all occurences of.
   * @returns {Number[]} A new array of numbers which represent the indices of target in arr.
   */
  findAllOccurrences: function findAllOccurrences(arr, target) {
	  
	   var newArr =[];
    	  for(var i=0;i<arr.length;i++)
    		  {
    		   		if(arr[i]==target)
    		   			{
    			   					{
    			   						newArr.push(i);
    			   					}
							}
    		  }
    	  return newArr;

  },
};
