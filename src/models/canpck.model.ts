import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('Canpck')
@Schema({ collection: 'canpck' })
export class Canpck {
    @Field(() => ID)
    _id: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    cangrp: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    wrkref: string;

    @Field(() => String)
    @Prop()
    wrktyp: string;

    @Field(() => String)
    @Prop()
    wrkref_dtl: string;

    @Field(() => String)
    @Prop()
    wcs_can_pcksts: string;

    @Field(() => Number)
    @Prop()
    ordlin: number;

    @Field(() => String)
    @Prop()
    ordnum: string;

    @Field(() => Number)
    @Prop()
    ship_line_id: number;

    @Field(() => String)
    @Prop()
    prtnum: string;

    @Field(() => Types.ObjectId) // Assuming this references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client' })
    prt_client_id: Types.ObjectId;

    @Field(() => String)
    @Prop()
    lotnum: string;

    @Field(() => String)
    @Prop()
    supnum: string;

    @Field(() => Date, { nullable: true })
    @Prop()
    wcs_can_req_dt?: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    wcs_can_conf_dt?: Date;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CanpckDocument = Canpck & Document;
export const CanpckSchema = SchemaFactory.createForClass(Canpck);