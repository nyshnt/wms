import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('LesUsrFav')
@Schema({ collection: 'les_usr_fav' })
export class LesUsrFav {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    usr_id: Types.ObjectId;

    @Field(() => String)
    @Prop({ required: true })
    opt_nam: string; //  Assuming this is a string representing an option name

    @Field(() => Number)
    @Prop()
    mnu_seq: number;

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

export type LesUsrFavDocument = LesUsrFav & Document;
export const LesUsrFavSchema = SchemaFactory.createForClass(LesUsrFav);