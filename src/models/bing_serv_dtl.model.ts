import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('BingServDtl')
@Schema({ collection: 'bing_serv_dtl' })
export class BingServDtl {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String)  // Adjust data type if necessary.
    @Prop({ required: true })
    bing_serv_typ: string;

    @Field(() => Types.ObjectId)  // Assuming client_id references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client', required: true })
    client_id: Types.ObjectId;

    @Field(() => String)
    @Prop()
    bing_mthd_typ: string;

    // Add other fields from bing_serv_dtl table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type BingServDtlDocument = BingServDtl & Document;
export const BingServDtlSchema = SchemaFactory.createForClass(BingServDtl);