import { Controller, Get, Post, Body } from '@nestjs/common';

let clients: any[] = [];

@Controller('clients')
export class ClientsController {

  @Get()
  getAll() {
    return clients;
  }

  @Post()
  create(@Body() body: any) {
    const client = { id: Date.now(), ...body };
    clients.push(client);
    return client;
  }
}
