import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('BingInvc')
@Schema({ collection: 'bing_invc' })
export class BingInvc {
    @Field(() => ID)
    _id: string;

    @Field(() => String) // Adjust data type if bing_invc_num is not a string
    @Prop({ required: true, unique: true })
    bing_invc_num: string;

    // Add other fields from the bing_invc table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type BingInvcDocument = BingInvc & Document;
export const BingInvcSchema = SchemaFactory.createForClass(BingInvc);