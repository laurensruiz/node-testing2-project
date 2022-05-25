exports.seed = function(knex) {
    return knex('jokes').truncate()
        .then(function (){
            return knex('jokes').insert([
                {joke:'A', punchline: 'A'},
                {joke:'B', punchline: 'B'},
                {joke:'C', punchline: 'C'},
            ])
        })
}