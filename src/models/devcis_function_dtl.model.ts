import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('DevcisFunctionDtl')
@Schema({ collection: 'devcis_function_dtl' })
export class DevcisFunctionDtl {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    oprcod: string;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    devcis: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    dev_function: string;

    // Add other fields from devcis_function_dtl table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DevcisFunctionDtlDocument = DevcisFunctionDtl & Document;
export const DevcisFunctionDtlSchema = SchemaFactory.createForClass(DevcisFunctionDtl);