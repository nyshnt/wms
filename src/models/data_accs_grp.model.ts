import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('DataAccsGrp')
@Schema({ collection: 'data_accs_grp' })
export class DataAccsGrp {
    @Field(() => ID)
    _id: string;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true, unique: true })
    accs_grp_nam: string;

    // Add other fields from data_accs_grp table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DataAccsGrpDocument = DataAccsGrp & Document;
export const DataAccsGrpSchema = SchemaFactory.createForClass(DataAccsGrp);