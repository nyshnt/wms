import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('CtnSelectCri')
@Schema({ collection: 'ctn_select_cri' })
export class CtnSelectCri {
    @Field(() => ID)
    _id: string;

    @Field(() => Number)  // Adjust data type if necessary
    @Prop({ required: true, unique: true })
    ctn_select_cri_id: number;

    @Field(() => Number)
    @Prop()
    seqnum: number;

    @Field(() => Number) // Adjust data type if necessary
    @Prop()
    who_id: number;

    @Field(() => String)
    @Prop()
    log_opr: string;

    @Field(() => String)
    @Prop()
    table_nam: string;

    @Field(() => String)
    @Prop()
    field_name: string;

    @Field(() => String)
    @Prop()
    operator: string;

    @Field(() => String)
    @Prop()
    value: string;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CtnSelectCriDocument = CtnSelectCri & Document;
export const CtnSelectCriSchema = SchemaFactory.createForClass(CtnSelectCri);