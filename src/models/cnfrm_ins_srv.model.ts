import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('CnfrmInsSrv')
@Schema({ collection: 'cnfrm_ins_srv' })
export class CnfrmInsSrv {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true })
    cnfrm_serv_id: number;

    @Field(() => Types.ObjectId) // Assuming serv_ins_id references a Service Instance collection
    @Prop({ type: Types.ObjectId, ref: 'ServIns', required: true })
    serv_ins_id: Types.ObjectId;

    @Field(() => Number)
    @Prop()
    segnum: number;

    @Field(() => String)
    @Prop()
    serv_ins_typ: string;

    @Field(() => String)
    @Prop()
    cnfrm_serv_ins: string;

    @Field(() => Number) // Adjust data type if necessary
    @Prop()
    time_ust_id: number;

    @Field(() => String)
    @Prop()
    lodivl: string;

    @Field(() => Types.ObjectId) // Assuming this references a Warehouse collection.
    @Prop({ type: Types.ObjectId, ref: 'Warehouse' })
    wh_id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if necessary
    @Prop()
    serv_id: number;

    @Field(() => Boolean)
    @Prop({ default: false })
    serv_req_flg: boolean;

    @Field(() => String)
    @Prop()
    exitpnt_typ: string;

    @Field(() => String)
    @Prop()
    exitpnt: string;

    @Field(() => Number)
    @Prop()
    srtseq: number;

    @Field(() => String)
    @Prop()
    cmpusr: string;

    @Field(() => Boolean)
    @Prop({ default: false })
    cmpflg: boolean;

    @Field(() => Date)
    @Prop()
    cmpdte: Date;

    @Field(() => String)
    @Prop()
    serv_result: string;

    @Field(() => String)
    @Prop()
    trknum: string;

    @Field(() => String)
    @Prop()
    invnum: string;

    @Field(() => String)
    @Prop()
    prtnum: string;

    @Field(() => Types.ObjectId) // Assuming this references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client' })
    prt_client_id: Types.ObjectId;

    @Field(() => Number)
    @Prop()
    untqty: number;

    @Field(() => Date)
    @Prop()
    moddte: Date;

    @Field(() => Types.ObjectId) // Assuming this references a User collection
    @Prop({ type: Types.ObjectId, ref: 'User' })
    mod_usr_id: Types.ObjectId;

    @Field(() => Number)
    @Prop()
    ship_id: number;

    @Field(() => Number)
    @Prop()
    ship_line_id: number;

    @Field(() => String)
    @Prop()
    dettloc: string;


    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CnfrmInsSrvDocument = CnfrmInsSrv & Document;
export const CnfrmInsSrvSchema = SchemaFactory.createForClass(CnfrmInsSrv);