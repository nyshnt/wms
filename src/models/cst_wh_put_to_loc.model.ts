import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('CstWhPutToLoc')
@Schema({ collection: 'cst_wh_put_to_loc' })
export class CstWhPutToLoc {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    cstnum: string;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    @Field(() => Types.ObjectId) // Assuming client_id references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client', required: true })
    client_id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true })
    srtseq: number;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    arecod: string;

    // Add other fields from cst_wh_put_to_loc table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CstWhPutToLocDocument = CstWhPutToLoc & Document;
export const CstWhPutToLocSchema = SchemaFactory.createForClass(CstWhPutToLoc);