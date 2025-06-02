import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('AssetFeature')
@Schema({ collection: 'asset_feature' })
export class AssetFeature {
    @Field(() => ID)
    _id: string;

    @Field(() => Number) // Adjust data type if feature_id is not a number
    @Prop({ required: true, unique: true })
    feature_id: number;

    // Add other fields from asset_feature table here...


    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type AssetFeatureDocument = AssetFeature & Document;
export const AssetFeatureSchema = SchemaFactory.createForClass(AssetFeature);