import {
  BadRequestException,
  ForbiddenException,
  HttpCode,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { BulkDeleteUser } from './dto/bulk-delete-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { CheckPasswordUser } from './dto/check-password-user.dto';

@Injectable()
export class UsersService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  async create(createUserDto: CreateUserDto) {
    const user: User = await this.repository.findOne({
      where: {
        username: createUserDto.username,
      },
    });
    if (user) {
      throw new BadRequestException('Username already exsist');
    }
    const hash = await bcrypt.hash(createUserDto.password, 10);
    createUserDto.password = hash;
    await this.repository.save(createUserDto);
    return 'User succesfuly added';
  }

  findAll(): Promise<User[]> {
    return this.repository.find();
  }
  findOne(id: number) {
    return this.repository.find({ id });
  }

  @HttpCode(202)
  async passwordChecker(checkPasswordUser: CheckPasswordUser) {
    const user: User = await this.repository.findOne({
      select: ['username', 'password'],
      where: {
        username: checkPasswordUser.username,
      },
    });
    if (!user) {
      throw new ForbiddenException('Username or password incorect');
    }
    const isMatch = await bcrypt.compare(
      checkPasswordUser.password,
      user.password,
    );
    if (!isMatch) {
      throw new ForbiddenException('Username or password incorect');
    }
    return 'username and password Match';
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.repository.update(id, updateUserDto);
  }

  Bulkremove(bulkDeleteUser: BulkDeleteUser) {
    console.log(bulkDeleteUser);
    return this.repository.delete(bulkDeleteUser.id);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
