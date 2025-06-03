import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('DistroTyp')
@Schema({ collection: 'distro_typ' })
export class DistroTyp {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true, unique: true })
    distro_typ: string;

    @Field(() => String)
    @Prop({ type: String, ref: 'RuleSetCmd' })
    distro_rule_set: string;

    @Field(() => String)
    @Prop({ type: String, ref: 'RuleSetCmd' })
    overage_rule_set: string;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DistroTypDocument = DistroTyp & Document;
export const DistroTypSchema = SchemaFactory.createForClass(DistroTyp);