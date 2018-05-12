
function multiplytable(n){
    console.clear(); //clear the console log every time you want to print a new multiplication table, 
                    //else it will apend 
    var k=1;
    for(var i=n; k<=10; k++)
        {
            console.log(`${i}`+"*"+`${k}`+"="+`${i*k}`);
        }
}

