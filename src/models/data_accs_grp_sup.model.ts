import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('DataAccsGrpSup')
@Schema({ collection: 'data_accs_grp_sup' })
export class DataAccsGrpSup {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    accs_grp_nam: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    supnum: string;

    @Field(() => Types.ObjectId) // Assuming client_id references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client', required: true })
    client_id: Types.ObjectId;

    // Add other fields from data_accs_grp_sup table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DataAccsGrpSupDocument = DataAccsGrpSup & Document;
export const DataAccsGrpSupSchema = SchemaFactory.createForClass(DataAccsGrpSup);