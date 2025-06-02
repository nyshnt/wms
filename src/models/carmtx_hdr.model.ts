import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('CarmtxHdr')
@Schema({ collection: 'carmtx_hdr' })
export class CarmtxHdr {
    @Field(() => ID)
    _id: string;

    @Field(() => Number) // Adjust data type if necessary.
    @Prop({ required: true, unique: true })
    carmtx_id: number;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection.
    @Prop({ type: Types.ObjectId, ref: 'Warehouse' })
    wh_id: Types.ObjectId;

    @Field(() => Number)
    @Prop()
    seqnum: number;

    @Field(() => String)
    @Prop()
    carcod: string;

    @Field(() => String)
    @Prop()
    srvlvl: string;

    @Field(() => String)
    @Prop()
    cargrp: string;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CarmtxHdrDocument = CarmtxHdr & Document;
export const CarmtxHdrSchema = SchemaFactory.createForClass(CarmtxHdr);