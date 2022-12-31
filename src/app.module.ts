import { Module } from '@nestjs/common';
import { MessagesController } from './messages/messages.controller';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [MessagesModule],
  controllers: [MessagesController],
  providers: [],
})
export class AppModule {}
