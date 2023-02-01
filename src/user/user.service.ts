import { updateUserDto } from './dto/update-user.dto';
import { Users } from './entity/user.entity';
import { createUserDto } from './dto/create-user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>
    ) { }

    getUsers() {
        return this.userRepository.find()
    }

    createUser(createUserDto: createUserDto) {
        return this.userRepository.save(createUserDto)
    }

    async getUserById(id: number): Promise<Users> {
        const found = await this.userRepository.findOne({ where: { id } });
        
        if (!found) {
            throw new NotFoundException()
        }
        return found;
    }

    updateUser(id: number,updateUserDto:updateUserDto){
        return this.userRepository.update(id,updateUserDto);
    }


    deleteUser(id: number){
        return this.userRepository.delete(id)
    }

}
