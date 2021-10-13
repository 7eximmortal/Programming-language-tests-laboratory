tester: for (let i = 0 ; i < 5; i++) {
    console.log(`i = ${i}`);
    for (let j = 0 ; j < 5; j++) {
        console.log(`j = ${j}`);
        if (j == 0) {break tester};
    };
};