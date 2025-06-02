import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('BingInvcDtl')
@Schema({ collection: 'bing_invc_dtl' })
export class BingInvcDtl {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    bing_invc_num: string;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true })
    bing_invc_dtl: number;

    @Field(() => Types.ObjectId) // Assuming this references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client' })
    client_id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if necessary
    @Prop()
    bing_prd_id: number;

    @Field(() => Number)
    @Prop()
    ordsin: number;

    @Field(() => Number)
    @Prop()
    ordlin: number;

    @Field(() => Types.ObjectId) // Assuming this references a Warehouse collection
    @Prop({ type: Types.ObjectId, ref: 'Warehouse' })
    wh_id: Types.ObjectId;

    @Field(() => Number)
    @Prop()
    ship_line_id: number;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type BingInvcDtlDocument = BingInvcDtl & Document;
export const BingInvcDtlSchema = SchemaFactory.createForClass(BingInvcDtl);