import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('Client')
@Schema({ collection: 'client' })
export class Client {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId)
    @Prop({ required: true, unique: true })
    client_id: Types.ObjectId;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'Adrmst' })
    adr_id: Types.ObjectId;

    @Field(() => String)
    @Prop()
    bt_locale_id: string;

    @Field(() => Boolean)
    @Prop({ default: false })
    iso_cmcy_flg: boolean;

    @Field(() => String)
    @Prop()
    sto_bing_typ: string;

    @Field(() => Number)
    @Prop()
    free_days: number;

    @Field(() => String)
    @Prop()
    split_stg_cod: string;

    @Field(() => Boolean)
    @Prop({ default: false })
    lot_anniv_flg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    sts_ovr_flg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    auto_add_serv: boolean;

    @Field(() => Number) // Adjust data type if necessary
    @Prop()
    lot_fmt_id: number;

    @Field(() => String)
    @Prop()
    grp_nam: string;


    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type ClientDocument = Client & Document;
export const ClientSchema = SchemaFactory.createForClass(Client);