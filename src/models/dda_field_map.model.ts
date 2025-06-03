import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('DdaFieldMap')
@Schema({ collection: 'dda_field_map' })
export class DdaFieldMap {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId) // Assuming dda_id references a Dda collection
    @Prop({ type: Types.ObjectId, ref: 'Dda', required: true })
    dda_id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    cust_lvl: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    var_nam: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    link_var_nam: string;

    @Field(() => String)
    @Prop()
    map_var_nam: string;

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

export type DdaFieldMapDocument = DdaFieldMap & Document;
export const DdaFieldMapSchema = SchemaFactory.createForClass(DdaFieldMap);