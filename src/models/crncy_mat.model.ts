import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('CrncyMat')
@Schema({ collection: 'crncy_mat' })
export class CrncyMat {
    @Field(() => ID)
    _id: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true, unique: true })
    crncy_code: string;

    @Field(() => String)
    @Prop()
    decimal_point: string;

    @Field(() => String)
    @Prop()
    thousands_sep: string;

    @Field(() => Number)
    @Prop()
    grouping_len: number;

    @Field(() => String)
    @Prop()
    crncy_sym: string;

    @Field(() => String)
    @Prop()
    pos_fmt: string;

    @Field(() => String)
    @Prop()
    neg_fmt: string;

    @Field(() => Number)
    @Prop()
    frac_digits: number;

    @Field(() => Boolean)
    @Prop({ default: false })
    ena_flg: boolean;

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

export type CrncyMatDocument = CrncyMat & Document;
export const CrncyMatSchema = SchemaFactory.createForClass(CrncyMat);