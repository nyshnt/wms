import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('AssetTyp')
@Schema({ collection: 'asset_typ' })
export class AssetTyp {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String)
    @Prop({ required: true })
    asset_typ: string;

    @Field(() => Number)  // Adjust data type if necessary.
    @Prop({ required: true })
    feature_id: number;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection.
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    @Field(() => String)
    @Prop()
    asset_cat: string;

    @Field(() => Boolean)
    @Prop({ default: false })
    ser_flg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    temp_flg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    container_flg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    lst_pck_asset_flg: boolean;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type AssetTypDocument = AssetTyp & Document;
export const AssetTypSchema = SchemaFactory.createForClass(AssetTyp);