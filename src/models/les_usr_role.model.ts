import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('LesUsrRole')
@Schema({ collection: 'les_usr_role' })
export class LesUsrRole {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    usr_id: Types.ObjectId;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'Role', required: true })
    role_id: Types.ObjectId;

    @Field(() => Boolean)
    @Prop({ default: false })
    ldap_flg: boolean;

    @Field(() => String)
    @Prop()
    grp_nam: string;


    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type LesUsrRoleDocument = LesUsrRole & Document;
export const LesUsrRoleSchema = SchemaFactory.createForClass(LesUsrRole);