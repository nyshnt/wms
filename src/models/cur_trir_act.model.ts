import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('CurTrirAct')
@Schema({ collection: 'cur_trir_act' })
export class CurTrirAct {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId)  // Assuming trir_id references a Trir collection.
    @Prop({ type: Types.ObjectId, ref: 'Trir', required: true })
    trir_id: Types.ObjectId;

    @Field(() => Types.ObjectId)  // Assuming usr_id references a User collection.
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    usr_id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    devcod: string;

    @Field(() => Types.ObjectId)  // Assuming wh_id references a Warehouse collection.
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    // Add other fields from cur_trir_act table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CurTrirActDocument = CurTrirAct & Document;
export const CurTrirActSchema = SchemaFactory.createForClass(CurTrirAct);