import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('CstWhSchedule')
@Schema({ collection: 'cst_wh_schedule' })
export class CstWhSchedule {
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

    @Field(() => Number)  // Adjust data type if necessary
    @Prop({ required: true })
    car_move_id: number;

    @Field(() => String)  // Adjust data type if necessary
    @Prop({ required: true })
    begdaycod: string;

    @Field(() => Date)
    @Prop({ required: true })
    begtim: Date;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    enddaycod: string;

    @Field(() => Date)
    @Prop({ required: true })
    endtim: Date;

    // Add other fields from cst_wh_schedule table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CstWhScheduleDocument = CstWhSchedule & Document;
export const CstWhScheduleSchema = SchemaFactory.createForClass(CstWhSchedule);