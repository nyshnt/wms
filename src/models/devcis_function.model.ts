import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('DevcisFunction')
@Schema({ collection: 'devcis_function' })
export class DevcisFunction {
    @Field(() => ID)
    _id: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    devcis: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    dev_function: string;

    // Add other fields from devcis_function table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DevcisFunctionDocument = DevcisFunction & Document;
export const DevcisFunctionSchema = SchemaFactory.createForClass(DevcisFunction);