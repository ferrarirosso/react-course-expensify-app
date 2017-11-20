const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolved data');
        reject('This is an error');
    }, 2000);
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error', error);
});

console.log('after');
