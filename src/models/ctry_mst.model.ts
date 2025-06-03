import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('CtryMst')
@Schema({ collection: 'ctry_mst' })
export class CtryMst {
    @Field(() => ID)
    _id: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true, unique: true })
    ctry_name: string;

    @Field(() => String)
    @Prop()
    iso_2_ctry_name: string;

    @Field(() => String)
    @Prop()
    iso_3_ctry_name: string;

    @Field(() => String)
    @Prop()
    iso_ctry_num: string;

    @Field(() => String)
    @Prop()
    adr_fmt: string;

    @Field(() => String)
    @Prop()
    dom_id_acc_cd: string;

    @Field(() => String)
    @Prop()
    intl_acc_cd: string;

    @Field(() => String)
    @Prop()
    ctry_phone_cd: string;

    @Field(() => String)
    @Prop()
    cs_ctry_name: string;

    @Field(() => String)
    @Prop()
    ora_lang: string;

    @Field(() => String)
    @Prop()
    ora_terr: string;

    @Field(() => Number)
    @Prop()
    zip_cod_len: number;

    @Field(() => String)
    @Prop()
    win_cli_lclid: string;

    @Field(() => String)
    @Prop()
    win_srv_lclid: string;

    @Field(() => String)
    @Prop()
    unix_srv_locale_nam: string;

    @Field(() => String)
    @Prop()
    rf_locale_nam: string;

    @Field(() => String)
    @Prop({ type: String, ref: 'UomDef' })
    mu_sys: string;

    @Field(() => String)
    @Prop()
    voc_lang_cod: string;

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

export type CtryMstDocument = CtryMst & Document;
export const CtryMstSchema = SchemaFactory.createForClass(CtryMst);