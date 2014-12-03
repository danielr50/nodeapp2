var os = require('os');

var message = 'aqui hay info de tu sistema';

var sysarray = new Array('Type: '+os.type(),
						 'Node Version: '+process.version,
						 'Platform: '+os.platform(),
						 'Hostname: '+os.hostname(),
						 'Total Memory: '+os.totalmem(),
						 'Free Memory: '+os.freemem(),
						 'Uptime: '+os.uptime()

						);
console.log(message);
var arraylen = sysarray.length;

i = 0;
while(i < arraylen){
	console.log(sysarray[i]);
	i++;
}