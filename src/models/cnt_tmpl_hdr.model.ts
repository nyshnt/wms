import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('CntTmplHdr')
@Schema({ collection: 'cnt_tmpl_hdr' })
export class CntTmplHdr {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true })
    cnt_tmpl_id: number;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    @Field(() => Boolean)
    @Prop({ default: false })
    auto_gen_tmpl_flg: boolean;

    // Add other fields from cnt_tmpl_hdr table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CntTmplHdrDocument = CntTmplHdr & Document;
export const CntTmplHdrSchema = SchemaFactory.createForClass(CntTmplHdr);