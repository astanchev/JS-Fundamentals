function condenseArray(params) {
    if (params.length !== 1) {

        for (let i = 0; i < params.length; i++) {

            for (let j = 0; j < params.length - 1; j++) {
                
                params[j] += params[j + 1];
            }

            i = 0;
            params.pop();
        }
    }

    console.log(params.toString());
}

condenseArray([5,0,4,1,2]);