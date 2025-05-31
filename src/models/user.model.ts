import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('User')
@Schema()
export class User {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String)
    @Prop({ required: true, unique: true })
    email: string;

    @Field(() => String)
    @Prop({ required: true })
    name: string;

    // Password field - no @Field() decorator so it won't be exposed in GraphQL
    @Prop({ required: true })
    password: string;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);