import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ClientsController } from './clients.controller';
import { AppointmentsController } from './appointments.controller';

@Module({
  controllers: [AuthController, ClientsController, AppointmentsController],
})
export class AppModule {}
