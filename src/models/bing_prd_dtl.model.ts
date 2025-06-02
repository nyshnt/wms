import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('BingPrdDtl')
@Schema({ collection: 'bing_prd_dtl' })
export class BingPrdDtl {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId) // Assuming client_id references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client', required: true })
    client_id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if necessary.
    @Prop({ required: true })
    bing_prd_id: number;

    @Field(() => Number)
    @Prop({ required: true })
    seqnum: number;

    @Field(() => String)
    @Prop()
    dtl_typ: string;

    // Add other fields from bing_prd_dtl table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type BingPrdDtlDocument = BingPrdDtl & Document;
export const BingPrdDtlSchema = SchemaFactory.createForClass(BingPrdDtl);