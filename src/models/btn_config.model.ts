import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('BtnConfig')
@Schema({ collection: 'btn_config' })
export class BtnConfig {
    @Field(() => ID)
    _id: string;

    @Field(() => String) // Adjust data type if necessary.
    @Prop({ required: true })
    btn_key: string;

    @Field(() => String) // Adjust data type if necessary.
    @Prop({ required: true })
    cust_lvl: string;

    @Field(() => String)
    @Prop()
    type: string;

    @Field(() => String)
    @Prop()
    style: string;

    @Field(() => String)
    @Prop()
    posn: string;

    @Field(() => String)
    @Prop()
    func: string;

    @Field(() => String)
    @Prop()
    parms: string;

    @Field(() => String)
    @Prop()
    event: string;

    @Field(() => String)
    @Prop()
    pmsns: string;

    @Field(() => Number) // Adjust data type if necessary.
    @Prop()
    caption_id: number;

    @Field(() => Number) // Adjust data type if necessary.
    @Prop()
    img_id: number;

    @Field(() => Number) // Adjust data type if necessary.
    @Prop()
    dis_img_id: number;

    @Field(() => Number) // Adjust data type if necessary.
    @Prop()
    hot_img_id: number;

    @Field(() => Number) // Adjust data type if necessary.
    @Prop()
    ttip_txt_id: number;

    @Field(() => Date)
    @Prop()
    cause_valdt: Date;

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

export type BtnConfigDocument = BtnConfig & Document;
export const BtnConfigSchema = SchemaFactory.createForClass(BtnConfig);