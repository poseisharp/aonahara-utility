const args = process.argv;
const fs = require('fs');
const timestamps = args[2];
const youtubeUrl = args[3];
let i = 0;
let x = 0;

useRegex = (input)=> {
    return input.matchAll(/([0-9]+(:[0-9]+)+)/g);
} 

let command = ""
for (const match of useRegex(timestamps)) {
	if (i % 2 == 0){
		command += "aonaclip "
		command += youtubeUrl + " "
		command += match[0] + " "
		x++;
	}else{
		command += match[0] + " "
		command += x + ".mp4"
		command += "\n"
	}
	
	i++;
	if ( i % 2 == 0 ){
		fs.writeFileSync('./download.sh', command);
	}
}
console.log("Download script written!")




