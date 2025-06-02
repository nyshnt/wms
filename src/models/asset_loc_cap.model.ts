import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('AssetLocCap')
@Schema({ collection: 'asset_loc_cap' })
export class AssetLocCap {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String)
    @Prop({ required: true })
    asset_typ: string;

    @Field(() => Types.ObjectId) // Assuming client_id references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client', required: true })
    client_id: Types.ObjectId;

    @Field(() => String) // Adjust if man_id is not a string
    @Prop({ required: true })
    man_id: string;

    @Field(() => String)
    @Prop({ required: true })
    model: string;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'Warehouse' })
    wh_id: Types.ObjectId;

    @Field(() => String)
    @Prop({ type: String, ref: 'Locmst' })
    stoloc: string;

    // Add other fields from asset_loc_cap table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type AssetLocCapDocument = AssetLocCap & Document;
export const AssetLocCapSchema = SchemaFactory.createForClass(AssetLocCap);