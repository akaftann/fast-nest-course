import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import {join} from 'path'

@Module({
  imports: [PostModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'nest-db',
    username: 'postgres',
    password: 'diablo53',
    entities: [join(__dirname, '**', '*.entity{.ts,.js}')],
    migrations: [join(__dirname, '**', '*.migration{.ts,.js}')],
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
