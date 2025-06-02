import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('UsrClientGrp')
@Schema({ collection: 'usr_client_grp' })
export class UsrClientGrp {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    usr_id: Types.ObjectId;

    @Field(() => String) // Or Types.ObjectId if client_grp refers to another collection
    @Prop({ required: true })
    client_grp: string;

    @Field(() => Number)
    @Prop()
    u_version: number;

    @Field(() => Date)
    @Prop()
    ins_dt: Date;

    @Field(() => Date)
    @Prop()
    last_upd_dt: Date;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'User' }) //Could be null
    ins_user_id: Types.ObjectId;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'User' }) //Could be null
    last_upd_user_id: Types.ObjectId;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type UsrClientGrpDocument = UsrClientGrp & Document;
export const UsrClientGrpSchema = SchemaFactory.createForClass(UsrClientGrp);