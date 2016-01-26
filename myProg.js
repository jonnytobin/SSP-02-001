// Getting the file system (FS) from node.
var fs = require("fs");
var count;
count = 0;

fs.readdir("./", function(err, files)
{
	console.log("Got the contents of the directory.");
	// Loop through the array, there are a few ways of going this
	
	for(var i in files) 
	{
		console.log("File: " + files[i]);
		
		if(files[i] != "myProg.js") 
		{
			//console.log(files[i]);
			fs.readFile(files[i], {encoding: "utf8", flag: "r"}, function(error, data) 
			{
				// If we have an error object then throw it. JS has an inbuild Error object
				// so look it up to learn more about it.
					
				//if (error)
				//{
				//	throw error;
				//}
    			console.log("Contents of file: " + files[i] + " " + data);
			
			});
		}
		count++;
		if(count == 3) {

		}
	}

});  // Note that this bracket closes readdir method call
