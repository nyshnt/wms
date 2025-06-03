import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('CstmsCnsgnmntDft')
@Schema({ collection: 'cstms_cnsgnmnt_dft' })
export class CstmsCnsgnmntDft {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Types.ObjectId) // Assuming client_id references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client', required: true })
    client_id: Types.ObjectId;

    @Field(() => Types.ObjectId) // Assuming supnum references a Supplier collection
    @Prop({ type: Types.ObjectId, ref: 'Supplier', required: true })
    supnum: Types.ObjectId;

    @Field(() => String) // Adjust data type if necessary
    @Prop({ required: true })
    dft_typ: string;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    // Add other fields from cstms_cnsgnmnt_dft table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CstmsCnsgnmntDftDocument = CstmsCnsgnmntDft & Document;
export const CstmsCnsgnmntDftSchema = SchemaFactory.createForClass(CstmsCnsgnmntDft);