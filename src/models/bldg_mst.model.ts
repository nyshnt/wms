import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('BldgMst')
@Schema({ collection: 'bldg_mst' })
export class BldgMst {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Number)  // Adjust data type if necessary
    @Prop({ required: true })
    bldg_id: number;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    // Add other building fields here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type BldgMstDocument = BldgMst & Document;
export const BldgMstSchema = SchemaFactory.createForClass(BldgMst);