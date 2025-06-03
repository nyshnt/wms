import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType('Distro')
@Schema({ collection: 'distro' })
export class Distro {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field(() => Number) // Adjust data type if necessary.
    @Prop({ required: true, unique:true })
    distro_id: number;

    @Field(() => Types.ObjectId) // Assuming wh_id references a Warehouse collection
    @Prop({ type: Types.ObjectId, ref: 'Warehouse', required: true })
    wh_id: Types.ObjectId;

    @Field(() => Types.ObjectId) // Assuming client_id references a Client collection
    @Prop({ type: Types.ObjectId, ref: 'Client', required: true })
    client_id: Types.ObjectId;

    @Field(() => String)
    @Prop({ type: String, ref: 'Client'})
    stcust: string;


    @Field(() => Types.ObjectId) // Assuming trknum references a TrackingNumber collection
    @Prop({ type: Types.ObjectId, ref: 'TrackingNumber' })
    trknum: Types.ObjectId;

    @Field(() => Types.ObjectId)  // Assuming invnum references an Invoice collection
    @Prop({ type: Types.ObjectId, ref: 'Invoice' })
    invnum: Types.ObjectId;

    @Field(() => Types.ObjectId)  // Assuming supnum references a Supplier collection
    @Prop({ type: Types.ObjectId, ref: 'Supplier' })
    supnum: Types.ObjectId;

    @Field(() => Number)
    @Prop()
    invlin: number;

    @Field(() => Number)
    @Prop()
    invsin: number;

    @Field(() => String)
    @Prop({type: String, ref:'DistroType'})
    distro_typ: string;


    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type DistroDocument = Distro & Document;
export const DistroSchema = SchemaFactory.createForClass(Distro);