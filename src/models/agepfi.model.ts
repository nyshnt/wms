import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('Agepfi')
@Schema({ collection: 'agepfi' })
export class Agepfi {
    @Field(() => ID)
    _id: string;

    @Field(() => String)
    @Prop({ required: true })
    age_pfinam: string;

    @Field(() => String) // Adjust data type if invsts is not a string.
    @Prop({ required: true })
    invsts: string;


    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type AgepfiDocument = Agepfi & Document;
export const AgepfiSchema = SchemaFactory.createForClass(Agepfi);