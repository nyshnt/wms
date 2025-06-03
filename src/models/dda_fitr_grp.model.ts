import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('DdaFitrGrp')
@Schema({ collection: 'dda_fitr_grp' })
export class DdaFitrGrp {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    fitr_grp: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    cust_lvl: string;

    @Field(() => Number)
    @Prop()
    srtseq: number;

    @Field(() => String)
    @Prop()
    grp_typ: string;

    @Field(() => String)
    @Prop()
    par_grp: string;

    @Field(() => String)
    @Prop()
    attach_grp: string;

    @Field(() => String)
    @Prop()
    attach_loc: string;

    @Field(() => Number)
    @Prop()
    attach_offset: number;

    @Field(() => String)
    @Prop()
    grp_nam: string;

    @Field(() => Date)
    @Prop()
    moddte: Date;

    @Field(() => Types.ObjectId) // Assuming this references a User collection
    @Prop({ type: Types.ObjectId, ref: 'User' })
    mod_usr_id: Types.ObjectId;


    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DdaFitrGrpDocument = DdaFitrGrp & Document;
export const DdaFitrGrpSchema = SchemaFactory.createForClass(DdaFitrGrp);