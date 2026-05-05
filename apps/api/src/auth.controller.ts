import { Controller, Post, Body } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

const users: any[] = [];

@Controller('auth')
export class AuthController {

  @Post('register')
  async register(@Body() body: any) {
    const hash = await bcrypt.hash(body.password, 10);
    users.push({ email: body.email, password: hash });
    return { ok: true };
  }

  @Post('login')
  async login(@Body() body: any) {
    const user = users.find(u => u.email === body.email);
    if (!user) return { error: 'user not found' };

    const valid = await bcrypt.compare(body.password, user.password);
    if (!valid) return { error: 'wrong password' };

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET!);
    return { token };
  }
}
