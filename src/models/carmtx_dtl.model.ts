import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('CarmtxDtl')
@Schema({ collection: 'carmtx_dtl' })
export class CarmtxDtl {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId) // Assuming carmtx_id references a Carmtx collection
    @Prop({ type: Types.ObjectId, ref: 'Carmtx', required: true })
    carmtx_id: Types.ObjectId;

    @Field(() => String)
    @Prop({ required: true })
    colnam: string;

    @Field(() => String)
    @Prop()
    colval: string;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CarmtxDtlDocument = CarmtxDtl & Document;
export const CarmtxDtlSchema = SchemaFactory.createForClass(CarmtxDtl);