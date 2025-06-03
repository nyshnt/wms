import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('CmpDetails')
@Schema({ collection: 'cmp_details' })
export class CmpDetails {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String)
    @Prop({ required: true })
    prtnum: string;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'Client' })
    prt_client_id: Types.ObjectId;

    @Field(() => String)
    @Prop()
    lotnum: string;

    @Field(() => Number)
    @Prop()
    revlvl: number;

    @Field(() => String)
    @Prop()
    orgcod: string;

    @Field(() => Number)
    @Prop()
    subnum: number;

    @Field(() => Number)
    @Prop()
    dtinum: number;

    @Field(() => String)
    @Prop()
    invsts: string;

    @Field(() => Types.ObjectId) // Refers to Warehouse collection
    @Prop({ type: Types.ObjectId, ref: 'Warehouse' })
    wh_id: Types.ObjectId;


    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'Cmp', required: true })
    cmp_id: Types.ObjectId; //Links back to the main component document

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CmpDetailsDocument = CmpDetails & Document;
export const CmpDetailsSchema = SchemaFactory.createForClass(CmpDetails);