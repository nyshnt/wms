import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('Cntwrk')
@Schema({ collection: 'cntwrk' })
export class Cntwrk {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    cntbat: string;

    @Field(() => Types.ObjectId) // Assuming this references a Warehouse collection.
    @Prop({ type: Types.ObjectId, ref: 'Warehouse' })
    wh_id: Types.ObjectId;

    @Field(() => String)
    @Prop()
    stoloc: string;

    @Field(() => String)
    @Prop({ type: String, ref: 'Cnttyp' })
    cnttyp: string;

    @Field(() => String)
    @Prop()
    prtnum: string;

    @Field(() => Types.ObjectId) // Assuming this references a Client collection.
    @Prop({ type: Types.ObjectId, ref: 'Client' })
    prt_client_id: Types.ObjectId;

    @Field(() => [String]) // Array to store inval1...inval5
    @Prop()
    invals: string[];

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CntwrkDocument = Cntwrk & Document;
export const CntwrkSchema = SchemaFactory.createForClass(Cntwrk);