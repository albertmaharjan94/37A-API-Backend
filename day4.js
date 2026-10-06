// Promise flow of execution
const task1 = () => new Promise(
    (resolve) => setTimeout( () => resolve("Task 1 completed"), 2000) // 2 second
);
const task2 = () => new Promise(
    (resolve) => setTimeout( () => resolve("Task 2 completed"), 5000) // 5 second
);

// sequential execution using then() catch()
task1()
.then(
    (result) => {
        console.log(result);
        return task2();
    }
).then(result => console.log(result)); // task 2 completed

// sequential execution using async/await
const runTasks = async () => {
    console.time("runTasks"); // profile time
    const result1 = await task1();
    console.log(result1);
    const result2 = await task2();
    console.log(result2);
    console.timeEnd("runTasks"); // profile time end
}
runTasks();
// total time taken = 2 + 5 = 7 seconds

// parallel execution
const runTasksParallel = async () => {
    console.time("runTasksParallel");
    const [result1, result2] = await Promise.all(
        [
            task1(), // result1
            task2() // result2
        ]
    );
    console.log(result1);
    console.log(result2);
    console.timeEnd("runTasksParallel");   
}
runTasksParallel();
// time taken = max(2, 5) = 5 seconds
// limitation: if one of the promise fails, all will fail

// allSetteled -> resolve all promises, even if one fails
const runTasksAllSettled = async () => {
    console.time("runTasksAllSettled");
    const [result1, result2] = await Promise.allSettled(
        [
            task1(), // result1
            task2() // result2
        ]
    );
    console.log(result1.value); // resolve/reject "value"
    console.log(result1.status); // resolve/reject "status"
    console.timeEnd("runTasksAllSettled");
}
runTasksAllSettled();
// independent execution of promises, even if one fails, other will continue to execute