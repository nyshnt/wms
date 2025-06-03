import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('CtyPsz')
@Schema({ collection: 'cty_psz' })
export class CtyPsz {
    @Field(() => ID)
    _id: string;

    @Field(() => String)
    @Prop({ required: true })
    ctry_name: string;

    @Field(() => String)
    @Prop({ required: true })
    adrstc: string;

    @Field(() => String)
    @Prop({ required: true })
    adrcty: string;

    @Field(() => String)
    @Prop({ required: true })
    adrpsz: string;

    @Field(() => Number)
    @Prop()
    latitude: number;

    @Field(() => Number)
    @Prop()
    longitude: number;

    @Field(() => Boolean)
    @Prop({ default: false })
    invalid_flg: boolean;

    @Field(() => Date)
    @Prop()
    invalid_dte: Date;

    @Field(() => Number)
    @Prop()
    gmt_offset: number;

    @Field(() => Boolean)
    @Prop({ default: false })
    dst_flg: boolean;

    @Field(() => String)
    @Prop()
    grp_nam: string;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CtyPszDocument = CtyPsz & Document;
export const CtyPszSchema = SchemaFactory.createForClass(CtyPsz);