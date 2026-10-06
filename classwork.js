import fs from "node:fs/promises";
const DB = "./user.json";

const readDB = async () => {
    try{
        const data = await fs.readFile(DB, "utf-8");
        return JSON.parse(data); 
    }catch(error){
        return [];
    }
}
const writeDB = async (data) => {
    try{
        await fs.writeFile(DB, JSON.stringify(data));
    }catch(error){
        console.log("Error")
    }
}
const createUser = (user) => new Promise(
    async (resolve, reject) => {
        if(!user.id ) return reject("User id is required");
        
        user.name = user.name || "Anonymous";

        const users = await readDB();
        users.push(user);
        await writeDB(users);
        return resolve("User created successfully");
    }
);
const run = async () => {
    // create user
    const user1 = {
        id: 1,
        name: "Alice"
    }
    const result = await createUser(user1);
    console.log(result);
}
run();


// your application should be 6 functions to perform CRUD operations using Promise
// All function should be a Promise
// 1. createuser 
// -- takes user object as argument and add to users array
// -- destructure id, name and email
// -- check if id is not present reject with error
// -- check if id is already present reject with error
// -- if name is missing, replace with "Unknown User" 
// -- if email is missing, replace with "No Email"

// 2. getusers, 
// -- returns all users after 2 seconds delay using Promise

// 3. getuserById, 
// -- takes id as argument and returns user with that id after 1 second delay 
// -- if not found, reject with error

// 4. searchuser,
// -- takes name as argument and returns all users that match the name
// -- if not found, return empty object

// 5. updateuser, 
// -- takes id and update object as arguments, 
// -- check if id is not present reject with error
// -- check if id is not found reject with error
// -- destructure name and email and update in found id
// finds user by id and updates it with the update object, 
// if not found, reject with error

// 6. deleteuser
// -- takes id as argument and deletes user with that id,
// -- check if id is not present reject with error
// -- if not found, reject with error, if deleted, resolve with success message
