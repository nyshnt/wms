import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('DashTabAssign')
@Schema({ collection: 'dash_tab_assign' })
export class DashTabAssign {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true })
    ath_id: number;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    ath_typ: string;

    @Field(() => Types.ObjectId) // Assuming tab_id references a Tab collection
    @Prop({ type: Types.ObjectId, ref: 'Tab', required: true })
    tab_id: Types.ObjectId;

    @Field(() => Number)
    @Prop()
    srtseq: number;


    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DashTabAssignDocument = DashTabAssign & Document;
export const DashTabAssignSchema = SchemaFactory.createForClass(DashTabAssign);