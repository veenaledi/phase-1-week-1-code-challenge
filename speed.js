const prompt =require('prompt-sync')()

const limit = 70;
let vehicle_speed = Number(prompt('Enter Vehicle Speed'))
function speed_(speed){ 
    if(isNaN(speed) || speed <= 0){
        console.log(`invalid`);
    } else {
        let demeritPoints = (speed - limit)/5;
        if(demeritPoints > 12) {
            console.log('License Suspended')
        } else {
            console.log(`Your Points: ${demeritPoints}` );
        }
    }
}
speed_(vehicle_speed)