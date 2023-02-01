import { updateUserDto } from './dto/update-user.dto';
import { createUserDto } from './dto/create-user.dto';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get()
    getUsers(){
        return this.userService.getUsers()
    }

    @Get('/:id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.getUserById(id)
    }

    @Patch('/:id')
    updateUser(@Param('id',ParseIntPipe) id:number, @Body() body: updateUserDto){
        return this.userService.updateUser(id,body);

    }

    @Delete('/:id')
    delete(@Param('id', ParseIntPipe) id: number){
        return this.userService.deleteUser(id);
    }


    @Post()
    createUser(@Body() createUserDto: createUserDto) {
        return this.userService.createUser(createUserDto)
    }
}
