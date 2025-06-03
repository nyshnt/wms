import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('DashTabs')
@Schema({ collection: 'dash_tabs' })
export class DashTabs {
    @Field(() => ID)
    _id: string;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true, unique: true })
    tab_id: number;

    @Field(() => Boolean)
    @Prop({ default: false })
    template_flg: boolean;

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

export type DashTabsDocument = DashTabs & Document;
export const DashTabsSchema = SchemaFactory.createForClass(DashTabs);