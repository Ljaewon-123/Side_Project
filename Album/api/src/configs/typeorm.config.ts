import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234', 
  database: 'album',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
  // logging: true,
}