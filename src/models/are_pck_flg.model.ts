import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('ArePckFlg')
@Schema({ collection: 'are_pck_flg' })
export class ArePckFlg {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String)
    @Prop({ required: true })
    srcare: string;

    @Field(() => String)
    @Prop({ required: true })
    lodivl: string;

    @Field(() => String)
    @Prop({ required: true })
    wrktyp: string;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    @Field(() => Boolean)
    @Prop({ default: false })
    lotflg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    sup_lot_flg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    revflg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    orgfig: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    supflg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    dtifig: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    subflg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    lodfig: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    prtflg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    locfig: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    qtyflg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    catch_qty_flg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    mandte_flg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    expdte_flg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    rttn_id_flg: boolean;

    @Field(() => Types.ObjectId) // Assuming this references a User collection
    @Prop({ type: Types.ObjectId, ref: 'User' })
    mod_usr_id: Types.ObjectId;

    @Field(() => Number)
    @Prop()
    u_version: number;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type ArePckFlgDocument = ArePckFlg & Document;
export const ArePckFlgSchema = SchemaFactory.createForClass(ArePckFlg);