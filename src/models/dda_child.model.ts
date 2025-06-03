import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('DdaChild')
@Schema({ collection: 'dda_child' })
export class DdaChild {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId) // Assuming dda_id references a Dda collection
    @Prop({ type: Types.ObjectId, ref: 'Dda', required: true })
    dda_id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    dda_typ: string;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true })
    dda_child_id: number;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    dda_child_typ: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    cust_lvl: string;

    @Field(() => String)
    @Prop()
    child_flds: string;

    @Field(() => Number)
    @Prop()
    srtseq: number;

    @Field(() => Boolean)
    @Prop({ default: false })
    ena_flg: boolean;

    @Field(() => Boolean)
    @Prop({ default: false })
    init_vis_flg: boolean;

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

export type DdaChildDocument = DdaChild & Document;
export const DdaChildSchema = SchemaFactory.createForClass(DdaChild);