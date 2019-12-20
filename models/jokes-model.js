const db = require('../database/dbConfig.js');

module.exports = {
    addJoke,
    findJoke,
    findJokes,
    findJokeById,
    updateJoke,
    removeJoke
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

function findJokes() {
    return db('jokes')
    .select()
    .table('jokes')
}

function findJokeById(id) {
    return db('jokes')
    .where({id})
    .first();
}

function updateJoke(id, changes) {
    return db('jokes')
    .where({id})
    .update(changes, '*')
}

function removeJoke(id) {
    return db('jokes')
    .where({id})
    .del();
}
