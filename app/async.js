asyncAnswers = {
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   * 
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  async: function async(value) {
	  
 return new Promise(
        function (resolve, reject) {
		    resolve(value);
            reject("fail");
        });
  },

  /**
   * Creates a promise that resolves with the data returned from an ajax call to the url url.
   * You may use jquery, XMLHttpRequest, or fetch.
   * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   * https://api.jquery.com/jQuery.ajax/
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API   * 
   * 
   * @param {String} url - a valid url
   * @returns {then: function} A promise like object containing a then property.
   */
  manipulateRemoteData: function manipulateRemoteData(url) {
	  
	 var promise;
	 var arr=new Array();
	return fetch(url)
		.then((resp) => resp.json())
		.then(function(data) {
			var people=data.people;
			console.log(people);
			people.sort(function(a,b){
				 var x = a.name.toLowerCase();
				var y = b.name.toLowerCase();
				 
               return x < y ? -1 : x > y ? 1 : 0;
			  
			 
			});
			
			 console.log(people);
			
			for(var x=0;x<people.length;x++){
				//console.log(people[x]);
				arr.push(people[x].name);
								
			}	
			
			return arr;
		});
		//return promise;

  },
};
