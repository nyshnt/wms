import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('BtoaudDtlTbl')
@Schema({ collection: 'btoaud_dtl_tbl' })
export class BtoaudDtlTbl {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true })
    btoaud_id: number;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    slot: string;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true })
    btoaud_dtl_id: number;

    @Field(() => Number)
    @Prop()
    exp_btoseqnum: number;

    @Field(() => Number)
    @Prop()
    scanned_btoseqnum: number;

    @Field(() => String)
    @Prop()
    btoaud_dtl_sts: string;

    @Field(() => String)
    @Prop()
    ordnum: string;


    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type BtoaudDtlTblDocument = BtoaudDtlTbl & Document;
export const BtoaudDtlTblSchema = SchemaFactory.createForClass(BtoaudDtlTbl);