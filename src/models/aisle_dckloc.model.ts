import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('AisleDckloc')
@Schema({ collection: 'aisle_dckloc' })
export class AisleDckloc {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if needed.
    @Prop({ required: true })
    aisle_dckloc_id: number;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection.
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if needed.
    @Prop()
    aisle_id: number;

    @Field(() => String)
    @Prop()
    dckloc: string;

    @Field(() => String)
    @Prop()
    stgloc: string;

    @Field(() => Number) // Adjust data type if needed.
    @Prop()
    bldg_id: number;

    @Field(() => String)
    @Prop()
    dckmode: string;

    @Field(() => Number)
    @Prop()
    seqnum_primary: number;

    @Field(() => Number)
    @Prop()
    seqnum_secondary: number;


    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type AisleDcklocDocument = AisleDckloc & Document;
export const AisleDcklocSchema = SchemaFactory.createForClass(AisleDckloc);