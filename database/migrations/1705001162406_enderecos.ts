import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'enderecos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('cliente_id')
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("clientes");
      table
        .integer("cliente_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("clientes");
      table
        .string('rua')
        .notNullable();
      table
        .string("numero")
        .nullable();
      table
        .string("bairro")
        .notNullable();
      table
        .string("ponto_referencia")
        .notNullable();
      table
        .string("complemento")
        .notNullable();
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
