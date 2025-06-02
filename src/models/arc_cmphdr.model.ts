import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('ArcCmpHdr')
@Schema({ collection: 'arc_cmphdr' })
export class ArcCmpHdr {
    @Field(() => ID)
    _id: string;

    @Field(() => String)
    @Prop({ required: true })
    cmpkey: string;

    @Field(() => Date)
    @Prop({ required: true })
    adddte: Date;

    // Add other fields from arc_cmphdr here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type ArcCmpHdrDocument = ArcCmpHdr & Document;
export const ArcCmpHdrSchema = SchemaFactory.createForClass(ArcCmpHdr);