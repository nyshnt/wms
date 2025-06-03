import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('Cnttyp')
@Schema({ collection: 'cnttyp' })
export class Cnttyp {
    @Field(() => ID)
    _id: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true, unique: true })
    cnttyp: string;

    @Field(() => String)
    @Prop()
    oprcod: string;

    @Field(() => Boolean)
    @Prop({ default: false })
    dtl_flg: boolean;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CnttypDocument = Cnttyp & Document;
export const CnttypSchema = SchemaFactory.createForClass(Cnttyp);