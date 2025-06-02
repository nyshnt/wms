import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('AllocSearchGrp')
@Schema({ collection: 'alloc_search_grp' })
export class AllocSearchGrp {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true }) // Assuming wh_id references a Warehouse collection
    wh_id: Types.ObjectId;

    @Field(() => String)
    @Prop({ required: true })
    alloc_grp_nam: string;

    @Field(() => String)
    @Prop()
    alloc_grp_dsc: string;

    @Field(() => Number)
    @Prop()
    alloc_grp_seq: number;

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

export type AllocSearchGrpDocument = AllocSearchGrp & Document;
export const AllocSearchGrpSchema = SchemaFactory.createForClass(AllocSearchGrp);