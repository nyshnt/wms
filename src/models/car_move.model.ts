import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType('CarMove')
@Schema({ collection: 'car_move' })
export class CarMove {
    @Field(() => ID)
    _id: string;

    @Field(() => Number) // Adjust the data type if necessary
    @Prop({ required: true, unique: true })
    car_move_id: number;

    // Add other fields from the car_move table here...

    @Field(() => Date)
    @Prop({ default: Date.now })
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    @Prop()
    updatedAt?: Date;
}

export type CarMoveDocument = CarMove & Document;
export const CarMoveSchema = SchemaFactory.createForClass(CarMove);