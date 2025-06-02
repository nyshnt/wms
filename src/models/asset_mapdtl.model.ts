import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('AssetMapDtl')
@Schema({ collection: 'asset_mapdtl' })
export class AssetMapDtl {
    @Field(() => ID)
    _id: string;

    @Field(() => Number) // Adjust data type if map_dtl_id is not a number
    @Prop({ required: true, unique: true })
    map_dtl_id: number;

    // Add other fields from the asset_mapdtl table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type AssetMapDtlDocument = AssetMapDtl & Document;
export const AssetMapDtlSchema = SchemaFactory.createForClass(AssetMapDtl);