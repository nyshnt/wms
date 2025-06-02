import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('Aisle')
@Schema({ collection: 'aisle' })
export class Aisle {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if needed.
    @Prop({ required: true })
    aisle_id: number;

    @Field(() => Types.ObjectId) // Assuming wh_id references another collection (e.g., Warehouse)
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type AisleDocument = Aisle & Document;
export const AisleSchema = SchemaFactory.createForClass(Aisle);