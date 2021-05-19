let counter = 0;
for (let i = 100; i <= 200; i++) {
    for (let j = 100; j <= 200; j++) {
        if (i % j == 0) {
            counter++;
        }  
        if (counter == 2) {
            console.log(i);
            break;
        }   
    }
}