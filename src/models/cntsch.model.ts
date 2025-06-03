import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('Cntsch')
@Schema({ collection: 'cntsch' })
export class Cntsch {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true, unique: true })
    seqnum: number;

    @Field(() => Number) // Adjust data type if necessary
    @Prop()
    cnt_id: number;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection
    @Prop({ type: Types.ObjectId, ref: 'Warehouse' })
    wh_id: Types.ObjectId;

    @Field(() => String)
    @Prop()
    prtnum: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop()
    cntbat: string;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CntschDocument = Cntsch & Document;
export const CntschSchema = SchemaFactory.createForClass(Cntsch);