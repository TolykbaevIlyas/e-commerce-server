import { Module } from "@nestjs/common";
import {TypeOrmModule as NestTypeOrmModule} from "@nestjs/typeorm"

@Module({
    imports:[
        NestTypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: 5433,
            username: "nest_test",
            password: "nest_test",
            database: "nest_test",
            entities: ['dist/entities/**/*.entity.js'],
            synchronize: true,
            // migrations: ['dist/db/migrations/**/*.js'],
            // cli: {migrationsDir: 'src/db/migrations'},
        })
    ]
})
export class TypeOrmModule {}