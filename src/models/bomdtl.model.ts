import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('Bomdtl')
@Schema({ collection: 'bomdtl' })
export class Bomdtl {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    bomnum: string;

    @Field(() => Types.ObjectId) // Assuming client_id references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client', required: true })
    client_id: Types.ObjectId;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true })
    bomlin: number;

    @Field(() => String)
    @Prop()
    prcloc: string;

    // Add other fields from bomdtl table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type BomdtlDocument = Bomdtl & Document;
export const BomdtlSchema = SchemaFactory.createForClass(Bomdtl);