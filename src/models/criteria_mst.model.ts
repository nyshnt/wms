import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('CriteriaMst')
@Schema({ collection: 'criteria_mst' })
export class CriteriaMst {
    @Field(() => ID)
    _id: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    appl_id: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    frm_id: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    prf_nam: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    crt_nam: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    var_nam: string;

    @Field(() => String)
    @Prop()
    value: string;

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

export type CriteriaMstDocument = CriteriaMst & Document;
export const CriteriaMstSchema = SchemaFactory.createForClass(CriteriaMst);