import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('CmcyConvRate')
@Schema({ collection: 'cmcy_conv_rate' })
export class CmcyConvRate {
    @Field(() => ID)
    _id: string;

    @Field(() => String) // Adjust data type if necessary.
    @Prop({ required: true })
    crncy_code: string;

    @Field(() => Date)
    @Prop({ required: true })
    effectivedate: Date;

    @Field(() => Number)
    @Prop()
    conv_rate: number;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CmcyConvRateDocument = CmcyConvRate & Document;
export const CmcyConvRateSchema = SchemaFactory.createForClass(CmcyConvRate);