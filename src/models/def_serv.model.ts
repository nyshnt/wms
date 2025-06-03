import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('DefServ')
@Schema({ collection: 'def_serv' })
export class DefServ {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true })
    serv_id: number;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true })
    def_serv_id: number;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    @Field(() => String)
    @Prop()
    def_serv_cod: string;

    @Field(() => Types.ObjectId) // Assuming client_id references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client' })
    client_id: Types.ObjectId;

    @Field(() => String)
    @Prop()
    carcod: string;

    @Field(() => String)
    @Prop()
    prtnum: string;

    @Field(() => Types.ObjectId) // Assuming prt_client_id references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client' })
    prt_client_id: Types.ObjectId;

    @Field(() => String)
    @Prop()
    invsts: string;

    @Field(() => String)
    @Prop()
    invtyp: string;

    @Field(() => String)
    @Prop()
    supnum: string;

    @Field(() => String)
    @Prop()
    cstnum: string;

    @Field(() => String)
    @Prop()
    ordtyp: string;

    @Field(() => Number) // Adjust data type if necessary
    @Prop()
    serv_rate_id: number;

    @Field(() => Boolean)
    @Prop({ default: false })
    serv_req_flg: boolean;

    @Field(() => String)
    @Prop()
    ordnum: string;

    @Field(() => Number)
    @Prop()
    ordlin: number;

    @Field(() => Number)
    @Prop()
    ordsin: number;

    @Field(() => String)
    @Prop()
    srvivl: string;

    @Field(() => String)
    @Prop()
    csttyp: string;

    @Field(() => String)
    @Prop()
    dstare: string;

    @Field(() => String)
    @Prop()
    trir_typ: string;

    @Field(() => String)
    @Prop()
    vehtyp: string;

    @Field(() => String)
    @Prop()
    rate_serv_nam: string;

    @Field(() => Types.ObjectId)  // Assuming adr_id references an Address collection
    @Prop({ type: Types.ObjectId, ref: 'Address' })
    adr_id: Types.ObjectId;

    @Field(() => String)
    @Prop()
    stop_act_typ: string;

    @Field(() => String)
    @Prop()
    comcod: string;

    @Field(() => Types.ObjectId) // Assuming usr_id references a User collection
    @Prop({ type: Types.ObjectId, ref: 'User' })
    usr_id: Types.ObjectId;

    @Field(() => Number)
    @Prop()
    u_version: number;

    @Field(() => Date)
    @Prop()
    ins_dt: Date;

    @Field(() => Date)
    @Prop()
    last_upd_dt: Date;

    @Field(() => Types.ObjectId) // Assuming this references a User collection
    @Prop({ type: Types.ObjectId, ref: 'User' })
    ins_user_id: Types.ObjectId;

    @Field(() => Types.ObjectId) // Assuming this references a User collection
    @Prop({ type: Types.ObjectId, ref: 'User' })
    last_upd_user_id: Types.ObjectId;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DefServDocument = DefServ & Document;
export const DefServSchema = SchemaFactory.createForClass(DefServ);