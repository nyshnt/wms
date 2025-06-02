import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('PclUsrfld')
@Schema()
export class PclUsrfld {
    @Field(() => ID)
    _id: Types.ObjectId; // pcl_usrfld_id - Primary Key

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'Cstmst', required: true })
    client_id: Types.ObjectId; // Foreign key to cstmst

    @Field(() => String)
    @Prop({ required: true})
    usr_col1: string;

    @Field(() => String)
    @Prop()
    usr_col2: string;

    @Field(() => String)
    @Prop()
    usr_col3: string;

    @Field(() => String)
    @Prop()
    usr_col4: string;

    @Field(() => Date)
    @Prop()
    ins_dt: Date;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'User' }) // Assuming this references a user.  Create a User schema.
    ins_user_id: Types.ObjectId;

    @Field(() => Date)
    @Prop()
    moddte: Date;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'User' }) // Assuming this references a user.
    mod_usr_id: Types.ObjectId;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type PclUsrfldDocument = PclUsrfld & Document;
export const PclUsrfldSchema = SchemaFactory.createForClass(PclUsrfld);