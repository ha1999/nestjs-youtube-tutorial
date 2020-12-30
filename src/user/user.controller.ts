import { Observable } from 'rxjs';
import { User } from './user.interface';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  create(@Body() user: User): Observable<User> {
    return this.userService.create(user);
  }
  @Get()
  findAll(): Observable<User[]> {
    return this.userService.findAll();
  }
    @Get(':id')
  findOne(@Param('id') id: number): Observable<User[]> {
    return this.userService.findOne(id);
  }
  @Delete(':id')
  deleteOne(@Param('id') id: number): Observable<any> {
    return this.userService.deleteOne(id);
  }
  @Put(':id')
  updateOne(@Param('id') id: string, @Body() user: User): Observable<any> {
    return this.userService.updateOne(Number(id), user);
  }
}
