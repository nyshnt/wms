import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('AssetTypFeature')
@Schema({ collection: 'asset_typ_feature' })
export class AssetTypFeature {
    @Field(() => ID)
    _id: string;

    @Field(() => String)
    @Prop({ required: true })
    asset_typ: string;

    @Field(() => Number) // Adjust if feature_id is not a number.
    @Prop({ required: true })
    feature_id: number;

    @Field(() => Number)
    @Prop()
    max_val: number;

    @Field(() => Number)
    @Prop()
    min_val: number;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type AssetTypFeatureDocument = AssetTypFeature & Document;
export const AssetTypFeatureSchema = SchemaFactory.createForClass(AssetTypFeature);