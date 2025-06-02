import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('ArcCstmsCnsgnmnt')
@Schema({ collection: 'arc_cstms_cnsgnmnt' })
export class ArcCstmsCnsgnmnt {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if necessary
    @Prop({ required: true })
    cstms_cnsgnmnt_id: number;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    // Add other fields from the table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type ArcCstmsCnsgnmntDocument = ArcCstmsCnsgnmnt & Document;
export const ArcCstmsCnsgnmntSchema = SchemaFactory.createForClass(ArcCstmsCnsgnmnt);