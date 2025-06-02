import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('BulbServAreLine')
@Schema({ collection: 'bulb_serv_are_line' })
export class BulbServAreLine {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    ordnum: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    invnum: string;

    @Field(() => Types.ObjectId) // Assuming client_id references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client', required: true })
    client_id: Types.ObjectId;

    @Field(() => Number)
    @Prop()
    ordlin: number;

    @Field(() => String)
    @Prop()
    prtnum: string;

    @Field(() => Types.ObjectId) // Assuming prt_client_id references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client' })
    prt_client_id: Types.ObjectId;

    @Field(() => Number)
    @Prop()
    untqty: number;

    @Field(() => String)
    @Prop()
    invsts: string;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type BulbServAreLineDocument = BulbServAreLine & Document;
export const BulbServAreLineSchema = SchemaFactory.createForClass(BulbServAreLine);