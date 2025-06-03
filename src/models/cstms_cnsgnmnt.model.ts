import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('CstmsCnsgnmnt')
@Schema({ collection: 'cstms_cnsgnmnt' })
export class CstmsCnsgnmnt {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Number)  // Adjust data type if necessary
    @Prop({ required: true })
    cstms_cnsgnmnt_id: number;

    @Field(() => Types.ObjectId) // Reference to Warehouse
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    @Field(() => Types.ObjectId) // Reference to Client
    @Prop({ type: Types.ObjectId, ref: 'Client' })
    client_id: Types.ObjectId;

    @Field(() => Types.ObjectId) // Reference to Supplier
    @Prop({ type: Types.ObjectId, ref: 'Supplier' })
    supnum: Types.ObjectId;

    @Field(() => Boolean)
    @Prop({ default: false })
    wko_flg: boolean;


    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CstmsCnsgnmntDocument = CstmsCnsgnmnt & Document;
export const CstmsCnsgnmntSchema = SchemaFactory.createForClass(CstmsCnsgnmnt);