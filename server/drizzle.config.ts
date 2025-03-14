import {defineConfig} from 'drizzle-kit'
import { env } from './src/env'
export default defineConfig({
    schema: "./schema.ts",
    out: './.migrations',//nome da pasta que ficam os arquivos de migrations 
    dialect: 'postgresql',
    dbCredentials:{
        url: env.DATABASE_URL,
    }, 
})