import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('Ctnmst')
@Schema({ collection: 'ctnmst' })
export class Ctnmst {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    ctncod: string;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    @Field(() => Number)
    @Prop()
    ctnlen: number;

    @Field(() => Number)
    @Prop()
    ctnwid: number;

    @Field(() => Number)
    @Prop()
    ctnhgt: number;

    @Field(() => Number)
    @Prop()
    ctnwgt: number;

    @Field(() => Number)
    @Prop()
    ctnwlm: number;

    @Field(() => Number)
    @Prop()
    ctnfpc: number;

    @Field(() => Number)
    @Prop()
    last_ctn_fpc: number;

    @Field(() => Boolean)
    @Prop({ default: false })
    pko_flg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    pre_prnt_lbl_flg: boolean;

    @Field(() => String)
    @Prop()
    shofla: string;


    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CtnmstDocument = Ctnmst & Document;
export const CtnmstSchema = SchemaFactory.createForClass(Ctnmst);