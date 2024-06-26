import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto/update-user.dto';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

    @Get()
    async getAllUsers() {
      return this.userService.findAll();
    }
  
    @Get(':id')
    async getUserById(@Param('id') id: number) {
      return this.userService.findOneWithOptions(id);
    }
  
    @Post()
    async createUser(@Body() createUserDTO: CreateUserDto) {
      return this.userService.create(createUserDTO);
    }
  
    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() updateUserDTO: UpdateUserDto) {
      return this.userService.update(id, updateUserDTO);
    }
  
    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
      return this.userService.remove(id);
    }
}
