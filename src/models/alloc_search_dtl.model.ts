import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('AllocSearchDtl')
@Schema({ collection: 'alloc_search_dtl' })
export class AllocSearchDtl {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'AllocSearchHdr', required: true }) // Assuming alloc_search_id references AllocSearchHdr
    alloc_search_id: Types.ObjectId;

    @Field(() => String)
    @Prop({ required: true })
    colnam: string;

    @Field(() => String)
    @Prop()
    colval: string;

    @Field(() => Date)
    @Prop()
    ins_dt: Date;

    @Field(() => Date)
    @Prop()
    last_upd_dt: Date;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'User' })
    ins_user_id: Types.ObjectId;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'User' })
    last_upd_user_id: Types.ObjectId;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type AllocSearchDtlDocument = AllocSearchDtl & Document;
export const AllocSearchDtlSchema = SchemaFactory.createForClass(AllocSearchDtl);