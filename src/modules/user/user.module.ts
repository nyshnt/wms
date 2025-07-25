import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../models/user.model';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
 imports: [
   MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), 
 ],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}