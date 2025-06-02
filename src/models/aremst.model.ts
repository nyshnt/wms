import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('AreMst')
@Schema({ collection: 'aremst' })
export class AreMst {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String)
    @Prop({ required: true })
    arecod: string;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection.
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'BldgMst' })
    bldg_id: Types.ObjectId;

    @Field(() => Boolean)
    @Prop({ default: false })
    shp_dck_flg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    rcv_dck_flg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    rcvwo_non_fwiflg: boolean;

    @Field(() => String)
    @Prop()
    def_rcv_invsts: string;

    @Field(() => Boolean)
    @Prop({ default: false })
    err_loc_invsts_flg: boolean;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type AreMstDocument = AreMst & Document;
export const AreMstSchema = SchemaFactory.createForClass(AreMst);