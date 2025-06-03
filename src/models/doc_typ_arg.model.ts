import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('DocTypArg')
@Schema({ collection: 'doc_typ_arg' })
export class DocTypArg {
    @Field(() => ID)
    _id: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    doc_typ: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    doc_typ_arg: string;

    @Field(() => Boolean)
    @Prop({ default: false })
    rqdflg: boolean;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DocTypArgDocument = DocTypArg & Document;
export const DocTypArgSchema = SchemaFactory.createForClass(DocTypArg);