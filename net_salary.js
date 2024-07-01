const rl = require('readline');

const id = rl.createInterface({
    input:process.stdin,
    output:process.stdout
})

io.question('what is your gross salary?' , function(gross_salary){
    if(isNaN(gross_salary)){
        console.log('Invalid Entry')
        io.close()
    } else{
        let (taxable_amount > 288000 && taxable_amount <= 380000)
        console.log()
    }
});

function _paye(taxable_amount){
    if(taxable_amount > 0 && taxable_amount <= 288000){
        return taxable_amount*(10/100)
    } else if(taxable_amount > 288000 && taxable_amount <= 380000){
        return
    }
}