import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GitlabController } from './gitlab/controller/gitlab.controller';
import { GitlabModule } from './gitlab/gitlab.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [AppController, GitlabController],
  providers: [AppService],
  imports: [GitlabModule, HttpModule],
})
export class AppModule {}
