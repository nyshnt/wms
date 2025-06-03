import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('CmdConfigArg')
@Schema({ collection: 'cmd_config_arg' })
export class CmdConfigArg {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true })
    cmd_config_id: number;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    cmd_config_arg: string;

    // Add other fields from cmd_config_arg table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CmdConfigArgDocument = CmdConfigArg & Document;
export const CmdConfigArgSchema = SchemaFactory.createForClass(CmdConfigArg);