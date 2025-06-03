import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('CntTmplDtl')
@Schema({ collection: 'cnt_tmpl_dtl' })
export class CntTmplDtl {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId) // Assuming cnt_tmpl_id references a template collection
    @Prop({ type: Types.ObjectId, ref: 'CntTmpl', required: true })
    cnt_tmpl_id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    varnam: string;

    @Field(() => String)
    @Prop()
    value: string;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CntTmplDtlDocument = CntTmplDtl & Document;
export const CntTmplDtlSchema = SchemaFactory.createForClass(CntTmplDtl);