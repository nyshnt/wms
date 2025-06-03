import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('DevmstReader')
@Schema({ collection: 'devmst_reader' })
export class DevmstReader {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true })
    reader_id: number;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    devcod: string;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    // Add other fields from devmst_reader table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DevmstReaderDocument = DevmstReader & Document;
export const DevmstReaderSchema = SchemaFactory.createForClass(DevmstReader);