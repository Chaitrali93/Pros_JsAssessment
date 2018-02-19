recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
	  
	    
	    var list=new Array();
	    var dfiles=data.files;
		for(var x=0;x<dfiles.length;x++){
			list.push(dfiles[x]);
		}	
		var subDirArr=data.subDirs;
		for(var p=0;p<subDirArr.length;p++){
			var dddires=subDirArr[p];
			var sfiles=dddires.files;
			for(var m=0;m<sfiles.length;m++){
				list.push(sfiles[m]);
			}	
		}
		return list;

  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
	  
		  var a =1;
    	  var b =0;
    	  var temp;
    	  
    	  while(n>0)
    		  {
    		  temp = a;
    		  a = a+b;
    		  b = temp;
    		  n--;
    		  }
		
    	  return b;

  },
};


