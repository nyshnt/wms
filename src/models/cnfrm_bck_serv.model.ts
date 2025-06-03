import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('CnfrmBckServ')
@Schema({ collection: 'cnfrm_bck_serv' })
export class CnfrmBckServ {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId)  // Assuming serv_ins_id references a service instance collection
    @Prop({ type: Types.ObjectId, ref: 'ServIns', required: true })
    serv_ins_id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    post_cnfrm_val_cmd: string;

    @Field(() => String)
    @Prop()
    invsts: string;

    @Field(() => String)
    @Prop()
    ems_evt_nam: string;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CnfrmBckServDocument = CnfrmBckServ & Document;
export const CnfrmBckServSchema = SchemaFactory.createForClass(CnfrmBckServ);