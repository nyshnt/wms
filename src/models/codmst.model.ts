import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('Codmst')
@Schema({ collection: 'codmst' })
export class Codmst {
    @Field(() => ID)
    _id: string;

    @Field(() => String)
    @Prop({ required: true })
    colnam: string;

    @Field(() => String)
    @Prop({ required: true })
    codval: string;

    @Field(() => String)
    @Prop({ required: true })
    colval: string;

    @Field(() => Number)
    @Prop()
    srtseq: number;

    @Field(() => Boolean)
    @Prop({ default: false })
    radflg: boolean;

    @Field(() => Number) // Adjust data type if necessary
    @Prop()
    img_id: number;

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

export type CodmstDocument = Codmst & Document;
export const CodmstSchema = SchemaFactory.createForClass(Codmst);