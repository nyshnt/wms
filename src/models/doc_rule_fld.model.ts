import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('DocRuleFld')
@Schema({ collection: 'doc_rule_fld' })
export class DocRuleFld {
    @Field(() => ID)
    _id: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    doc_typ: string;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true })
    seqnum: number;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    colnam: string;

    @Field(() => String)
    @Prop()
    colval: string;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DocRuleFldDocument = DocRuleFld & Document;
export const DocRuleFldSchema = SchemaFactory.createForClass(DocRuleFld);