const readline_= require('readline');

const rl = readline_.createInterface({
    input: process.stdin,
    output: process.stdout
});
const limit = 70;
rl.question(`vehicle speed:`, function(speed){ 
    if(isNaN(speed) || speed <= 0){
        console.log(`invalid`);
        rl.close()
    } else {
        let demeritPoints = (speed - limit)/5;
        if(demerit > 12) {
            console.log('License Suspended')
        } else {
            console.log(`Your Points: ${demeritPoints}` );
    }
rl.close();
    }})
