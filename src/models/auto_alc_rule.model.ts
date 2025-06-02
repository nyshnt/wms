import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('AutoAlcRule')
@Schema({ collection: 'auto_alc_rule' })
export class AutoAlcRule {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary.
    @Prop({ required: true })
    auto_alc_num: string;

    @Field(() => String)
    @Prop()
    auto_alc_mtd: string;

    @Field(() => String)
    @Prop()
    rule_type: string;

    @Field(() => Number)
    @Prop()
    time_in_mins: number;

    @Field(() => String)
    @Prop()
    date_type: string;

    @Field(() => Boolean)
    @Prop({ default: false })
    ena_flg: boolean;

    @Field(() => Date)
    @Prop()
    ins_dt: Date;

    @Field(() => Date)
    @Prop()
    las_upd_dt: Date;

    @Field(() => Types.ObjectId) // Assuming this references a User collection
    @Prop({ type: Types.ObjectId, ref: 'User' })
    ins_user_id: Types.ObjectId;

    @Field(() => Types.ObjectId) // Assuming this references a User collection
    @Prop({ type: Types.ObjectId, ref: 'User' })
    last_upd_user_id: Types.ObjectId;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type AutoAlcRuleDocument = AutoAlcRule & Document;
export const AutoAlcRuleSchema = SchemaFactory.createForClass(AutoAlcRule);