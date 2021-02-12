import {Entity, model, property} from '@loopback/repository';

@model()
export class List extends Entity {
  @property({
    type: 'number',
    id: true,
   generated: true,
  })
  id?: number;

  /*   @property({
      type: 'number',
      required: true,
    })
    idUser: number; */

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'boolean',
    required: true,
  })
  status: boolean;

  @property({
    type: 'date',
  })
  date?: string;

  @property({
    type: 'number',
  })
  idUser?: string;
  @property({
    type: 'string',
    required: true,
  })
  tasks: string;


  constructor(data?: Partial<List>) {
    super(data);
  }
}

export interface ListRelations {
  // describe navigational properties here
}

export type ListWithRelations = List & ListRelations;
