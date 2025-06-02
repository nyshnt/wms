import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('Adrmst')
@Schema({ collection: 'adrmst' })
export class Adrmst {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId) // Assuming locale_id references another collection
    @Prop({ type: Types.ObjectId, ref: 'Locale', required: true })
    locale_id: Types.ObjectId;

    @Field(() => Number) // Or Types.ObjectId if adr_id references another collection
    @Prop({ required: true })
    adr_id: number;

    @Field(() => Types.ObjectId) // Needs clarification: which collection does client_id reference?
    @Prop({ type: Types.ObjectId, ref: 'Client' }) // Placeholder.  Correct the ref.
    client_id: Types.ObjectId;

    @Field(() => String)
    @Prop()
    host_ext_id: string;

    @Field(() => String)
    @Prop()
    adrnam: string;

    @Field(() => String)
    @Prop()
    adrtyp: string;

    @Field(() => String)
    @Prop()
    adrin1: string;

    @Field(() => String)
    @Prop()
    adrin2: string;

    @Field(() => String)
    @Prop()
    adrin3: string;

    @Field(() => Types.ObjectId)  // Needs clarification:  Which collection?
    @Prop({ type: Types.ObjectId, ref: 'City' }) // Placeholder. Correct the ref.
    adrcty: Types.ObjectId;

    @Field(() => Types.ObjectId)  // Needs clarification: Which collection?
    @Prop({ type: Types.ObjectId, ref: 'State' }) // Placeholder. Correct the ref.
    adrstc: Types.ObjectId;

    @Field(() => Types.ObjectId) // Needs clarification: Which collection?
    @Prop({ type: Types.ObjectId, ref: 'PostalCode' }) // Placeholder. Correct the ref.
    adrpsz: Types.ObjectId;

    @Field(() => String)
    @Prop()
    ctry_name: string;

    @Field(() => String)
    @Prop()
    rgncod: string;

    @Field(() => String)
    @Prop()
    phnnum: string;

    @Field(() => String)
    @Prop()
    faxnum: string;

    @Field(() => String)
    @Prop()
    attn_name: string;

    @Field(() => String)
    @Prop()
    attn_tel: string;

    @Field(() => String)
    @Prop()
    cont_name: string;

    @Field(() => String)
    @Prop()
    cont_tel: string;

    @Field(() => String)
    @Prop()
    cont_title: string;

    @Field(() => Boolean)
    @Prop({default:false})
    rsafig: boolean;

    @Field(() => Boolean)
    @Prop({default:false})
    temp_flg: boolean;

    @Field(() => Boolean)
    @Prop({default:false})
    po_box_flg: boolean;

    @Field(() => String)
    @Prop()
    last_name: string;

    @Field(() => String)
    @Prop()
    first_name: string;

    @Field(() => String)
    @Prop()
    honorific: string;

    @Field(() => String)
    @Prop()
    usr_dsp: string;

    @Field(() => String)
    @Prop()
    adr_district: string;

    @Field(() => String)
    @Prop()
    web_adr: string;

    @Field(() => String)
    @Prop()
    email_adr: string;

    @Field(() => String)
    @Prop()
    pagnum: string;

    @Field(() => Boolean)
    @Prop({default:false})
    pool_flg: boolean;

    @Field(() => String)
    @Prop()
    pool_rate_serv_nam: string;

    @Field(() => String)
    @Prop()
    ship_phnnum: string;

    @Field(() => String)
    @Prop()
    ship_faxnum: string;

    @Field(() => String)
    @Prop()
    ship_web_adr: string;

    @Field(() => String)
    @Prop()
    ship_email_adr: string;

    @Field(() => String)
    @Prop()
    ship_cont_name: string;

    @Field(() => String)
    @Prop()
    ship_cont_title: string;

    @Field(() => String)
    @Prop()
    ship_cont_tel: string;

    @Field(() => String)
    @Prop()
    ship_attn_name: string;

    @Field(() => String)
    @Prop()
    ship_attn_phnnum: string;

    @Field(() => String)
    @Prop()
    tim_zon_cd: string;

    @Field(() => String)
    @Prop()
    rqst_state_cod: string;

    @Field(() => String)
    @Prop()
    grp_nam: string;

    @Field(() => Number)
    @Prop()
    latitude: number;

    @Field(() => Number)
    @Prop()
    longitude: number;

    @Field(() => String)
    @Prop()
    cust_lvl: string;


    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type AdrmstDocument = Adrmst & Document;
export const AdrmstSchema = SchemaFactory.createForClass(Adrmst);