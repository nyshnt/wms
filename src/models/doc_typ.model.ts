import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('DocTyp')
@Schema({ collection: 'doc_typ' })
export class DocTyp {
    @Field(() => ID)
    _id: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true, unique: true })
    doc_typ: string;

    @Field(() => String)
    @Prop()
    doc_typ_cod: string;

    @Field(() => String)
    @Prop()
    def_lodivl: string;

    @Field(() => String)
    @Prop()
    data_cmd: string;

    @Field(() => Number) // Adjust data type if necessary
    @Prop()
    break_lvl: number;

    @Field(() => Boolean)
    @Prop({ default: false })
    bill_flg: boolean;

    @Field(() => String)
    @Prop()
    lvl_colnam: string;

    @Field(() => Date)
    @Prop()
    moddte: Date;

    @Field(() => Types.ObjectId) // Assuming this references a User collection
    @Prop({ type: Types.ObjectId, ref: 'User' })
    mod_usr_id: Types.ObjectId;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DocTypDocument = DocTyp & Document;
export const DocTypSchema = SchemaFactory.createForClass(DocTyp);