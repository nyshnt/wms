import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('DdaMst')
@Schema({ collection: 'dda_mst' })
export class DdaMst {
    @Field(() => ID)
    _id: string;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true })
    dda_id: number;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    cust_lvl: string;

    @Field(() => String)
    @Prop()
    dda_typ: string;

    @Field(() => String)
    @Prop()
    dda_usage: string;

    @Field(() => Boolean)
    @Prop({ default: false })
    topflg: boolean;

    @Field(() => String)
    @Prop()
    dda_cmd: string;

    @Field(() => String)
    @Prop()
    dda_qual: string;

    @Field(() => String)
    @Prop()
    dda_init_qual: string;

    @Field(() => String)
    @Prop()
    dda_frm: string;

    @Field(() => String)
    @Prop()
    dda_img: string;

    @Field(() => String)
    @Prop()
    init_cmd: string;

    @Field(() => Boolean)
    @Prop({ default: false })
    rqdflg: boolean;

    @Field(() => String)
    @Prop()
    grp_nam: string;

    @Field(() => String)
    @Prop()
    sum_flds: string;

    @Field(() => Boolean)
    @Prop({ default: false })
    excelfig: boolean;

    @Field(() => String)
    @Prop()
    exceltmpl: string;

    @Field(() => String)
    @Prop()
    reference: string;

    @Field(() => String)
    @Prop()
    tnw_typ: string;

    @Field(() => String)
    @Prop()
    grid_pos: string;

    @Field(() => Boolean)
    @Prop({ default: false })
    publish_data_flg: boolean;

    @Field(() => String)
    @Prop()
    prof_crit_mode: string;

    @Field(() => Boolean)
    @Prop({ default: false })
    auto_find: boolean;


    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DdaMstDocument = DdaMst & Document;
export const DdaMstSchema = SchemaFactory.createForClass(DdaMst);