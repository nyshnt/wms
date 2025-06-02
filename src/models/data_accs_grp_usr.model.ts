import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('DataAccsGrpUsr')
@Schema({ collection: 'data_accs_grp_usr' })
export class DataAccsGrpUsr {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String)
    @Prop({ required: true })
    accs_grp_nam: string;

    @Field(() => Types.ObjectId)
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    usr_id: Types.ObjectId;

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DataAccsGrpUsrDocument = DataAccsGrpUsr & Document;
export const DataAccsGrpUsrSchema = SchemaFactory.createForClass(DataAccsGrpUsr);