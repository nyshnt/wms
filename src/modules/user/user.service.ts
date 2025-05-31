import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../models/user.model';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) {}

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findById(id: string): Promise<User> {
        return this.userModel.findById(id).exec();
    }

    async create(createUserInput: CreateUserInput): Promise<User> {
        const createdUser = new this.userModel(createUserInput);
        return createdUser.save();
    }
}