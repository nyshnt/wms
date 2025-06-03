import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('DevWrkare')
@Schema({ collection: 'dev_wrkare' })
export class DevWrkare {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    devcod: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    wrkare: string;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    // Add other fields from dev_wrkare table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DevWrkareDocument = DevWrkare & Document;
export const DevWrkareSchema = SchemaFactory.createForClass(DevWrkare);