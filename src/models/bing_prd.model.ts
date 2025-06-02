import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('BingPrd')
@Schema({ collection: 'bing_prd' })
export class BingPrd {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId) // Assuming client_id references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client', required: true })
    client_id: Types.ObjectId;

    @Field(() => Number) // Adjust the type if necessary.
    @Prop({ required: true })
    bing_prd_id: number;

    @Field(() => String)
    @Prop({ type: String, ref: 'BingCycTyp' })
    bing_cyc_typ: string;

    // Add other fields from the bing_prd table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type BingPrdDocument = BingPrd & Document;
export const BingPrdSchema = SchemaFactory.createForClass(BingPrd);