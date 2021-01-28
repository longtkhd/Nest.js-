
import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypegooseModule } from 'nestjs-typegoose'
import { connectionString } from 'orm.config'



@Module({
  imports: [
    TasksModule,
    TypegooseModule.forRoot(connectionString.url),
    //a
  ],


})
export class AppModule { }
