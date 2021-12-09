const db = require("./dbConfig")

module.exports = {
    findUser,
    registerUser
};

function findUser(email){
    const user = db("USERS").first("*").where("email", email);
    return user
}

async function registerUser(newUser){
    try{
        await db("USERS").insert({
            tag: newUser.tag,
            name: newUser.name,
            email: newUser.email,
            hash: newUser.hash
        })
    }catch{
        return{ERROR:"Model level error."}
    }
}
