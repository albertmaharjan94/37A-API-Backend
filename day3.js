// // Asynchornous/Promise
// console.log("1. Start");
// // macro task -> least priority
// setTimeout(
//     () => {
//         console.log("2. Inside setTimeout");
//     },
//     0 // milliseconds
// )

// // micro task -> high priority
// Promise.resolve().then( () => console.log("3. Promise" ) );
// queueMicrotask( () => console.log("3.1 queueMicrotask") );

// console.log("4. End");

// Promise
// function that takes time
// I/O, Network, DB, API, File system
const promiseFunc = new Promise(
    (resolve, reject) => {
        if(true){
            return resolve("Succes bhayo");
        }else{
            return reject("Fail bhayo");
        }
    }
);
// sequencial execution
// promiseFunc
// .then(
//     (success) => console.log("Resolved" + success)
// ).catch(
//     (error) => console.log("Rejected" + error)
// ).finally(
//     () => console.log("Promise execution completed")
// )

// in async/await 
const main = async () => {
    try{
        const result = await promiseFunc;
        console.log(result);
    }catch(error){
        console.log("Error occurred: " + error);
    }
}
main();

// difference between 
const func1 = new Promise();
const func2 = () => new Promise();
