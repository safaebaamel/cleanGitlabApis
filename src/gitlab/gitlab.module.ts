import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'

@Module({
    imports: [
        HttpModule.register({
          timeout: 5000,
          maxRedirects: 5,
        }),
      ],
      providers: [],
})
export class GitlabModule {
}
