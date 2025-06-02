import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('AddressClient') // Choose a more descriptive name if needed
@Schema()
export class AddressClient {
    @Field(() => ID)
    _id: string; //Mongoose will automatically generate if not specified.

    @Field(() => String)
    @Prop({ required: true })
    description: string;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type AddressClientDocument = AddressClient & Document;
export const AddressClientSchema = SchemaFactory.createForClass(AddressClient);