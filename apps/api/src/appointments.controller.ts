import { Controller, Get, Post, Body } from '@nestjs/common';

let appointments: any[] = [];

@Controller('appointments')
export class AppointmentsController {

  @Get()
  getAll() {
    return appointments;
  }

  @Post()
  create(@Body() body: any) {
    const appointment = {
      id: Date.now(),
      status: 'scheduled',
      ...body,
    };
    appointments.push(appointment);
    return appointment;
  }
}
