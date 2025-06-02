import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('BingCycTyp')
@Schema({ collection: 'bing_cyc_typ' })
export class BingCycTyp {
    @Field(() => ID)
    _id: string;

    @Field(() => String) // Adjust data type if bing_cyc_typ is not a string
    @Prop({ required: true, unique: true })
    bing_cyc_typ: string;

    @Field(() => Number)
    @Prop()
    num_dif: number;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type BingCycTypDocument = BingCycTyp & Document;
export const BingCycTypSchema = SchemaFactory.createForClass(BingCycTyp);