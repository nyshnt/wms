import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('Cnthst')
@Schema({ collection: 'cnthst' })
export class Cnthst {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'Warehouse' })
    wh_id: Types.ObjectId;

    @Field(() => String) // Adjust data type if needed
    @Prop({ required: true })
    cntbat: string;

    @Field(() => Date)
    @Prop()
    cntdte: Date;

    @Field(() => [String]) // Array to store invid1...invid5
    @Prop()
    invids: string[];

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CnthstDocument = Cnthst & Document;
export const CnthstSchema = SchemaFactory.createForClass(Cnthst);