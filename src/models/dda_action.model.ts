import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('DdaAction')
@Schema({ collection: 'dda_action' })
export class DdaAction {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId) // Assuming dda_id references a Dda collection
    @Prop({ type: Types.ObjectId, ref: 'Dda', required: true })
    dda_id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    action: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    cust_lvl: string;

    @Field(() => String)
    @Prop()
    action_flds: string;

    @Field(() => String)
    @Prop()
    action_frm: string;

    @Field(() => String)
    @Prop()
    img_link: string;

    @Field(() => Boolean)
    @Prop({ default: false })
    ena_flg: boolean;

    @Field(() => String)
    @Prop()
    grp_nam: string;

    @Field(() => Number)
    @Prop()
    srtseq: number;

    @Field(() => String)
    @Prop()
    action_init_cmd: string;

    @Field(() => String)
    @Prop()
    action_post_cmd: string;

    @Field(() => Boolean)
    @Prop({ default: false })
    rqdflg: boolean;

    @Field(() => Number) // Adjust data type if necessary
    @Prop()
    submit_mls_id: number;

    @Field(() => Number) // Adjust data type if necessary
    @Prop()
    post_mls_id: number;

    @Field(() => Boolean)
    @Prop({ default: false })
    auto_clear: boolean;


    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DdaActionDocument = DdaAction & Document;
export const DdaActionSchema = SchemaFactory.createForClass(DdaAction);