const os = require("os");
console.log(os.version());
console.log(os.hostname());
console.log(os.arch());
const cpusInfo = os.cpus();
for(const info of cpusInfo){
    console.log(JSON.stringify(info))
}
console.log(os.totalmem());


var free_mem_in_gb = free_mem_in_gb/1024;
free_mem_in_gb = Math.floor(free_mem_in_gb);

console.log("Free memory: " + free_mem_in_gb + "GB ");


console.log(os.userInfo());


// console.log("The total number of CPU's in this machine is "+ os.cpus().lenght);