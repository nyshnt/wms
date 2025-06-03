import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('DashTabModConfig')
@Schema({ collection: 'dash_tab_mod_config' })
export class DashTabModConfig {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true, unique: true })
    mod_config_id: number;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'DashModDef' })
    module_id: Types.ObjectId;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'DashTabs' })
    tab_id: Types.ObjectId;

    @Field(() => Number)
    @Prop()
    srtseq: number;

    @Field(() => String)
    @Prop()
    dda_qual: string;

    @Field(() => Number)
    @Prop()
    refresh_sec: number;

    @Field(() => String)
    @Prop()
    description: string;

    @Field(() => Date)
    @Prop()
    ctrl_dt: Date;

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

export type DashTabModConfigDocument = DashTabModConfig & Document;
export const DashTabModConfigSchema = SchemaFactory.createForClass(DashTabModConfig);