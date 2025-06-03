import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('ClientBingServTyp')
@Schema({ collection: 'client_bing_serv_typ' })
export class ClientBingServTyp {
    @Field(() => ID)
    _id: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true, unique: true })
    bing_serv_typ: string;

    @Field(() => String)
    @Prop()
    bing_chrg_typ: string;

    // Add other fields from client_bing_serv_typ table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type ClientBingServTypDocument = ClientBingServTyp & Document;
export const ClientBingServTypSchema = SchemaFactory.createForClass(ClientBingServTyp);