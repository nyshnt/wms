import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('Btoaud')
@Schema({ collection: 'btoaud' })
export class Btoaud {
    @Field(() => ID)
    _id: string;

    @Field(() => Number) // Adjust data type if necessary.
    @Prop({ required: true, unique: true })
    btoaud_id: number;

    @Field(() => String)
    @Prop()
    lodnum: string;

    @Field(() => String)
    @Prop()
    btoaud_typ: string;

    @Field(() => String)
    @Prop()
    btoaud_sts: string;

    @Field(() => Date)
    @Prop()
    begtim: Date;

    @Field(() => Date)
    @Prop()
    endtim: Date;

    @Field(() => String)
    @Prop()
    asset_typ: string;

    @Field(() => Number) // Adjust data type if necessary.
    @Prop()
    ship_id: number;


    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type BtoaudDocument = Btoaud & Document;
export const BtoaudSchema = SchemaFactory.createForClass(Btoaud);