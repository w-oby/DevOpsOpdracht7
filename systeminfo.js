const systeem = require('os');

let systeemInfo = {
    platform: systeem.platform(),
    architecture: systeem.arch(),
    cpuCores: systeem.cpus().length,
    totalMemory: systeem.totalmem(),
    freeMemory: systeem.freemem(),
    hostname: systeem.hostname(),
    uptime: systeem.uptime(),
};

// Informatie over systeem
console.log(`Systeem platform: ${systeemInfo.platform}`);
console.log(`Architectuur: ${systeemInfo.architecture}`);
console.log(`CPU Cores: ${systeemInfo.cpuCores}`);
console.log(`Totaal geheugen: ${(systeemInfo.totalMemory / (1024 * 1024)).toFixed(2)} MB`);
console.log(`Totaal vrij geheugen: ${(systeemInfo.freeMemory / (1024 * 1024)).toFixed(2)} MB`);
console.log(`Host naam: ${systeemInfo.hostname}`);
console.log(`Tijd actief: ${systeemInfo.uptime} seconds`);

// Checks voor systeem platforms
if (systeemInfo.platform.includes('win')) {

    console.log("Uw apparaat loopt op Windows.");

} else if (systeemInfo.platform.includes('linux')) {

    console.log("Uw apparaat loopt op Linux.");

} else if (systeemInfo.platform.includes('darwin')) {

    console.log("Uw apparaat loopt op macOS.");

} else {

    console.log("Onbekend OS.");

}