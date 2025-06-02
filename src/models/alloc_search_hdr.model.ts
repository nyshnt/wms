import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('AllocSearchHdr')
@Schema({ collection: 'alloc_search_hdr' })
export class AllocSearchHdr {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId)
    @Prop({ required: true, unique: true }) // alloc_search_id is the primary key and should be unique.
    alloc_search_id: Types.ObjectId;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'Warehouse' })
    wh_id: Types.ObjectId;

    @Field(() => Number)
    @Prop()
    bldg_id: number;

    @Field(() => Number)
    @Prop()
    srtseq: number;

    @Field(() => String)
    @Prop()
    search_path_typ: string;

    @Field(() => Types.ObjectId) // Needs clarification on the collection it references.
    @Prop({ type: Types.ObjectId, ref: 'PackZone' }) // Placeholder - adjust as needed.
    pck_zone_id: Types.ObjectId;

    @Field(() => String)
    @Prop()
    alloc_grp_nam: string;

    @Field(() => String)
    @Prop()
    lodivl: string;

    @Field(() => String)
    @Prop()
    uomcod: string;

    @Field(() => String)
    @Prop()
    reg_uom: string;

    @Field(() => Boolean)
    @Prop({ default: false })
    thresh_flg: boolean;

    @Field(() => Date)
    @Prop()
    ins_dt: Date;

    @Field(() => Date)
    @Prop()
    las_upd_dt: Date;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'User' })
    ins_user_id: Types.ObjectId;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'User' })
    last_upd_user_id: Types.ObjectId;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'AreMst' }) // Assuming aremst refers to Area Master
    arecod: Types.ObjectId;

    @Field(() => Boolean)
    @Prop({ default: false })
    lstpck_flg: boolean;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type AllocSearchHdrDocument = AllocSearchHdr & Document;
export const AllocSearchHdrSchema = SchemaFactory.createForClass(AllocSearchHdr);