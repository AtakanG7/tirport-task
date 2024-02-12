import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarriersController } from './carriers.controller';
import { CarriersService } from './carriers.service';
import { Carrier } from './entities/carriers.entity/carriers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carrier])],
  controllers: [CarriersController],
  providers: [CarriersService],
})
export class CarriersModule {}
