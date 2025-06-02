import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('AssetCarton')
@Schema({ collection: 'asset_carton' })
export class AssetCarton {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String)
    @Prop({ required: true })
    ctncod: string;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    @Field(() => String)
    @Prop({ type: String, ref: 'AssetTyp' })
    asset_typ: string;


    // Add other fields from asset_carton table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type AssetCartonDocument = AssetCarton & Document;
export const AssetCartonSchema = SchemaFactory.createForClass(AssetCarton);