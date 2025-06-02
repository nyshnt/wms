import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('AssetMapmst')
@Schema({ collection: 'asset_mapmst' })
export class AssetMapmst {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String) // Adjust data type if 'map' is not a string
    @Prop({ required: true, unique: true })
    map: string;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'Warehouse' })
    wh_id: Types.ObjectId;

    // Add other fields from asset_mapmst table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type AssetMapmstDocument = AssetMapmst & Document;
export const AssetMapmstSchema = SchemaFactory.createForClass(AssetMapmst);