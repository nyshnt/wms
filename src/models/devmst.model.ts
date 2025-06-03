import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('Devmst')
@Schema({ collection: 'devmst' })
export class Devmst {
    @Field(() => ID)
    _id: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true, unique: true })
    devcod: string;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection.
    @Prop({ type: Types.ObjectId, ref: 'Warehouse' })
    wh_id: Types.ObjectId;

    @Field(() => String)
    @Prop()
    devcis: string;

    @Field(() => String)
    @Prop()
    devnam: string;


    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DevmstDocument = Devmst & Document;
export const DevmstSchema = SchemaFactory.createForClass(Devmst);