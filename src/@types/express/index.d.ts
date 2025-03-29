/* This code snippet is extending the `Express` namespace in TypeScript. It adds a new property
`id_person` of type `string` to the `Request` interface in the `Express` namespace. This allows you
to access and use the `id_person` property in the `Request` object within your Express application. */
declare namespace Express {
  export interface Request {
    id_person: string;
  }
}
