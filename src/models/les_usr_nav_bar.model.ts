import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('LesUsrNavBar')
@Schema({ collection: 'les_usr_nav_bar' })
export class LesUsrNavBar {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    usr_id: Types.ObjectId;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'NavBar', required: true })
    nav_bar_id: Types.ObjectId;

    @Field(() => Number)
    @Prop()
    nav_bar_seq: number;

    @Field(() => String)
    @Prop()
    grp_nam: string;

    @Field(() => String)
    @Prop()
    mnu_grp: string;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type LesUsrNavBarDocument = LesUsrNavBar & Document;
export const LesUsrNavBarSchema = SchemaFactory.createForClass(LesUsrNavBar);