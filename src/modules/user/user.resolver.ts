import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from '../../models/user.model';
import { CreateUserInput } from './dto/create-user.input';

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => [User], { name: 'users' })
    async getUsers(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Query(() => User, { name: 'user', nullable: true })
    async getUser(@Args('id') id: string): Promise<User> {
        return this.userService.findById(id);
    }

    @Mutation(() => User)
    async createUser(@Args('input') createUserInput: CreateUserInput): Promise<User> {
        return this.userService.create(createUserInput);
    }
}