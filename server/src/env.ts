
//arquivo garante que a variavel DATABASE_URL exista
import z from "zod";
const envSchema = z.object({
    DATABASE_URL : z.string().url(),
})

export const env = envSchema.parse(process.env) //verificando se dentro da .env contem uma databaseurl
// se n for ele vai dar um erro 