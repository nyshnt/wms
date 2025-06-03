import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('Cnthdr')
@Schema({ collection: 'cnthdr' })
export class Cnthdr {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true, unique: true })
    cntbat: string;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'Warehouse' })
    wh_id: Types.ObjectId;

    @Field(() => Date)
    @Prop()
    adddte: Date;

    @Field(() => [String]) // Array of strings for invid1...invid5
    @Prop()
    invids: string[];

    @Field(() => [String]) // Array of strings for inval1...inval5
    @Prop()
    invals: string[];

    @Field(() => [Boolean]) // Array of booleans for id1flg...id5flg
    @Prop({ type: [Boolean], default: [false,false,false,false,false] })
    idflags: boolean[];

    @Field(() => Number)
    @Prop({ type: Number, ref: 'Cntsch' })
    seqnum: number;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CnthdrDocument = Cnthdr & Document;
export const CnthdrSchema = SchemaFactory.createForClass(Cnthdr);