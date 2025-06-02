import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('AssetMapMedia')
@Schema({ collection: 'asset_map_media' })
export class AssetMapMedia {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true })
    asset_media_id: number;

    @Field(() => Types.ObjectId) // Assuming map_dtl_id references a MapDtl collection
    @Prop({ type: Types.ObjectId, ref: 'MapDtl', required: true })
    map_dtl_id: Types.ObjectId;

    // Add other fields from the asset_map_media table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type AssetMapMediaDocument = AssetMapMedia & Document;
export const AssetMapMediaSchema = SchemaFactory.createForClass(AssetMapMedia);