import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('Cntzon')
@Schema({ collection: 'cntzon' })
export class Cntzon {
    @Field(() => ID)
    _id: string;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true, unique: true })
    cnt_zone_id: number;

    // Add other fields from cntzon table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CntzonDocument = Cntzon & Document;
export const CntzonSchema = SchemaFactory.createForClass(Cntzon);