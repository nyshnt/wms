import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('AltPrtmst')
@Schema({ collection: 'alt_prtmst' })
export class AltPrtmst {
    @Field(() => ID)
    _id: string;

    @Field(() => String)
    @Prop({ required: true })
    prtnum: string;

    @Field(() => Types.ObjectId) // Assuming prt_client_id references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client', required: true })
    prt_client_id: Types.ObjectId;

    @Field(() => String)
    @Prop({ required: true })
    alt_prt_typ: string;

    @Field(() => String)
    @Prop()
    alt_prt_num: string;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type AltPrtmstDocument = AltPrtmst & Document;
export const AltPrtmstSchema = SchemaFactory.createForClass(AltPrtmst);