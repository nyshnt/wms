import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('DocLblfmt')
@Schema({ collection: 'doc_lblfmt' })
export class DocLblfmt {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    doc_typ: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    lblfmt: string;

    // Add other fields from doc_lblfmt table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DocLblfmtDocument = DocLblfmt & Document;
export const DocLblfmtSchema = SchemaFactory.createForClass(DocLblfmt);