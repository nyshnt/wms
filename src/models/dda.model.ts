import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('Dda')
@Schema()
export class Dda {
    @Field(() => ID)
    _id: string;

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

export type DdaDocument = Dda & Document;
export const DdaSchema = SchemaFactory.createForClass(Dda);