import {pgTable, text, integer, timestamp} from 'drizzle-orm/pg-core'

//criando a table
export const goals = pgTable('goals', {
    id: text('id').primaryKey(),
    titulo: text('title').notNull(),
    desiredWeeklyFrequency: integer('desired_weekly_frequency').notNull(),
    createdAt: timestamp('creat_at', {withTimezone:true} /*cita que a data ta sendo guardada com timezone*/).notNull()
    .defaultNow()/*quando alguem cadastrar uma nova meta o campo sera preenchido com a data atualk */  ,
})