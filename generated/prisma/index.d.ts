
/**
 * Client
**/

import * as runtime from './runtime/binary.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Map
 * 
 */
export type Map = $Result.DefaultSelection<Prisma.$MapPayload>
/**
 * Model Tileset
 * 
 */
export type Tileset = $Result.DefaultSelection<Prisma.$TilesetPayload>
/**
 * Model Sprite
 * 
 */
export type Sprite = $Result.DefaultSelection<Prisma.$SpritePayload>
/**
 * Model AIGenerationJob
 * 
 */
export type AIGenerationJob = $Result.DefaultSelection<Prisma.$AIGenerationJobPayload>
/**
 * Model Locale
 * 
 */
export type Locale = $Result.DefaultSelection<Prisma.$LocalePayload>
/**
 * Model Flag
 * 
 */
export type Flag = $Result.DefaultSelection<Prisma.$FlagPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => $Utils.JsPromise<void> : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.map`: Exposes CRUD operations for the **Map** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maps
    * const maps = await prisma.map.findMany()
    * ```
    */
  get map(): Prisma.MapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tileset`: Exposes CRUD operations for the **Tileset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tilesets
    * const tilesets = await prisma.tileset.findMany()
    * ```
    */
  get tileset(): Prisma.TilesetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sprite`: Exposes CRUD operations for the **Sprite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sprites
    * const sprites = await prisma.sprite.findMany()
    * ```
    */
  get sprite(): Prisma.SpriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIGenerationJob`: Exposes CRUD operations for the **AIGenerationJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIGenerationJobs
    * const aIGenerationJobs = await prisma.aIGenerationJob.findMany()
    * ```
    */
  get aIGenerationJob(): Prisma.AIGenerationJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locale`: Exposes CRUD operations for the **Locale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locales
    * const locales = await prisma.locale.findMany()
    * ```
    */
  get locale(): Prisma.LocaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flag`: Exposes CRUD operations for the **Flag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flags
    * const flags = await prisma.flag.findMany()
    * ```
    */
  get flag(): Prisma.FlagDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Project: 'Project',
    Map: 'Map',
    Tileset: 'Tileset',
    Sprite: 'Sprite',
    AIGenerationJob: 'AIGenerationJob',
    Locale: 'Locale',
    Flag: 'Flag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "project" | "map" | "tileset" | "sprite" | "aIGenerationJob" | "locale" | "flag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Map: {
        payload: Prisma.$MapPayload<ExtArgs>
        fields: Prisma.MapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          findFirst: {
            args: Prisma.MapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          findMany: {
            args: Prisma.MapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>[]
          }
          create: {
            args: Prisma.MapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          createMany: {
            args: Prisma.MapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>[]
          }
          delete: {
            args: Prisma.MapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          update: {
            args: Prisma.MapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          deleteMany: {
            args: Prisma.MapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>[]
          }
          upsert: {
            args: Prisma.MapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          aggregate: {
            args: Prisma.MapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMap>
          }
          groupBy: {
            args: Prisma.MapGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapGroupByOutputType>[]
          }
          count: {
            args: Prisma.MapCountArgs<ExtArgs>
            result: $Utils.Optional<MapCountAggregateOutputType> | number
          }
        }
      }
      Tileset: {
        payload: Prisma.$TilesetPayload<ExtArgs>
        fields: Prisma.TilesetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TilesetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TilesetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TilesetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TilesetPayload>
          }
          findFirst: {
            args: Prisma.TilesetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TilesetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TilesetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TilesetPayload>
          }
          findMany: {
            args: Prisma.TilesetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TilesetPayload>[]
          }
          create: {
            args: Prisma.TilesetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TilesetPayload>
          }
          createMany: {
            args: Prisma.TilesetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TilesetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TilesetPayload>[]
          }
          delete: {
            args: Prisma.TilesetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TilesetPayload>
          }
          update: {
            args: Prisma.TilesetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TilesetPayload>
          }
          deleteMany: {
            args: Prisma.TilesetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TilesetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TilesetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TilesetPayload>[]
          }
          upsert: {
            args: Prisma.TilesetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TilesetPayload>
          }
          aggregate: {
            args: Prisma.TilesetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTileset>
          }
          groupBy: {
            args: Prisma.TilesetGroupByArgs<ExtArgs>
            result: $Utils.Optional<TilesetGroupByOutputType>[]
          }
          count: {
            args: Prisma.TilesetCountArgs<ExtArgs>
            result: $Utils.Optional<TilesetCountAggregateOutputType> | number
          }
        }
      }
      Sprite: {
        payload: Prisma.$SpritePayload<ExtArgs>
        fields: Prisma.SpriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpritePayload>
          }
          findFirst: {
            args: Prisma.SpriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpritePayload>
          }
          findMany: {
            args: Prisma.SpriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpritePayload>[]
          }
          create: {
            args: Prisma.SpriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpritePayload>
          }
          createMany: {
            args: Prisma.SpriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpritePayload>[]
          }
          delete: {
            args: Prisma.SpriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpritePayload>
          }
          update: {
            args: Prisma.SpriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpritePayload>
          }
          deleteMany: {
            args: Prisma.SpriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpritePayload>[]
          }
          upsert: {
            args: Prisma.SpriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpritePayload>
          }
          aggregate: {
            args: Prisma.SpriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSprite>
          }
          groupBy: {
            args: Prisma.SpriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpriteCountArgs<ExtArgs>
            result: $Utils.Optional<SpriteCountAggregateOutputType> | number
          }
        }
      }
      AIGenerationJob: {
        payload: Prisma.$AIGenerationJobPayload<ExtArgs>
        fields: Prisma.AIGenerationJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIGenerationJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerationJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIGenerationJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerationJobPayload>
          }
          findFirst: {
            args: Prisma.AIGenerationJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerationJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIGenerationJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerationJobPayload>
          }
          findMany: {
            args: Prisma.AIGenerationJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerationJobPayload>[]
          }
          create: {
            args: Prisma.AIGenerationJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerationJobPayload>
          }
          createMany: {
            args: Prisma.AIGenerationJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIGenerationJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerationJobPayload>[]
          }
          delete: {
            args: Prisma.AIGenerationJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerationJobPayload>
          }
          update: {
            args: Prisma.AIGenerationJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerationJobPayload>
          }
          deleteMany: {
            args: Prisma.AIGenerationJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIGenerationJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIGenerationJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerationJobPayload>[]
          }
          upsert: {
            args: Prisma.AIGenerationJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerationJobPayload>
          }
          aggregate: {
            args: Prisma.AIGenerationJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIGenerationJob>
          }
          groupBy: {
            args: Prisma.AIGenerationJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIGenerationJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIGenerationJobCountArgs<ExtArgs>
            result: $Utils.Optional<AIGenerationJobCountAggregateOutputType> | number
          }
        }
      }
      Locale: {
        payload: Prisma.$LocalePayload<ExtArgs>
        fields: Prisma.LocaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalePayload>
          }
          findFirst: {
            args: Prisma.LocaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalePayload>
          }
          findMany: {
            args: Prisma.LocaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalePayload>[]
          }
          create: {
            args: Prisma.LocaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalePayload>
          }
          createMany: {
            args: Prisma.LocaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalePayload>[]
          }
          delete: {
            args: Prisma.LocaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalePayload>
          }
          update: {
            args: Prisma.LocaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalePayload>
          }
          deleteMany: {
            args: Prisma.LocaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalePayload>[]
          }
          upsert: {
            args: Prisma.LocaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalePayload>
          }
          aggregate: {
            args: Prisma.LocaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocale>
          }
          groupBy: {
            args: Prisma.LocaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocaleCountArgs<ExtArgs>
            result: $Utils.Optional<LocaleCountAggregateOutputType> | number
          }
        }
      }
      Flag: {
        payload: Prisma.$FlagPayload<ExtArgs>
        fields: Prisma.FlagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          findFirst: {
            args: Prisma.FlagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          findMany: {
            args: Prisma.FlagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>[]
          }
          create: {
            args: Prisma.FlagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          createMany: {
            args: Prisma.FlagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>[]
          }
          delete: {
            args: Prisma.FlagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          update: {
            args: Prisma.FlagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          deleteMany: {
            args: Prisma.FlagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>[]
          }
          upsert: {
            args: Prisma.FlagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          aggregate: {
            args: Prisma.FlagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlag>
          }
          groupBy: {
            args: Prisma.FlagGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlagGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlagCountArgs<ExtArgs>
            result: $Utils.Optional<FlagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    project?: ProjectOmit
    map?: MapOmit
    tileset?: TilesetOmit
    sprite?: SpriteOmit
    aIGenerationJob?: AIGenerationJobOmit
    locale?: LocaleOmit
    flag?: FlagOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    maps: number
    tilesets: number
    sprites: number
    locales: number
    flags: number
    aiJobs: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maps?: boolean | ProjectCountOutputTypeCountMapsArgs
    tilesets?: boolean | ProjectCountOutputTypeCountTilesetsArgs
    sprites?: boolean | ProjectCountOutputTypeCountSpritesArgs
    locales?: boolean | ProjectCountOutputTypeCountLocalesArgs
    flags?: boolean | ProjectCountOutputTypeCountFlagsArgs
    aiJobs?: boolean | ProjectCountOutputTypeCountAiJobsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTilesetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TilesetWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountSpritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpriteWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountLocalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocaleWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountFlagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlagWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountAiJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIGenerationJobWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    settings: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    settings: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    settings: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    settings?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    settings?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    settings?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    settings: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    settings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maps?: boolean | Project$mapsArgs<ExtArgs>
    tilesets?: boolean | Project$tilesetsArgs<ExtArgs>
    sprites?: boolean | Project$spritesArgs<ExtArgs>
    locales?: boolean | Project$localesArgs<ExtArgs>
    flags?: boolean | Project$flagsArgs<ExtArgs>
    aiJobs?: boolean | Project$aiJobsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    settings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    settings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    settings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "settings" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maps?: boolean | Project$mapsArgs<ExtArgs>
    tilesets?: boolean | Project$tilesetsArgs<ExtArgs>
    sprites?: boolean | Project$spritesArgs<ExtArgs>
    locales?: boolean | Project$localesArgs<ExtArgs>
    flags?: boolean | Project$flagsArgs<ExtArgs>
    aiJobs?: boolean | Project$aiJobsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      maps: Prisma.$MapPayload<ExtArgs>[]
      tilesets: Prisma.$TilesetPayload<ExtArgs>[]
      sprites: Prisma.$SpritePayload<ExtArgs>[]
      locales: Prisma.$LocalePayload<ExtArgs>[]
      flags: Prisma.$FlagPayload<ExtArgs>[]
      aiJobs: Prisma.$AIGenerationJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      settings: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    maps<T extends Project$mapsArgs<ExtArgs> = {}>(args?: Subset<T, Project$mapsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tilesets<T extends Project$tilesetsArgs<ExtArgs> = {}>(args?: Subset<T, Project$tilesetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TilesetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sprites<T extends Project$spritesArgs<ExtArgs> = {}>(args?: Subset<T, Project$spritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    locales<T extends Project$localesArgs<ExtArgs> = {}>(args?: Subset<T, Project$localesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flags<T extends Project$flagsArgs<ExtArgs> = {}>(args?: Subset<T, Project$flagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiJobs<T extends Project$aiJobsArgs<ExtArgs> = {}>(args?: Subset<T, Project$aiJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIGenerationJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly settings: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.maps
   */
  export type Project$mapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    where?: MapWhereInput
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    cursor?: MapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[]
  }

  /**
   * Project.tilesets
   */
  export type Project$tilesetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tileset
     */
    select?: TilesetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tileset
     */
    omit?: TilesetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TilesetInclude<ExtArgs> | null
    where?: TilesetWhereInput
    orderBy?: TilesetOrderByWithRelationInput | TilesetOrderByWithRelationInput[]
    cursor?: TilesetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TilesetScalarFieldEnum | TilesetScalarFieldEnum[]
  }

  /**
   * Project.sprites
   */
  export type Project$spritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprite
     */
    select?: SpriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprite
     */
    omit?: SpriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpriteInclude<ExtArgs> | null
    where?: SpriteWhereInput
    orderBy?: SpriteOrderByWithRelationInput | SpriteOrderByWithRelationInput[]
    cursor?: SpriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpriteScalarFieldEnum | SpriteScalarFieldEnum[]
  }

  /**
   * Project.locales
   */
  export type Project$localesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locale
     */
    select?: LocaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locale
     */
    omit?: LocaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaleInclude<ExtArgs> | null
    where?: LocaleWhereInput
    orderBy?: LocaleOrderByWithRelationInput | LocaleOrderByWithRelationInput[]
    cursor?: LocaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocaleScalarFieldEnum | LocaleScalarFieldEnum[]
  }

  /**
   * Project.flags
   */
  export type Project$flagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    where?: FlagWhereInput
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    cursor?: FlagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlagScalarFieldEnum | FlagScalarFieldEnum[]
  }

  /**
   * Project.aiJobs
   */
  export type Project$aiJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerationJob
     */
    select?: AIGenerationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerationJob
     */
    omit?: AIGenerationJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationJobInclude<ExtArgs> | null
    where?: AIGenerationJobWhereInput
    orderBy?: AIGenerationJobOrderByWithRelationInput | AIGenerationJobOrderByWithRelationInput[]
    cursor?: AIGenerationJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIGenerationJobScalarFieldEnum | AIGenerationJobScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Map
   */

  export type AggregateMap = {
    _count: MapCountAggregateOutputType | null
    _avg: MapAvgAggregateOutputType | null
    _sum: MapSumAggregateOutputType | null
    _min: MapMinAggregateOutputType | null
    _max: MapMaxAggregateOutputType | null
  }

  export type MapAvgAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type MapSumAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type MapMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    width: number | null
    height: number | null
    layers: string | null
    events: string | null
  }

  export type MapMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    width: number | null
    height: number | null
    layers: string | null
    events: string | null
  }

  export type MapCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    width: number
    height: number
    layers: number
    events: number
    _all: number
  }


  export type MapAvgAggregateInputType = {
    width?: true
    height?: true
  }

  export type MapSumAggregateInputType = {
    width?: true
    height?: true
  }

  export type MapMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    width?: true
    height?: true
    layers?: true
    events?: true
  }

  export type MapMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    width?: true
    height?: true
    layers?: true
    events?: true
  }

  export type MapCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    width?: true
    height?: true
    layers?: true
    events?: true
    _all?: true
  }

  export type MapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Map to aggregate.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Maps
    **/
    _count?: true | MapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapMaxAggregateInputType
  }

  export type GetMapAggregateType<T extends MapAggregateArgs> = {
        [P in keyof T & keyof AggregateMap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMap[P]>
      : GetScalarType<T[P], AggregateMap[P]>
  }




  export type MapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapWhereInput
    orderBy?: MapOrderByWithAggregationInput | MapOrderByWithAggregationInput[]
    by: MapScalarFieldEnum[] | MapScalarFieldEnum
    having?: MapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapCountAggregateInputType | true
    _avg?: MapAvgAggregateInputType
    _sum?: MapSumAggregateInputType
    _min?: MapMinAggregateInputType
    _max?: MapMaxAggregateInputType
  }

  export type MapGroupByOutputType = {
    id: string
    projectId: string
    name: string
    width: number
    height: number
    layers: string
    events: string
    _count: MapCountAggregateOutputType | null
    _avg: MapAvgAggregateOutputType | null
    _sum: MapSumAggregateOutputType | null
    _min: MapMinAggregateOutputType | null
    _max: MapMaxAggregateOutputType | null
  }

  type GetMapGroupByPayload<T extends MapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapGroupByOutputType[P]>
            : GetScalarType<T[P], MapGroupByOutputType[P]>
        }
      >
    >


  export type MapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    width?: boolean
    height?: boolean
    layers?: boolean
    events?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["map"]>

  export type MapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    width?: boolean
    height?: boolean
    layers?: boolean
    events?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["map"]>

  export type MapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    width?: boolean
    height?: boolean
    layers?: boolean
    events?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["map"]>

  export type MapSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    width?: boolean
    height?: boolean
    layers?: boolean
    events?: boolean
  }

  export type MapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "name" | "width" | "height" | "layers" | "events", ExtArgs["result"]["map"]>
  export type MapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type MapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type MapIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $MapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Map"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      width: number
      height: number
      layers: string
      events: string
    }, ExtArgs["result"]["map"]>
    composites: {}
  }

  type MapGetPayload<S extends boolean | null | undefined | MapDefaultArgs> = $Result.GetResult<Prisma.$MapPayload, S>

  type MapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapCountAggregateInputType | true
    }

  export interface MapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Map'], meta: { name: 'Map' } }
    /**
     * Find zero or one Map that matches the filter.
     * @param {MapFindUniqueArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapFindUniqueArgs>(args: SelectSubset<T, MapFindUniqueArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Map that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapFindUniqueOrThrowArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapFindUniqueOrThrowArgs>(args: SelectSubset<T, MapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Map that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapFindFirstArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapFindFirstArgs>(args?: SelectSubset<T, MapFindFirstArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Map that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapFindFirstOrThrowArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapFindFirstOrThrowArgs>(args?: SelectSubset<T, MapFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Maps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maps
     * const maps = await prisma.map.findMany()
     * 
     * // Get first 10 Maps
     * const maps = await prisma.map.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapWithIdOnly = await prisma.map.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapFindManyArgs>(args?: SelectSubset<T, MapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Map.
     * @param {MapCreateArgs} args - Arguments to create a Map.
     * @example
     * // Create one Map
     * const Map = await prisma.map.create({
     *   data: {
     *     // ... data to create a Map
     *   }
     * })
     * 
     */
    create<T extends MapCreateArgs>(args: SelectSubset<T, MapCreateArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Maps.
     * @param {MapCreateManyArgs} args - Arguments to create many Maps.
     * @example
     * // Create many Maps
     * const map = await prisma.map.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapCreateManyArgs>(args?: SelectSubset<T, MapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Maps and returns the data saved in the database.
     * @param {MapCreateManyAndReturnArgs} args - Arguments to create many Maps.
     * @example
     * // Create many Maps
     * const map = await prisma.map.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Maps and only return the `id`
     * const mapWithIdOnly = await prisma.map.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MapCreateManyAndReturnArgs>(args?: SelectSubset<T, MapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Map.
     * @param {MapDeleteArgs} args - Arguments to delete one Map.
     * @example
     * // Delete one Map
     * const Map = await prisma.map.delete({
     *   where: {
     *     // ... filter to delete one Map
     *   }
     * })
     * 
     */
    delete<T extends MapDeleteArgs>(args: SelectSubset<T, MapDeleteArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Map.
     * @param {MapUpdateArgs} args - Arguments to update one Map.
     * @example
     * // Update one Map
     * const map = await prisma.map.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapUpdateArgs>(args: SelectSubset<T, MapUpdateArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Maps.
     * @param {MapDeleteManyArgs} args - Arguments to filter Maps to delete.
     * @example
     * // Delete a few Maps
     * const { count } = await prisma.map.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapDeleteManyArgs>(args?: SelectSubset<T, MapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maps
     * const map = await prisma.map.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapUpdateManyArgs>(args: SelectSubset<T, MapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maps and returns the data updated in the database.
     * @param {MapUpdateManyAndReturnArgs} args - Arguments to update many Maps.
     * @example
     * // Update many Maps
     * const map = await prisma.map.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Maps and only return the `id`
     * const mapWithIdOnly = await prisma.map.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MapUpdateManyAndReturnArgs>(args: SelectSubset<T, MapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Map.
     * @param {MapUpsertArgs} args - Arguments to update or create a Map.
     * @example
     * // Update or create a Map
     * const map = await prisma.map.upsert({
     *   create: {
     *     // ... data to create a Map
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Map we want to update
     *   }
     * })
     */
    upsert<T extends MapUpsertArgs>(args: SelectSubset<T, MapUpsertArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Maps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapCountArgs} args - Arguments to filter Maps to count.
     * @example
     * // Count the number of Maps
     * const count = await prisma.map.count({
     *   where: {
     *     // ... the filter for the Maps we want to count
     *   }
     * })
    **/
    count<T extends MapCountArgs>(
      args?: Subset<T, MapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Map.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MapAggregateArgs>(args: Subset<T, MapAggregateArgs>): Prisma.PrismaPromise<GetMapAggregateType<T>>

    /**
     * Group by Map.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapGroupByArgs['orderBy'] }
        : { orderBy?: MapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Map model
   */
  readonly fields: MapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Map.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Map model
   */
  interface MapFieldRefs {
    readonly id: FieldRef<"Map", 'String'>
    readonly projectId: FieldRef<"Map", 'String'>
    readonly name: FieldRef<"Map", 'String'>
    readonly width: FieldRef<"Map", 'Int'>
    readonly height: FieldRef<"Map", 'Int'>
    readonly layers: FieldRef<"Map", 'String'>
    readonly events: FieldRef<"Map", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Map findUnique
   */
  export type MapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map findUniqueOrThrow
   */
  export type MapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map findFirst
   */
  export type MapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maps.
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maps.
     */
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[]
  }

  /**
   * Map findFirstOrThrow
   */
  export type MapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maps.
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maps.
     */
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[]
  }

  /**
   * Map findMany
   */
  export type MapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Maps to fetch.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Maps.
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[]
  }

  /**
   * Map create
   */
  export type MapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * The data needed to create a Map.
     */
    data: XOR<MapCreateInput, MapUncheckedCreateInput>
  }

  /**
   * Map createMany
   */
  export type MapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Maps.
     */
    data: MapCreateManyInput | MapCreateManyInput[]
  }

  /**
   * Map createManyAndReturn
   */
  export type MapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * The data used to create many Maps.
     */
    data: MapCreateManyInput | MapCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Map update
   */
  export type MapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * The data needed to update a Map.
     */
    data: XOR<MapUpdateInput, MapUncheckedUpdateInput>
    /**
     * Choose, which Map to update.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map updateMany
   */
  export type MapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Maps.
     */
    data: XOR<MapUpdateManyMutationInput, MapUncheckedUpdateManyInput>
    /**
     * Filter which Maps to update
     */
    where?: MapWhereInput
    /**
     * Limit how many Maps to update.
     */
    limit?: number
  }

  /**
   * Map updateManyAndReturn
   */
  export type MapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * The data used to update Maps.
     */
    data: XOR<MapUpdateManyMutationInput, MapUncheckedUpdateManyInput>
    /**
     * Filter which Maps to update
     */
    where?: MapWhereInput
    /**
     * Limit how many Maps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Map upsert
   */
  export type MapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * The filter to search for the Map to update in case it exists.
     */
    where: MapWhereUniqueInput
    /**
     * In case the Map found by the `where` argument doesn't exist, create a new Map with this data.
     */
    create: XOR<MapCreateInput, MapUncheckedCreateInput>
    /**
     * In case the Map was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapUpdateInput, MapUncheckedUpdateInput>
  }

  /**
   * Map delete
   */
  export type MapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter which Map to delete.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map deleteMany
   */
  export type MapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maps to delete
     */
    where?: MapWhereInput
    /**
     * Limit how many Maps to delete.
     */
    limit?: number
  }

  /**
   * Map without action
   */
  export type MapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
  }


  /**
   * Model Tileset
   */

  export type AggregateTileset = {
    _count: TilesetCountAggregateOutputType | null
    _avg: TilesetAvgAggregateOutputType | null
    _sum: TilesetSumAggregateOutputType | null
    _min: TilesetMinAggregateOutputType | null
    _max: TilesetMaxAggregateOutputType | null
  }

  export type TilesetAvgAggregateOutputType = {
    tileSize: number | null
    columns: number | null
    rows: number | null
  }

  export type TilesetSumAggregateOutputType = {
    tileSize: number | null
    columns: number | null
    rows: number | null
  }

  export type TilesetMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    imageUrl: string | null
    tileSize: number | null
    columns: number | null
    rows: number | null
    stableIdMap: string | null
    hash: string | null
    metadata: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TilesetMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    imageUrl: string | null
    tileSize: number | null
    columns: number | null
    rows: number | null
    stableIdMap: string | null
    hash: string | null
    metadata: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TilesetCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    imageUrl: number
    tileSize: number
    columns: number
    rows: number
    stableIdMap: number
    hash: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TilesetAvgAggregateInputType = {
    tileSize?: true
    columns?: true
    rows?: true
  }

  export type TilesetSumAggregateInputType = {
    tileSize?: true
    columns?: true
    rows?: true
  }

  export type TilesetMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    imageUrl?: true
    tileSize?: true
    columns?: true
    rows?: true
    stableIdMap?: true
    hash?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TilesetMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    imageUrl?: true
    tileSize?: true
    columns?: true
    rows?: true
    stableIdMap?: true
    hash?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TilesetCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    imageUrl?: true
    tileSize?: true
    columns?: true
    rows?: true
    stableIdMap?: true
    hash?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TilesetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tileset to aggregate.
     */
    where?: TilesetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tilesets to fetch.
     */
    orderBy?: TilesetOrderByWithRelationInput | TilesetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TilesetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tilesets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tilesets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tilesets
    **/
    _count?: true | TilesetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TilesetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TilesetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TilesetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TilesetMaxAggregateInputType
  }

  export type GetTilesetAggregateType<T extends TilesetAggregateArgs> = {
        [P in keyof T & keyof AggregateTileset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTileset[P]>
      : GetScalarType<T[P], AggregateTileset[P]>
  }




  export type TilesetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TilesetWhereInput
    orderBy?: TilesetOrderByWithAggregationInput | TilesetOrderByWithAggregationInput[]
    by: TilesetScalarFieldEnum[] | TilesetScalarFieldEnum
    having?: TilesetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TilesetCountAggregateInputType | true
    _avg?: TilesetAvgAggregateInputType
    _sum?: TilesetSumAggregateInputType
    _min?: TilesetMinAggregateInputType
    _max?: TilesetMaxAggregateInputType
  }

  export type TilesetGroupByOutputType = {
    id: string
    projectId: string
    name: string
    imageUrl: string
    tileSize: number
    columns: number
    rows: number
    stableIdMap: string
    hash: string
    metadata: string | null
    createdAt: Date
    updatedAt: Date
    _count: TilesetCountAggregateOutputType | null
    _avg: TilesetAvgAggregateOutputType | null
    _sum: TilesetSumAggregateOutputType | null
    _min: TilesetMinAggregateOutputType | null
    _max: TilesetMaxAggregateOutputType | null
  }

  type GetTilesetGroupByPayload<T extends TilesetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TilesetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TilesetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TilesetGroupByOutputType[P]>
            : GetScalarType<T[P], TilesetGroupByOutputType[P]>
        }
      >
    >


  export type TilesetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    imageUrl?: boolean
    tileSize?: boolean
    columns?: boolean
    rows?: boolean
    stableIdMap?: boolean
    hash?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tileset"]>

  export type TilesetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    imageUrl?: boolean
    tileSize?: boolean
    columns?: boolean
    rows?: boolean
    stableIdMap?: boolean
    hash?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tileset"]>

  export type TilesetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    imageUrl?: boolean
    tileSize?: boolean
    columns?: boolean
    rows?: boolean
    stableIdMap?: boolean
    hash?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tileset"]>

  export type TilesetSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    imageUrl?: boolean
    tileSize?: boolean
    columns?: boolean
    rows?: boolean
    stableIdMap?: boolean
    hash?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TilesetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "name" | "imageUrl" | "tileSize" | "columns" | "rows" | "stableIdMap" | "hash" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["tileset"]>
  export type TilesetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type TilesetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type TilesetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $TilesetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tileset"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      imageUrl: string
      tileSize: number
      columns: number
      rows: number
      stableIdMap: string
      hash: string
      metadata: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tileset"]>
    composites: {}
  }

  type TilesetGetPayload<S extends boolean | null | undefined | TilesetDefaultArgs> = $Result.GetResult<Prisma.$TilesetPayload, S>

  type TilesetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TilesetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TilesetCountAggregateInputType | true
    }

  export interface TilesetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tileset'], meta: { name: 'Tileset' } }
    /**
     * Find zero or one Tileset that matches the filter.
     * @param {TilesetFindUniqueArgs} args - Arguments to find a Tileset
     * @example
     * // Get one Tileset
     * const tileset = await prisma.tileset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TilesetFindUniqueArgs>(args: SelectSubset<T, TilesetFindUniqueArgs<ExtArgs>>): Prisma__TilesetClient<$Result.GetResult<Prisma.$TilesetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tileset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TilesetFindUniqueOrThrowArgs} args - Arguments to find a Tileset
     * @example
     * // Get one Tileset
     * const tileset = await prisma.tileset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TilesetFindUniqueOrThrowArgs>(args: SelectSubset<T, TilesetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TilesetClient<$Result.GetResult<Prisma.$TilesetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tileset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TilesetFindFirstArgs} args - Arguments to find a Tileset
     * @example
     * // Get one Tileset
     * const tileset = await prisma.tileset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TilesetFindFirstArgs>(args?: SelectSubset<T, TilesetFindFirstArgs<ExtArgs>>): Prisma__TilesetClient<$Result.GetResult<Prisma.$TilesetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tileset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TilesetFindFirstOrThrowArgs} args - Arguments to find a Tileset
     * @example
     * // Get one Tileset
     * const tileset = await prisma.tileset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TilesetFindFirstOrThrowArgs>(args?: SelectSubset<T, TilesetFindFirstOrThrowArgs<ExtArgs>>): Prisma__TilesetClient<$Result.GetResult<Prisma.$TilesetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tilesets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TilesetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tilesets
     * const tilesets = await prisma.tileset.findMany()
     * 
     * // Get first 10 Tilesets
     * const tilesets = await prisma.tileset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tilesetWithIdOnly = await prisma.tileset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TilesetFindManyArgs>(args?: SelectSubset<T, TilesetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TilesetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tileset.
     * @param {TilesetCreateArgs} args - Arguments to create a Tileset.
     * @example
     * // Create one Tileset
     * const Tileset = await prisma.tileset.create({
     *   data: {
     *     // ... data to create a Tileset
     *   }
     * })
     * 
     */
    create<T extends TilesetCreateArgs>(args: SelectSubset<T, TilesetCreateArgs<ExtArgs>>): Prisma__TilesetClient<$Result.GetResult<Prisma.$TilesetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tilesets.
     * @param {TilesetCreateManyArgs} args - Arguments to create many Tilesets.
     * @example
     * // Create many Tilesets
     * const tileset = await prisma.tileset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TilesetCreateManyArgs>(args?: SelectSubset<T, TilesetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tilesets and returns the data saved in the database.
     * @param {TilesetCreateManyAndReturnArgs} args - Arguments to create many Tilesets.
     * @example
     * // Create many Tilesets
     * const tileset = await prisma.tileset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tilesets and only return the `id`
     * const tilesetWithIdOnly = await prisma.tileset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TilesetCreateManyAndReturnArgs>(args?: SelectSubset<T, TilesetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TilesetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tileset.
     * @param {TilesetDeleteArgs} args - Arguments to delete one Tileset.
     * @example
     * // Delete one Tileset
     * const Tileset = await prisma.tileset.delete({
     *   where: {
     *     // ... filter to delete one Tileset
     *   }
     * })
     * 
     */
    delete<T extends TilesetDeleteArgs>(args: SelectSubset<T, TilesetDeleteArgs<ExtArgs>>): Prisma__TilesetClient<$Result.GetResult<Prisma.$TilesetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tileset.
     * @param {TilesetUpdateArgs} args - Arguments to update one Tileset.
     * @example
     * // Update one Tileset
     * const tileset = await prisma.tileset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TilesetUpdateArgs>(args: SelectSubset<T, TilesetUpdateArgs<ExtArgs>>): Prisma__TilesetClient<$Result.GetResult<Prisma.$TilesetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tilesets.
     * @param {TilesetDeleteManyArgs} args - Arguments to filter Tilesets to delete.
     * @example
     * // Delete a few Tilesets
     * const { count } = await prisma.tileset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TilesetDeleteManyArgs>(args?: SelectSubset<T, TilesetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tilesets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TilesetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tilesets
     * const tileset = await prisma.tileset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TilesetUpdateManyArgs>(args: SelectSubset<T, TilesetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tilesets and returns the data updated in the database.
     * @param {TilesetUpdateManyAndReturnArgs} args - Arguments to update many Tilesets.
     * @example
     * // Update many Tilesets
     * const tileset = await prisma.tileset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tilesets and only return the `id`
     * const tilesetWithIdOnly = await prisma.tileset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TilesetUpdateManyAndReturnArgs>(args: SelectSubset<T, TilesetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TilesetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tileset.
     * @param {TilesetUpsertArgs} args - Arguments to update or create a Tileset.
     * @example
     * // Update or create a Tileset
     * const tileset = await prisma.tileset.upsert({
     *   create: {
     *     // ... data to create a Tileset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tileset we want to update
     *   }
     * })
     */
    upsert<T extends TilesetUpsertArgs>(args: SelectSubset<T, TilesetUpsertArgs<ExtArgs>>): Prisma__TilesetClient<$Result.GetResult<Prisma.$TilesetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tilesets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TilesetCountArgs} args - Arguments to filter Tilesets to count.
     * @example
     * // Count the number of Tilesets
     * const count = await prisma.tileset.count({
     *   where: {
     *     // ... the filter for the Tilesets we want to count
     *   }
     * })
    **/
    count<T extends TilesetCountArgs>(
      args?: Subset<T, TilesetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TilesetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tileset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TilesetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TilesetAggregateArgs>(args: Subset<T, TilesetAggregateArgs>): Prisma.PrismaPromise<GetTilesetAggregateType<T>>

    /**
     * Group by Tileset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TilesetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TilesetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TilesetGroupByArgs['orderBy'] }
        : { orderBy?: TilesetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TilesetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTilesetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tileset model
   */
  readonly fields: TilesetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tileset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TilesetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tileset model
   */
  interface TilesetFieldRefs {
    readonly id: FieldRef<"Tileset", 'String'>
    readonly projectId: FieldRef<"Tileset", 'String'>
    readonly name: FieldRef<"Tileset", 'String'>
    readonly imageUrl: FieldRef<"Tileset", 'String'>
    readonly tileSize: FieldRef<"Tileset", 'Int'>
    readonly columns: FieldRef<"Tileset", 'Int'>
    readonly rows: FieldRef<"Tileset", 'Int'>
    readonly stableIdMap: FieldRef<"Tileset", 'String'>
    readonly hash: FieldRef<"Tileset", 'String'>
    readonly metadata: FieldRef<"Tileset", 'String'>
    readonly createdAt: FieldRef<"Tileset", 'DateTime'>
    readonly updatedAt: FieldRef<"Tileset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tileset findUnique
   */
  export type TilesetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tileset
     */
    select?: TilesetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tileset
     */
    omit?: TilesetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TilesetInclude<ExtArgs> | null
    /**
     * Filter, which Tileset to fetch.
     */
    where: TilesetWhereUniqueInput
  }

  /**
   * Tileset findUniqueOrThrow
   */
  export type TilesetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tileset
     */
    select?: TilesetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tileset
     */
    omit?: TilesetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TilesetInclude<ExtArgs> | null
    /**
     * Filter, which Tileset to fetch.
     */
    where: TilesetWhereUniqueInput
  }

  /**
   * Tileset findFirst
   */
  export type TilesetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tileset
     */
    select?: TilesetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tileset
     */
    omit?: TilesetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TilesetInclude<ExtArgs> | null
    /**
     * Filter, which Tileset to fetch.
     */
    where?: TilesetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tilesets to fetch.
     */
    orderBy?: TilesetOrderByWithRelationInput | TilesetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tilesets.
     */
    cursor?: TilesetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tilesets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tilesets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tilesets.
     */
    distinct?: TilesetScalarFieldEnum | TilesetScalarFieldEnum[]
  }

  /**
   * Tileset findFirstOrThrow
   */
  export type TilesetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tileset
     */
    select?: TilesetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tileset
     */
    omit?: TilesetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TilesetInclude<ExtArgs> | null
    /**
     * Filter, which Tileset to fetch.
     */
    where?: TilesetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tilesets to fetch.
     */
    orderBy?: TilesetOrderByWithRelationInput | TilesetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tilesets.
     */
    cursor?: TilesetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tilesets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tilesets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tilesets.
     */
    distinct?: TilesetScalarFieldEnum | TilesetScalarFieldEnum[]
  }

  /**
   * Tileset findMany
   */
  export type TilesetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tileset
     */
    select?: TilesetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tileset
     */
    omit?: TilesetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TilesetInclude<ExtArgs> | null
    /**
     * Filter, which Tilesets to fetch.
     */
    where?: TilesetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tilesets to fetch.
     */
    orderBy?: TilesetOrderByWithRelationInput | TilesetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tilesets.
     */
    cursor?: TilesetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tilesets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tilesets.
     */
    skip?: number
    distinct?: TilesetScalarFieldEnum | TilesetScalarFieldEnum[]
  }

  /**
   * Tileset create
   */
  export type TilesetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tileset
     */
    select?: TilesetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tileset
     */
    omit?: TilesetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TilesetInclude<ExtArgs> | null
    /**
     * The data needed to create a Tileset.
     */
    data: XOR<TilesetCreateInput, TilesetUncheckedCreateInput>
  }

  /**
   * Tileset createMany
   */
  export type TilesetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tilesets.
     */
    data: TilesetCreateManyInput | TilesetCreateManyInput[]
  }

  /**
   * Tileset createManyAndReturn
   */
  export type TilesetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tileset
     */
    select?: TilesetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tileset
     */
    omit?: TilesetOmit<ExtArgs> | null
    /**
     * The data used to create many Tilesets.
     */
    data: TilesetCreateManyInput | TilesetCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TilesetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tileset update
   */
  export type TilesetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tileset
     */
    select?: TilesetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tileset
     */
    omit?: TilesetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TilesetInclude<ExtArgs> | null
    /**
     * The data needed to update a Tileset.
     */
    data: XOR<TilesetUpdateInput, TilesetUncheckedUpdateInput>
    /**
     * Choose, which Tileset to update.
     */
    where: TilesetWhereUniqueInput
  }

  /**
   * Tileset updateMany
   */
  export type TilesetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tilesets.
     */
    data: XOR<TilesetUpdateManyMutationInput, TilesetUncheckedUpdateManyInput>
    /**
     * Filter which Tilesets to update
     */
    where?: TilesetWhereInput
    /**
     * Limit how many Tilesets to update.
     */
    limit?: number
  }

  /**
   * Tileset updateManyAndReturn
   */
  export type TilesetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tileset
     */
    select?: TilesetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tileset
     */
    omit?: TilesetOmit<ExtArgs> | null
    /**
     * The data used to update Tilesets.
     */
    data: XOR<TilesetUpdateManyMutationInput, TilesetUncheckedUpdateManyInput>
    /**
     * Filter which Tilesets to update
     */
    where?: TilesetWhereInput
    /**
     * Limit how many Tilesets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TilesetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tileset upsert
   */
  export type TilesetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tileset
     */
    select?: TilesetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tileset
     */
    omit?: TilesetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TilesetInclude<ExtArgs> | null
    /**
     * The filter to search for the Tileset to update in case it exists.
     */
    where: TilesetWhereUniqueInput
    /**
     * In case the Tileset found by the `where` argument doesn't exist, create a new Tileset with this data.
     */
    create: XOR<TilesetCreateInput, TilesetUncheckedCreateInput>
    /**
     * In case the Tileset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TilesetUpdateInput, TilesetUncheckedUpdateInput>
  }

  /**
   * Tileset delete
   */
  export type TilesetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tileset
     */
    select?: TilesetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tileset
     */
    omit?: TilesetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TilesetInclude<ExtArgs> | null
    /**
     * Filter which Tileset to delete.
     */
    where: TilesetWhereUniqueInput
  }

  /**
   * Tileset deleteMany
   */
  export type TilesetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tilesets to delete
     */
    where?: TilesetWhereInput
    /**
     * Limit how many Tilesets to delete.
     */
    limit?: number
  }

  /**
   * Tileset without action
   */
  export type TilesetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tileset
     */
    select?: TilesetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tileset
     */
    omit?: TilesetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TilesetInclude<ExtArgs> | null
  }


  /**
   * Model Sprite
   */

  export type AggregateSprite = {
    _count: SpriteCountAggregateOutputType | null
    _min: SpriteMinAggregateOutputType | null
    _max: SpriteMaxAggregateOutputType | null
  }

  export type SpriteMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    imageUrl: string | null
    animations: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpriteMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    imageUrl: string | null
    animations: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpriteCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    imageUrl: number
    animations: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SpriteMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    imageUrl?: true
    animations?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpriteMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    imageUrl?: true
    animations?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpriteCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    imageUrl?: true
    animations?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SpriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sprite to aggregate.
     */
    where?: SpriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sprites to fetch.
     */
    orderBy?: SpriteOrderByWithRelationInput | SpriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sprites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sprites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sprites
    **/
    _count?: true | SpriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpriteMaxAggregateInputType
  }

  export type GetSpriteAggregateType<T extends SpriteAggregateArgs> = {
        [P in keyof T & keyof AggregateSprite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSprite[P]>
      : GetScalarType<T[P], AggregateSprite[P]>
  }




  export type SpriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpriteWhereInput
    orderBy?: SpriteOrderByWithAggregationInput | SpriteOrderByWithAggregationInput[]
    by: SpriteScalarFieldEnum[] | SpriteScalarFieldEnum
    having?: SpriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpriteCountAggregateInputType | true
    _min?: SpriteMinAggregateInputType
    _max?: SpriteMaxAggregateInputType
  }

  export type SpriteGroupByOutputType = {
    id: string
    projectId: string
    name: string
    imageUrl: string
    animations: string
    createdAt: Date
    updatedAt: Date
    _count: SpriteCountAggregateOutputType | null
    _min: SpriteMinAggregateOutputType | null
    _max: SpriteMaxAggregateOutputType | null
  }

  type GetSpriteGroupByPayload<T extends SpriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpriteGroupByOutputType[P]>
            : GetScalarType<T[P], SpriteGroupByOutputType[P]>
        }
      >
    >


  export type SpriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    imageUrl?: boolean
    animations?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sprite"]>

  export type SpriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    imageUrl?: boolean
    animations?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sprite"]>

  export type SpriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    imageUrl?: boolean
    animations?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sprite"]>

  export type SpriteSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    imageUrl?: boolean
    animations?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SpriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "name" | "imageUrl" | "animations" | "createdAt" | "updatedAt", ExtArgs["result"]["sprite"]>
  export type SpriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type SpriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type SpriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $SpritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sprite"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      imageUrl: string
      animations: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sprite"]>
    composites: {}
  }

  type SpriteGetPayload<S extends boolean | null | undefined | SpriteDefaultArgs> = $Result.GetResult<Prisma.$SpritePayload, S>

  type SpriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpriteCountAggregateInputType | true
    }

  export interface SpriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sprite'], meta: { name: 'Sprite' } }
    /**
     * Find zero or one Sprite that matches the filter.
     * @param {SpriteFindUniqueArgs} args - Arguments to find a Sprite
     * @example
     * // Get one Sprite
     * const sprite = await prisma.sprite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpriteFindUniqueArgs>(args: SelectSubset<T, SpriteFindUniqueArgs<ExtArgs>>): Prisma__SpriteClient<$Result.GetResult<Prisma.$SpritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sprite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpriteFindUniqueOrThrowArgs} args - Arguments to find a Sprite
     * @example
     * // Get one Sprite
     * const sprite = await prisma.sprite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpriteFindUniqueOrThrowArgs>(args: SelectSubset<T, SpriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpriteClient<$Result.GetResult<Prisma.$SpritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sprite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpriteFindFirstArgs} args - Arguments to find a Sprite
     * @example
     * // Get one Sprite
     * const sprite = await prisma.sprite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpriteFindFirstArgs>(args?: SelectSubset<T, SpriteFindFirstArgs<ExtArgs>>): Prisma__SpriteClient<$Result.GetResult<Prisma.$SpritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sprite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpriteFindFirstOrThrowArgs} args - Arguments to find a Sprite
     * @example
     * // Get one Sprite
     * const sprite = await prisma.sprite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpriteFindFirstOrThrowArgs>(args?: SelectSubset<T, SpriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpriteClient<$Result.GetResult<Prisma.$SpritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sprites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sprites
     * const sprites = await prisma.sprite.findMany()
     * 
     * // Get first 10 Sprites
     * const sprites = await prisma.sprite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spriteWithIdOnly = await prisma.sprite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpriteFindManyArgs>(args?: SelectSubset<T, SpriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sprite.
     * @param {SpriteCreateArgs} args - Arguments to create a Sprite.
     * @example
     * // Create one Sprite
     * const Sprite = await prisma.sprite.create({
     *   data: {
     *     // ... data to create a Sprite
     *   }
     * })
     * 
     */
    create<T extends SpriteCreateArgs>(args: SelectSubset<T, SpriteCreateArgs<ExtArgs>>): Prisma__SpriteClient<$Result.GetResult<Prisma.$SpritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sprites.
     * @param {SpriteCreateManyArgs} args - Arguments to create many Sprites.
     * @example
     * // Create many Sprites
     * const sprite = await prisma.sprite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpriteCreateManyArgs>(args?: SelectSubset<T, SpriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sprites and returns the data saved in the database.
     * @param {SpriteCreateManyAndReturnArgs} args - Arguments to create many Sprites.
     * @example
     * // Create many Sprites
     * const sprite = await prisma.sprite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sprites and only return the `id`
     * const spriteWithIdOnly = await prisma.sprite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpriteCreateManyAndReturnArgs>(args?: SelectSubset<T, SpriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sprite.
     * @param {SpriteDeleteArgs} args - Arguments to delete one Sprite.
     * @example
     * // Delete one Sprite
     * const Sprite = await prisma.sprite.delete({
     *   where: {
     *     // ... filter to delete one Sprite
     *   }
     * })
     * 
     */
    delete<T extends SpriteDeleteArgs>(args: SelectSubset<T, SpriteDeleteArgs<ExtArgs>>): Prisma__SpriteClient<$Result.GetResult<Prisma.$SpritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sprite.
     * @param {SpriteUpdateArgs} args - Arguments to update one Sprite.
     * @example
     * // Update one Sprite
     * const sprite = await prisma.sprite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpriteUpdateArgs>(args: SelectSubset<T, SpriteUpdateArgs<ExtArgs>>): Prisma__SpriteClient<$Result.GetResult<Prisma.$SpritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sprites.
     * @param {SpriteDeleteManyArgs} args - Arguments to filter Sprites to delete.
     * @example
     * // Delete a few Sprites
     * const { count } = await prisma.sprite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpriteDeleteManyArgs>(args?: SelectSubset<T, SpriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sprites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sprites
     * const sprite = await prisma.sprite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpriteUpdateManyArgs>(args: SelectSubset<T, SpriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sprites and returns the data updated in the database.
     * @param {SpriteUpdateManyAndReturnArgs} args - Arguments to update many Sprites.
     * @example
     * // Update many Sprites
     * const sprite = await prisma.sprite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sprites and only return the `id`
     * const spriteWithIdOnly = await prisma.sprite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpriteUpdateManyAndReturnArgs>(args: SelectSubset<T, SpriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sprite.
     * @param {SpriteUpsertArgs} args - Arguments to update or create a Sprite.
     * @example
     * // Update or create a Sprite
     * const sprite = await prisma.sprite.upsert({
     *   create: {
     *     // ... data to create a Sprite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sprite we want to update
     *   }
     * })
     */
    upsert<T extends SpriteUpsertArgs>(args: SelectSubset<T, SpriteUpsertArgs<ExtArgs>>): Prisma__SpriteClient<$Result.GetResult<Prisma.$SpritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sprites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpriteCountArgs} args - Arguments to filter Sprites to count.
     * @example
     * // Count the number of Sprites
     * const count = await prisma.sprite.count({
     *   where: {
     *     // ... the filter for the Sprites we want to count
     *   }
     * })
    **/
    count<T extends SpriteCountArgs>(
      args?: Subset<T, SpriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sprite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpriteAggregateArgs>(args: Subset<T, SpriteAggregateArgs>): Prisma.PrismaPromise<GetSpriteAggregateType<T>>

    /**
     * Group by Sprite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpriteGroupByArgs['orderBy'] }
        : { orderBy?: SpriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sprite model
   */
  readonly fields: SpriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sprite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sprite model
   */
  interface SpriteFieldRefs {
    readonly id: FieldRef<"Sprite", 'String'>
    readonly projectId: FieldRef<"Sprite", 'String'>
    readonly name: FieldRef<"Sprite", 'String'>
    readonly imageUrl: FieldRef<"Sprite", 'String'>
    readonly animations: FieldRef<"Sprite", 'String'>
    readonly createdAt: FieldRef<"Sprite", 'DateTime'>
    readonly updatedAt: FieldRef<"Sprite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sprite findUnique
   */
  export type SpriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprite
     */
    select?: SpriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprite
     */
    omit?: SpriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpriteInclude<ExtArgs> | null
    /**
     * Filter, which Sprite to fetch.
     */
    where: SpriteWhereUniqueInput
  }

  /**
   * Sprite findUniqueOrThrow
   */
  export type SpriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprite
     */
    select?: SpriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprite
     */
    omit?: SpriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpriteInclude<ExtArgs> | null
    /**
     * Filter, which Sprite to fetch.
     */
    where: SpriteWhereUniqueInput
  }

  /**
   * Sprite findFirst
   */
  export type SpriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprite
     */
    select?: SpriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprite
     */
    omit?: SpriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpriteInclude<ExtArgs> | null
    /**
     * Filter, which Sprite to fetch.
     */
    where?: SpriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sprites to fetch.
     */
    orderBy?: SpriteOrderByWithRelationInput | SpriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sprites.
     */
    cursor?: SpriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sprites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sprites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sprites.
     */
    distinct?: SpriteScalarFieldEnum | SpriteScalarFieldEnum[]
  }

  /**
   * Sprite findFirstOrThrow
   */
  export type SpriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprite
     */
    select?: SpriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprite
     */
    omit?: SpriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpriteInclude<ExtArgs> | null
    /**
     * Filter, which Sprite to fetch.
     */
    where?: SpriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sprites to fetch.
     */
    orderBy?: SpriteOrderByWithRelationInput | SpriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sprites.
     */
    cursor?: SpriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sprites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sprites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sprites.
     */
    distinct?: SpriteScalarFieldEnum | SpriteScalarFieldEnum[]
  }

  /**
   * Sprite findMany
   */
  export type SpriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprite
     */
    select?: SpriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprite
     */
    omit?: SpriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpriteInclude<ExtArgs> | null
    /**
     * Filter, which Sprites to fetch.
     */
    where?: SpriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sprites to fetch.
     */
    orderBy?: SpriteOrderByWithRelationInput | SpriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sprites.
     */
    cursor?: SpriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sprites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sprites.
     */
    skip?: number
    distinct?: SpriteScalarFieldEnum | SpriteScalarFieldEnum[]
  }

  /**
   * Sprite create
   */
  export type SpriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprite
     */
    select?: SpriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprite
     */
    omit?: SpriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Sprite.
     */
    data: XOR<SpriteCreateInput, SpriteUncheckedCreateInput>
  }

  /**
   * Sprite createMany
   */
  export type SpriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sprites.
     */
    data: SpriteCreateManyInput | SpriteCreateManyInput[]
  }

  /**
   * Sprite createManyAndReturn
   */
  export type SpriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprite
     */
    select?: SpriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sprite
     */
    omit?: SpriteOmit<ExtArgs> | null
    /**
     * The data used to create many Sprites.
     */
    data: SpriteCreateManyInput | SpriteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sprite update
   */
  export type SpriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprite
     */
    select?: SpriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprite
     */
    omit?: SpriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Sprite.
     */
    data: XOR<SpriteUpdateInput, SpriteUncheckedUpdateInput>
    /**
     * Choose, which Sprite to update.
     */
    where: SpriteWhereUniqueInput
  }

  /**
   * Sprite updateMany
   */
  export type SpriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sprites.
     */
    data: XOR<SpriteUpdateManyMutationInput, SpriteUncheckedUpdateManyInput>
    /**
     * Filter which Sprites to update
     */
    where?: SpriteWhereInput
    /**
     * Limit how many Sprites to update.
     */
    limit?: number
  }

  /**
   * Sprite updateManyAndReturn
   */
  export type SpriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprite
     */
    select?: SpriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sprite
     */
    omit?: SpriteOmit<ExtArgs> | null
    /**
     * The data used to update Sprites.
     */
    data: XOR<SpriteUpdateManyMutationInput, SpriteUncheckedUpdateManyInput>
    /**
     * Filter which Sprites to update
     */
    where?: SpriteWhereInput
    /**
     * Limit how many Sprites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sprite upsert
   */
  export type SpriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprite
     */
    select?: SpriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprite
     */
    omit?: SpriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Sprite to update in case it exists.
     */
    where: SpriteWhereUniqueInput
    /**
     * In case the Sprite found by the `where` argument doesn't exist, create a new Sprite with this data.
     */
    create: XOR<SpriteCreateInput, SpriteUncheckedCreateInput>
    /**
     * In case the Sprite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpriteUpdateInput, SpriteUncheckedUpdateInput>
  }

  /**
   * Sprite delete
   */
  export type SpriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprite
     */
    select?: SpriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprite
     */
    omit?: SpriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpriteInclude<ExtArgs> | null
    /**
     * Filter which Sprite to delete.
     */
    where: SpriteWhereUniqueInput
  }

  /**
   * Sprite deleteMany
   */
  export type SpriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sprites to delete
     */
    where?: SpriteWhereInput
    /**
     * Limit how many Sprites to delete.
     */
    limit?: number
  }

  /**
   * Sprite without action
   */
  export type SpriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprite
     */
    select?: SpriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprite
     */
    omit?: SpriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpriteInclude<ExtArgs> | null
  }


  /**
   * Model AIGenerationJob
   */

  export type AggregateAIGenerationJob = {
    _count: AIGenerationJobCountAggregateOutputType | null
    _min: AIGenerationJobMinAggregateOutputType | null
    _max: AIGenerationJobMaxAggregateOutputType | null
  }

  export type AIGenerationJobMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    status: string | null
    request: string | null
    result: string | null
    error: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AIGenerationJobMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    status: string | null
    request: string | null
    result: string | null
    error: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AIGenerationJobCountAggregateOutputType = {
    id: number
    projectId: number
    status: number
    request: number
    result: number
    error: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AIGenerationJobMinAggregateInputType = {
    id?: true
    projectId?: true
    status?: true
    request?: true
    result?: true
    error?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AIGenerationJobMaxAggregateInputType = {
    id?: true
    projectId?: true
    status?: true
    request?: true
    result?: true
    error?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AIGenerationJobCountAggregateInputType = {
    id?: true
    projectId?: true
    status?: true
    request?: true
    result?: true
    error?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AIGenerationJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIGenerationJob to aggregate.
     */
    where?: AIGenerationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIGenerationJobs to fetch.
     */
    orderBy?: AIGenerationJobOrderByWithRelationInput | AIGenerationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIGenerationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIGenerationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIGenerationJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIGenerationJobs
    **/
    _count?: true | AIGenerationJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIGenerationJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIGenerationJobMaxAggregateInputType
  }

  export type GetAIGenerationJobAggregateType<T extends AIGenerationJobAggregateArgs> = {
        [P in keyof T & keyof AggregateAIGenerationJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIGenerationJob[P]>
      : GetScalarType<T[P], AggregateAIGenerationJob[P]>
  }




  export type AIGenerationJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIGenerationJobWhereInput
    orderBy?: AIGenerationJobOrderByWithAggregationInput | AIGenerationJobOrderByWithAggregationInput[]
    by: AIGenerationJobScalarFieldEnum[] | AIGenerationJobScalarFieldEnum
    having?: AIGenerationJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIGenerationJobCountAggregateInputType | true
    _min?: AIGenerationJobMinAggregateInputType
    _max?: AIGenerationJobMaxAggregateInputType
  }

  export type AIGenerationJobGroupByOutputType = {
    id: string
    projectId: string
    status: string
    request: string
    result: string | null
    error: string | null
    createdAt: Date
    updatedAt: Date
    _count: AIGenerationJobCountAggregateOutputType | null
    _min: AIGenerationJobMinAggregateOutputType | null
    _max: AIGenerationJobMaxAggregateOutputType | null
  }

  type GetAIGenerationJobGroupByPayload<T extends AIGenerationJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIGenerationJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIGenerationJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIGenerationJobGroupByOutputType[P]>
            : GetScalarType<T[P], AIGenerationJobGroupByOutputType[P]>
        }
      >
    >


  export type AIGenerationJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    status?: boolean
    request?: boolean
    result?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIGenerationJob"]>

  export type AIGenerationJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    status?: boolean
    request?: boolean
    result?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIGenerationJob"]>

  export type AIGenerationJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    status?: boolean
    request?: boolean
    result?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIGenerationJob"]>

  export type AIGenerationJobSelectScalar = {
    id?: boolean
    projectId?: boolean
    status?: boolean
    request?: boolean
    result?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AIGenerationJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "status" | "request" | "result" | "error" | "createdAt" | "updatedAt", ExtArgs["result"]["aIGenerationJob"]>
  export type AIGenerationJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type AIGenerationJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type AIGenerationJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $AIGenerationJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIGenerationJob"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      status: string
      request: string
      result: string | null
      error: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aIGenerationJob"]>
    composites: {}
  }

  type AIGenerationJobGetPayload<S extends boolean | null | undefined | AIGenerationJobDefaultArgs> = $Result.GetResult<Prisma.$AIGenerationJobPayload, S>

  type AIGenerationJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIGenerationJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIGenerationJobCountAggregateInputType | true
    }

  export interface AIGenerationJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIGenerationJob'], meta: { name: 'AIGenerationJob' } }
    /**
     * Find zero or one AIGenerationJob that matches the filter.
     * @param {AIGenerationJobFindUniqueArgs} args - Arguments to find a AIGenerationJob
     * @example
     * // Get one AIGenerationJob
     * const aIGenerationJob = await prisma.aIGenerationJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIGenerationJobFindUniqueArgs>(args: SelectSubset<T, AIGenerationJobFindUniqueArgs<ExtArgs>>): Prisma__AIGenerationJobClient<$Result.GetResult<Prisma.$AIGenerationJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIGenerationJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIGenerationJobFindUniqueOrThrowArgs} args - Arguments to find a AIGenerationJob
     * @example
     * // Get one AIGenerationJob
     * const aIGenerationJob = await prisma.aIGenerationJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIGenerationJobFindUniqueOrThrowArgs>(args: SelectSubset<T, AIGenerationJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIGenerationJobClient<$Result.GetResult<Prisma.$AIGenerationJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIGenerationJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGenerationJobFindFirstArgs} args - Arguments to find a AIGenerationJob
     * @example
     * // Get one AIGenerationJob
     * const aIGenerationJob = await prisma.aIGenerationJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIGenerationJobFindFirstArgs>(args?: SelectSubset<T, AIGenerationJobFindFirstArgs<ExtArgs>>): Prisma__AIGenerationJobClient<$Result.GetResult<Prisma.$AIGenerationJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIGenerationJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGenerationJobFindFirstOrThrowArgs} args - Arguments to find a AIGenerationJob
     * @example
     * // Get one AIGenerationJob
     * const aIGenerationJob = await prisma.aIGenerationJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIGenerationJobFindFirstOrThrowArgs>(args?: SelectSubset<T, AIGenerationJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIGenerationJobClient<$Result.GetResult<Prisma.$AIGenerationJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIGenerationJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGenerationJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIGenerationJobs
     * const aIGenerationJobs = await prisma.aIGenerationJob.findMany()
     * 
     * // Get first 10 AIGenerationJobs
     * const aIGenerationJobs = await prisma.aIGenerationJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIGenerationJobWithIdOnly = await prisma.aIGenerationJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIGenerationJobFindManyArgs>(args?: SelectSubset<T, AIGenerationJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIGenerationJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIGenerationJob.
     * @param {AIGenerationJobCreateArgs} args - Arguments to create a AIGenerationJob.
     * @example
     * // Create one AIGenerationJob
     * const AIGenerationJob = await prisma.aIGenerationJob.create({
     *   data: {
     *     // ... data to create a AIGenerationJob
     *   }
     * })
     * 
     */
    create<T extends AIGenerationJobCreateArgs>(args: SelectSubset<T, AIGenerationJobCreateArgs<ExtArgs>>): Prisma__AIGenerationJobClient<$Result.GetResult<Prisma.$AIGenerationJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIGenerationJobs.
     * @param {AIGenerationJobCreateManyArgs} args - Arguments to create many AIGenerationJobs.
     * @example
     * // Create many AIGenerationJobs
     * const aIGenerationJob = await prisma.aIGenerationJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIGenerationJobCreateManyArgs>(args?: SelectSubset<T, AIGenerationJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIGenerationJobs and returns the data saved in the database.
     * @param {AIGenerationJobCreateManyAndReturnArgs} args - Arguments to create many AIGenerationJobs.
     * @example
     * // Create many AIGenerationJobs
     * const aIGenerationJob = await prisma.aIGenerationJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIGenerationJobs and only return the `id`
     * const aIGenerationJobWithIdOnly = await prisma.aIGenerationJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIGenerationJobCreateManyAndReturnArgs>(args?: SelectSubset<T, AIGenerationJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIGenerationJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIGenerationJob.
     * @param {AIGenerationJobDeleteArgs} args - Arguments to delete one AIGenerationJob.
     * @example
     * // Delete one AIGenerationJob
     * const AIGenerationJob = await prisma.aIGenerationJob.delete({
     *   where: {
     *     // ... filter to delete one AIGenerationJob
     *   }
     * })
     * 
     */
    delete<T extends AIGenerationJobDeleteArgs>(args: SelectSubset<T, AIGenerationJobDeleteArgs<ExtArgs>>): Prisma__AIGenerationJobClient<$Result.GetResult<Prisma.$AIGenerationJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIGenerationJob.
     * @param {AIGenerationJobUpdateArgs} args - Arguments to update one AIGenerationJob.
     * @example
     * // Update one AIGenerationJob
     * const aIGenerationJob = await prisma.aIGenerationJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIGenerationJobUpdateArgs>(args: SelectSubset<T, AIGenerationJobUpdateArgs<ExtArgs>>): Prisma__AIGenerationJobClient<$Result.GetResult<Prisma.$AIGenerationJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIGenerationJobs.
     * @param {AIGenerationJobDeleteManyArgs} args - Arguments to filter AIGenerationJobs to delete.
     * @example
     * // Delete a few AIGenerationJobs
     * const { count } = await prisma.aIGenerationJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIGenerationJobDeleteManyArgs>(args?: SelectSubset<T, AIGenerationJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIGenerationJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGenerationJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIGenerationJobs
     * const aIGenerationJob = await prisma.aIGenerationJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIGenerationJobUpdateManyArgs>(args: SelectSubset<T, AIGenerationJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIGenerationJobs and returns the data updated in the database.
     * @param {AIGenerationJobUpdateManyAndReturnArgs} args - Arguments to update many AIGenerationJobs.
     * @example
     * // Update many AIGenerationJobs
     * const aIGenerationJob = await prisma.aIGenerationJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIGenerationJobs and only return the `id`
     * const aIGenerationJobWithIdOnly = await prisma.aIGenerationJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AIGenerationJobUpdateManyAndReturnArgs>(args: SelectSubset<T, AIGenerationJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIGenerationJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIGenerationJob.
     * @param {AIGenerationJobUpsertArgs} args - Arguments to update or create a AIGenerationJob.
     * @example
     * // Update or create a AIGenerationJob
     * const aIGenerationJob = await prisma.aIGenerationJob.upsert({
     *   create: {
     *     // ... data to create a AIGenerationJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIGenerationJob we want to update
     *   }
     * })
     */
    upsert<T extends AIGenerationJobUpsertArgs>(args: SelectSubset<T, AIGenerationJobUpsertArgs<ExtArgs>>): Prisma__AIGenerationJobClient<$Result.GetResult<Prisma.$AIGenerationJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIGenerationJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGenerationJobCountArgs} args - Arguments to filter AIGenerationJobs to count.
     * @example
     * // Count the number of AIGenerationJobs
     * const count = await prisma.aIGenerationJob.count({
     *   where: {
     *     // ... the filter for the AIGenerationJobs we want to count
     *   }
     * })
    **/
    count<T extends AIGenerationJobCountArgs>(
      args?: Subset<T, AIGenerationJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIGenerationJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIGenerationJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGenerationJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AIGenerationJobAggregateArgs>(args: Subset<T, AIGenerationJobAggregateArgs>): Prisma.PrismaPromise<GetAIGenerationJobAggregateType<T>>

    /**
     * Group by AIGenerationJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGenerationJobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AIGenerationJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIGenerationJobGroupByArgs['orderBy'] }
        : { orderBy?: AIGenerationJobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AIGenerationJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIGenerationJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIGenerationJob model
   */
  readonly fields: AIGenerationJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIGenerationJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIGenerationJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AIGenerationJob model
   */
  interface AIGenerationJobFieldRefs {
    readonly id: FieldRef<"AIGenerationJob", 'String'>
    readonly projectId: FieldRef<"AIGenerationJob", 'String'>
    readonly status: FieldRef<"AIGenerationJob", 'String'>
    readonly request: FieldRef<"AIGenerationJob", 'String'>
    readonly result: FieldRef<"AIGenerationJob", 'String'>
    readonly error: FieldRef<"AIGenerationJob", 'String'>
    readonly createdAt: FieldRef<"AIGenerationJob", 'DateTime'>
    readonly updatedAt: FieldRef<"AIGenerationJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AIGenerationJob findUnique
   */
  export type AIGenerationJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerationJob
     */
    select?: AIGenerationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerationJob
     */
    omit?: AIGenerationJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationJobInclude<ExtArgs> | null
    /**
     * Filter, which AIGenerationJob to fetch.
     */
    where: AIGenerationJobWhereUniqueInput
  }

  /**
   * AIGenerationJob findUniqueOrThrow
   */
  export type AIGenerationJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerationJob
     */
    select?: AIGenerationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerationJob
     */
    omit?: AIGenerationJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationJobInclude<ExtArgs> | null
    /**
     * Filter, which AIGenerationJob to fetch.
     */
    where: AIGenerationJobWhereUniqueInput
  }

  /**
   * AIGenerationJob findFirst
   */
  export type AIGenerationJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerationJob
     */
    select?: AIGenerationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerationJob
     */
    omit?: AIGenerationJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationJobInclude<ExtArgs> | null
    /**
     * Filter, which AIGenerationJob to fetch.
     */
    where?: AIGenerationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIGenerationJobs to fetch.
     */
    orderBy?: AIGenerationJobOrderByWithRelationInput | AIGenerationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIGenerationJobs.
     */
    cursor?: AIGenerationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIGenerationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIGenerationJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIGenerationJobs.
     */
    distinct?: AIGenerationJobScalarFieldEnum | AIGenerationJobScalarFieldEnum[]
  }

  /**
   * AIGenerationJob findFirstOrThrow
   */
  export type AIGenerationJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerationJob
     */
    select?: AIGenerationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerationJob
     */
    omit?: AIGenerationJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationJobInclude<ExtArgs> | null
    /**
     * Filter, which AIGenerationJob to fetch.
     */
    where?: AIGenerationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIGenerationJobs to fetch.
     */
    orderBy?: AIGenerationJobOrderByWithRelationInput | AIGenerationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIGenerationJobs.
     */
    cursor?: AIGenerationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIGenerationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIGenerationJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIGenerationJobs.
     */
    distinct?: AIGenerationJobScalarFieldEnum | AIGenerationJobScalarFieldEnum[]
  }

  /**
   * AIGenerationJob findMany
   */
  export type AIGenerationJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerationJob
     */
    select?: AIGenerationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerationJob
     */
    omit?: AIGenerationJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationJobInclude<ExtArgs> | null
    /**
     * Filter, which AIGenerationJobs to fetch.
     */
    where?: AIGenerationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIGenerationJobs to fetch.
     */
    orderBy?: AIGenerationJobOrderByWithRelationInput | AIGenerationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIGenerationJobs.
     */
    cursor?: AIGenerationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIGenerationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIGenerationJobs.
     */
    skip?: number
    distinct?: AIGenerationJobScalarFieldEnum | AIGenerationJobScalarFieldEnum[]
  }

  /**
   * AIGenerationJob create
   */
  export type AIGenerationJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerationJob
     */
    select?: AIGenerationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerationJob
     */
    omit?: AIGenerationJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationJobInclude<ExtArgs> | null
    /**
     * The data needed to create a AIGenerationJob.
     */
    data: XOR<AIGenerationJobCreateInput, AIGenerationJobUncheckedCreateInput>
  }

  /**
   * AIGenerationJob createMany
   */
  export type AIGenerationJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIGenerationJobs.
     */
    data: AIGenerationJobCreateManyInput | AIGenerationJobCreateManyInput[]
  }

  /**
   * AIGenerationJob createManyAndReturn
   */
  export type AIGenerationJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerationJob
     */
    select?: AIGenerationJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerationJob
     */
    omit?: AIGenerationJobOmit<ExtArgs> | null
    /**
     * The data used to create many AIGenerationJobs.
     */
    data: AIGenerationJobCreateManyInput | AIGenerationJobCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIGenerationJob update
   */
  export type AIGenerationJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerationJob
     */
    select?: AIGenerationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerationJob
     */
    omit?: AIGenerationJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationJobInclude<ExtArgs> | null
    /**
     * The data needed to update a AIGenerationJob.
     */
    data: XOR<AIGenerationJobUpdateInput, AIGenerationJobUncheckedUpdateInput>
    /**
     * Choose, which AIGenerationJob to update.
     */
    where: AIGenerationJobWhereUniqueInput
  }

  /**
   * AIGenerationJob updateMany
   */
  export type AIGenerationJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIGenerationJobs.
     */
    data: XOR<AIGenerationJobUpdateManyMutationInput, AIGenerationJobUncheckedUpdateManyInput>
    /**
     * Filter which AIGenerationJobs to update
     */
    where?: AIGenerationJobWhereInput
    /**
     * Limit how many AIGenerationJobs to update.
     */
    limit?: number
  }

  /**
   * AIGenerationJob updateManyAndReturn
   */
  export type AIGenerationJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerationJob
     */
    select?: AIGenerationJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerationJob
     */
    omit?: AIGenerationJobOmit<ExtArgs> | null
    /**
     * The data used to update AIGenerationJobs.
     */
    data: XOR<AIGenerationJobUpdateManyMutationInput, AIGenerationJobUncheckedUpdateManyInput>
    /**
     * Filter which AIGenerationJobs to update
     */
    where?: AIGenerationJobWhereInput
    /**
     * Limit how many AIGenerationJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIGenerationJob upsert
   */
  export type AIGenerationJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerationJob
     */
    select?: AIGenerationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerationJob
     */
    omit?: AIGenerationJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationJobInclude<ExtArgs> | null
    /**
     * The filter to search for the AIGenerationJob to update in case it exists.
     */
    where: AIGenerationJobWhereUniqueInput
    /**
     * In case the AIGenerationJob found by the `where` argument doesn't exist, create a new AIGenerationJob with this data.
     */
    create: XOR<AIGenerationJobCreateInput, AIGenerationJobUncheckedCreateInput>
    /**
     * In case the AIGenerationJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIGenerationJobUpdateInput, AIGenerationJobUncheckedUpdateInput>
  }

  /**
   * AIGenerationJob delete
   */
  export type AIGenerationJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerationJob
     */
    select?: AIGenerationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerationJob
     */
    omit?: AIGenerationJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationJobInclude<ExtArgs> | null
    /**
     * Filter which AIGenerationJob to delete.
     */
    where: AIGenerationJobWhereUniqueInput
  }

  /**
   * AIGenerationJob deleteMany
   */
  export type AIGenerationJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIGenerationJobs to delete
     */
    where?: AIGenerationJobWhereInput
    /**
     * Limit how many AIGenerationJobs to delete.
     */
    limit?: number
  }

  /**
   * AIGenerationJob without action
   */
  export type AIGenerationJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerationJob
     */
    select?: AIGenerationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerationJob
     */
    omit?: AIGenerationJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerationJobInclude<ExtArgs> | null
  }


  /**
   * Model Locale
   */

  export type AggregateLocale = {
    _count: LocaleCountAggregateOutputType | null
    _min: LocaleMinAggregateOutputType | null
    _max: LocaleMaxAggregateOutputType | null
  }

  export type LocaleMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    lang: string | null
    entries: string | null
  }

  export type LocaleMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    lang: string | null
    entries: string | null
  }

  export type LocaleCountAggregateOutputType = {
    id: number
    projectId: number
    lang: number
    entries: number
    _all: number
  }


  export type LocaleMinAggregateInputType = {
    id?: true
    projectId?: true
    lang?: true
    entries?: true
  }

  export type LocaleMaxAggregateInputType = {
    id?: true
    projectId?: true
    lang?: true
    entries?: true
  }

  export type LocaleCountAggregateInputType = {
    id?: true
    projectId?: true
    lang?: true
    entries?: true
    _all?: true
  }

  export type LocaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locale to aggregate.
     */
    where?: LocaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locales to fetch.
     */
    orderBy?: LocaleOrderByWithRelationInput | LocaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locales
    **/
    _count?: true | LocaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocaleMaxAggregateInputType
  }

  export type GetLocaleAggregateType<T extends LocaleAggregateArgs> = {
        [P in keyof T & keyof AggregateLocale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocale[P]>
      : GetScalarType<T[P], AggregateLocale[P]>
  }




  export type LocaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocaleWhereInput
    orderBy?: LocaleOrderByWithAggregationInput | LocaleOrderByWithAggregationInput[]
    by: LocaleScalarFieldEnum[] | LocaleScalarFieldEnum
    having?: LocaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocaleCountAggregateInputType | true
    _min?: LocaleMinAggregateInputType
    _max?: LocaleMaxAggregateInputType
  }

  export type LocaleGroupByOutputType = {
    id: string
    projectId: string
    lang: string
    entries: string
    _count: LocaleCountAggregateOutputType | null
    _min: LocaleMinAggregateOutputType | null
    _max: LocaleMaxAggregateOutputType | null
  }

  type GetLocaleGroupByPayload<T extends LocaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocaleGroupByOutputType[P]>
            : GetScalarType<T[P], LocaleGroupByOutputType[P]>
        }
      >
    >


  export type LocaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    lang?: boolean
    entries?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locale"]>

  export type LocaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    lang?: boolean
    entries?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locale"]>

  export type LocaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    lang?: boolean
    entries?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locale"]>

  export type LocaleSelectScalar = {
    id?: boolean
    projectId?: boolean
    lang?: boolean
    entries?: boolean
  }

  export type LocaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "lang" | "entries", ExtArgs["result"]["locale"]>
  export type LocaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type LocaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type LocaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $LocalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Locale"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      lang: string
      entries: string
    }, ExtArgs["result"]["locale"]>
    composites: {}
  }

  type LocaleGetPayload<S extends boolean | null | undefined | LocaleDefaultArgs> = $Result.GetResult<Prisma.$LocalePayload, S>

  type LocaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocaleCountAggregateInputType | true
    }

  export interface LocaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Locale'], meta: { name: 'Locale' } }
    /**
     * Find zero or one Locale that matches the filter.
     * @param {LocaleFindUniqueArgs} args - Arguments to find a Locale
     * @example
     * // Get one Locale
     * const locale = await prisma.locale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocaleFindUniqueArgs>(args: SelectSubset<T, LocaleFindUniqueArgs<ExtArgs>>): Prisma__LocaleClient<$Result.GetResult<Prisma.$LocalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Locale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocaleFindUniqueOrThrowArgs} args - Arguments to find a Locale
     * @example
     * // Get one Locale
     * const locale = await prisma.locale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocaleFindUniqueOrThrowArgs>(args: SelectSubset<T, LocaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocaleClient<$Result.GetResult<Prisma.$LocalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocaleFindFirstArgs} args - Arguments to find a Locale
     * @example
     * // Get one Locale
     * const locale = await prisma.locale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocaleFindFirstArgs>(args?: SelectSubset<T, LocaleFindFirstArgs<ExtArgs>>): Prisma__LocaleClient<$Result.GetResult<Prisma.$LocalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocaleFindFirstOrThrowArgs} args - Arguments to find a Locale
     * @example
     * // Get one Locale
     * const locale = await prisma.locale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocaleFindFirstOrThrowArgs>(args?: SelectSubset<T, LocaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocaleClient<$Result.GetResult<Prisma.$LocalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locales
     * const locales = await prisma.locale.findMany()
     * 
     * // Get first 10 Locales
     * const locales = await prisma.locale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const localeWithIdOnly = await prisma.locale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocaleFindManyArgs>(args?: SelectSubset<T, LocaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Locale.
     * @param {LocaleCreateArgs} args - Arguments to create a Locale.
     * @example
     * // Create one Locale
     * const Locale = await prisma.locale.create({
     *   data: {
     *     // ... data to create a Locale
     *   }
     * })
     * 
     */
    create<T extends LocaleCreateArgs>(args: SelectSubset<T, LocaleCreateArgs<ExtArgs>>): Prisma__LocaleClient<$Result.GetResult<Prisma.$LocalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locales.
     * @param {LocaleCreateManyArgs} args - Arguments to create many Locales.
     * @example
     * // Create many Locales
     * const locale = await prisma.locale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocaleCreateManyArgs>(args?: SelectSubset<T, LocaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locales and returns the data saved in the database.
     * @param {LocaleCreateManyAndReturnArgs} args - Arguments to create many Locales.
     * @example
     * // Create many Locales
     * const locale = await prisma.locale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locales and only return the `id`
     * const localeWithIdOnly = await prisma.locale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocaleCreateManyAndReturnArgs>(args?: SelectSubset<T, LocaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Locale.
     * @param {LocaleDeleteArgs} args - Arguments to delete one Locale.
     * @example
     * // Delete one Locale
     * const Locale = await prisma.locale.delete({
     *   where: {
     *     // ... filter to delete one Locale
     *   }
     * })
     * 
     */
    delete<T extends LocaleDeleteArgs>(args: SelectSubset<T, LocaleDeleteArgs<ExtArgs>>): Prisma__LocaleClient<$Result.GetResult<Prisma.$LocalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Locale.
     * @param {LocaleUpdateArgs} args - Arguments to update one Locale.
     * @example
     * // Update one Locale
     * const locale = await prisma.locale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocaleUpdateArgs>(args: SelectSubset<T, LocaleUpdateArgs<ExtArgs>>): Prisma__LocaleClient<$Result.GetResult<Prisma.$LocalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locales.
     * @param {LocaleDeleteManyArgs} args - Arguments to filter Locales to delete.
     * @example
     * // Delete a few Locales
     * const { count } = await prisma.locale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocaleDeleteManyArgs>(args?: SelectSubset<T, LocaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locales
     * const locale = await prisma.locale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocaleUpdateManyArgs>(args: SelectSubset<T, LocaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locales and returns the data updated in the database.
     * @param {LocaleUpdateManyAndReturnArgs} args - Arguments to update many Locales.
     * @example
     * // Update many Locales
     * const locale = await prisma.locale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locales and only return the `id`
     * const localeWithIdOnly = await prisma.locale.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocaleUpdateManyAndReturnArgs>(args: SelectSubset<T, LocaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Locale.
     * @param {LocaleUpsertArgs} args - Arguments to update or create a Locale.
     * @example
     * // Update or create a Locale
     * const locale = await prisma.locale.upsert({
     *   create: {
     *     // ... data to create a Locale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Locale we want to update
     *   }
     * })
     */
    upsert<T extends LocaleUpsertArgs>(args: SelectSubset<T, LocaleUpsertArgs<ExtArgs>>): Prisma__LocaleClient<$Result.GetResult<Prisma.$LocalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocaleCountArgs} args - Arguments to filter Locales to count.
     * @example
     * // Count the number of Locales
     * const count = await prisma.locale.count({
     *   where: {
     *     // ... the filter for the Locales we want to count
     *   }
     * })
    **/
    count<T extends LocaleCountArgs>(
      args?: Subset<T, LocaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Locale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocaleAggregateArgs>(args: Subset<T, LocaleAggregateArgs>): Prisma.PrismaPromise<GetLocaleAggregateType<T>>

    /**
     * Group by Locale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocaleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocaleGroupByArgs['orderBy'] }
        : { orderBy?: LocaleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Locale model
   */
  readonly fields: LocaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Locale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Locale model
   */
  interface LocaleFieldRefs {
    readonly id: FieldRef<"Locale", 'String'>
    readonly projectId: FieldRef<"Locale", 'String'>
    readonly lang: FieldRef<"Locale", 'String'>
    readonly entries: FieldRef<"Locale", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Locale findUnique
   */
  export type LocaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locale
     */
    select?: LocaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locale
     */
    omit?: LocaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaleInclude<ExtArgs> | null
    /**
     * Filter, which Locale to fetch.
     */
    where: LocaleWhereUniqueInput
  }

  /**
   * Locale findUniqueOrThrow
   */
  export type LocaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locale
     */
    select?: LocaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locale
     */
    omit?: LocaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaleInclude<ExtArgs> | null
    /**
     * Filter, which Locale to fetch.
     */
    where: LocaleWhereUniqueInput
  }

  /**
   * Locale findFirst
   */
  export type LocaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locale
     */
    select?: LocaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locale
     */
    omit?: LocaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaleInclude<ExtArgs> | null
    /**
     * Filter, which Locale to fetch.
     */
    where?: LocaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locales to fetch.
     */
    orderBy?: LocaleOrderByWithRelationInput | LocaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locales.
     */
    cursor?: LocaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locales.
     */
    distinct?: LocaleScalarFieldEnum | LocaleScalarFieldEnum[]
  }

  /**
   * Locale findFirstOrThrow
   */
  export type LocaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locale
     */
    select?: LocaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locale
     */
    omit?: LocaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaleInclude<ExtArgs> | null
    /**
     * Filter, which Locale to fetch.
     */
    where?: LocaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locales to fetch.
     */
    orderBy?: LocaleOrderByWithRelationInput | LocaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locales.
     */
    cursor?: LocaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locales.
     */
    distinct?: LocaleScalarFieldEnum | LocaleScalarFieldEnum[]
  }

  /**
   * Locale findMany
   */
  export type LocaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locale
     */
    select?: LocaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locale
     */
    omit?: LocaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaleInclude<ExtArgs> | null
    /**
     * Filter, which Locales to fetch.
     */
    where?: LocaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locales to fetch.
     */
    orderBy?: LocaleOrderByWithRelationInput | LocaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locales.
     */
    cursor?: LocaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locales.
     */
    skip?: number
    distinct?: LocaleScalarFieldEnum | LocaleScalarFieldEnum[]
  }

  /**
   * Locale create
   */
  export type LocaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locale
     */
    select?: LocaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locale
     */
    omit?: LocaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Locale.
     */
    data: XOR<LocaleCreateInput, LocaleUncheckedCreateInput>
  }

  /**
   * Locale createMany
   */
  export type LocaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locales.
     */
    data: LocaleCreateManyInput | LocaleCreateManyInput[]
  }

  /**
   * Locale createManyAndReturn
   */
  export type LocaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locale
     */
    select?: LocaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Locale
     */
    omit?: LocaleOmit<ExtArgs> | null
    /**
     * The data used to create many Locales.
     */
    data: LocaleCreateManyInput | LocaleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Locale update
   */
  export type LocaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locale
     */
    select?: LocaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locale
     */
    omit?: LocaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Locale.
     */
    data: XOR<LocaleUpdateInput, LocaleUncheckedUpdateInput>
    /**
     * Choose, which Locale to update.
     */
    where: LocaleWhereUniqueInput
  }

  /**
   * Locale updateMany
   */
  export type LocaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locales.
     */
    data: XOR<LocaleUpdateManyMutationInput, LocaleUncheckedUpdateManyInput>
    /**
     * Filter which Locales to update
     */
    where?: LocaleWhereInput
    /**
     * Limit how many Locales to update.
     */
    limit?: number
  }

  /**
   * Locale updateManyAndReturn
   */
  export type LocaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locale
     */
    select?: LocaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Locale
     */
    omit?: LocaleOmit<ExtArgs> | null
    /**
     * The data used to update Locales.
     */
    data: XOR<LocaleUpdateManyMutationInput, LocaleUncheckedUpdateManyInput>
    /**
     * Filter which Locales to update
     */
    where?: LocaleWhereInput
    /**
     * Limit how many Locales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Locale upsert
   */
  export type LocaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locale
     */
    select?: LocaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locale
     */
    omit?: LocaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Locale to update in case it exists.
     */
    where: LocaleWhereUniqueInput
    /**
     * In case the Locale found by the `where` argument doesn't exist, create a new Locale with this data.
     */
    create: XOR<LocaleCreateInput, LocaleUncheckedCreateInput>
    /**
     * In case the Locale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocaleUpdateInput, LocaleUncheckedUpdateInput>
  }

  /**
   * Locale delete
   */
  export type LocaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locale
     */
    select?: LocaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locale
     */
    omit?: LocaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaleInclude<ExtArgs> | null
    /**
     * Filter which Locale to delete.
     */
    where: LocaleWhereUniqueInput
  }

  /**
   * Locale deleteMany
   */
  export type LocaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locales to delete
     */
    where?: LocaleWhereInput
    /**
     * Limit how many Locales to delete.
     */
    limit?: number
  }

  /**
   * Locale without action
   */
  export type LocaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locale
     */
    select?: LocaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locale
     */
    omit?: LocaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaleInclude<ExtArgs> | null
  }


  /**
   * Model Flag
   */

  export type AggregateFlag = {
    _count: FlagCountAggregateOutputType | null
    _min: FlagMinAggregateOutputType | null
    _max: FlagMaxAggregateOutputType | null
  }

  export type FlagMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    key: string | null
    value: string | null
  }

  export type FlagMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    key: string | null
    value: string | null
  }

  export type FlagCountAggregateOutputType = {
    id: number
    projectId: number
    key: number
    value: number
    _all: number
  }


  export type FlagMinAggregateInputType = {
    id?: true
    projectId?: true
    key?: true
    value?: true
  }

  export type FlagMaxAggregateInputType = {
    id?: true
    projectId?: true
    key?: true
    value?: true
  }

  export type FlagCountAggregateInputType = {
    id?: true
    projectId?: true
    key?: true
    value?: true
    _all?: true
  }

  export type FlagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flag to aggregate.
     */
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     */
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flags
    **/
    _count?: true | FlagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlagMaxAggregateInputType
  }

  export type GetFlagAggregateType<T extends FlagAggregateArgs> = {
        [P in keyof T & keyof AggregateFlag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlag[P]>
      : GetScalarType<T[P], AggregateFlag[P]>
  }




  export type FlagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlagWhereInput
    orderBy?: FlagOrderByWithAggregationInput | FlagOrderByWithAggregationInput[]
    by: FlagScalarFieldEnum[] | FlagScalarFieldEnum
    having?: FlagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlagCountAggregateInputType | true
    _min?: FlagMinAggregateInputType
    _max?: FlagMaxAggregateInputType
  }

  export type FlagGroupByOutputType = {
    id: string
    projectId: string
    key: string
    value: string
    _count: FlagCountAggregateOutputType | null
    _min: FlagMinAggregateOutputType | null
    _max: FlagMaxAggregateOutputType | null
  }

  type GetFlagGroupByPayload<T extends FlagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlagGroupByOutputType[P]>
            : GetScalarType<T[P], FlagGroupByOutputType[P]>
        }
      >
    >


  export type FlagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    key?: boolean
    value?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flag"]>

  export type FlagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    key?: boolean
    value?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flag"]>

  export type FlagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    key?: boolean
    value?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flag"]>

  export type FlagSelectScalar = {
    id?: boolean
    projectId?: boolean
    key?: boolean
    value?: boolean
  }

  export type FlagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "key" | "value", ExtArgs["result"]["flag"]>
  export type FlagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type FlagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type FlagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $FlagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flag"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      key: string
      value: string
    }, ExtArgs["result"]["flag"]>
    composites: {}
  }

  type FlagGetPayload<S extends boolean | null | undefined | FlagDefaultArgs> = $Result.GetResult<Prisma.$FlagPayload, S>

  type FlagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlagCountAggregateInputType | true
    }

  export interface FlagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flag'], meta: { name: 'Flag' } }
    /**
     * Find zero or one Flag that matches the filter.
     * @param {FlagFindUniqueArgs} args - Arguments to find a Flag
     * @example
     * // Get one Flag
     * const flag = await prisma.flag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlagFindUniqueArgs>(args: SelectSubset<T, FlagFindUniqueArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlagFindUniqueOrThrowArgs} args - Arguments to find a Flag
     * @example
     * // Get one Flag
     * const flag = await prisma.flag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlagFindUniqueOrThrowArgs>(args: SelectSubset<T, FlagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagFindFirstArgs} args - Arguments to find a Flag
     * @example
     * // Get one Flag
     * const flag = await prisma.flag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlagFindFirstArgs>(args?: SelectSubset<T, FlagFindFirstArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagFindFirstOrThrowArgs} args - Arguments to find a Flag
     * @example
     * // Get one Flag
     * const flag = await prisma.flag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlagFindFirstOrThrowArgs>(args?: SelectSubset<T, FlagFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flags
     * const flags = await prisma.flag.findMany()
     * 
     * // Get first 10 Flags
     * const flags = await prisma.flag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flagWithIdOnly = await prisma.flag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlagFindManyArgs>(args?: SelectSubset<T, FlagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flag.
     * @param {FlagCreateArgs} args - Arguments to create a Flag.
     * @example
     * // Create one Flag
     * const Flag = await prisma.flag.create({
     *   data: {
     *     // ... data to create a Flag
     *   }
     * })
     * 
     */
    create<T extends FlagCreateArgs>(args: SelectSubset<T, FlagCreateArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flags.
     * @param {FlagCreateManyArgs} args - Arguments to create many Flags.
     * @example
     * // Create many Flags
     * const flag = await prisma.flag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlagCreateManyArgs>(args?: SelectSubset<T, FlagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flags and returns the data saved in the database.
     * @param {FlagCreateManyAndReturnArgs} args - Arguments to create many Flags.
     * @example
     * // Create many Flags
     * const flag = await prisma.flag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flags and only return the `id`
     * const flagWithIdOnly = await prisma.flag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlagCreateManyAndReturnArgs>(args?: SelectSubset<T, FlagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flag.
     * @param {FlagDeleteArgs} args - Arguments to delete one Flag.
     * @example
     * // Delete one Flag
     * const Flag = await prisma.flag.delete({
     *   where: {
     *     // ... filter to delete one Flag
     *   }
     * })
     * 
     */
    delete<T extends FlagDeleteArgs>(args: SelectSubset<T, FlagDeleteArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flag.
     * @param {FlagUpdateArgs} args - Arguments to update one Flag.
     * @example
     * // Update one Flag
     * const flag = await prisma.flag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlagUpdateArgs>(args: SelectSubset<T, FlagUpdateArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flags.
     * @param {FlagDeleteManyArgs} args - Arguments to filter Flags to delete.
     * @example
     * // Delete a few Flags
     * const { count } = await prisma.flag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlagDeleteManyArgs>(args?: SelectSubset<T, FlagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flags
     * const flag = await prisma.flag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlagUpdateManyArgs>(args: SelectSubset<T, FlagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flags and returns the data updated in the database.
     * @param {FlagUpdateManyAndReturnArgs} args - Arguments to update many Flags.
     * @example
     * // Update many Flags
     * const flag = await prisma.flag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flags and only return the `id`
     * const flagWithIdOnly = await prisma.flag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlagUpdateManyAndReturnArgs>(args: SelectSubset<T, FlagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flag.
     * @param {FlagUpsertArgs} args - Arguments to update or create a Flag.
     * @example
     * // Update or create a Flag
     * const flag = await prisma.flag.upsert({
     *   create: {
     *     // ... data to create a Flag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flag we want to update
     *   }
     * })
     */
    upsert<T extends FlagUpsertArgs>(args: SelectSubset<T, FlagUpsertArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagCountArgs} args - Arguments to filter Flags to count.
     * @example
     * // Count the number of Flags
     * const count = await prisma.flag.count({
     *   where: {
     *     // ... the filter for the Flags we want to count
     *   }
     * })
    **/
    count<T extends FlagCountArgs>(
      args?: Subset<T, FlagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlagAggregateArgs>(args: Subset<T, FlagAggregateArgs>): Prisma.PrismaPromise<GetFlagAggregateType<T>>

    /**
     * Group by Flag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlagGroupByArgs['orderBy'] }
        : { orderBy?: FlagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flag model
   */
  readonly fields: FlagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Flag model
   */
  interface FlagFieldRefs {
    readonly id: FieldRef<"Flag", 'String'>
    readonly projectId: FieldRef<"Flag", 'String'>
    readonly key: FieldRef<"Flag", 'String'>
    readonly value: FieldRef<"Flag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Flag findUnique
   */
  export type FlagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flag to fetch.
     */
    where: FlagWhereUniqueInput
  }

  /**
   * Flag findUniqueOrThrow
   */
  export type FlagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flag to fetch.
     */
    where: FlagWhereUniqueInput
  }

  /**
   * Flag findFirst
   */
  export type FlagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flag to fetch.
     */
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     */
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flags.
     */
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flags.
     */
    distinct?: FlagScalarFieldEnum | FlagScalarFieldEnum[]
  }

  /**
   * Flag findFirstOrThrow
   */
  export type FlagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flag to fetch.
     */
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     */
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flags.
     */
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flags.
     */
    distinct?: FlagScalarFieldEnum | FlagScalarFieldEnum[]
  }

  /**
   * Flag findMany
   */
  export type FlagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flags to fetch.
     */
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     */
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flags.
     */
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     */
    skip?: number
    distinct?: FlagScalarFieldEnum | FlagScalarFieldEnum[]
  }

  /**
   * Flag create
   */
  export type FlagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * The data needed to create a Flag.
     */
    data: XOR<FlagCreateInput, FlagUncheckedCreateInput>
  }

  /**
   * Flag createMany
   */
  export type FlagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flags.
     */
    data: FlagCreateManyInput | FlagCreateManyInput[]
  }

  /**
   * Flag createManyAndReturn
   */
  export type FlagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * The data used to create many Flags.
     */
    data: FlagCreateManyInput | FlagCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flag update
   */
  export type FlagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * The data needed to update a Flag.
     */
    data: XOR<FlagUpdateInput, FlagUncheckedUpdateInput>
    /**
     * Choose, which Flag to update.
     */
    where: FlagWhereUniqueInput
  }

  /**
   * Flag updateMany
   */
  export type FlagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flags.
     */
    data: XOR<FlagUpdateManyMutationInput, FlagUncheckedUpdateManyInput>
    /**
     * Filter which Flags to update
     */
    where?: FlagWhereInput
    /**
     * Limit how many Flags to update.
     */
    limit?: number
  }

  /**
   * Flag updateManyAndReturn
   */
  export type FlagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * The data used to update Flags.
     */
    data: XOR<FlagUpdateManyMutationInput, FlagUncheckedUpdateManyInput>
    /**
     * Filter which Flags to update
     */
    where?: FlagWhereInput
    /**
     * Limit how many Flags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flag upsert
   */
  export type FlagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * The filter to search for the Flag to update in case it exists.
     */
    where: FlagWhereUniqueInput
    /**
     * In case the Flag found by the `where` argument doesn't exist, create a new Flag with this data.
     */
    create: XOR<FlagCreateInput, FlagUncheckedCreateInput>
    /**
     * In case the Flag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlagUpdateInput, FlagUncheckedUpdateInput>
  }

  /**
   * Flag delete
   */
  export type FlagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter which Flag to delete.
     */
    where: FlagWhereUniqueInput
  }

  /**
   * Flag deleteMany
   */
  export type FlagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flags to delete
     */
    where?: FlagWhereInput
    /**
     * Limit how many Flags to delete.
     */
    limit?: number
  }

  /**
   * Flag without action
   */
  export type FlagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    settings: 'settings',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const MapScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    width: 'width',
    height: 'height',
    layers: 'layers',
    events: 'events'
  };

  export type MapScalarFieldEnum = (typeof MapScalarFieldEnum)[keyof typeof MapScalarFieldEnum]


  export const TilesetScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    imageUrl: 'imageUrl',
    tileSize: 'tileSize',
    columns: 'columns',
    rows: 'rows',
    stableIdMap: 'stableIdMap',
    hash: 'hash',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TilesetScalarFieldEnum = (typeof TilesetScalarFieldEnum)[keyof typeof TilesetScalarFieldEnum]


  export const SpriteScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    imageUrl: 'imageUrl',
    animations: 'animations',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SpriteScalarFieldEnum = (typeof SpriteScalarFieldEnum)[keyof typeof SpriteScalarFieldEnum]


  export const AIGenerationJobScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    status: 'status',
    request: 'request',
    result: 'result',
    error: 'error',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AIGenerationJobScalarFieldEnum = (typeof AIGenerationJobScalarFieldEnum)[keyof typeof AIGenerationJobScalarFieldEnum]


  export const LocaleScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    lang: 'lang',
    entries: 'entries'
  };

  export type LocaleScalarFieldEnum = (typeof LocaleScalarFieldEnum)[keyof typeof LocaleScalarFieldEnum]


  export const FlagScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    key: 'key',
    value: 'value'
  };

  export type FlagScalarFieldEnum = (typeof FlagScalarFieldEnum)[keyof typeof FlagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    settings?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    maps?: MapListRelationFilter
    tilesets?: TilesetListRelationFilter
    sprites?: SpriteListRelationFilter
    locales?: LocaleListRelationFilter
    flags?: FlagListRelationFilter
    aiJobs?: AIGenerationJobListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    settings?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maps?: MapOrderByRelationAggregateInput
    tilesets?: TilesetOrderByRelationAggregateInput
    sprites?: SpriteOrderByRelationAggregateInput
    locales?: LocaleOrderByRelationAggregateInput
    flags?: FlagOrderByRelationAggregateInput
    aiJobs?: AIGenerationJobOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    settings?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    maps?: MapListRelationFilter
    tilesets?: TilesetListRelationFilter
    sprites?: SpriteListRelationFilter
    locales?: LocaleListRelationFilter
    flags?: FlagListRelationFilter
    aiJobs?: AIGenerationJobListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    settings?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    settings?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type MapWhereInput = {
    AND?: MapWhereInput | MapWhereInput[]
    OR?: MapWhereInput[]
    NOT?: MapWhereInput | MapWhereInput[]
    id?: StringFilter<"Map"> | string
    projectId?: StringFilter<"Map"> | string
    name?: StringFilter<"Map"> | string
    width?: IntFilter<"Map"> | number
    height?: IntFilter<"Map"> | number
    layers?: StringFilter<"Map"> | string
    events?: StringFilter<"Map"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type MapOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    layers?: SortOrder
    events?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type MapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MapWhereInput | MapWhereInput[]
    OR?: MapWhereInput[]
    NOT?: MapWhereInput | MapWhereInput[]
    projectId?: StringFilter<"Map"> | string
    name?: StringFilter<"Map"> | string
    width?: IntFilter<"Map"> | number
    height?: IntFilter<"Map"> | number
    layers?: StringFilter<"Map"> | string
    events?: StringFilter<"Map"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type MapOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    layers?: SortOrder
    events?: SortOrder
    _count?: MapCountOrderByAggregateInput
    _avg?: MapAvgOrderByAggregateInput
    _max?: MapMaxOrderByAggregateInput
    _min?: MapMinOrderByAggregateInput
    _sum?: MapSumOrderByAggregateInput
  }

  export type MapScalarWhereWithAggregatesInput = {
    AND?: MapScalarWhereWithAggregatesInput | MapScalarWhereWithAggregatesInput[]
    OR?: MapScalarWhereWithAggregatesInput[]
    NOT?: MapScalarWhereWithAggregatesInput | MapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Map"> | string
    projectId?: StringWithAggregatesFilter<"Map"> | string
    name?: StringWithAggregatesFilter<"Map"> | string
    width?: IntWithAggregatesFilter<"Map"> | number
    height?: IntWithAggregatesFilter<"Map"> | number
    layers?: StringWithAggregatesFilter<"Map"> | string
    events?: StringWithAggregatesFilter<"Map"> | string
  }

  export type TilesetWhereInput = {
    AND?: TilesetWhereInput | TilesetWhereInput[]
    OR?: TilesetWhereInput[]
    NOT?: TilesetWhereInput | TilesetWhereInput[]
    id?: StringFilter<"Tileset"> | string
    projectId?: StringFilter<"Tileset"> | string
    name?: StringFilter<"Tileset"> | string
    imageUrl?: StringFilter<"Tileset"> | string
    tileSize?: IntFilter<"Tileset"> | number
    columns?: IntFilter<"Tileset"> | number
    rows?: IntFilter<"Tileset"> | number
    stableIdMap?: StringFilter<"Tileset"> | string
    hash?: StringFilter<"Tileset"> | string
    metadata?: StringNullableFilter<"Tileset"> | string | null
    createdAt?: DateTimeFilter<"Tileset"> | Date | string
    updatedAt?: DateTimeFilter<"Tileset"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type TilesetOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    tileSize?: SortOrder
    columns?: SortOrder
    rows?: SortOrder
    stableIdMap?: SortOrder
    hash?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type TilesetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TilesetWhereInput | TilesetWhereInput[]
    OR?: TilesetWhereInput[]
    NOT?: TilesetWhereInput | TilesetWhereInput[]
    projectId?: StringFilter<"Tileset"> | string
    name?: StringFilter<"Tileset"> | string
    imageUrl?: StringFilter<"Tileset"> | string
    tileSize?: IntFilter<"Tileset"> | number
    columns?: IntFilter<"Tileset"> | number
    rows?: IntFilter<"Tileset"> | number
    stableIdMap?: StringFilter<"Tileset"> | string
    hash?: StringFilter<"Tileset"> | string
    metadata?: StringNullableFilter<"Tileset"> | string | null
    createdAt?: DateTimeFilter<"Tileset"> | Date | string
    updatedAt?: DateTimeFilter<"Tileset"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type TilesetOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    tileSize?: SortOrder
    columns?: SortOrder
    rows?: SortOrder
    stableIdMap?: SortOrder
    hash?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TilesetCountOrderByAggregateInput
    _avg?: TilesetAvgOrderByAggregateInput
    _max?: TilesetMaxOrderByAggregateInput
    _min?: TilesetMinOrderByAggregateInput
    _sum?: TilesetSumOrderByAggregateInput
  }

  export type TilesetScalarWhereWithAggregatesInput = {
    AND?: TilesetScalarWhereWithAggregatesInput | TilesetScalarWhereWithAggregatesInput[]
    OR?: TilesetScalarWhereWithAggregatesInput[]
    NOT?: TilesetScalarWhereWithAggregatesInput | TilesetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tileset"> | string
    projectId?: StringWithAggregatesFilter<"Tileset"> | string
    name?: StringWithAggregatesFilter<"Tileset"> | string
    imageUrl?: StringWithAggregatesFilter<"Tileset"> | string
    tileSize?: IntWithAggregatesFilter<"Tileset"> | number
    columns?: IntWithAggregatesFilter<"Tileset"> | number
    rows?: IntWithAggregatesFilter<"Tileset"> | number
    stableIdMap?: StringWithAggregatesFilter<"Tileset"> | string
    hash?: StringWithAggregatesFilter<"Tileset"> | string
    metadata?: StringNullableWithAggregatesFilter<"Tileset"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tileset"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tileset"> | Date | string
  }

  export type SpriteWhereInput = {
    AND?: SpriteWhereInput | SpriteWhereInput[]
    OR?: SpriteWhereInput[]
    NOT?: SpriteWhereInput | SpriteWhereInput[]
    id?: StringFilter<"Sprite"> | string
    projectId?: StringFilter<"Sprite"> | string
    name?: StringFilter<"Sprite"> | string
    imageUrl?: StringFilter<"Sprite"> | string
    animations?: StringFilter<"Sprite"> | string
    createdAt?: DateTimeFilter<"Sprite"> | Date | string
    updatedAt?: DateTimeFilter<"Sprite"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type SpriteOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    animations?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type SpriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpriteWhereInput | SpriteWhereInput[]
    OR?: SpriteWhereInput[]
    NOT?: SpriteWhereInput | SpriteWhereInput[]
    projectId?: StringFilter<"Sprite"> | string
    name?: StringFilter<"Sprite"> | string
    imageUrl?: StringFilter<"Sprite"> | string
    animations?: StringFilter<"Sprite"> | string
    createdAt?: DateTimeFilter<"Sprite"> | Date | string
    updatedAt?: DateTimeFilter<"Sprite"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type SpriteOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    animations?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SpriteCountOrderByAggregateInput
    _max?: SpriteMaxOrderByAggregateInput
    _min?: SpriteMinOrderByAggregateInput
  }

  export type SpriteScalarWhereWithAggregatesInput = {
    AND?: SpriteScalarWhereWithAggregatesInput | SpriteScalarWhereWithAggregatesInput[]
    OR?: SpriteScalarWhereWithAggregatesInput[]
    NOT?: SpriteScalarWhereWithAggregatesInput | SpriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sprite"> | string
    projectId?: StringWithAggregatesFilter<"Sprite"> | string
    name?: StringWithAggregatesFilter<"Sprite"> | string
    imageUrl?: StringWithAggregatesFilter<"Sprite"> | string
    animations?: StringWithAggregatesFilter<"Sprite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Sprite"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sprite"> | Date | string
  }

  export type AIGenerationJobWhereInput = {
    AND?: AIGenerationJobWhereInput | AIGenerationJobWhereInput[]
    OR?: AIGenerationJobWhereInput[]
    NOT?: AIGenerationJobWhereInput | AIGenerationJobWhereInput[]
    id?: StringFilter<"AIGenerationJob"> | string
    projectId?: StringFilter<"AIGenerationJob"> | string
    status?: StringFilter<"AIGenerationJob"> | string
    request?: StringFilter<"AIGenerationJob"> | string
    result?: StringNullableFilter<"AIGenerationJob"> | string | null
    error?: StringNullableFilter<"AIGenerationJob"> | string | null
    createdAt?: DateTimeFilter<"AIGenerationJob"> | Date | string
    updatedAt?: DateTimeFilter<"AIGenerationJob"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type AIGenerationJobOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    status?: SortOrder
    request?: SortOrder
    result?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type AIGenerationJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AIGenerationJobWhereInput | AIGenerationJobWhereInput[]
    OR?: AIGenerationJobWhereInput[]
    NOT?: AIGenerationJobWhereInput | AIGenerationJobWhereInput[]
    projectId?: StringFilter<"AIGenerationJob"> | string
    status?: StringFilter<"AIGenerationJob"> | string
    request?: StringFilter<"AIGenerationJob"> | string
    result?: StringNullableFilter<"AIGenerationJob"> | string | null
    error?: StringNullableFilter<"AIGenerationJob"> | string | null
    createdAt?: DateTimeFilter<"AIGenerationJob"> | Date | string
    updatedAt?: DateTimeFilter<"AIGenerationJob"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type AIGenerationJobOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    status?: SortOrder
    request?: SortOrder
    result?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AIGenerationJobCountOrderByAggregateInput
    _max?: AIGenerationJobMaxOrderByAggregateInput
    _min?: AIGenerationJobMinOrderByAggregateInput
  }

  export type AIGenerationJobScalarWhereWithAggregatesInput = {
    AND?: AIGenerationJobScalarWhereWithAggregatesInput | AIGenerationJobScalarWhereWithAggregatesInput[]
    OR?: AIGenerationJobScalarWhereWithAggregatesInput[]
    NOT?: AIGenerationJobScalarWhereWithAggregatesInput | AIGenerationJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIGenerationJob"> | string
    projectId?: StringWithAggregatesFilter<"AIGenerationJob"> | string
    status?: StringWithAggregatesFilter<"AIGenerationJob"> | string
    request?: StringWithAggregatesFilter<"AIGenerationJob"> | string
    result?: StringNullableWithAggregatesFilter<"AIGenerationJob"> | string | null
    error?: StringNullableWithAggregatesFilter<"AIGenerationJob"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AIGenerationJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AIGenerationJob"> | Date | string
  }

  export type LocaleWhereInput = {
    AND?: LocaleWhereInput | LocaleWhereInput[]
    OR?: LocaleWhereInput[]
    NOT?: LocaleWhereInput | LocaleWhereInput[]
    id?: StringFilter<"Locale"> | string
    projectId?: StringFilter<"Locale"> | string
    lang?: StringFilter<"Locale"> | string
    entries?: StringFilter<"Locale"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type LocaleOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    lang?: SortOrder
    entries?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type LocaleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_lang?: LocaleProjectIdLangCompoundUniqueInput
    AND?: LocaleWhereInput | LocaleWhereInput[]
    OR?: LocaleWhereInput[]
    NOT?: LocaleWhereInput | LocaleWhereInput[]
    projectId?: StringFilter<"Locale"> | string
    lang?: StringFilter<"Locale"> | string
    entries?: StringFilter<"Locale"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "projectId_lang">

  export type LocaleOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    lang?: SortOrder
    entries?: SortOrder
    _count?: LocaleCountOrderByAggregateInput
    _max?: LocaleMaxOrderByAggregateInput
    _min?: LocaleMinOrderByAggregateInput
  }

  export type LocaleScalarWhereWithAggregatesInput = {
    AND?: LocaleScalarWhereWithAggregatesInput | LocaleScalarWhereWithAggregatesInput[]
    OR?: LocaleScalarWhereWithAggregatesInput[]
    NOT?: LocaleScalarWhereWithAggregatesInput | LocaleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Locale"> | string
    projectId?: StringWithAggregatesFilter<"Locale"> | string
    lang?: StringWithAggregatesFilter<"Locale"> | string
    entries?: StringWithAggregatesFilter<"Locale"> | string
  }

  export type FlagWhereInput = {
    AND?: FlagWhereInput | FlagWhereInput[]
    OR?: FlagWhereInput[]
    NOT?: FlagWhereInput | FlagWhereInput[]
    id?: StringFilter<"Flag"> | string
    projectId?: StringFilter<"Flag"> | string
    key?: StringFilter<"Flag"> | string
    value?: StringFilter<"Flag"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type FlagOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type FlagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_key?: FlagProjectIdKeyCompoundUniqueInput
    AND?: FlagWhereInput | FlagWhereInput[]
    OR?: FlagWhereInput[]
    NOT?: FlagWhereInput | FlagWhereInput[]
    projectId?: StringFilter<"Flag"> | string
    key?: StringFilter<"Flag"> | string
    value?: StringFilter<"Flag"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "projectId_key">

  export type FlagOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    _count?: FlagCountOrderByAggregateInput
    _max?: FlagMaxOrderByAggregateInput
    _min?: FlagMinOrderByAggregateInput
  }

  export type FlagScalarWhereWithAggregatesInput = {
    AND?: FlagScalarWhereWithAggregatesInput | FlagScalarWhereWithAggregatesInput[]
    OR?: FlagScalarWhereWithAggregatesInput[]
    NOT?: FlagScalarWhereWithAggregatesInput | FlagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Flag"> | string
    projectId?: StringWithAggregatesFilter<"Flag"> | string
    key?: StringWithAggregatesFilter<"Flag"> | string
    value?: StringWithAggregatesFilter<"Flag"> | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    settings?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maps?: MapCreateNestedManyWithoutProjectInput
    tilesets?: TilesetCreateNestedManyWithoutProjectInput
    sprites?: SpriteCreateNestedManyWithoutProjectInput
    locales?: LocaleCreateNestedManyWithoutProjectInput
    flags?: FlagCreateNestedManyWithoutProjectInput
    aiJobs?: AIGenerationJobCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    settings?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maps?: MapUncheckedCreateNestedManyWithoutProjectInput
    tilesets?: TilesetUncheckedCreateNestedManyWithoutProjectInput
    sprites?: SpriteUncheckedCreateNestedManyWithoutProjectInput
    locales?: LocaleUncheckedCreateNestedManyWithoutProjectInput
    flags?: FlagUncheckedCreateNestedManyWithoutProjectInput
    aiJobs?: AIGenerationJobUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    settings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maps?: MapUpdateManyWithoutProjectNestedInput
    tilesets?: TilesetUpdateManyWithoutProjectNestedInput
    sprites?: SpriteUpdateManyWithoutProjectNestedInput
    locales?: LocaleUpdateManyWithoutProjectNestedInput
    flags?: FlagUpdateManyWithoutProjectNestedInput
    aiJobs?: AIGenerationJobUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    settings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maps?: MapUncheckedUpdateManyWithoutProjectNestedInput
    tilesets?: TilesetUncheckedUpdateManyWithoutProjectNestedInput
    sprites?: SpriteUncheckedUpdateManyWithoutProjectNestedInput
    locales?: LocaleUncheckedUpdateManyWithoutProjectNestedInput
    flags?: FlagUncheckedUpdateManyWithoutProjectNestedInput
    aiJobs?: AIGenerationJobUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    settings?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    settings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    settings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapCreateInput = {
    id?: string
    name: string
    width: number
    height: number
    layers: string
    events: string
    project: ProjectCreateNestedOneWithoutMapsInput
  }

  export type MapUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    width: number
    height: number
    layers: string
    events: string
  }

  export type MapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    layers?: StringFieldUpdateOperationsInput | string
    events?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutMapsNestedInput
  }

  export type MapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    layers?: StringFieldUpdateOperationsInput | string
    events?: StringFieldUpdateOperationsInput | string
  }

  export type MapCreateManyInput = {
    id?: string
    projectId: string
    name: string
    width: number
    height: number
    layers: string
    events: string
  }

  export type MapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    layers?: StringFieldUpdateOperationsInput | string
    events?: StringFieldUpdateOperationsInput | string
  }

  export type MapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    layers?: StringFieldUpdateOperationsInput | string
    events?: StringFieldUpdateOperationsInput | string
  }

  export type TilesetCreateInput = {
    id?: string
    name: string
    imageUrl: string
    tileSize?: number
    columns: number
    rows: number
    stableIdMap: string
    hash: string
    metadata?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTilesetsInput
  }

  export type TilesetUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    imageUrl: string
    tileSize?: number
    columns: number
    rows: number
    stableIdMap: string
    hash: string
    metadata?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TilesetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    tileSize?: IntFieldUpdateOperationsInput | number
    columns?: IntFieldUpdateOperationsInput | number
    rows?: IntFieldUpdateOperationsInput | number
    stableIdMap?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTilesetsNestedInput
  }

  export type TilesetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    tileSize?: IntFieldUpdateOperationsInput | number
    columns?: IntFieldUpdateOperationsInput | number
    rows?: IntFieldUpdateOperationsInput | number
    stableIdMap?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TilesetCreateManyInput = {
    id?: string
    projectId: string
    name: string
    imageUrl: string
    tileSize?: number
    columns: number
    rows: number
    stableIdMap: string
    hash: string
    metadata?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TilesetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    tileSize?: IntFieldUpdateOperationsInput | number
    columns?: IntFieldUpdateOperationsInput | number
    rows?: IntFieldUpdateOperationsInput | number
    stableIdMap?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TilesetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    tileSize?: IntFieldUpdateOperationsInput | number
    columns?: IntFieldUpdateOperationsInput | number
    rows?: IntFieldUpdateOperationsInput | number
    stableIdMap?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpriteCreateInput = {
    id?: string
    name: string
    imageUrl: string
    animations: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutSpritesInput
  }

  export type SpriteUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    imageUrl: string
    animations: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    animations?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutSpritesNestedInput
  }

  export type SpriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    animations?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpriteCreateManyInput = {
    id?: string
    projectId: string
    name: string
    imageUrl: string
    animations: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    animations?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    animations?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIGenerationJobCreateInput = {
    id?: string
    status: string
    request: string
    result?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutAiJobsInput
  }

  export type AIGenerationJobUncheckedCreateInput = {
    id?: string
    projectId: string
    status: string
    request: string
    result?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIGenerationJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    request?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutAiJobsNestedInput
  }

  export type AIGenerationJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    request?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIGenerationJobCreateManyInput = {
    id?: string
    projectId: string
    status: string
    request: string
    result?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIGenerationJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    request?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIGenerationJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    request?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocaleCreateInput = {
    id?: string
    lang: string
    entries: string
    project: ProjectCreateNestedOneWithoutLocalesInput
  }

  export type LocaleUncheckedCreateInput = {
    id?: string
    projectId: string
    lang: string
    entries: string
  }

  export type LocaleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    entries?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutLocalesNestedInput
  }

  export type LocaleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    entries?: StringFieldUpdateOperationsInput | string
  }

  export type LocaleCreateManyInput = {
    id?: string
    projectId: string
    lang: string
    entries: string
  }

  export type LocaleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    entries?: StringFieldUpdateOperationsInput | string
  }

  export type LocaleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    entries?: StringFieldUpdateOperationsInput | string
  }

  export type FlagCreateInput = {
    id?: string
    key: string
    value: string
    project: ProjectCreateNestedOneWithoutFlagsInput
  }

  export type FlagUncheckedCreateInput = {
    id?: string
    projectId: string
    key: string
    value: string
  }

  export type FlagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutFlagsNestedInput
  }

  export type FlagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type FlagCreateManyInput = {
    id?: string
    projectId: string
    key: string
    value: string
  }

  export type FlagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type FlagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MapListRelationFilter = {
    every?: MapWhereInput
    some?: MapWhereInput
    none?: MapWhereInput
  }

  export type TilesetListRelationFilter = {
    every?: TilesetWhereInput
    some?: TilesetWhereInput
    none?: TilesetWhereInput
  }

  export type SpriteListRelationFilter = {
    every?: SpriteWhereInput
    some?: SpriteWhereInput
    none?: SpriteWhereInput
  }

  export type LocaleListRelationFilter = {
    every?: LocaleWhereInput
    some?: LocaleWhereInput
    none?: LocaleWhereInput
  }

  export type FlagListRelationFilter = {
    every?: FlagWhereInput
    some?: FlagWhereInput
    none?: FlagWhereInput
  }

  export type AIGenerationJobListRelationFilter = {
    every?: AIGenerationJobWhereInput
    some?: AIGenerationJobWhereInput
    none?: AIGenerationJobWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TilesetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AIGenerationJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    settings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    settings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    settings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type MapCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    layers?: SortOrder
    events?: SortOrder
  }

  export type MapAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type MapMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    layers?: SortOrder
    events?: SortOrder
  }

  export type MapMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    width?: SortOrder
    height?: SortOrder
    layers?: SortOrder
    events?: SortOrder
  }

  export type MapSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TilesetCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    tileSize?: SortOrder
    columns?: SortOrder
    rows?: SortOrder
    stableIdMap?: SortOrder
    hash?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TilesetAvgOrderByAggregateInput = {
    tileSize?: SortOrder
    columns?: SortOrder
    rows?: SortOrder
  }

  export type TilesetMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    tileSize?: SortOrder
    columns?: SortOrder
    rows?: SortOrder
    stableIdMap?: SortOrder
    hash?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TilesetMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    tileSize?: SortOrder
    columns?: SortOrder
    rows?: SortOrder
    stableIdMap?: SortOrder
    hash?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TilesetSumOrderByAggregateInput = {
    tileSize?: SortOrder
    columns?: SortOrder
    rows?: SortOrder
  }

  export type SpriteCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    animations?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpriteMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    animations?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpriteMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    animations?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIGenerationJobCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    status?: SortOrder
    request?: SortOrder
    result?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIGenerationJobMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    status?: SortOrder
    request?: SortOrder
    result?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIGenerationJobMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    status?: SortOrder
    request?: SortOrder
    result?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocaleProjectIdLangCompoundUniqueInput = {
    projectId: string
    lang: string
  }

  export type LocaleCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    lang?: SortOrder
    entries?: SortOrder
  }

  export type LocaleMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    lang?: SortOrder
    entries?: SortOrder
  }

  export type LocaleMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    lang?: SortOrder
    entries?: SortOrder
  }

  export type FlagProjectIdKeyCompoundUniqueInput = {
    projectId: string
    key: string
  }

  export type FlagCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type FlagMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type FlagMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type MapCreateNestedManyWithoutProjectInput = {
    create?: XOR<MapCreateWithoutProjectInput, MapUncheckedCreateWithoutProjectInput> | MapCreateWithoutProjectInput[] | MapUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MapCreateOrConnectWithoutProjectInput | MapCreateOrConnectWithoutProjectInput[]
    createMany?: MapCreateManyProjectInputEnvelope
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[]
  }

  export type TilesetCreateNestedManyWithoutProjectInput = {
    create?: XOR<TilesetCreateWithoutProjectInput, TilesetUncheckedCreateWithoutProjectInput> | TilesetCreateWithoutProjectInput[] | TilesetUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TilesetCreateOrConnectWithoutProjectInput | TilesetCreateOrConnectWithoutProjectInput[]
    createMany?: TilesetCreateManyProjectInputEnvelope
    connect?: TilesetWhereUniqueInput | TilesetWhereUniqueInput[]
  }

  export type SpriteCreateNestedManyWithoutProjectInput = {
    create?: XOR<SpriteCreateWithoutProjectInput, SpriteUncheckedCreateWithoutProjectInput> | SpriteCreateWithoutProjectInput[] | SpriteUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SpriteCreateOrConnectWithoutProjectInput | SpriteCreateOrConnectWithoutProjectInput[]
    createMany?: SpriteCreateManyProjectInputEnvelope
    connect?: SpriteWhereUniqueInput | SpriteWhereUniqueInput[]
  }

  export type LocaleCreateNestedManyWithoutProjectInput = {
    create?: XOR<LocaleCreateWithoutProjectInput, LocaleUncheckedCreateWithoutProjectInput> | LocaleCreateWithoutProjectInput[] | LocaleUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LocaleCreateOrConnectWithoutProjectInput | LocaleCreateOrConnectWithoutProjectInput[]
    createMany?: LocaleCreateManyProjectInputEnvelope
    connect?: LocaleWhereUniqueInput | LocaleWhereUniqueInput[]
  }

  export type FlagCreateNestedManyWithoutProjectInput = {
    create?: XOR<FlagCreateWithoutProjectInput, FlagUncheckedCreateWithoutProjectInput> | FlagCreateWithoutProjectInput[] | FlagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutProjectInput | FlagCreateOrConnectWithoutProjectInput[]
    createMany?: FlagCreateManyProjectInputEnvelope
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
  }

  export type AIGenerationJobCreateNestedManyWithoutProjectInput = {
    create?: XOR<AIGenerationJobCreateWithoutProjectInput, AIGenerationJobUncheckedCreateWithoutProjectInput> | AIGenerationJobCreateWithoutProjectInput[] | AIGenerationJobUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AIGenerationJobCreateOrConnectWithoutProjectInput | AIGenerationJobCreateOrConnectWithoutProjectInput[]
    createMany?: AIGenerationJobCreateManyProjectInputEnvelope
    connect?: AIGenerationJobWhereUniqueInput | AIGenerationJobWhereUniqueInput[]
  }

  export type MapUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<MapCreateWithoutProjectInput, MapUncheckedCreateWithoutProjectInput> | MapCreateWithoutProjectInput[] | MapUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MapCreateOrConnectWithoutProjectInput | MapCreateOrConnectWithoutProjectInput[]
    createMany?: MapCreateManyProjectInputEnvelope
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[]
  }

  export type TilesetUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TilesetCreateWithoutProjectInput, TilesetUncheckedCreateWithoutProjectInput> | TilesetCreateWithoutProjectInput[] | TilesetUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TilesetCreateOrConnectWithoutProjectInput | TilesetCreateOrConnectWithoutProjectInput[]
    createMany?: TilesetCreateManyProjectInputEnvelope
    connect?: TilesetWhereUniqueInput | TilesetWhereUniqueInput[]
  }

  export type SpriteUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<SpriteCreateWithoutProjectInput, SpriteUncheckedCreateWithoutProjectInput> | SpriteCreateWithoutProjectInput[] | SpriteUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SpriteCreateOrConnectWithoutProjectInput | SpriteCreateOrConnectWithoutProjectInput[]
    createMany?: SpriteCreateManyProjectInputEnvelope
    connect?: SpriteWhereUniqueInput | SpriteWhereUniqueInput[]
  }

  export type LocaleUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<LocaleCreateWithoutProjectInput, LocaleUncheckedCreateWithoutProjectInput> | LocaleCreateWithoutProjectInput[] | LocaleUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LocaleCreateOrConnectWithoutProjectInput | LocaleCreateOrConnectWithoutProjectInput[]
    createMany?: LocaleCreateManyProjectInputEnvelope
    connect?: LocaleWhereUniqueInput | LocaleWhereUniqueInput[]
  }

  export type FlagUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<FlagCreateWithoutProjectInput, FlagUncheckedCreateWithoutProjectInput> | FlagCreateWithoutProjectInput[] | FlagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutProjectInput | FlagCreateOrConnectWithoutProjectInput[]
    createMany?: FlagCreateManyProjectInputEnvelope
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
  }

  export type AIGenerationJobUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<AIGenerationJobCreateWithoutProjectInput, AIGenerationJobUncheckedCreateWithoutProjectInput> | AIGenerationJobCreateWithoutProjectInput[] | AIGenerationJobUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AIGenerationJobCreateOrConnectWithoutProjectInput | AIGenerationJobCreateOrConnectWithoutProjectInput[]
    createMany?: AIGenerationJobCreateManyProjectInputEnvelope
    connect?: AIGenerationJobWhereUniqueInput | AIGenerationJobWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MapUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MapCreateWithoutProjectInput, MapUncheckedCreateWithoutProjectInput> | MapCreateWithoutProjectInput[] | MapUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MapCreateOrConnectWithoutProjectInput | MapCreateOrConnectWithoutProjectInput[]
    upsert?: MapUpsertWithWhereUniqueWithoutProjectInput | MapUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MapCreateManyProjectInputEnvelope
    set?: MapWhereUniqueInput | MapWhereUniqueInput[]
    disconnect?: MapWhereUniqueInput | MapWhereUniqueInput[]
    delete?: MapWhereUniqueInput | MapWhereUniqueInput[]
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[]
    update?: MapUpdateWithWhereUniqueWithoutProjectInput | MapUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MapUpdateManyWithWhereWithoutProjectInput | MapUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MapScalarWhereInput | MapScalarWhereInput[]
  }

  export type TilesetUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TilesetCreateWithoutProjectInput, TilesetUncheckedCreateWithoutProjectInput> | TilesetCreateWithoutProjectInput[] | TilesetUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TilesetCreateOrConnectWithoutProjectInput | TilesetCreateOrConnectWithoutProjectInput[]
    upsert?: TilesetUpsertWithWhereUniqueWithoutProjectInput | TilesetUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TilesetCreateManyProjectInputEnvelope
    set?: TilesetWhereUniqueInput | TilesetWhereUniqueInput[]
    disconnect?: TilesetWhereUniqueInput | TilesetWhereUniqueInput[]
    delete?: TilesetWhereUniqueInput | TilesetWhereUniqueInput[]
    connect?: TilesetWhereUniqueInput | TilesetWhereUniqueInput[]
    update?: TilesetUpdateWithWhereUniqueWithoutProjectInput | TilesetUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TilesetUpdateManyWithWhereWithoutProjectInput | TilesetUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TilesetScalarWhereInput | TilesetScalarWhereInput[]
  }

  export type SpriteUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SpriteCreateWithoutProjectInput, SpriteUncheckedCreateWithoutProjectInput> | SpriteCreateWithoutProjectInput[] | SpriteUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SpriteCreateOrConnectWithoutProjectInput | SpriteCreateOrConnectWithoutProjectInput[]
    upsert?: SpriteUpsertWithWhereUniqueWithoutProjectInput | SpriteUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SpriteCreateManyProjectInputEnvelope
    set?: SpriteWhereUniqueInput | SpriteWhereUniqueInput[]
    disconnect?: SpriteWhereUniqueInput | SpriteWhereUniqueInput[]
    delete?: SpriteWhereUniqueInput | SpriteWhereUniqueInput[]
    connect?: SpriteWhereUniqueInput | SpriteWhereUniqueInput[]
    update?: SpriteUpdateWithWhereUniqueWithoutProjectInput | SpriteUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SpriteUpdateManyWithWhereWithoutProjectInput | SpriteUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SpriteScalarWhereInput | SpriteScalarWhereInput[]
  }

  export type LocaleUpdateManyWithoutProjectNestedInput = {
    create?: XOR<LocaleCreateWithoutProjectInput, LocaleUncheckedCreateWithoutProjectInput> | LocaleCreateWithoutProjectInput[] | LocaleUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LocaleCreateOrConnectWithoutProjectInput | LocaleCreateOrConnectWithoutProjectInput[]
    upsert?: LocaleUpsertWithWhereUniqueWithoutProjectInput | LocaleUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: LocaleCreateManyProjectInputEnvelope
    set?: LocaleWhereUniqueInput | LocaleWhereUniqueInput[]
    disconnect?: LocaleWhereUniqueInput | LocaleWhereUniqueInput[]
    delete?: LocaleWhereUniqueInput | LocaleWhereUniqueInput[]
    connect?: LocaleWhereUniqueInput | LocaleWhereUniqueInput[]
    update?: LocaleUpdateWithWhereUniqueWithoutProjectInput | LocaleUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: LocaleUpdateManyWithWhereWithoutProjectInput | LocaleUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: LocaleScalarWhereInput | LocaleScalarWhereInput[]
  }

  export type FlagUpdateManyWithoutProjectNestedInput = {
    create?: XOR<FlagCreateWithoutProjectInput, FlagUncheckedCreateWithoutProjectInput> | FlagCreateWithoutProjectInput[] | FlagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutProjectInput | FlagCreateOrConnectWithoutProjectInput[]
    upsert?: FlagUpsertWithWhereUniqueWithoutProjectInput | FlagUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: FlagCreateManyProjectInputEnvelope
    set?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    disconnect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    delete?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    update?: FlagUpdateWithWhereUniqueWithoutProjectInput | FlagUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: FlagUpdateManyWithWhereWithoutProjectInput | FlagUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: FlagScalarWhereInput | FlagScalarWhereInput[]
  }

  export type AIGenerationJobUpdateManyWithoutProjectNestedInput = {
    create?: XOR<AIGenerationJobCreateWithoutProjectInput, AIGenerationJobUncheckedCreateWithoutProjectInput> | AIGenerationJobCreateWithoutProjectInput[] | AIGenerationJobUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AIGenerationJobCreateOrConnectWithoutProjectInput | AIGenerationJobCreateOrConnectWithoutProjectInput[]
    upsert?: AIGenerationJobUpsertWithWhereUniqueWithoutProjectInput | AIGenerationJobUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: AIGenerationJobCreateManyProjectInputEnvelope
    set?: AIGenerationJobWhereUniqueInput | AIGenerationJobWhereUniqueInput[]
    disconnect?: AIGenerationJobWhereUniqueInput | AIGenerationJobWhereUniqueInput[]
    delete?: AIGenerationJobWhereUniqueInput | AIGenerationJobWhereUniqueInput[]
    connect?: AIGenerationJobWhereUniqueInput | AIGenerationJobWhereUniqueInput[]
    update?: AIGenerationJobUpdateWithWhereUniqueWithoutProjectInput | AIGenerationJobUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: AIGenerationJobUpdateManyWithWhereWithoutProjectInput | AIGenerationJobUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: AIGenerationJobScalarWhereInput | AIGenerationJobScalarWhereInput[]
  }

  export type MapUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MapCreateWithoutProjectInput, MapUncheckedCreateWithoutProjectInput> | MapCreateWithoutProjectInput[] | MapUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MapCreateOrConnectWithoutProjectInput | MapCreateOrConnectWithoutProjectInput[]
    upsert?: MapUpsertWithWhereUniqueWithoutProjectInput | MapUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MapCreateManyProjectInputEnvelope
    set?: MapWhereUniqueInput | MapWhereUniqueInput[]
    disconnect?: MapWhereUniqueInput | MapWhereUniqueInput[]
    delete?: MapWhereUniqueInput | MapWhereUniqueInput[]
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[]
    update?: MapUpdateWithWhereUniqueWithoutProjectInput | MapUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MapUpdateManyWithWhereWithoutProjectInput | MapUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MapScalarWhereInput | MapScalarWhereInput[]
  }

  export type TilesetUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TilesetCreateWithoutProjectInput, TilesetUncheckedCreateWithoutProjectInput> | TilesetCreateWithoutProjectInput[] | TilesetUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TilesetCreateOrConnectWithoutProjectInput | TilesetCreateOrConnectWithoutProjectInput[]
    upsert?: TilesetUpsertWithWhereUniqueWithoutProjectInput | TilesetUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TilesetCreateManyProjectInputEnvelope
    set?: TilesetWhereUniqueInput | TilesetWhereUniqueInput[]
    disconnect?: TilesetWhereUniqueInput | TilesetWhereUniqueInput[]
    delete?: TilesetWhereUniqueInput | TilesetWhereUniqueInput[]
    connect?: TilesetWhereUniqueInput | TilesetWhereUniqueInput[]
    update?: TilesetUpdateWithWhereUniqueWithoutProjectInput | TilesetUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TilesetUpdateManyWithWhereWithoutProjectInput | TilesetUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TilesetScalarWhereInput | TilesetScalarWhereInput[]
  }

  export type SpriteUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SpriteCreateWithoutProjectInput, SpriteUncheckedCreateWithoutProjectInput> | SpriteCreateWithoutProjectInput[] | SpriteUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SpriteCreateOrConnectWithoutProjectInput | SpriteCreateOrConnectWithoutProjectInput[]
    upsert?: SpriteUpsertWithWhereUniqueWithoutProjectInput | SpriteUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SpriteCreateManyProjectInputEnvelope
    set?: SpriteWhereUniqueInput | SpriteWhereUniqueInput[]
    disconnect?: SpriteWhereUniqueInput | SpriteWhereUniqueInput[]
    delete?: SpriteWhereUniqueInput | SpriteWhereUniqueInput[]
    connect?: SpriteWhereUniqueInput | SpriteWhereUniqueInput[]
    update?: SpriteUpdateWithWhereUniqueWithoutProjectInput | SpriteUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SpriteUpdateManyWithWhereWithoutProjectInput | SpriteUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SpriteScalarWhereInput | SpriteScalarWhereInput[]
  }

  export type LocaleUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<LocaleCreateWithoutProjectInput, LocaleUncheckedCreateWithoutProjectInput> | LocaleCreateWithoutProjectInput[] | LocaleUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LocaleCreateOrConnectWithoutProjectInput | LocaleCreateOrConnectWithoutProjectInput[]
    upsert?: LocaleUpsertWithWhereUniqueWithoutProjectInput | LocaleUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: LocaleCreateManyProjectInputEnvelope
    set?: LocaleWhereUniqueInput | LocaleWhereUniqueInput[]
    disconnect?: LocaleWhereUniqueInput | LocaleWhereUniqueInput[]
    delete?: LocaleWhereUniqueInput | LocaleWhereUniqueInput[]
    connect?: LocaleWhereUniqueInput | LocaleWhereUniqueInput[]
    update?: LocaleUpdateWithWhereUniqueWithoutProjectInput | LocaleUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: LocaleUpdateManyWithWhereWithoutProjectInput | LocaleUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: LocaleScalarWhereInput | LocaleScalarWhereInput[]
  }

  export type FlagUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<FlagCreateWithoutProjectInput, FlagUncheckedCreateWithoutProjectInput> | FlagCreateWithoutProjectInput[] | FlagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutProjectInput | FlagCreateOrConnectWithoutProjectInput[]
    upsert?: FlagUpsertWithWhereUniqueWithoutProjectInput | FlagUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: FlagCreateManyProjectInputEnvelope
    set?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    disconnect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    delete?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    update?: FlagUpdateWithWhereUniqueWithoutProjectInput | FlagUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: FlagUpdateManyWithWhereWithoutProjectInput | FlagUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: FlagScalarWhereInput | FlagScalarWhereInput[]
  }

  export type AIGenerationJobUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<AIGenerationJobCreateWithoutProjectInput, AIGenerationJobUncheckedCreateWithoutProjectInput> | AIGenerationJobCreateWithoutProjectInput[] | AIGenerationJobUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AIGenerationJobCreateOrConnectWithoutProjectInput | AIGenerationJobCreateOrConnectWithoutProjectInput[]
    upsert?: AIGenerationJobUpsertWithWhereUniqueWithoutProjectInput | AIGenerationJobUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: AIGenerationJobCreateManyProjectInputEnvelope
    set?: AIGenerationJobWhereUniqueInput | AIGenerationJobWhereUniqueInput[]
    disconnect?: AIGenerationJobWhereUniqueInput | AIGenerationJobWhereUniqueInput[]
    delete?: AIGenerationJobWhereUniqueInput | AIGenerationJobWhereUniqueInput[]
    connect?: AIGenerationJobWhereUniqueInput | AIGenerationJobWhereUniqueInput[]
    update?: AIGenerationJobUpdateWithWhereUniqueWithoutProjectInput | AIGenerationJobUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: AIGenerationJobUpdateManyWithWhereWithoutProjectInput | AIGenerationJobUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: AIGenerationJobScalarWhereInput | AIGenerationJobScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutMapsInput = {
    create?: XOR<ProjectCreateWithoutMapsInput, ProjectUncheckedCreateWithoutMapsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMapsInput
    connect?: ProjectWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutMapsNestedInput = {
    create?: XOR<ProjectCreateWithoutMapsInput, ProjectUncheckedCreateWithoutMapsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMapsInput
    upsert?: ProjectUpsertWithoutMapsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutMapsInput, ProjectUpdateWithoutMapsInput>, ProjectUncheckedUpdateWithoutMapsInput>
  }

  export type ProjectCreateNestedOneWithoutTilesetsInput = {
    create?: XOR<ProjectCreateWithoutTilesetsInput, ProjectUncheckedCreateWithoutTilesetsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTilesetsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutTilesetsNestedInput = {
    create?: XOR<ProjectCreateWithoutTilesetsInput, ProjectUncheckedCreateWithoutTilesetsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTilesetsInput
    upsert?: ProjectUpsertWithoutTilesetsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTilesetsInput, ProjectUpdateWithoutTilesetsInput>, ProjectUncheckedUpdateWithoutTilesetsInput>
  }

  export type ProjectCreateNestedOneWithoutSpritesInput = {
    create?: XOR<ProjectCreateWithoutSpritesInput, ProjectUncheckedCreateWithoutSpritesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSpritesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutSpritesNestedInput = {
    create?: XOR<ProjectCreateWithoutSpritesInput, ProjectUncheckedCreateWithoutSpritesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSpritesInput
    upsert?: ProjectUpsertWithoutSpritesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutSpritesInput, ProjectUpdateWithoutSpritesInput>, ProjectUncheckedUpdateWithoutSpritesInput>
  }

  export type ProjectCreateNestedOneWithoutAiJobsInput = {
    create?: XOR<ProjectCreateWithoutAiJobsInput, ProjectUncheckedCreateWithoutAiJobsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAiJobsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutAiJobsNestedInput = {
    create?: XOR<ProjectCreateWithoutAiJobsInput, ProjectUncheckedCreateWithoutAiJobsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAiJobsInput
    upsert?: ProjectUpsertWithoutAiJobsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutAiJobsInput, ProjectUpdateWithoutAiJobsInput>, ProjectUncheckedUpdateWithoutAiJobsInput>
  }

  export type ProjectCreateNestedOneWithoutLocalesInput = {
    create?: XOR<ProjectCreateWithoutLocalesInput, ProjectUncheckedCreateWithoutLocalesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLocalesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutLocalesNestedInput = {
    create?: XOR<ProjectCreateWithoutLocalesInput, ProjectUncheckedCreateWithoutLocalesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLocalesInput
    upsert?: ProjectUpsertWithoutLocalesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutLocalesInput, ProjectUpdateWithoutLocalesInput>, ProjectUncheckedUpdateWithoutLocalesInput>
  }

  export type ProjectCreateNestedOneWithoutFlagsInput = {
    create?: XOR<ProjectCreateWithoutFlagsInput, ProjectUncheckedCreateWithoutFlagsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFlagsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutFlagsNestedInput = {
    create?: XOR<ProjectCreateWithoutFlagsInput, ProjectUncheckedCreateWithoutFlagsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFlagsInput
    upsert?: ProjectUpsertWithoutFlagsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutFlagsInput, ProjectUpdateWithoutFlagsInput>, ProjectUncheckedUpdateWithoutFlagsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MapCreateWithoutProjectInput = {
    id?: string
    name: string
    width: number
    height: number
    layers: string
    events: string
  }

  export type MapUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    width: number
    height: number
    layers: string
    events: string
  }

  export type MapCreateOrConnectWithoutProjectInput = {
    where: MapWhereUniqueInput
    create: XOR<MapCreateWithoutProjectInput, MapUncheckedCreateWithoutProjectInput>
  }

  export type MapCreateManyProjectInputEnvelope = {
    data: MapCreateManyProjectInput | MapCreateManyProjectInput[]
  }

  export type TilesetCreateWithoutProjectInput = {
    id?: string
    name: string
    imageUrl: string
    tileSize?: number
    columns: number
    rows: number
    stableIdMap: string
    hash: string
    metadata?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TilesetUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    imageUrl: string
    tileSize?: number
    columns: number
    rows: number
    stableIdMap: string
    hash: string
    metadata?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TilesetCreateOrConnectWithoutProjectInput = {
    where: TilesetWhereUniqueInput
    create: XOR<TilesetCreateWithoutProjectInput, TilesetUncheckedCreateWithoutProjectInput>
  }

  export type TilesetCreateManyProjectInputEnvelope = {
    data: TilesetCreateManyProjectInput | TilesetCreateManyProjectInput[]
  }

  export type SpriteCreateWithoutProjectInput = {
    id?: string
    name: string
    imageUrl: string
    animations: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpriteUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    imageUrl: string
    animations: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpriteCreateOrConnectWithoutProjectInput = {
    where: SpriteWhereUniqueInput
    create: XOR<SpriteCreateWithoutProjectInput, SpriteUncheckedCreateWithoutProjectInput>
  }

  export type SpriteCreateManyProjectInputEnvelope = {
    data: SpriteCreateManyProjectInput | SpriteCreateManyProjectInput[]
  }

  export type LocaleCreateWithoutProjectInput = {
    id?: string
    lang: string
    entries: string
  }

  export type LocaleUncheckedCreateWithoutProjectInput = {
    id?: string
    lang: string
    entries: string
  }

  export type LocaleCreateOrConnectWithoutProjectInput = {
    where: LocaleWhereUniqueInput
    create: XOR<LocaleCreateWithoutProjectInput, LocaleUncheckedCreateWithoutProjectInput>
  }

  export type LocaleCreateManyProjectInputEnvelope = {
    data: LocaleCreateManyProjectInput | LocaleCreateManyProjectInput[]
  }

  export type FlagCreateWithoutProjectInput = {
    id?: string
    key: string
    value: string
  }

  export type FlagUncheckedCreateWithoutProjectInput = {
    id?: string
    key: string
    value: string
  }

  export type FlagCreateOrConnectWithoutProjectInput = {
    where: FlagWhereUniqueInput
    create: XOR<FlagCreateWithoutProjectInput, FlagUncheckedCreateWithoutProjectInput>
  }

  export type FlagCreateManyProjectInputEnvelope = {
    data: FlagCreateManyProjectInput | FlagCreateManyProjectInput[]
  }

  export type AIGenerationJobCreateWithoutProjectInput = {
    id?: string
    status: string
    request: string
    result?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIGenerationJobUncheckedCreateWithoutProjectInput = {
    id?: string
    status: string
    request: string
    result?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIGenerationJobCreateOrConnectWithoutProjectInput = {
    where: AIGenerationJobWhereUniqueInput
    create: XOR<AIGenerationJobCreateWithoutProjectInput, AIGenerationJobUncheckedCreateWithoutProjectInput>
  }

  export type AIGenerationJobCreateManyProjectInputEnvelope = {
    data: AIGenerationJobCreateManyProjectInput | AIGenerationJobCreateManyProjectInput[]
  }

  export type MapUpsertWithWhereUniqueWithoutProjectInput = {
    where: MapWhereUniqueInput
    update: XOR<MapUpdateWithoutProjectInput, MapUncheckedUpdateWithoutProjectInput>
    create: XOR<MapCreateWithoutProjectInput, MapUncheckedCreateWithoutProjectInput>
  }

  export type MapUpdateWithWhereUniqueWithoutProjectInput = {
    where: MapWhereUniqueInput
    data: XOR<MapUpdateWithoutProjectInput, MapUncheckedUpdateWithoutProjectInput>
  }

  export type MapUpdateManyWithWhereWithoutProjectInput = {
    where: MapScalarWhereInput
    data: XOR<MapUpdateManyMutationInput, MapUncheckedUpdateManyWithoutProjectInput>
  }

  export type MapScalarWhereInput = {
    AND?: MapScalarWhereInput | MapScalarWhereInput[]
    OR?: MapScalarWhereInput[]
    NOT?: MapScalarWhereInput | MapScalarWhereInput[]
    id?: StringFilter<"Map"> | string
    projectId?: StringFilter<"Map"> | string
    name?: StringFilter<"Map"> | string
    width?: IntFilter<"Map"> | number
    height?: IntFilter<"Map"> | number
    layers?: StringFilter<"Map"> | string
    events?: StringFilter<"Map"> | string
  }

  export type TilesetUpsertWithWhereUniqueWithoutProjectInput = {
    where: TilesetWhereUniqueInput
    update: XOR<TilesetUpdateWithoutProjectInput, TilesetUncheckedUpdateWithoutProjectInput>
    create: XOR<TilesetCreateWithoutProjectInput, TilesetUncheckedCreateWithoutProjectInput>
  }

  export type TilesetUpdateWithWhereUniqueWithoutProjectInput = {
    where: TilesetWhereUniqueInput
    data: XOR<TilesetUpdateWithoutProjectInput, TilesetUncheckedUpdateWithoutProjectInput>
  }

  export type TilesetUpdateManyWithWhereWithoutProjectInput = {
    where: TilesetScalarWhereInput
    data: XOR<TilesetUpdateManyMutationInput, TilesetUncheckedUpdateManyWithoutProjectInput>
  }

  export type TilesetScalarWhereInput = {
    AND?: TilesetScalarWhereInput | TilesetScalarWhereInput[]
    OR?: TilesetScalarWhereInput[]
    NOT?: TilesetScalarWhereInput | TilesetScalarWhereInput[]
    id?: StringFilter<"Tileset"> | string
    projectId?: StringFilter<"Tileset"> | string
    name?: StringFilter<"Tileset"> | string
    imageUrl?: StringFilter<"Tileset"> | string
    tileSize?: IntFilter<"Tileset"> | number
    columns?: IntFilter<"Tileset"> | number
    rows?: IntFilter<"Tileset"> | number
    stableIdMap?: StringFilter<"Tileset"> | string
    hash?: StringFilter<"Tileset"> | string
    metadata?: StringNullableFilter<"Tileset"> | string | null
    createdAt?: DateTimeFilter<"Tileset"> | Date | string
    updatedAt?: DateTimeFilter<"Tileset"> | Date | string
  }

  export type SpriteUpsertWithWhereUniqueWithoutProjectInput = {
    where: SpriteWhereUniqueInput
    update: XOR<SpriteUpdateWithoutProjectInput, SpriteUncheckedUpdateWithoutProjectInput>
    create: XOR<SpriteCreateWithoutProjectInput, SpriteUncheckedCreateWithoutProjectInput>
  }

  export type SpriteUpdateWithWhereUniqueWithoutProjectInput = {
    where: SpriteWhereUniqueInput
    data: XOR<SpriteUpdateWithoutProjectInput, SpriteUncheckedUpdateWithoutProjectInput>
  }

  export type SpriteUpdateManyWithWhereWithoutProjectInput = {
    where: SpriteScalarWhereInput
    data: XOR<SpriteUpdateManyMutationInput, SpriteUncheckedUpdateManyWithoutProjectInput>
  }

  export type SpriteScalarWhereInput = {
    AND?: SpriteScalarWhereInput | SpriteScalarWhereInput[]
    OR?: SpriteScalarWhereInput[]
    NOT?: SpriteScalarWhereInput | SpriteScalarWhereInput[]
    id?: StringFilter<"Sprite"> | string
    projectId?: StringFilter<"Sprite"> | string
    name?: StringFilter<"Sprite"> | string
    imageUrl?: StringFilter<"Sprite"> | string
    animations?: StringFilter<"Sprite"> | string
    createdAt?: DateTimeFilter<"Sprite"> | Date | string
    updatedAt?: DateTimeFilter<"Sprite"> | Date | string
  }

  export type LocaleUpsertWithWhereUniqueWithoutProjectInput = {
    where: LocaleWhereUniqueInput
    update: XOR<LocaleUpdateWithoutProjectInput, LocaleUncheckedUpdateWithoutProjectInput>
    create: XOR<LocaleCreateWithoutProjectInput, LocaleUncheckedCreateWithoutProjectInput>
  }

  export type LocaleUpdateWithWhereUniqueWithoutProjectInput = {
    where: LocaleWhereUniqueInput
    data: XOR<LocaleUpdateWithoutProjectInput, LocaleUncheckedUpdateWithoutProjectInput>
  }

  export type LocaleUpdateManyWithWhereWithoutProjectInput = {
    where: LocaleScalarWhereInput
    data: XOR<LocaleUpdateManyMutationInput, LocaleUncheckedUpdateManyWithoutProjectInput>
  }

  export type LocaleScalarWhereInput = {
    AND?: LocaleScalarWhereInput | LocaleScalarWhereInput[]
    OR?: LocaleScalarWhereInput[]
    NOT?: LocaleScalarWhereInput | LocaleScalarWhereInput[]
    id?: StringFilter<"Locale"> | string
    projectId?: StringFilter<"Locale"> | string
    lang?: StringFilter<"Locale"> | string
    entries?: StringFilter<"Locale"> | string
  }

  export type FlagUpsertWithWhereUniqueWithoutProjectInput = {
    where: FlagWhereUniqueInput
    update: XOR<FlagUpdateWithoutProjectInput, FlagUncheckedUpdateWithoutProjectInput>
    create: XOR<FlagCreateWithoutProjectInput, FlagUncheckedCreateWithoutProjectInput>
  }

  export type FlagUpdateWithWhereUniqueWithoutProjectInput = {
    where: FlagWhereUniqueInput
    data: XOR<FlagUpdateWithoutProjectInput, FlagUncheckedUpdateWithoutProjectInput>
  }

  export type FlagUpdateManyWithWhereWithoutProjectInput = {
    where: FlagScalarWhereInput
    data: XOR<FlagUpdateManyMutationInput, FlagUncheckedUpdateManyWithoutProjectInput>
  }

  export type FlagScalarWhereInput = {
    AND?: FlagScalarWhereInput | FlagScalarWhereInput[]
    OR?: FlagScalarWhereInput[]
    NOT?: FlagScalarWhereInput | FlagScalarWhereInput[]
    id?: StringFilter<"Flag"> | string
    projectId?: StringFilter<"Flag"> | string
    key?: StringFilter<"Flag"> | string
    value?: StringFilter<"Flag"> | string
  }

  export type AIGenerationJobUpsertWithWhereUniqueWithoutProjectInput = {
    where: AIGenerationJobWhereUniqueInput
    update: XOR<AIGenerationJobUpdateWithoutProjectInput, AIGenerationJobUncheckedUpdateWithoutProjectInput>
    create: XOR<AIGenerationJobCreateWithoutProjectInput, AIGenerationJobUncheckedCreateWithoutProjectInput>
  }

  export type AIGenerationJobUpdateWithWhereUniqueWithoutProjectInput = {
    where: AIGenerationJobWhereUniqueInput
    data: XOR<AIGenerationJobUpdateWithoutProjectInput, AIGenerationJobUncheckedUpdateWithoutProjectInput>
  }

  export type AIGenerationJobUpdateManyWithWhereWithoutProjectInput = {
    where: AIGenerationJobScalarWhereInput
    data: XOR<AIGenerationJobUpdateManyMutationInput, AIGenerationJobUncheckedUpdateManyWithoutProjectInput>
  }

  export type AIGenerationJobScalarWhereInput = {
    AND?: AIGenerationJobScalarWhereInput | AIGenerationJobScalarWhereInput[]
    OR?: AIGenerationJobScalarWhereInput[]
    NOT?: AIGenerationJobScalarWhereInput | AIGenerationJobScalarWhereInput[]
    id?: StringFilter<"AIGenerationJob"> | string
    projectId?: StringFilter<"AIGenerationJob"> | string
    status?: StringFilter<"AIGenerationJob"> | string
    request?: StringFilter<"AIGenerationJob"> | string
    result?: StringNullableFilter<"AIGenerationJob"> | string | null
    error?: StringNullableFilter<"AIGenerationJob"> | string | null
    createdAt?: DateTimeFilter<"AIGenerationJob"> | Date | string
    updatedAt?: DateTimeFilter<"AIGenerationJob"> | Date | string
  }

  export type ProjectCreateWithoutMapsInput = {
    id?: string
    name: string
    settings?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tilesets?: TilesetCreateNestedManyWithoutProjectInput
    sprites?: SpriteCreateNestedManyWithoutProjectInput
    locales?: LocaleCreateNestedManyWithoutProjectInput
    flags?: FlagCreateNestedManyWithoutProjectInput
    aiJobs?: AIGenerationJobCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMapsInput = {
    id?: string
    name: string
    settings?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tilesets?: TilesetUncheckedCreateNestedManyWithoutProjectInput
    sprites?: SpriteUncheckedCreateNestedManyWithoutProjectInput
    locales?: LocaleUncheckedCreateNestedManyWithoutProjectInput
    flags?: FlagUncheckedCreateNestedManyWithoutProjectInput
    aiJobs?: AIGenerationJobUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMapsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMapsInput, ProjectUncheckedCreateWithoutMapsInput>
  }

  export type ProjectUpsertWithoutMapsInput = {
    update: XOR<ProjectUpdateWithoutMapsInput, ProjectUncheckedUpdateWithoutMapsInput>
    create: XOR<ProjectCreateWithoutMapsInput, ProjectUncheckedCreateWithoutMapsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutMapsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutMapsInput, ProjectUncheckedUpdateWithoutMapsInput>
  }

  export type ProjectUpdateWithoutMapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    settings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tilesets?: TilesetUpdateManyWithoutProjectNestedInput
    sprites?: SpriteUpdateManyWithoutProjectNestedInput
    locales?: LocaleUpdateManyWithoutProjectNestedInput
    flags?: FlagUpdateManyWithoutProjectNestedInput
    aiJobs?: AIGenerationJobUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    settings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tilesets?: TilesetUncheckedUpdateManyWithoutProjectNestedInput
    sprites?: SpriteUncheckedUpdateManyWithoutProjectNestedInput
    locales?: LocaleUncheckedUpdateManyWithoutProjectNestedInput
    flags?: FlagUncheckedUpdateManyWithoutProjectNestedInput
    aiJobs?: AIGenerationJobUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutTilesetsInput = {
    id?: string
    name: string
    settings?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maps?: MapCreateNestedManyWithoutProjectInput
    sprites?: SpriteCreateNestedManyWithoutProjectInput
    locales?: LocaleCreateNestedManyWithoutProjectInput
    flags?: FlagCreateNestedManyWithoutProjectInput
    aiJobs?: AIGenerationJobCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTilesetsInput = {
    id?: string
    name: string
    settings?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maps?: MapUncheckedCreateNestedManyWithoutProjectInput
    sprites?: SpriteUncheckedCreateNestedManyWithoutProjectInput
    locales?: LocaleUncheckedCreateNestedManyWithoutProjectInput
    flags?: FlagUncheckedCreateNestedManyWithoutProjectInput
    aiJobs?: AIGenerationJobUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTilesetsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTilesetsInput, ProjectUncheckedCreateWithoutTilesetsInput>
  }

  export type ProjectUpsertWithoutTilesetsInput = {
    update: XOR<ProjectUpdateWithoutTilesetsInput, ProjectUncheckedUpdateWithoutTilesetsInput>
    create: XOR<ProjectCreateWithoutTilesetsInput, ProjectUncheckedCreateWithoutTilesetsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTilesetsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTilesetsInput, ProjectUncheckedUpdateWithoutTilesetsInput>
  }

  export type ProjectUpdateWithoutTilesetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    settings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maps?: MapUpdateManyWithoutProjectNestedInput
    sprites?: SpriteUpdateManyWithoutProjectNestedInput
    locales?: LocaleUpdateManyWithoutProjectNestedInput
    flags?: FlagUpdateManyWithoutProjectNestedInput
    aiJobs?: AIGenerationJobUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTilesetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    settings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maps?: MapUncheckedUpdateManyWithoutProjectNestedInput
    sprites?: SpriteUncheckedUpdateManyWithoutProjectNestedInput
    locales?: LocaleUncheckedUpdateManyWithoutProjectNestedInput
    flags?: FlagUncheckedUpdateManyWithoutProjectNestedInput
    aiJobs?: AIGenerationJobUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutSpritesInput = {
    id?: string
    name: string
    settings?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maps?: MapCreateNestedManyWithoutProjectInput
    tilesets?: TilesetCreateNestedManyWithoutProjectInput
    locales?: LocaleCreateNestedManyWithoutProjectInput
    flags?: FlagCreateNestedManyWithoutProjectInput
    aiJobs?: AIGenerationJobCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutSpritesInput = {
    id?: string
    name: string
    settings?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maps?: MapUncheckedCreateNestedManyWithoutProjectInput
    tilesets?: TilesetUncheckedCreateNestedManyWithoutProjectInput
    locales?: LocaleUncheckedCreateNestedManyWithoutProjectInput
    flags?: FlagUncheckedCreateNestedManyWithoutProjectInput
    aiJobs?: AIGenerationJobUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutSpritesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSpritesInput, ProjectUncheckedCreateWithoutSpritesInput>
  }

  export type ProjectUpsertWithoutSpritesInput = {
    update: XOR<ProjectUpdateWithoutSpritesInput, ProjectUncheckedUpdateWithoutSpritesInput>
    create: XOR<ProjectCreateWithoutSpritesInput, ProjectUncheckedCreateWithoutSpritesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutSpritesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutSpritesInput, ProjectUncheckedUpdateWithoutSpritesInput>
  }

  export type ProjectUpdateWithoutSpritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    settings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maps?: MapUpdateManyWithoutProjectNestedInput
    tilesets?: TilesetUpdateManyWithoutProjectNestedInput
    locales?: LocaleUpdateManyWithoutProjectNestedInput
    flags?: FlagUpdateManyWithoutProjectNestedInput
    aiJobs?: AIGenerationJobUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSpritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    settings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maps?: MapUncheckedUpdateManyWithoutProjectNestedInput
    tilesets?: TilesetUncheckedUpdateManyWithoutProjectNestedInput
    locales?: LocaleUncheckedUpdateManyWithoutProjectNestedInput
    flags?: FlagUncheckedUpdateManyWithoutProjectNestedInput
    aiJobs?: AIGenerationJobUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutAiJobsInput = {
    id?: string
    name: string
    settings?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maps?: MapCreateNestedManyWithoutProjectInput
    tilesets?: TilesetCreateNestedManyWithoutProjectInput
    sprites?: SpriteCreateNestedManyWithoutProjectInput
    locales?: LocaleCreateNestedManyWithoutProjectInput
    flags?: FlagCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutAiJobsInput = {
    id?: string
    name: string
    settings?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maps?: MapUncheckedCreateNestedManyWithoutProjectInput
    tilesets?: TilesetUncheckedCreateNestedManyWithoutProjectInput
    sprites?: SpriteUncheckedCreateNestedManyWithoutProjectInput
    locales?: LocaleUncheckedCreateNestedManyWithoutProjectInput
    flags?: FlagUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutAiJobsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutAiJobsInput, ProjectUncheckedCreateWithoutAiJobsInput>
  }

  export type ProjectUpsertWithoutAiJobsInput = {
    update: XOR<ProjectUpdateWithoutAiJobsInput, ProjectUncheckedUpdateWithoutAiJobsInput>
    create: XOR<ProjectCreateWithoutAiJobsInput, ProjectUncheckedCreateWithoutAiJobsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutAiJobsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutAiJobsInput, ProjectUncheckedUpdateWithoutAiJobsInput>
  }

  export type ProjectUpdateWithoutAiJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    settings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maps?: MapUpdateManyWithoutProjectNestedInput
    tilesets?: TilesetUpdateManyWithoutProjectNestedInput
    sprites?: SpriteUpdateManyWithoutProjectNestedInput
    locales?: LocaleUpdateManyWithoutProjectNestedInput
    flags?: FlagUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutAiJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    settings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maps?: MapUncheckedUpdateManyWithoutProjectNestedInput
    tilesets?: TilesetUncheckedUpdateManyWithoutProjectNestedInput
    sprites?: SpriteUncheckedUpdateManyWithoutProjectNestedInput
    locales?: LocaleUncheckedUpdateManyWithoutProjectNestedInput
    flags?: FlagUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutLocalesInput = {
    id?: string
    name: string
    settings?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maps?: MapCreateNestedManyWithoutProjectInput
    tilesets?: TilesetCreateNestedManyWithoutProjectInput
    sprites?: SpriteCreateNestedManyWithoutProjectInput
    flags?: FlagCreateNestedManyWithoutProjectInput
    aiJobs?: AIGenerationJobCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutLocalesInput = {
    id?: string
    name: string
    settings?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maps?: MapUncheckedCreateNestedManyWithoutProjectInput
    tilesets?: TilesetUncheckedCreateNestedManyWithoutProjectInput
    sprites?: SpriteUncheckedCreateNestedManyWithoutProjectInput
    flags?: FlagUncheckedCreateNestedManyWithoutProjectInput
    aiJobs?: AIGenerationJobUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutLocalesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutLocalesInput, ProjectUncheckedCreateWithoutLocalesInput>
  }

  export type ProjectUpsertWithoutLocalesInput = {
    update: XOR<ProjectUpdateWithoutLocalesInput, ProjectUncheckedUpdateWithoutLocalesInput>
    create: XOR<ProjectCreateWithoutLocalesInput, ProjectUncheckedCreateWithoutLocalesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutLocalesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutLocalesInput, ProjectUncheckedUpdateWithoutLocalesInput>
  }

  export type ProjectUpdateWithoutLocalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    settings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maps?: MapUpdateManyWithoutProjectNestedInput
    tilesets?: TilesetUpdateManyWithoutProjectNestedInput
    sprites?: SpriteUpdateManyWithoutProjectNestedInput
    flags?: FlagUpdateManyWithoutProjectNestedInput
    aiJobs?: AIGenerationJobUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutLocalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    settings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maps?: MapUncheckedUpdateManyWithoutProjectNestedInput
    tilesets?: TilesetUncheckedUpdateManyWithoutProjectNestedInput
    sprites?: SpriteUncheckedUpdateManyWithoutProjectNestedInput
    flags?: FlagUncheckedUpdateManyWithoutProjectNestedInput
    aiJobs?: AIGenerationJobUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutFlagsInput = {
    id?: string
    name: string
    settings?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maps?: MapCreateNestedManyWithoutProjectInput
    tilesets?: TilesetCreateNestedManyWithoutProjectInput
    sprites?: SpriteCreateNestedManyWithoutProjectInput
    locales?: LocaleCreateNestedManyWithoutProjectInput
    aiJobs?: AIGenerationJobCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutFlagsInput = {
    id?: string
    name: string
    settings?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maps?: MapUncheckedCreateNestedManyWithoutProjectInput
    tilesets?: TilesetUncheckedCreateNestedManyWithoutProjectInput
    sprites?: SpriteUncheckedCreateNestedManyWithoutProjectInput
    locales?: LocaleUncheckedCreateNestedManyWithoutProjectInput
    aiJobs?: AIGenerationJobUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutFlagsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutFlagsInput, ProjectUncheckedCreateWithoutFlagsInput>
  }

  export type ProjectUpsertWithoutFlagsInput = {
    update: XOR<ProjectUpdateWithoutFlagsInput, ProjectUncheckedUpdateWithoutFlagsInput>
    create: XOR<ProjectCreateWithoutFlagsInput, ProjectUncheckedCreateWithoutFlagsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutFlagsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutFlagsInput, ProjectUncheckedUpdateWithoutFlagsInput>
  }

  export type ProjectUpdateWithoutFlagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    settings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maps?: MapUpdateManyWithoutProjectNestedInput
    tilesets?: TilesetUpdateManyWithoutProjectNestedInput
    sprites?: SpriteUpdateManyWithoutProjectNestedInput
    locales?: LocaleUpdateManyWithoutProjectNestedInput
    aiJobs?: AIGenerationJobUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutFlagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    settings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maps?: MapUncheckedUpdateManyWithoutProjectNestedInput
    tilesets?: TilesetUncheckedUpdateManyWithoutProjectNestedInput
    sprites?: SpriteUncheckedUpdateManyWithoutProjectNestedInput
    locales?: LocaleUncheckedUpdateManyWithoutProjectNestedInput
    aiJobs?: AIGenerationJobUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type MapCreateManyProjectInput = {
    id?: string
    name: string
    width: number
    height: number
    layers: string
    events: string
  }

  export type TilesetCreateManyProjectInput = {
    id?: string
    name: string
    imageUrl: string
    tileSize?: number
    columns: number
    rows: number
    stableIdMap: string
    hash: string
    metadata?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpriteCreateManyProjectInput = {
    id?: string
    name: string
    imageUrl: string
    animations: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocaleCreateManyProjectInput = {
    id?: string
    lang: string
    entries: string
  }

  export type FlagCreateManyProjectInput = {
    id?: string
    key: string
    value: string
  }

  export type AIGenerationJobCreateManyProjectInput = {
    id?: string
    status: string
    request: string
    result?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    layers?: StringFieldUpdateOperationsInput | string
    events?: StringFieldUpdateOperationsInput | string
  }

  export type MapUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    layers?: StringFieldUpdateOperationsInput | string
    events?: StringFieldUpdateOperationsInput | string
  }

  export type MapUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    layers?: StringFieldUpdateOperationsInput | string
    events?: StringFieldUpdateOperationsInput | string
  }

  export type TilesetUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    tileSize?: IntFieldUpdateOperationsInput | number
    columns?: IntFieldUpdateOperationsInput | number
    rows?: IntFieldUpdateOperationsInput | number
    stableIdMap?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TilesetUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    tileSize?: IntFieldUpdateOperationsInput | number
    columns?: IntFieldUpdateOperationsInput | number
    rows?: IntFieldUpdateOperationsInput | number
    stableIdMap?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TilesetUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    tileSize?: IntFieldUpdateOperationsInput | number
    columns?: IntFieldUpdateOperationsInput | number
    rows?: IntFieldUpdateOperationsInput | number
    stableIdMap?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpriteUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    animations?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpriteUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    animations?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpriteUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    animations?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocaleUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    entries?: StringFieldUpdateOperationsInput | string
  }

  export type LocaleUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    entries?: StringFieldUpdateOperationsInput | string
  }

  export type LocaleUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    entries?: StringFieldUpdateOperationsInput | string
  }

  export type FlagUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type FlagUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type FlagUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type AIGenerationJobUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    request?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIGenerationJobUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    request?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIGenerationJobUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    request?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}