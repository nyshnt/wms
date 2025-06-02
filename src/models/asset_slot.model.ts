import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('AssetSlot')
@Schema({ collection: 'asset_slot' })
export class AssetSlot {
    @Field(() => ID)
    _id: string;

    @Field(() => String)
    @Prop({ required: true })
    asset_typ: string;

    @Field(() => String) // Adjust data type if 'slot' is not a string
    @Prop({ required: true })
    slot: string;

    @Field(() => String)
    @Prop()
    slot_code: string;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type AssetSlotDocument = AssetSlot & Document;
export const AssetSlotSchema = SchemaFactory.createForClass(AssetSlot);