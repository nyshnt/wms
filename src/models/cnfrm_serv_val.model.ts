import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('CnfrmServVal')
@Schema({ collection: 'cnfrm_serv_val' })
export class CnfrmServVal {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId) // Assuming serv_ins_id references a Service Instance collection
    @Prop({ type: Types.ObjectId, ref: 'ServIns', required: true })
    serv_ins_id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true })
    cnfrm_serv_id: number;

    @Field(() => Number)
    @Prop({ required: true })
    seqnum: number;

    @Field(() => String)
    @Prop()
    cnfrm_val_var_nam: string;

    @Field(() => String)
    @Prop()
    cnfrm_serv_val: string;

    @Field(() => Number) // Adjust data type if necessary
    @Prop()
    cnfrm_usr_id: number;

    @Field(() => Date)
    @Prop()
    cnfrm_dte: Date;

    @Field(() => Date)
    @Prop()
    moddte: Date;

    @Field(() => Types.ObjectId) // Assuming this references a User collection
    @Prop({ type: Types.ObjectId, ref: 'User' })
    mod_usr_id: Types.ObjectId;

    @Field(() => Number)
    @Prop()
    segnum: number;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CnfrmServValDocument = CnfrmServVal & Document;
export const CnfrmServValSchema = SchemaFactory.createForClass(CnfrmServVal);