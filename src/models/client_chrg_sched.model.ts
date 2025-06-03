import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('ClientChrgSched')
@Schema({ collection: 'client_chrg_sched' })
export class ClientChrgSched {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary.
    @Prop({ required: true, unique: true })
    chrg_key: string;

    @Field(() => String)
    @Prop()
    bing_serv_typ: string;

    @Field(() => String)
    @Prop()
    bing_uom_cod: string;

    @Field(() => Types.ObjectId) // Assuming this references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client' })
    client_id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if necessary.
    @Prop()
    bing_prd_id: number;

    @Field(() => String)
    @Prop()
    prtnum: string;

    @Field(() => Types.ObjectId) // Assuming this references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client' })
    prt_client_id: Types.ObjectId;

    @Field(() => String)
    @Prop()
    prtfam: string;

    @Field(() => Number)
    @Prop()
    bing_rate: number;

    @Field(() => Number)
    @Prop()
    min_chrg: number;

    @Field(() => Number)
    @Prop()
    max_chrg: number;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type ClientChrgSchedDocument = ClientChrgSched & Document;
export const ClientChrgSchedSchema = SchemaFactory.createForClass(ClientChrgSched);