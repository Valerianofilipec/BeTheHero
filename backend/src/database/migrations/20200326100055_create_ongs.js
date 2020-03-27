
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table){
        //Chave Primaria/ Primary Key
        table.string('id').primary()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.string('city').notNullable()
        table.string('uf', 3).notNullable() // Estado/Distrito/Provincia  (i.e Lisboa => "LIS")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs')
};
