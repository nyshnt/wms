import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('CnfrmInvServ')
@Schema({ collection: 'cnfrm_inv_serv' })
export class CnfrmInvServ {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true, unique: true })
    cnfrm_serv_id: number;

    @Field(() => String)
    @Prop()
    invtid: string;

    @Field(() => String)
    @Prop()
    lodivl: string;

    @Field(() => Types.ObjectId) // Assuming this references a Warehouse collection
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

    @Field(() => Number) // Adjust data type if necessary
    @Prop()
    cmp_usr_id: number;

    @Field(() => Boolean)
    @Prop({ default: false })
    cmpfig: boolean;

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
    supnum: string;

    @Field(() => Types.ObjectId) // Assuming this references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client' })
    client_id: Types.ObjectId;

    @Field(() => Number)
    @Prop()
    invlin: number;

    @Field(() => Number)
    @Prop()
    invsin: number;

    @Field(() => String)
    @Prop()
    invsts: string;

    @Field(() => String)
    @Prop()
    prtnum: string;

    @Field(() => Types.ObjectId) // Assuming this references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client' })
    prt_client_id: Types.ObjectId;

    @Field(() => Number)
    @Prop()
    untqty: number;

    @Field(() => String)
    @Prop()
    ordnum: string;

    @Field(() => Number)
    @Prop()
    ordlin: number;

    @Field(() => Number)
    @Prop()
    ordsin: number;

    @Field(() => Number)
    @Prop()
    ship_id: number;

    @Field(() => String)
    @Prop()
    alt_idn: string;

    @Field(() => Number) // Adjust data type if necessary
    @Prop()
    usr_id: number;

    @Field(() => String)
    @Prop()
    dstloc: string;

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

export type CnfrmInvServDocument = CnfrmInvServ & Document;
export const CnfrmInvServSchema = SchemaFactory.createForClass(CnfrmInvServ);