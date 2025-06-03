import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('DashModDef')
@Schema({ collection: 'dash_mod_def' })
export class DashModDef {
    @Field(() => ID)
    _id: string;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true, unique: true })
    module_id: number;

    @Field(() => String)
    @Prop()
    module_typ: string;

    @Field(() => Number)
    @Prop()
    module_width: number;

    @Field(() => Number)
    @Prop()
    module_height: number;

    @Field(() => String)
    @Prop()
    description: string;

    @Field(() => String)
    @Prop()
    grp_nam: string;

    @Field(() => Number)
    @Prop()
    refresh_sec: number;

    @Field(() => Number) // Adjust data type if necessary
    @Prop()
    dash_dda_id: number;

    @Field(() => String)
    @Prop()
    dda_qual: string;

    @Field(() => String)
    @Prop()
    opt_nam: string;

    @Field(() => String)
    @Prop()
    ws_wsdl: string;

    @Field(() => String)
    @Prop()
    ws_service: string;

    @Field(() => String)
    @Prop()
    ws_port: string;

    @Field(() => String)
    @Prop()
    ws_wsml: string;

    @Field(() => String)
    @Prop()
    ws_function: string;

    @Field(() => String)
    @Prop()
    custom_subscribe: string;

    @Field(() => String)
    @Prop()
    custom_unsubscribe: string;

    @Field(() => String)
    @Prop()
    moca_connect_str: string;

    @Field(() => Boolean)
    @Prop({ default: false })
    multi_flg: boolean;

    @Field(() => String)
    @Prop()
    session_quals: string;


    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DashModDefDocument = DashModDef & Document;
export const DashModDefSchema = SchemaFactory.createForClass(DashModDef);