// Getting the file system (FS) from node.
var fs = require("fs");
var fileContents = new Array();
var count;
count = 0;

/*fs.readdir("./", function(err, files){
	console.log("Got the contents of the directory.");
	// Loop through the array, there are a few ways of going this
	for(var i in files) {
		console.log("File: " + files[i]);
	}
}	
);*/



fs.readFile("myFile_01.txt", {encoding: 'utf8', flag: 'r'}, function(error, data) {
	// If we have an error object then throw it. JS has an inbuild Error object
	// so look it up to learn more about it.
	if (error){
		// The throw statement in JS throws an exception which other code can catch
		// and try yo handle. It is a form or error handling.
		throw error;
	}
	 
    fs.writeFile("app-messages.txt", data, function(error){
        if (error) throw error;

        console.log("Message written to file");
    });
    
	console.log("Contents of file: " + data);
});




