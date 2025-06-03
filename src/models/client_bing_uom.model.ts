import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('ClientBingUom')
@Schema({ collection: 'client_bing_uom' })
export class ClientBingUom {
    @Field(() => ID)
    _id: string;

    @Field(() => String) // Adjust data type if necessary.
    @Prop({ required: true, unique: true })
    bing_uom_cod: string;

    // Add other fields from client_bing_uom table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type ClientBingUomDocument = ClientBingUom & Document;
export const ClientBingUomSchema = SchemaFactory.createForClass(ClientBingUom);