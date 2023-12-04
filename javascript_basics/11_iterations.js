 //! FOR_LOOP_FUNCTION_METHOD

 //TODO: for(variable; condition; increament++){
 //TODO:   content......
 //TODO: }

 //TODO: EXAMPLE:

for(let i=0; i<=10; i++){
    const element = i;
    // console.log(element);
}

for(let i=0; i<=10; i++){
    if (i === 5) {
        // console.log('5 value Detected.');
        // break 
        console.log('Skip 5 value.');
        continue
    }
    const element = i;
    console.log(element);
}






