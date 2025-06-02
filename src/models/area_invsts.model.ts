import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('AreaInvsts')
@Schema({ collection: 'area_invsts' })
export class AreaInvsts {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    @Field(() => String) // Adjust if arecod is not a string
    @Prop({ required: true })
    arecod: string;

    @Field(() => String) // Adjust if invsts is not a string
    @Prop({ required: true })
    invsts: string;

    @Field(() => Date)
    @Prop()
    ins_dt: Date;

    @Field(() => Types.ObjectId) // Assuming this references a User collection
    @Prop({ type: Types.ObjectId, ref: 'User' })
    ins_user_id: Types.ObjectId;

    @Field(() => Date)
    @Prop()
    moddte: Date;

    @Field(() => Types.ObjectId) // Assuming this references a User collection
    @Prop({ type: Types.ObjectId, ref: 'User' })
    mod_usr_id: Types.ObjectId;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type AreaInvstsDocument = AreaInvsts & Document;
export const AreaInvstsSchema = SchemaFactory.createForClass(AreaInvsts);