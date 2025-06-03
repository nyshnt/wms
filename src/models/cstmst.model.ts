import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('Cstmst')
@Schema({ collection: 'cstmst' })
export class Cstmst {
    @Field(() => ID)
    _id: string;

    @Field(() => String) // Adjust data type if necessary.
    @Prop({ required: true, unique: true })
    cstnum: string;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'Client' })
    client_id: Types.ObjectId;

    // Add other fields from cstmst table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CstmstDocument = Cstmst & Document;
export const CstmstSchema = SchemaFactory.createForClass(Cstmst);