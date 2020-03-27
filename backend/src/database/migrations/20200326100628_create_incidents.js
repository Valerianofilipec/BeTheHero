
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
        //Chave Primaria/ Primary Key
        table.increments()
        table.string('title').notNullable()
        table.string('description').notNullable()
        table.decimal('value').notNullable()
        //Relacionamento
        table.string('ong_id').notNullable
        //Chave Estrangeira/ Foreign Key
        table.foreign('ong_id').references('id').inTable('ongs')
      })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents')
};
