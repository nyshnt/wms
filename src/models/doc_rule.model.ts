import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('DocRule')
@Schema({ collection: 'doc_rule' })
export class DocRule {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    doc_typ: string;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true })
    seqnum: number;

    @Field(() => String)
    @Prop()
    docfmt: string;

    @Field(() => Number)
    @Prop()
    docqty: number;

    @Field(() => String)
    @Prop()
    exitpnt: string;

    @Field(() => String)
    @Prop()
    devsrc: string;

    @Field(() => String)
    @Prop()
    docgrp: string;

    @Field(() => String)
    @Prop()
    locale_typ: string;

    @Field(() => String)
    @Prop()
    locale_id: string;

    @Field(() => Date)
    @Prop()
    moddte: Date;

    @Field(() => Types.ObjectId) // Assuming mod_usr_id references a User collection
    @Prop({ type: Types.ObjectId, ref: 'User' })
    mod_usr_id: Types.ObjectId;


    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DocRuleDocument = DocRule & Document;
export const DocRuleSchema = SchemaFactory.createForClass(DocRule);