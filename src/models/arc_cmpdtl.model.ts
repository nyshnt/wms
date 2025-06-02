import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('ArcCmpDtl')
@Schema({ collection: 'arc_cmpdtl' })
export class ArcCmpDtl {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String)
    @Prop({ required: true })
    cmpkey: string;

    @Field(() => Date)
    @Prop({ required: true })
    adddte: Date;

    @Field(() => String)
    @Prop({ required: true })
    prtnum: string;

    @Field(() => Types.ObjectId) // Assuming this references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client', required: true })
    prt_client_id: Types.ObjectId;

    @Field(() => String)
    @Prop({ required: true })
    lotnum: string;

    @Field(() => Number) // Adjust data type if needed
    @Prop({ required: true })
    revlvl: number;

    @Field(() => String)
    @Prop({ required: true })
    orgcod: string;

    @Field(() => Number) // Adjust data type if needed
    @Prop({ required: true })
    subnum: number;

    @Field(() => Number) // Adjust data type if needed
    @Prop({ required: true })
    dtinum: number;

    @Field(() => String)
    @Prop({ required: true })
    invsts: string;

    @Field(() => Types.ObjectId) // Assuming this references a Warehouse collection
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type ArcCmpDtlDocument = ArcCmpDtl & Document;
export const ArcCmpDtlSchema = SchemaFactory.createForClass(ArcCmpDtl);