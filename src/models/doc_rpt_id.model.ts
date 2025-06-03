import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('DocRptId')
@Schema({ collection: 'doc_rpt_id' })
export class DocRptId {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String)  // Adjust data type if necessary
    @Prop({ required: true })
    doc_typ: string;

    @Field(() => String)  // Adjust data type if necessary
    @Prop({ required: true })
    rpt_id: string;

    // Add other fields from doc_rpt_id table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DocRptIdDocument = DocRptId & Document;
export const DocRptIdSchema = SchemaFactory.createForClass(DocRptId);