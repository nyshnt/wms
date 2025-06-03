import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('CmpHdr')
@Schema({ collection: 'cmp_hdr' })
export class CmpHdr {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String)
    @Prop({ required: true, unique: true })
    cmpkey: string;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'Wkohdr' })
    client_id: Types.ObjectId;

    @Field(() => String)
    @Prop()
    wkonum: string;

    @Field(() => Number)
    @Prop()
    wkorev: number;


    // Add other fields from cmp_hdr table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CmpHdrDocument = CmpHdr & Document;
export const CmpHdrSchema = SchemaFactory.createForClass(CmpHdr);