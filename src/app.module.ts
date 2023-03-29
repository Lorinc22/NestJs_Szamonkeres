import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Account from './account.entity';
import Owner from './owner.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      database: 'database',
      entities: [
       Account, Owner
      ],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}