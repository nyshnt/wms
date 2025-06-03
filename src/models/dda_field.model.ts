import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('DdaField')
@Schema({ collection: 'dda_field' })
export class DdaField {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId) // Assuming dda_id references a Dda collection
    @Prop({ type: Types.ObjectId, ref: 'Dda', required: true })
    dda_id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    cust_lvl: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    dda_fld_typ: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    var_nam: string;

    @Field(() => Number)
    @Prop()
    srtseq: number;

    @Field(() => Number) // Adjust data type if necessary
    @Prop()
    link_dda_id: number;

    @Field(() => String)
    @Prop()
    link_flds: string;

    @Field(() => Boolean)
    @Prop({ default: false })
    ena_flg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    rqdflg: boolean;

    @Field(() => String)
    @Prop()
    grp_nam: string;

    @Field(() => Boolean)
    @Prop({ default: false })
    dflt_flg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    dspl_only_flg: boolean;

    @Field(() => String)
    @Prop()
    fitr_grp: string;

    @Field(() => String)
    @Prop()
    ctxt_flds: string;

    @Field(() => Boolean)
    @Prop({ default: false })
    pk_fld_flg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    pk_layout_flg: boolean;

    @Field(() => String)
    @Prop()
    aggr_func: string;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DdaFieldDocument = DdaField & Document;
export const DdaFieldSchema = SchemaFactory.createForClass(DdaField);