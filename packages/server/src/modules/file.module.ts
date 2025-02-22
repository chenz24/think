import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FileController } from '@controllers/file.controller';
import { FileService } from '@services/file.service';

@Module({
  imports: [ConfigModule],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
