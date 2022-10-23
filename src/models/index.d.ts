import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type CatMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Cat {
  readonly id: string;
  readonly name: string;
  readonly color: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Cat, CatMetaData>);
  static copyOf(source: Cat, mutator: (draft: MutableModel<Cat, CatMetaData>) => MutableModel<Cat, CatMetaData> | void): Cat;
}