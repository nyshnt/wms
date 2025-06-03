import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('DocRuleLvl')
@Schema({ collection: 'doc_rule_lvl' })
export class DocRuleLvl {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    doc_typ: string;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true })
    seqnum: number;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    colval: string;

    @Field(() => Boolean)
    @Prop({ required: true })
    par_uom_flg: boolean;

    @Field(() => Date)
    @Prop()
    ins_dt: Date;

    @Field(() => Date)
    @Prop()
    last_upd_dt: Date;

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

export type DocRuleLvlDocument = DocRuleLvl & Document;
export const DocRuleLvlSchema = SchemaFactory.createForClass(DocRuleLvl);