import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('ArcCmpShipment')
@Schema({ collection: 'arc_cmp_shipment' })
export class ArcCmpShipment {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String) // Adjust data type if cmpkey is not a string
    @Prop({ required: true })
    cmpkey: string;

    @Field(() => Types.ObjectId) // Assuming client_id references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client', required: true })
    client_id: Types.ObjectId;

    @Field(() => String) // Adjust data type if ordnum is not a string
    @Prop({ required: true })
    ordnum: string;

    @Field(() => Number) // Adjust data type if ordlin is not a number
    @Prop({ required: true })
    ordlin: number;

    @Field(() => Number) // Adjust data type if ordsin is not a number
    @Prop({ required: true })
    ordsin: number;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type ArcCmpShipmentDocument = ArcCmpShipment & Document;
export const ArcCmpShipmentSchema = SchemaFactory.createForClass(ArcCmpShipment);