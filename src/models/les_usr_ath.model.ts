import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('LesUsrAth')
@Schema()
export class LesUsrAth {
    @Field(() => ID)
    _id: Types.ObjectId; // usr_id is now the primary key and _id in MongoDB

    @Field(() => String)
    @Prop({ required: true })
    login_pswd: string;

    @Field(() => Types.ObjectId) // Assuming this references another collection. Adjust if needed.
    @Prop({ type: Types.ObjectId, ref: 'Locale' }) // Example.  Create a 'Locale' schema.
    locale_id: Types.ObjectId;

    @Field(() => Boolean)
    @Prop({ default: false })
    usr_sts: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    super_usr_flg: boolean;

    @Field(() => Date)
    @Prop()
    acct_expir_dat: Date;

    @Field(() => Date)
    @Prop()
    pswd_chg_dat: Date;

    @Field(() => Boolean)
    @Prop({ default: false })
    pswd_chg_flg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    pswd_expir_flg: boolean;

    @Field(() => Types.ObjectId) // Check if this is a reference. Adjust if needed.
    @Prop({ type: Types.ObjectId, ref: 'Address'}) // Example. Create an 'Address' schema.
    adr_id: Types.ObjectId;


    @Field(() => Types.ObjectId) // Check if this is a reference. Adjust if needed.
    @Prop({ type: Types.ObjectId, ref: 'Client' }) // Example. Create a 'Client' schema.
    client_id: Types.ObjectId;


    @Field(() => Date)
    @Prop()
    lmsdtc: Date;

    @Field(() => Date)
    @Prop()
    lst_dat: Date;

    @Field(() => Date)
    @Prop()
    lst_logout_dte: Date;

    @Field(() => Number)
    @Prop()
    intruder_cnt: number;

    @Field(() => Boolean)
    @Prop({ default: false })
    single_signon_flg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    ext_ath_flg: boolean;

    @Field(() => String)
    @Prop()
    moddte: string;

    @Field(() => Types.ObjectId) // Check if this is a reference. Adjust if needed.
    @Prop({ type: Types.ObjectId, ref: 'User' }) // Example.  If this refers to another user.
    mod_usr_id: Types.ObjectId;

    @Field(() => Number)
    @Prop()
    pin_num: number;

    @Field(() => Boolean)
    @Prop({ default: false })
    incentive_flg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    differential_flg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    unmeasured_flg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    payroll_flg: boolean;

    @Field(() => String)
    @Prop()
    ath_grp_nam: string;

    @Field(() => String)
    @Prop()
    cntbck_ena_cod: string;

    @Field(() => String)
    @Prop()
    adj_thr_cst: string;

    @Field(() => String)
    @Prop()
    adj_thr_unit: string;

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

export type LesUsrAthDocument = LesUsrAth & Document;
export const LesUsrAthSchema = SchemaFactory.createForClass(LesUsrAth);