const db = require('../database/dbConfig.js');

module.exports = {
    addJoke,
    findJoke
}

async function addJoke(joke) {
    const[id] = await db('jokes').insert(joke);
    return findJoke(id);
}

function findJoke(id) {
    return db('jokes')
    .where({id})
    .select(
        "id",
        "joke",
        "punchline",
        "private",
        "public",      
        "user_id"
    )
    .orderBy('id')
    .first()
}
