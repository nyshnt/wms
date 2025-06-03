import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('CmdConfig')
@Schema({ collection: 'cmd_config' })
export class CmdConfig {
    @Field(() => ID)
    _id: string;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true, unique: true })
    cmd_config_id: number;

    // Add other fields from cmd_config table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CmdConfigDocument = CmdConfig & Document;
export const CmdConfigSchema = SchemaFactory.createForClass(CmdConfig);