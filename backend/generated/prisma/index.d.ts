
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Language
 * 
 */
export type Language = $Result.DefaultSelection<Prisma.$LanguagePayload>
/**
 * Model DifficultyLevel
 * 
 */
export type DifficultyLevel = $Result.DefaultSelection<Prisma.$DifficultyLevelPayload>
/**
 * Model Vocabulary
 * 
 */
export type Vocabulary = $Result.DefaultSelection<Prisma.$VocabularyPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Languages
 * const languages = await prisma.language.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Languages
   * const languages = await prisma.language.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.language`: Exposes CRUD operations for the **Language** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.language.findMany()
    * ```
    */
  get language(): Prisma.LanguageDelegate<ExtArgs>;

  /**
   * `prisma.difficultyLevel`: Exposes CRUD operations for the **DifficultyLevel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DifficultyLevels
    * const difficultyLevels = await prisma.difficultyLevel.findMany()
    * ```
    */
  get difficultyLevel(): Prisma.DifficultyLevelDelegate<ExtArgs>;

  /**
   * `prisma.vocabulary`: Exposes CRUD operations for the **Vocabulary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vocabularies
    * const vocabularies = await prisma.vocabulary.findMany()
    * ```
    */
  get vocabulary(): Prisma.VocabularyDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Language: 'Language',
    DifficultyLevel: 'DifficultyLevel',
    Vocabulary: 'Vocabulary'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "language" | "difficultyLevel" | "vocabulary"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Language: {
        payload: Prisma.$LanguagePayload<ExtArgs>
        fields: Prisma.LanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findFirst: {
            args: Prisma.LanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findMany: {
            args: Prisma.LanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          create: {
            args: Prisma.LanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          createMany: {
            args: Prisma.LanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          delete: {
            args: Prisma.LanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          update: {
            args: Prisma.LanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          deleteMany: {
            args: Prisma.LanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          aggregate: {
            args: Prisma.LanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguage>
          }
          groupBy: {
            args: Prisma.LanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageCountAggregateOutputType> | number
          }
        }
      }
      DifficultyLevel: {
        payload: Prisma.$DifficultyLevelPayload<ExtArgs>
        fields: Prisma.DifficultyLevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DifficultyLevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DifficultyLevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DifficultyLevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DifficultyLevelPayload>
          }
          findFirst: {
            args: Prisma.DifficultyLevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DifficultyLevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DifficultyLevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DifficultyLevelPayload>
          }
          findMany: {
            args: Prisma.DifficultyLevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DifficultyLevelPayload>[]
          }
          create: {
            args: Prisma.DifficultyLevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DifficultyLevelPayload>
          }
          createMany: {
            args: Prisma.DifficultyLevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DifficultyLevelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DifficultyLevelPayload>[]
          }
          delete: {
            args: Prisma.DifficultyLevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DifficultyLevelPayload>
          }
          update: {
            args: Prisma.DifficultyLevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DifficultyLevelPayload>
          }
          deleteMany: {
            args: Prisma.DifficultyLevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DifficultyLevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DifficultyLevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DifficultyLevelPayload>
          }
          aggregate: {
            args: Prisma.DifficultyLevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDifficultyLevel>
          }
          groupBy: {
            args: Prisma.DifficultyLevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<DifficultyLevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.DifficultyLevelCountArgs<ExtArgs>
            result: $Utils.Optional<DifficultyLevelCountAggregateOutputType> | number
          }
        }
      }
      Vocabulary: {
        payload: Prisma.$VocabularyPayload<ExtArgs>
        fields: Prisma.VocabularyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VocabularyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VocabularyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          findFirst: {
            args: Prisma.VocabularyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VocabularyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          findMany: {
            args: Prisma.VocabularyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>[]
          }
          create: {
            args: Prisma.VocabularyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          createMany: {
            args: Prisma.VocabularyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VocabularyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>[]
          }
          delete: {
            args: Prisma.VocabularyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          update: {
            args: Prisma.VocabularyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          deleteMany: {
            args: Prisma.VocabularyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VocabularyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VocabularyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          aggregate: {
            args: Prisma.VocabularyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVocabulary>
          }
          groupBy: {
            args: Prisma.VocabularyGroupByArgs<ExtArgs>
            result: $Utils.Optional<VocabularyGroupByOutputType>[]
          }
          count: {
            args: Prisma.VocabularyCountArgs<ExtArgs>
            result: $Utils.Optional<VocabularyCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type LanguageCountOutputType
   */

  export type LanguageCountOutputType = {
    vocabulary: number
  }

  export type LanguageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vocabulary?: boolean | LanguageCountOutputTypeCountVocabularyArgs
  }

  // Custom InputTypes
  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageCountOutputType
     */
    select?: LanguageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeCountVocabularyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VocabularyWhereInput
  }


  /**
   * Count Type DifficultyLevelCountOutputType
   */

  export type DifficultyLevelCountOutputType = {
    vocabulary: number
  }

  export type DifficultyLevelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vocabulary?: boolean | DifficultyLevelCountOutputTypeCountVocabularyArgs
  }

  // Custom InputTypes
  /**
   * DifficultyLevelCountOutputType without action
   */
  export type DifficultyLevelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DifficultyLevelCountOutputType
     */
    select?: DifficultyLevelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DifficultyLevelCountOutputType without action
   */
  export type DifficultyLevelCountOutputTypeCountVocabularyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VocabularyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Language
   */

  export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null
    _avg: LanguageAvgAggregateOutputType | null
    _sum: LanguageSumAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  export type LanguageAvgAggregateOutputType = {
    id: number | null
  }

  export type LanguageSumAggregateOutputType = {
    id: number | null
  }

  export type LanguageMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LanguageMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LanguageCountAggregateOutputType = {
    id: number
    name: number
    code: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LanguageAvgAggregateInputType = {
    id?: true
  }

  export type LanguageSumAggregateInputType = {
    id?: true
  }

  export type LanguageMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LanguageMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LanguageCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Language to aggregate.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Languages
    **/
    _count?: true | LanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LanguageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LanguageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageMaxAggregateInputType
  }

  export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguage[P]>
      : GetScalarType<T[P], AggregateLanguage[P]>
  }




  export type LanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageWhereInput
    orderBy?: LanguageOrderByWithAggregationInput | LanguageOrderByWithAggregationInput[]
    by: LanguageScalarFieldEnum[] | LanguageScalarFieldEnum
    having?: LanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageCountAggregateInputType | true
    _avg?: LanguageAvgAggregateInputType
    _sum?: LanguageSumAggregateInputType
    _min?: LanguageMinAggregateInputType
    _max?: LanguageMaxAggregateInputType
  }

  export type LanguageGroupByOutputType = {
    id: number
    name: string
    code: string
    createdAt: Date
    updatedAt: Date
    _count: LanguageCountAggregateOutputType | null
    _avg: LanguageAvgAggregateOutputType | null
    _sum: LanguageSumAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  type GetLanguageGroupByPayload<T extends LanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageGroupByOutputType[P]>
        }
      >
    >


  export type LanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vocabulary?: boolean | Language$vocabularyArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vocabulary?: boolean | Language$vocabularyArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LanguageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Language"
    objects: {
      vocabulary: Prisma.$VocabularyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["language"]>
    composites: {}
  }

  type LanguageGetPayload<S extends boolean | null | undefined | LanguageDefaultArgs> = $Result.GetResult<Prisma.$LanguagePayload, S>

  type LanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LanguageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LanguageCountAggregateInputType | true
    }

  export interface LanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Language'], meta: { name: 'Language' } }
    /**
     * Find zero or one Language that matches the filter.
     * @param {LanguageFindUniqueArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageFindUniqueArgs>(args: SelectSubset<T, LanguageFindUniqueArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Language that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LanguageFindUniqueOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Language that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageFindFirstArgs>(args?: SelectSubset<T, LanguageFindFirstArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Language that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.language.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.language.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languageWithIdOnly = await prisma.language.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanguageFindManyArgs>(args?: SelectSubset<T, LanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Language.
     * @param {LanguageCreateArgs} args - Arguments to create a Language.
     * @example
     * // Create one Language
     * const Language = await prisma.language.create({
     *   data: {
     *     // ... data to create a Language
     *   }
     * })
     * 
     */
    create<T extends LanguageCreateArgs>(args: SelectSubset<T, LanguageCreateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Languages.
     * @param {LanguageCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageCreateManyArgs>(args?: SelectSubset<T, LanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Languages and returns the data saved in the database.
     * @param {LanguageCreateManyAndReturnArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Languages and only return the `id`
     * const languageWithIdOnly = await prisma.language.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguageCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Language.
     * @param {LanguageDeleteArgs} args - Arguments to delete one Language.
     * @example
     * // Delete one Language
     * const Language = await prisma.language.delete({
     *   where: {
     *     // ... filter to delete one Language
     *   }
     * })
     * 
     */
    delete<T extends LanguageDeleteArgs>(args: SelectSubset<T, LanguageDeleteArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Language.
     * @param {LanguageUpdateArgs} args - Arguments to update one Language.
     * @example
     * // Update one Language
     * const language = await prisma.language.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageUpdateArgs>(args: SelectSubset<T, LanguageUpdateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Languages.
     * @param {LanguageDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.language.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageDeleteManyArgs>(args?: SelectSubset<T, LanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageUpdateManyArgs>(args: SelectSubset<T, LanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Language.
     * @param {LanguageUpsertArgs} args - Arguments to update or create a Language.
     * @example
     * // Update or create a Language
     * const language = await prisma.language.upsert({
     *   create: {
     *     // ... data to create a Language
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Language we want to update
     *   }
     * })
     */
    upsert<T extends LanguageUpsertArgs>(args: SelectSubset<T, LanguageUpsertArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.language.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends LanguageCountArgs>(
      args?: Subset<T, LanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LanguageAggregateArgs>(args: Subset<T, LanguageAggregateArgs>): Prisma.PrismaPromise<GetLanguageAggregateType<T>>

    /**
     * Group by Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageGroupByArgs} args - Group by arguments.
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
      T extends LanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageGroupByArgs['orderBy'] }
        : { orderBy?: LanguageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Language model
   */
  readonly fields: LanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Language.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vocabulary<T extends Language$vocabularyArgs<ExtArgs> = {}>(args?: Subset<T, Language$vocabularyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Language model
   */ 
  interface LanguageFieldRefs {
    readonly id: FieldRef<"Language", 'Int'>
    readonly name: FieldRef<"Language", 'String'>
    readonly code: FieldRef<"Language", 'String'>
    readonly createdAt: FieldRef<"Language", 'DateTime'>
    readonly updatedAt: FieldRef<"Language", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Language findUnique
   */
  export type LanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findUniqueOrThrow
   */
  export type LanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findFirst
   */
  export type LanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findFirstOrThrow
   */
  export type LanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findMany
   */
  export type LanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language create
   */
  export type LanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a Language.
     */
    data: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
  }

  /**
   * Language createMany
   */
  export type LanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language createManyAndReturn
   */
  export type LanguageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language update
   */
  export type LanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a Language.
     */
    data: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
    /**
     * Choose, which Language to update.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language updateMany
   */
  export type LanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
  }

  /**
   * Language upsert
   */
  export type LanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the Language to update in case it exists.
     */
    where: LanguageWhereUniqueInput
    /**
     * In case the Language found by the `where` argument doesn't exist, create a new Language with this data.
     */
    create: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
    /**
     * In case the Language was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
  }

  /**
   * Language delete
   */
  export type LanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter which Language to delete.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language deleteMany
   */
  export type LanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to delete
     */
    where?: LanguageWhereInput
  }

  /**
   * Language.vocabulary
   */
  export type Language$vocabularyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    where?: VocabularyWhereInput
    orderBy?: VocabularyOrderByWithRelationInput | VocabularyOrderByWithRelationInput[]
    cursor?: VocabularyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VocabularyScalarFieldEnum | VocabularyScalarFieldEnum[]
  }

  /**
   * Language without action
   */
  export type LanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
  }


  /**
   * Model DifficultyLevel
   */

  export type AggregateDifficultyLevel = {
    _count: DifficultyLevelCountAggregateOutputType | null
    _avg: DifficultyLevelAvgAggregateOutputType | null
    _sum: DifficultyLevelSumAggregateOutputType | null
    _min: DifficultyLevelMinAggregateOutputType | null
    _max: DifficultyLevelMaxAggregateOutputType | null
  }

  export type DifficultyLevelAvgAggregateOutputType = {
    id: number | null
  }

  export type DifficultyLevelSumAggregateOutputType = {
    id: number | null
  }

  export type DifficultyLevelMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DifficultyLevelMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DifficultyLevelCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DifficultyLevelAvgAggregateInputType = {
    id?: true
  }

  export type DifficultyLevelSumAggregateInputType = {
    id?: true
  }

  export type DifficultyLevelMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DifficultyLevelMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DifficultyLevelCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DifficultyLevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DifficultyLevel to aggregate.
     */
    where?: DifficultyLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DifficultyLevels to fetch.
     */
    orderBy?: DifficultyLevelOrderByWithRelationInput | DifficultyLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DifficultyLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DifficultyLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DifficultyLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DifficultyLevels
    **/
    _count?: true | DifficultyLevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DifficultyLevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DifficultyLevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DifficultyLevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DifficultyLevelMaxAggregateInputType
  }

  export type GetDifficultyLevelAggregateType<T extends DifficultyLevelAggregateArgs> = {
        [P in keyof T & keyof AggregateDifficultyLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDifficultyLevel[P]>
      : GetScalarType<T[P], AggregateDifficultyLevel[P]>
  }




  export type DifficultyLevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DifficultyLevelWhereInput
    orderBy?: DifficultyLevelOrderByWithAggregationInput | DifficultyLevelOrderByWithAggregationInput[]
    by: DifficultyLevelScalarFieldEnum[] | DifficultyLevelScalarFieldEnum
    having?: DifficultyLevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DifficultyLevelCountAggregateInputType | true
    _avg?: DifficultyLevelAvgAggregateInputType
    _sum?: DifficultyLevelSumAggregateInputType
    _min?: DifficultyLevelMinAggregateInputType
    _max?: DifficultyLevelMaxAggregateInputType
  }

  export type DifficultyLevelGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: DifficultyLevelCountAggregateOutputType | null
    _avg: DifficultyLevelAvgAggregateOutputType | null
    _sum: DifficultyLevelSumAggregateOutputType | null
    _min: DifficultyLevelMinAggregateOutputType | null
    _max: DifficultyLevelMaxAggregateOutputType | null
  }

  type GetDifficultyLevelGroupByPayload<T extends DifficultyLevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DifficultyLevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DifficultyLevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DifficultyLevelGroupByOutputType[P]>
            : GetScalarType<T[P], DifficultyLevelGroupByOutputType[P]>
        }
      >
    >


  export type DifficultyLevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vocabulary?: boolean | DifficultyLevel$vocabularyArgs<ExtArgs>
    _count?: boolean | DifficultyLevelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["difficultyLevel"]>

  export type DifficultyLevelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["difficultyLevel"]>

  export type DifficultyLevelSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DifficultyLevelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vocabulary?: boolean | DifficultyLevel$vocabularyArgs<ExtArgs>
    _count?: boolean | DifficultyLevelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DifficultyLevelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DifficultyLevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DifficultyLevel"
    objects: {
      vocabulary: Prisma.$VocabularyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["difficultyLevel"]>
    composites: {}
  }

  type DifficultyLevelGetPayload<S extends boolean | null | undefined | DifficultyLevelDefaultArgs> = $Result.GetResult<Prisma.$DifficultyLevelPayload, S>

  type DifficultyLevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DifficultyLevelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DifficultyLevelCountAggregateInputType | true
    }

  export interface DifficultyLevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DifficultyLevel'], meta: { name: 'DifficultyLevel' } }
    /**
     * Find zero or one DifficultyLevel that matches the filter.
     * @param {DifficultyLevelFindUniqueArgs} args - Arguments to find a DifficultyLevel
     * @example
     * // Get one DifficultyLevel
     * const difficultyLevel = await prisma.difficultyLevel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DifficultyLevelFindUniqueArgs>(args: SelectSubset<T, DifficultyLevelFindUniqueArgs<ExtArgs>>): Prisma__DifficultyLevelClient<$Result.GetResult<Prisma.$DifficultyLevelPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DifficultyLevel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DifficultyLevelFindUniqueOrThrowArgs} args - Arguments to find a DifficultyLevel
     * @example
     * // Get one DifficultyLevel
     * const difficultyLevel = await prisma.difficultyLevel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DifficultyLevelFindUniqueOrThrowArgs>(args: SelectSubset<T, DifficultyLevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DifficultyLevelClient<$Result.GetResult<Prisma.$DifficultyLevelPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DifficultyLevel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DifficultyLevelFindFirstArgs} args - Arguments to find a DifficultyLevel
     * @example
     * // Get one DifficultyLevel
     * const difficultyLevel = await prisma.difficultyLevel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DifficultyLevelFindFirstArgs>(args?: SelectSubset<T, DifficultyLevelFindFirstArgs<ExtArgs>>): Prisma__DifficultyLevelClient<$Result.GetResult<Prisma.$DifficultyLevelPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DifficultyLevel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DifficultyLevelFindFirstOrThrowArgs} args - Arguments to find a DifficultyLevel
     * @example
     * // Get one DifficultyLevel
     * const difficultyLevel = await prisma.difficultyLevel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DifficultyLevelFindFirstOrThrowArgs>(args?: SelectSubset<T, DifficultyLevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__DifficultyLevelClient<$Result.GetResult<Prisma.$DifficultyLevelPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DifficultyLevels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DifficultyLevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DifficultyLevels
     * const difficultyLevels = await prisma.difficultyLevel.findMany()
     * 
     * // Get first 10 DifficultyLevels
     * const difficultyLevels = await prisma.difficultyLevel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const difficultyLevelWithIdOnly = await prisma.difficultyLevel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DifficultyLevelFindManyArgs>(args?: SelectSubset<T, DifficultyLevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DifficultyLevelPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DifficultyLevel.
     * @param {DifficultyLevelCreateArgs} args - Arguments to create a DifficultyLevel.
     * @example
     * // Create one DifficultyLevel
     * const DifficultyLevel = await prisma.difficultyLevel.create({
     *   data: {
     *     // ... data to create a DifficultyLevel
     *   }
     * })
     * 
     */
    create<T extends DifficultyLevelCreateArgs>(args: SelectSubset<T, DifficultyLevelCreateArgs<ExtArgs>>): Prisma__DifficultyLevelClient<$Result.GetResult<Prisma.$DifficultyLevelPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DifficultyLevels.
     * @param {DifficultyLevelCreateManyArgs} args - Arguments to create many DifficultyLevels.
     * @example
     * // Create many DifficultyLevels
     * const difficultyLevel = await prisma.difficultyLevel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DifficultyLevelCreateManyArgs>(args?: SelectSubset<T, DifficultyLevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DifficultyLevels and returns the data saved in the database.
     * @param {DifficultyLevelCreateManyAndReturnArgs} args - Arguments to create many DifficultyLevels.
     * @example
     * // Create many DifficultyLevels
     * const difficultyLevel = await prisma.difficultyLevel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DifficultyLevels and only return the `id`
     * const difficultyLevelWithIdOnly = await prisma.difficultyLevel.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DifficultyLevelCreateManyAndReturnArgs>(args?: SelectSubset<T, DifficultyLevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DifficultyLevelPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DifficultyLevel.
     * @param {DifficultyLevelDeleteArgs} args - Arguments to delete one DifficultyLevel.
     * @example
     * // Delete one DifficultyLevel
     * const DifficultyLevel = await prisma.difficultyLevel.delete({
     *   where: {
     *     // ... filter to delete one DifficultyLevel
     *   }
     * })
     * 
     */
    delete<T extends DifficultyLevelDeleteArgs>(args: SelectSubset<T, DifficultyLevelDeleteArgs<ExtArgs>>): Prisma__DifficultyLevelClient<$Result.GetResult<Prisma.$DifficultyLevelPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DifficultyLevel.
     * @param {DifficultyLevelUpdateArgs} args - Arguments to update one DifficultyLevel.
     * @example
     * // Update one DifficultyLevel
     * const difficultyLevel = await prisma.difficultyLevel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DifficultyLevelUpdateArgs>(args: SelectSubset<T, DifficultyLevelUpdateArgs<ExtArgs>>): Prisma__DifficultyLevelClient<$Result.GetResult<Prisma.$DifficultyLevelPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DifficultyLevels.
     * @param {DifficultyLevelDeleteManyArgs} args - Arguments to filter DifficultyLevels to delete.
     * @example
     * // Delete a few DifficultyLevels
     * const { count } = await prisma.difficultyLevel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DifficultyLevelDeleteManyArgs>(args?: SelectSubset<T, DifficultyLevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DifficultyLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DifficultyLevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DifficultyLevels
     * const difficultyLevel = await prisma.difficultyLevel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DifficultyLevelUpdateManyArgs>(args: SelectSubset<T, DifficultyLevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DifficultyLevel.
     * @param {DifficultyLevelUpsertArgs} args - Arguments to update or create a DifficultyLevel.
     * @example
     * // Update or create a DifficultyLevel
     * const difficultyLevel = await prisma.difficultyLevel.upsert({
     *   create: {
     *     // ... data to create a DifficultyLevel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DifficultyLevel we want to update
     *   }
     * })
     */
    upsert<T extends DifficultyLevelUpsertArgs>(args: SelectSubset<T, DifficultyLevelUpsertArgs<ExtArgs>>): Prisma__DifficultyLevelClient<$Result.GetResult<Prisma.$DifficultyLevelPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DifficultyLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DifficultyLevelCountArgs} args - Arguments to filter DifficultyLevels to count.
     * @example
     * // Count the number of DifficultyLevels
     * const count = await prisma.difficultyLevel.count({
     *   where: {
     *     // ... the filter for the DifficultyLevels we want to count
     *   }
     * })
    **/
    count<T extends DifficultyLevelCountArgs>(
      args?: Subset<T, DifficultyLevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DifficultyLevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DifficultyLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DifficultyLevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DifficultyLevelAggregateArgs>(args: Subset<T, DifficultyLevelAggregateArgs>): Prisma.PrismaPromise<GetDifficultyLevelAggregateType<T>>

    /**
     * Group by DifficultyLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DifficultyLevelGroupByArgs} args - Group by arguments.
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
      T extends DifficultyLevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DifficultyLevelGroupByArgs['orderBy'] }
        : { orderBy?: DifficultyLevelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DifficultyLevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDifficultyLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DifficultyLevel model
   */
  readonly fields: DifficultyLevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DifficultyLevel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DifficultyLevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vocabulary<T extends DifficultyLevel$vocabularyArgs<ExtArgs> = {}>(args?: Subset<T, DifficultyLevel$vocabularyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the DifficultyLevel model
   */ 
  interface DifficultyLevelFieldRefs {
    readonly id: FieldRef<"DifficultyLevel", 'Int'>
    readonly name: FieldRef<"DifficultyLevel", 'String'>
    readonly description: FieldRef<"DifficultyLevel", 'String'>
    readonly createdAt: FieldRef<"DifficultyLevel", 'DateTime'>
    readonly updatedAt: FieldRef<"DifficultyLevel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DifficultyLevel findUnique
   */
  export type DifficultyLevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DifficultyLevel
     */
    select?: DifficultyLevelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DifficultyLevelInclude<ExtArgs> | null
    /**
     * Filter, which DifficultyLevel to fetch.
     */
    where: DifficultyLevelWhereUniqueInput
  }

  /**
   * DifficultyLevel findUniqueOrThrow
   */
  export type DifficultyLevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DifficultyLevel
     */
    select?: DifficultyLevelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DifficultyLevelInclude<ExtArgs> | null
    /**
     * Filter, which DifficultyLevel to fetch.
     */
    where: DifficultyLevelWhereUniqueInput
  }

  /**
   * DifficultyLevel findFirst
   */
  export type DifficultyLevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DifficultyLevel
     */
    select?: DifficultyLevelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DifficultyLevelInclude<ExtArgs> | null
    /**
     * Filter, which DifficultyLevel to fetch.
     */
    where?: DifficultyLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DifficultyLevels to fetch.
     */
    orderBy?: DifficultyLevelOrderByWithRelationInput | DifficultyLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DifficultyLevels.
     */
    cursor?: DifficultyLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DifficultyLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DifficultyLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DifficultyLevels.
     */
    distinct?: DifficultyLevelScalarFieldEnum | DifficultyLevelScalarFieldEnum[]
  }

  /**
   * DifficultyLevel findFirstOrThrow
   */
  export type DifficultyLevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DifficultyLevel
     */
    select?: DifficultyLevelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DifficultyLevelInclude<ExtArgs> | null
    /**
     * Filter, which DifficultyLevel to fetch.
     */
    where?: DifficultyLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DifficultyLevels to fetch.
     */
    orderBy?: DifficultyLevelOrderByWithRelationInput | DifficultyLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DifficultyLevels.
     */
    cursor?: DifficultyLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DifficultyLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DifficultyLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DifficultyLevels.
     */
    distinct?: DifficultyLevelScalarFieldEnum | DifficultyLevelScalarFieldEnum[]
  }

  /**
   * DifficultyLevel findMany
   */
  export type DifficultyLevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DifficultyLevel
     */
    select?: DifficultyLevelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DifficultyLevelInclude<ExtArgs> | null
    /**
     * Filter, which DifficultyLevels to fetch.
     */
    where?: DifficultyLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DifficultyLevels to fetch.
     */
    orderBy?: DifficultyLevelOrderByWithRelationInput | DifficultyLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DifficultyLevels.
     */
    cursor?: DifficultyLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DifficultyLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DifficultyLevels.
     */
    skip?: number
    distinct?: DifficultyLevelScalarFieldEnum | DifficultyLevelScalarFieldEnum[]
  }

  /**
   * DifficultyLevel create
   */
  export type DifficultyLevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DifficultyLevel
     */
    select?: DifficultyLevelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DifficultyLevelInclude<ExtArgs> | null
    /**
     * The data needed to create a DifficultyLevel.
     */
    data: XOR<DifficultyLevelCreateInput, DifficultyLevelUncheckedCreateInput>
  }

  /**
   * DifficultyLevel createMany
   */
  export type DifficultyLevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DifficultyLevels.
     */
    data: DifficultyLevelCreateManyInput | DifficultyLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DifficultyLevel createManyAndReturn
   */
  export type DifficultyLevelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DifficultyLevel
     */
    select?: DifficultyLevelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DifficultyLevels.
     */
    data: DifficultyLevelCreateManyInput | DifficultyLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DifficultyLevel update
   */
  export type DifficultyLevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DifficultyLevel
     */
    select?: DifficultyLevelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DifficultyLevelInclude<ExtArgs> | null
    /**
     * The data needed to update a DifficultyLevel.
     */
    data: XOR<DifficultyLevelUpdateInput, DifficultyLevelUncheckedUpdateInput>
    /**
     * Choose, which DifficultyLevel to update.
     */
    where: DifficultyLevelWhereUniqueInput
  }

  /**
   * DifficultyLevel updateMany
   */
  export type DifficultyLevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DifficultyLevels.
     */
    data: XOR<DifficultyLevelUpdateManyMutationInput, DifficultyLevelUncheckedUpdateManyInput>
    /**
     * Filter which DifficultyLevels to update
     */
    where?: DifficultyLevelWhereInput
  }

  /**
   * DifficultyLevel upsert
   */
  export type DifficultyLevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DifficultyLevel
     */
    select?: DifficultyLevelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DifficultyLevelInclude<ExtArgs> | null
    /**
     * The filter to search for the DifficultyLevel to update in case it exists.
     */
    where: DifficultyLevelWhereUniqueInput
    /**
     * In case the DifficultyLevel found by the `where` argument doesn't exist, create a new DifficultyLevel with this data.
     */
    create: XOR<DifficultyLevelCreateInput, DifficultyLevelUncheckedCreateInput>
    /**
     * In case the DifficultyLevel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DifficultyLevelUpdateInput, DifficultyLevelUncheckedUpdateInput>
  }

  /**
   * DifficultyLevel delete
   */
  export type DifficultyLevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DifficultyLevel
     */
    select?: DifficultyLevelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DifficultyLevelInclude<ExtArgs> | null
    /**
     * Filter which DifficultyLevel to delete.
     */
    where: DifficultyLevelWhereUniqueInput
  }

  /**
   * DifficultyLevel deleteMany
   */
  export type DifficultyLevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DifficultyLevels to delete
     */
    where?: DifficultyLevelWhereInput
  }

  /**
   * DifficultyLevel.vocabulary
   */
  export type DifficultyLevel$vocabularyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    where?: VocabularyWhereInput
    orderBy?: VocabularyOrderByWithRelationInput | VocabularyOrderByWithRelationInput[]
    cursor?: VocabularyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VocabularyScalarFieldEnum | VocabularyScalarFieldEnum[]
  }

  /**
   * DifficultyLevel without action
   */
  export type DifficultyLevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DifficultyLevel
     */
    select?: DifficultyLevelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DifficultyLevelInclude<ExtArgs> | null
  }


  /**
   * Model Vocabulary
   */

  export type AggregateVocabulary = {
    _count: VocabularyCountAggregateOutputType | null
    _avg: VocabularyAvgAggregateOutputType | null
    _sum: VocabularySumAggregateOutputType | null
    _min: VocabularyMinAggregateOutputType | null
    _max: VocabularyMaxAggregateOutputType | null
  }

  export type VocabularyAvgAggregateOutputType = {
    id: number | null
    languageId: number | null
    difficultyId: number | null
  }

  export type VocabularySumAggregateOutputType = {
    id: number | null
    languageId: number | null
    difficultyId: number | null
  }

  export type VocabularyMinAggregateOutputType = {
    id: number | null
    word: string | null
    translation: string | null
    definition: string | null
    example: string | null
    languageId: number | null
    difficultyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VocabularyMaxAggregateOutputType = {
    id: number | null
    word: string | null
    translation: string | null
    definition: string | null
    example: string | null
    languageId: number | null
    difficultyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VocabularyCountAggregateOutputType = {
    id: number
    word: number
    translation: number
    definition: number
    example: number
    languageId: number
    difficultyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VocabularyAvgAggregateInputType = {
    id?: true
    languageId?: true
    difficultyId?: true
  }

  export type VocabularySumAggregateInputType = {
    id?: true
    languageId?: true
    difficultyId?: true
  }

  export type VocabularyMinAggregateInputType = {
    id?: true
    word?: true
    translation?: true
    definition?: true
    example?: true
    languageId?: true
    difficultyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VocabularyMaxAggregateInputType = {
    id?: true
    word?: true
    translation?: true
    definition?: true
    example?: true
    languageId?: true
    difficultyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VocabularyCountAggregateInputType = {
    id?: true
    word?: true
    translation?: true
    definition?: true
    example?: true
    languageId?: true
    difficultyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VocabularyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vocabulary to aggregate.
     */
    where?: VocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vocabularies to fetch.
     */
    orderBy?: VocabularyOrderByWithRelationInput | VocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vocabularies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vocabularies
    **/
    _count?: true | VocabularyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VocabularyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VocabularySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VocabularyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VocabularyMaxAggregateInputType
  }

  export type GetVocabularyAggregateType<T extends VocabularyAggregateArgs> = {
        [P in keyof T & keyof AggregateVocabulary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVocabulary[P]>
      : GetScalarType<T[P], AggregateVocabulary[P]>
  }




  export type VocabularyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VocabularyWhereInput
    orderBy?: VocabularyOrderByWithAggregationInput | VocabularyOrderByWithAggregationInput[]
    by: VocabularyScalarFieldEnum[] | VocabularyScalarFieldEnum
    having?: VocabularyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VocabularyCountAggregateInputType | true
    _avg?: VocabularyAvgAggregateInputType
    _sum?: VocabularySumAggregateInputType
    _min?: VocabularyMinAggregateInputType
    _max?: VocabularyMaxAggregateInputType
  }

  export type VocabularyGroupByOutputType = {
    id: number
    word: string
    translation: string
    definition: string
    example: string | null
    languageId: number
    difficultyId: number
    createdAt: Date
    updatedAt: Date
    _count: VocabularyCountAggregateOutputType | null
    _avg: VocabularyAvgAggregateOutputType | null
    _sum: VocabularySumAggregateOutputType | null
    _min: VocabularyMinAggregateOutputType | null
    _max: VocabularyMaxAggregateOutputType | null
  }

  type GetVocabularyGroupByPayload<T extends VocabularyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VocabularyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VocabularyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VocabularyGroupByOutputType[P]>
            : GetScalarType<T[P], VocabularyGroupByOutputType[P]>
        }
      >
    >


  export type VocabularySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    translation?: boolean
    definition?: boolean
    example?: boolean
    languageId?: boolean
    difficultyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    language?: boolean | LanguageDefaultArgs<ExtArgs>
    difficulty?: boolean | DifficultyLevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vocabulary"]>

  export type VocabularySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    translation?: boolean
    definition?: boolean
    example?: boolean
    languageId?: boolean
    difficultyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    language?: boolean | LanguageDefaultArgs<ExtArgs>
    difficulty?: boolean | DifficultyLevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vocabulary"]>

  export type VocabularySelectScalar = {
    id?: boolean
    word?: boolean
    translation?: boolean
    definition?: boolean
    example?: boolean
    languageId?: boolean
    difficultyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VocabularyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    language?: boolean | LanguageDefaultArgs<ExtArgs>
    difficulty?: boolean | DifficultyLevelDefaultArgs<ExtArgs>
  }
  export type VocabularyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    language?: boolean | LanguageDefaultArgs<ExtArgs>
    difficulty?: boolean | DifficultyLevelDefaultArgs<ExtArgs>
  }

  export type $VocabularyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vocabulary"
    objects: {
      language: Prisma.$LanguagePayload<ExtArgs>
      difficulty: Prisma.$DifficultyLevelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      word: string
      translation: string
      definition: string
      example: string | null
      languageId: number
      difficultyId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vocabulary"]>
    composites: {}
  }

  type VocabularyGetPayload<S extends boolean | null | undefined | VocabularyDefaultArgs> = $Result.GetResult<Prisma.$VocabularyPayload, S>

  type VocabularyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VocabularyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VocabularyCountAggregateInputType | true
    }

  export interface VocabularyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vocabulary'], meta: { name: 'Vocabulary' } }
    /**
     * Find zero or one Vocabulary that matches the filter.
     * @param {VocabularyFindUniqueArgs} args - Arguments to find a Vocabulary
     * @example
     * // Get one Vocabulary
     * const vocabulary = await prisma.vocabulary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VocabularyFindUniqueArgs>(args: SelectSubset<T, VocabularyFindUniqueArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Vocabulary that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VocabularyFindUniqueOrThrowArgs} args - Arguments to find a Vocabulary
     * @example
     * // Get one Vocabulary
     * const vocabulary = await prisma.vocabulary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VocabularyFindUniqueOrThrowArgs>(args: SelectSubset<T, VocabularyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Vocabulary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyFindFirstArgs} args - Arguments to find a Vocabulary
     * @example
     * // Get one Vocabulary
     * const vocabulary = await prisma.vocabulary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VocabularyFindFirstArgs>(args?: SelectSubset<T, VocabularyFindFirstArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Vocabulary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyFindFirstOrThrowArgs} args - Arguments to find a Vocabulary
     * @example
     * // Get one Vocabulary
     * const vocabulary = await prisma.vocabulary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VocabularyFindFirstOrThrowArgs>(args?: SelectSubset<T, VocabularyFindFirstOrThrowArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Vocabularies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vocabularies
     * const vocabularies = await prisma.vocabulary.findMany()
     * 
     * // Get first 10 Vocabularies
     * const vocabularies = await prisma.vocabulary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vocabularyWithIdOnly = await prisma.vocabulary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VocabularyFindManyArgs>(args?: SelectSubset<T, VocabularyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Vocabulary.
     * @param {VocabularyCreateArgs} args - Arguments to create a Vocabulary.
     * @example
     * // Create one Vocabulary
     * const Vocabulary = await prisma.vocabulary.create({
     *   data: {
     *     // ... data to create a Vocabulary
     *   }
     * })
     * 
     */
    create<T extends VocabularyCreateArgs>(args: SelectSubset<T, VocabularyCreateArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Vocabularies.
     * @param {VocabularyCreateManyArgs} args - Arguments to create many Vocabularies.
     * @example
     * // Create many Vocabularies
     * const vocabulary = await prisma.vocabulary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VocabularyCreateManyArgs>(args?: SelectSubset<T, VocabularyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vocabularies and returns the data saved in the database.
     * @param {VocabularyCreateManyAndReturnArgs} args - Arguments to create many Vocabularies.
     * @example
     * // Create many Vocabularies
     * const vocabulary = await prisma.vocabulary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vocabularies and only return the `id`
     * const vocabularyWithIdOnly = await prisma.vocabulary.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VocabularyCreateManyAndReturnArgs>(args?: SelectSubset<T, VocabularyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Vocabulary.
     * @param {VocabularyDeleteArgs} args - Arguments to delete one Vocabulary.
     * @example
     * // Delete one Vocabulary
     * const Vocabulary = await prisma.vocabulary.delete({
     *   where: {
     *     // ... filter to delete one Vocabulary
     *   }
     * })
     * 
     */
    delete<T extends VocabularyDeleteArgs>(args: SelectSubset<T, VocabularyDeleteArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Vocabulary.
     * @param {VocabularyUpdateArgs} args - Arguments to update one Vocabulary.
     * @example
     * // Update one Vocabulary
     * const vocabulary = await prisma.vocabulary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VocabularyUpdateArgs>(args: SelectSubset<T, VocabularyUpdateArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Vocabularies.
     * @param {VocabularyDeleteManyArgs} args - Arguments to filter Vocabularies to delete.
     * @example
     * // Delete a few Vocabularies
     * const { count } = await prisma.vocabulary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VocabularyDeleteManyArgs>(args?: SelectSubset<T, VocabularyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vocabularies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vocabularies
     * const vocabulary = await prisma.vocabulary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VocabularyUpdateManyArgs>(args: SelectSubset<T, VocabularyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vocabulary.
     * @param {VocabularyUpsertArgs} args - Arguments to update or create a Vocabulary.
     * @example
     * // Update or create a Vocabulary
     * const vocabulary = await prisma.vocabulary.upsert({
     *   create: {
     *     // ... data to create a Vocabulary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vocabulary we want to update
     *   }
     * })
     */
    upsert<T extends VocabularyUpsertArgs>(args: SelectSubset<T, VocabularyUpsertArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Vocabularies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyCountArgs} args - Arguments to filter Vocabularies to count.
     * @example
     * // Count the number of Vocabularies
     * const count = await prisma.vocabulary.count({
     *   where: {
     *     // ... the filter for the Vocabularies we want to count
     *   }
     * })
    **/
    count<T extends VocabularyCountArgs>(
      args?: Subset<T, VocabularyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VocabularyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vocabulary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VocabularyAggregateArgs>(args: Subset<T, VocabularyAggregateArgs>): Prisma.PrismaPromise<GetVocabularyAggregateType<T>>

    /**
     * Group by Vocabulary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyGroupByArgs} args - Group by arguments.
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
      T extends VocabularyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VocabularyGroupByArgs['orderBy'] }
        : { orderBy?: VocabularyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VocabularyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVocabularyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vocabulary model
   */
  readonly fields: VocabularyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vocabulary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VocabularyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    language<T extends LanguageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguageDefaultArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    difficulty<T extends DifficultyLevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DifficultyLevelDefaultArgs<ExtArgs>>): Prisma__DifficultyLevelClient<$Result.GetResult<Prisma.$DifficultyLevelPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Vocabulary model
   */ 
  interface VocabularyFieldRefs {
    readonly id: FieldRef<"Vocabulary", 'Int'>
    readonly word: FieldRef<"Vocabulary", 'String'>
    readonly translation: FieldRef<"Vocabulary", 'String'>
    readonly definition: FieldRef<"Vocabulary", 'String'>
    readonly example: FieldRef<"Vocabulary", 'String'>
    readonly languageId: FieldRef<"Vocabulary", 'Int'>
    readonly difficultyId: FieldRef<"Vocabulary", 'Int'>
    readonly createdAt: FieldRef<"Vocabulary", 'DateTime'>
    readonly updatedAt: FieldRef<"Vocabulary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vocabulary findUnique
   */
  export type VocabularyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter, which Vocabulary to fetch.
     */
    where: VocabularyWhereUniqueInput
  }

  /**
   * Vocabulary findUniqueOrThrow
   */
  export type VocabularyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter, which Vocabulary to fetch.
     */
    where: VocabularyWhereUniqueInput
  }

  /**
   * Vocabulary findFirst
   */
  export type VocabularyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter, which Vocabulary to fetch.
     */
    where?: VocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vocabularies to fetch.
     */
    orderBy?: VocabularyOrderByWithRelationInput | VocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vocabularies.
     */
    cursor?: VocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vocabularies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vocabularies.
     */
    distinct?: VocabularyScalarFieldEnum | VocabularyScalarFieldEnum[]
  }

  /**
   * Vocabulary findFirstOrThrow
   */
  export type VocabularyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter, which Vocabulary to fetch.
     */
    where?: VocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vocabularies to fetch.
     */
    orderBy?: VocabularyOrderByWithRelationInput | VocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vocabularies.
     */
    cursor?: VocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vocabularies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vocabularies.
     */
    distinct?: VocabularyScalarFieldEnum | VocabularyScalarFieldEnum[]
  }

  /**
   * Vocabulary findMany
   */
  export type VocabularyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter, which Vocabularies to fetch.
     */
    where?: VocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vocabularies to fetch.
     */
    orderBy?: VocabularyOrderByWithRelationInput | VocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vocabularies.
     */
    cursor?: VocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vocabularies.
     */
    skip?: number
    distinct?: VocabularyScalarFieldEnum | VocabularyScalarFieldEnum[]
  }

  /**
   * Vocabulary create
   */
  export type VocabularyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * The data needed to create a Vocabulary.
     */
    data: XOR<VocabularyCreateInput, VocabularyUncheckedCreateInput>
  }

  /**
   * Vocabulary createMany
   */
  export type VocabularyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vocabularies.
     */
    data: VocabularyCreateManyInput | VocabularyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vocabulary createManyAndReturn
   */
  export type VocabularyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Vocabularies.
     */
    data: VocabularyCreateManyInput | VocabularyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vocabulary update
   */
  export type VocabularyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * The data needed to update a Vocabulary.
     */
    data: XOR<VocabularyUpdateInput, VocabularyUncheckedUpdateInput>
    /**
     * Choose, which Vocabulary to update.
     */
    where: VocabularyWhereUniqueInput
  }

  /**
   * Vocabulary updateMany
   */
  export type VocabularyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vocabularies.
     */
    data: XOR<VocabularyUpdateManyMutationInput, VocabularyUncheckedUpdateManyInput>
    /**
     * Filter which Vocabularies to update
     */
    where?: VocabularyWhereInput
  }

  /**
   * Vocabulary upsert
   */
  export type VocabularyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * The filter to search for the Vocabulary to update in case it exists.
     */
    where: VocabularyWhereUniqueInput
    /**
     * In case the Vocabulary found by the `where` argument doesn't exist, create a new Vocabulary with this data.
     */
    create: XOR<VocabularyCreateInput, VocabularyUncheckedCreateInput>
    /**
     * In case the Vocabulary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VocabularyUpdateInput, VocabularyUncheckedUpdateInput>
  }

  /**
   * Vocabulary delete
   */
  export type VocabularyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter which Vocabulary to delete.
     */
    where: VocabularyWhereUniqueInput
  }

  /**
   * Vocabulary deleteMany
   */
  export type VocabularyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vocabularies to delete
     */
    where?: VocabularyWhereInput
  }

  /**
   * Vocabulary without action
   */
  export type VocabularyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LanguageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum]


  export const DifficultyLevelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DifficultyLevelScalarFieldEnum = (typeof DifficultyLevelScalarFieldEnum)[keyof typeof DifficultyLevelScalarFieldEnum]


  export const VocabularyScalarFieldEnum: {
    id: 'id',
    word: 'word',
    translation: 'translation',
    definition: 'definition',
    example: 'example',
    languageId: 'languageId',
    difficultyId: 'difficultyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VocabularyScalarFieldEnum = (typeof VocabularyScalarFieldEnum)[keyof typeof VocabularyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type LanguageWhereInput = {
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    id?: IntFilter<"Language"> | number
    name?: StringFilter<"Language"> | string
    code?: StringFilter<"Language"> | string
    createdAt?: DateTimeFilter<"Language"> | Date | string
    updatedAt?: DateTimeFilter<"Language"> | Date | string
    vocabulary?: VocabularyListRelationFilter
  }

  export type LanguageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vocabulary?: VocabularyOrderByRelationAggregateInput
  }

  export type LanguageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    code?: string
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    createdAt?: DateTimeFilter<"Language"> | Date | string
    updatedAt?: DateTimeFilter<"Language"> | Date | string
    vocabulary?: VocabularyListRelationFilter
  }, "id" | "name" | "code">

  export type LanguageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LanguageCountOrderByAggregateInput
    _avg?: LanguageAvgOrderByAggregateInput
    _max?: LanguageMaxOrderByAggregateInput
    _min?: LanguageMinOrderByAggregateInput
    _sum?: LanguageSumOrderByAggregateInput
  }

  export type LanguageScalarWhereWithAggregatesInput = {
    AND?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    OR?: LanguageScalarWhereWithAggregatesInput[]
    NOT?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Language"> | number
    name?: StringWithAggregatesFilter<"Language"> | string
    code?: StringWithAggregatesFilter<"Language"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Language"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Language"> | Date | string
  }

  export type DifficultyLevelWhereInput = {
    AND?: DifficultyLevelWhereInput | DifficultyLevelWhereInput[]
    OR?: DifficultyLevelWhereInput[]
    NOT?: DifficultyLevelWhereInput | DifficultyLevelWhereInput[]
    id?: IntFilter<"DifficultyLevel"> | number
    name?: StringFilter<"DifficultyLevel"> | string
    description?: StringNullableFilter<"DifficultyLevel"> | string | null
    createdAt?: DateTimeFilter<"DifficultyLevel"> | Date | string
    updatedAt?: DateTimeFilter<"DifficultyLevel"> | Date | string
    vocabulary?: VocabularyListRelationFilter
  }

  export type DifficultyLevelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vocabulary?: VocabularyOrderByRelationAggregateInput
  }

  export type DifficultyLevelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: DifficultyLevelWhereInput | DifficultyLevelWhereInput[]
    OR?: DifficultyLevelWhereInput[]
    NOT?: DifficultyLevelWhereInput | DifficultyLevelWhereInput[]
    description?: StringNullableFilter<"DifficultyLevel"> | string | null
    createdAt?: DateTimeFilter<"DifficultyLevel"> | Date | string
    updatedAt?: DateTimeFilter<"DifficultyLevel"> | Date | string
    vocabulary?: VocabularyListRelationFilter
  }, "id" | "name">

  export type DifficultyLevelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DifficultyLevelCountOrderByAggregateInput
    _avg?: DifficultyLevelAvgOrderByAggregateInput
    _max?: DifficultyLevelMaxOrderByAggregateInput
    _min?: DifficultyLevelMinOrderByAggregateInput
    _sum?: DifficultyLevelSumOrderByAggregateInput
  }

  export type DifficultyLevelScalarWhereWithAggregatesInput = {
    AND?: DifficultyLevelScalarWhereWithAggregatesInput | DifficultyLevelScalarWhereWithAggregatesInput[]
    OR?: DifficultyLevelScalarWhereWithAggregatesInput[]
    NOT?: DifficultyLevelScalarWhereWithAggregatesInput | DifficultyLevelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DifficultyLevel"> | number
    name?: StringWithAggregatesFilter<"DifficultyLevel"> | string
    description?: StringNullableWithAggregatesFilter<"DifficultyLevel"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DifficultyLevel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DifficultyLevel"> | Date | string
  }

  export type VocabularyWhereInput = {
    AND?: VocabularyWhereInput | VocabularyWhereInput[]
    OR?: VocabularyWhereInput[]
    NOT?: VocabularyWhereInput | VocabularyWhereInput[]
    id?: IntFilter<"Vocabulary"> | number
    word?: StringFilter<"Vocabulary"> | string
    translation?: StringFilter<"Vocabulary"> | string
    definition?: StringFilter<"Vocabulary"> | string
    example?: StringNullableFilter<"Vocabulary"> | string | null
    languageId?: IntFilter<"Vocabulary"> | number
    difficultyId?: IntFilter<"Vocabulary"> | number
    createdAt?: DateTimeFilter<"Vocabulary"> | Date | string
    updatedAt?: DateTimeFilter<"Vocabulary"> | Date | string
    language?: XOR<LanguageRelationFilter, LanguageWhereInput>
    difficulty?: XOR<DifficultyLevelRelationFilter, DifficultyLevelWhereInput>
  }

  export type VocabularyOrderByWithRelationInput = {
    id?: SortOrder
    word?: SortOrder
    translation?: SortOrder
    definition?: SortOrder
    example?: SortOrderInput | SortOrder
    languageId?: SortOrder
    difficultyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    language?: LanguageOrderByWithRelationInput
    difficulty?: DifficultyLevelOrderByWithRelationInput
  }

  export type VocabularyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VocabularyWhereInput | VocabularyWhereInput[]
    OR?: VocabularyWhereInput[]
    NOT?: VocabularyWhereInput | VocabularyWhereInput[]
    word?: StringFilter<"Vocabulary"> | string
    translation?: StringFilter<"Vocabulary"> | string
    definition?: StringFilter<"Vocabulary"> | string
    example?: StringNullableFilter<"Vocabulary"> | string | null
    languageId?: IntFilter<"Vocabulary"> | number
    difficultyId?: IntFilter<"Vocabulary"> | number
    createdAt?: DateTimeFilter<"Vocabulary"> | Date | string
    updatedAt?: DateTimeFilter<"Vocabulary"> | Date | string
    language?: XOR<LanguageRelationFilter, LanguageWhereInput>
    difficulty?: XOR<DifficultyLevelRelationFilter, DifficultyLevelWhereInput>
  }, "id">

  export type VocabularyOrderByWithAggregationInput = {
    id?: SortOrder
    word?: SortOrder
    translation?: SortOrder
    definition?: SortOrder
    example?: SortOrderInput | SortOrder
    languageId?: SortOrder
    difficultyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VocabularyCountOrderByAggregateInput
    _avg?: VocabularyAvgOrderByAggregateInput
    _max?: VocabularyMaxOrderByAggregateInput
    _min?: VocabularyMinOrderByAggregateInput
    _sum?: VocabularySumOrderByAggregateInput
  }

  export type VocabularyScalarWhereWithAggregatesInput = {
    AND?: VocabularyScalarWhereWithAggregatesInput | VocabularyScalarWhereWithAggregatesInput[]
    OR?: VocabularyScalarWhereWithAggregatesInput[]
    NOT?: VocabularyScalarWhereWithAggregatesInput | VocabularyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vocabulary"> | number
    word?: StringWithAggregatesFilter<"Vocabulary"> | string
    translation?: StringWithAggregatesFilter<"Vocabulary"> | string
    definition?: StringWithAggregatesFilter<"Vocabulary"> | string
    example?: StringNullableWithAggregatesFilter<"Vocabulary"> | string | null
    languageId?: IntWithAggregatesFilter<"Vocabulary"> | number
    difficultyId?: IntWithAggregatesFilter<"Vocabulary"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Vocabulary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vocabulary"> | Date | string
  }

  export type LanguageCreateInput = {
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vocabulary?: VocabularyCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUncheckedCreateInput = {
    id?: number
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vocabulary?: VocabularyUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vocabulary?: VocabularyUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vocabulary?: VocabularyUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageCreateManyInput = {
    id?: number
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LanguageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DifficultyLevelCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vocabulary?: VocabularyCreateNestedManyWithoutDifficultyInput
  }

  export type DifficultyLevelUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vocabulary?: VocabularyUncheckedCreateNestedManyWithoutDifficultyInput
  }

  export type DifficultyLevelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vocabulary?: VocabularyUpdateManyWithoutDifficultyNestedInput
  }

  export type DifficultyLevelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vocabulary?: VocabularyUncheckedUpdateManyWithoutDifficultyNestedInput
  }

  export type DifficultyLevelCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DifficultyLevelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DifficultyLevelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyCreateInput = {
    word: string
    translation: string
    definition: string
    example?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    language: LanguageCreateNestedOneWithoutVocabularyInput
    difficulty: DifficultyLevelCreateNestedOneWithoutVocabularyInput
  }

  export type VocabularyUncheckedCreateInput = {
    id?: number
    word: string
    translation: string
    definition: string
    example?: string | null
    languageId: number
    difficultyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VocabularyUpdateInput = {
    word?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    language?: LanguageUpdateOneRequiredWithoutVocabularyNestedInput
    difficulty?: DifficultyLevelUpdateOneRequiredWithoutVocabularyNestedInput
  }

  export type VocabularyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
    languageId?: IntFieldUpdateOperationsInput | number
    difficultyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyCreateManyInput = {
    id?: number
    word: string
    translation: string
    definition: string
    example?: string | null
    languageId: number
    difficultyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VocabularyUpdateManyMutationInput = {
    word?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
    languageId?: IntFieldUpdateOperationsInput | number
    difficultyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VocabularyListRelationFilter = {
    every?: VocabularyWhereInput
    some?: VocabularyWhereInput
    none?: VocabularyWhereInput
  }

  export type VocabularyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LanguageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LanguageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LanguageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LanguageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LanguageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DifficultyLevelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DifficultyLevelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DifficultyLevelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DifficultyLevelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DifficultyLevelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type LanguageRelationFilter = {
    is?: LanguageWhereInput
    isNot?: LanguageWhereInput
  }

  export type DifficultyLevelRelationFilter = {
    is?: DifficultyLevelWhereInput
    isNot?: DifficultyLevelWhereInput
  }

  export type VocabularyCountOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    translation?: SortOrder
    definition?: SortOrder
    example?: SortOrder
    languageId?: SortOrder
    difficultyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VocabularyAvgOrderByAggregateInput = {
    id?: SortOrder
    languageId?: SortOrder
    difficultyId?: SortOrder
  }

  export type VocabularyMaxOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    translation?: SortOrder
    definition?: SortOrder
    example?: SortOrder
    languageId?: SortOrder
    difficultyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VocabularyMinOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    translation?: SortOrder
    definition?: SortOrder
    example?: SortOrder
    languageId?: SortOrder
    difficultyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VocabularySumOrderByAggregateInput = {
    id?: SortOrder
    languageId?: SortOrder
    difficultyId?: SortOrder
  }

  export type VocabularyCreateNestedManyWithoutLanguageInput = {
    create?: XOR<VocabularyCreateWithoutLanguageInput, VocabularyUncheckedCreateWithoutLanguageInput> | VocabularyCreateWithoutLanguageInput[] | VocabularyUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutLanguageInput | VocabularyCreateOrConnectWithoutLanguageInput[]
    createMany?: VocabularyCreateManyLanguageInputEnvelope
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
  }

  export type VocabularyUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: XOR<VocabularyCreateWithoutLanguageInput, VocabularyUncheckedCreateWithoutLanguageInput> | VocabularyCreateWithoutLanguageInput[] | VocabularyUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutLanguageInput | VocabularyCreateOrConnectWithoutLanguageInput[]
    createMany?: VocabularyCreateManyLanguageInputEnvelope
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VocabularyUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<VocabularyCreateWithoutLanguageInput, VocabularyUncheckedCreateWithoutLanguageInput> | VocabularyCreateWithoutLanguageInput[] | VocabularyUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutLanguageInput | VocabularyCreateOrConnectWithoutLanguageInput[]
    upsert?: VocabularyUpsertWithWhereUniqueWithoutLanguageInput | VocabularyUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: VocabularyCreateManyLanguageInputEnvelope
    set?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    disconnect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    delete?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    update?: VocabularyUpdateWithWhereUniqueWithoutLanguageInput | VocabularyUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: VocabularyUpdateManyWithWhereWithoutLanguageInput | VocabularyUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: VocabularyScalarWhereInput | VocabularyScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VocabularyUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<VocabularyCreateWithoutLanguageInput, VocabularyUncheckedCreateWithoutLanguageInput> | VocabularyCreateWithoutLanguageInput[] | VocabularyUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutLanguageInput | VocabularyCreateOrConnectWithoutLanguageInput[]
    upsert?: VocabularyUpsertWithWhereUniqueWithoutLanguageInput | VocabularyUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: VocabularyCreateManyLanguageInputEnvelope
    set?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    disconnect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    delete?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    update?: VocabularyUpdateWithWhereUniqueWithoutLanguageInput | VocabularyUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: VocabularyUpdateManyWithWhereWithoutLanguageInput | VocabularyUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: VocabularyScalarWhereInput | VocabularyScalarWhereInput[]
  }

  export type VocabularyCreateNestedManyWithoutDifficultyInput = {
    create?: XOR<VocabularyCreateWithoutDifficultyInput, VocabularyUncheckedCreateWithoutDifficultyInput> | VocabularyCreateWithoutDifficultyInput[] | VocabularyUncheckedCreateWithoutDifficultyInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutDifficultyInput | VocabularyCreateOrConnectWithoutDifficultyInput[]
    createMany?: VocabularyCreateManyDifficultyInputEnvelope
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
  }

  export type VocabularyUncheckedCreateNestedManyWithoutDifficultyInput = {
    create?: XOR<VocabularyCreateWithoutDifficultyInput, VocabularyUncheckedCreateWithoutDifficultyInput> | VocabularyCreateWithoutDifficultyInput[] | VocabularyUncheckedCreateWithoutDifficultyInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutDifficultyInput | VocabularyCreateOrConnectWithoutDifficultyInput[]
    createMany?: VocabularyCreateManyDifficultyInputEnvelope
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VocabularyUpdateManyWithoutDifficultyNestedInput = {
    create?: XOR<VocabularyCreateWithoutDifficultyInput, VocabularyUncheckedCreateWithoutDifficultyInput> | VocabularyCreateWithoutDifficultyInput[] | VocabularyUncheckedCreateWithoutDifficultyInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutDifficultyInput | VocabularyCreateOrConnectWithoutDifficultyInput[]
    upsert?: VocabularyUpsertWithWhereUniqueWithoutDifficultyInput | VocabularyUpsertWithWhereUniqueWithoutDifficultyInput[]
    createMany?: VocabularyCreateManyDifficultyInputEnvelope
    set?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    disconnect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    delete?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    update?: VocabularyUpdateWithWhereUniqueWithoutDifficultyInput | VocabularyUpdateWithWhereUniqueWithoutDifficultyInput[]
    updateMany?: VocabularyUpdateManyWithWhereWithoutDifficultyInput | VocabularyUpdateManyWithWhereWithoutDifficultyInput[]
    deleteMany?: VocabularyScalarWhereInput | VocabularyScalarWhereInput[]
  }

  export type VocabularyUncheckedUpdateManyWithoutDifficultyNestedInput = {
    create?: XOR<VocabularyCreateWithoutDifficultyInput, VocabularyUncheckedCreateWithoutDifficultyInput> | VocabularyCreateWithoutDifficultyInput[] | VocabularyUncheckedCreateWithoutDifficultyInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutDifficultyInput | VocabularyCreateOrConnectWithoutDifficultyInput[]
    upsert?: VocabularyUpsertWithWhereUniqueWithoutDifficultyInput | VocabularyUpsertWithWhereUniqueWithoutDifficultyInput[]
    createMany?: VocabularyCreateManyDifficultyInputEnvelope
    set?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    disconnect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    delete?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    update?: VocabularyUpdateWithWhereUniqueWithoutDifficultyInput | VocabularyUpdateWithWhereUniqueWithoutDifficultyInput[]
    updateMany?: VocabularyUpdateManyWithWhereWithoutDifficultyInput | VocabularyUpdateManyWithWhereWithoutDifficultyInput[]
    deleteMany?: VocabularyScalarWhereInput | VocabularyScalarWhereInput[]
  }

  export type LanguageCreateNestedOneWithoutVocabularyInput = {
    create?: XOR<LanguageCreateWithoutVocabularyInput, LanguageUncheckedCreateWithoutVocabularyInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutVocabularyInput
    connect?: LanguageWhereUniqueInput
  }

  export type DifficultyLevelCreateNestedOneWithoutVocabularyInput = {
    create?: XOR<DifficultyLevelCreateWithoutVocabularyInput, DifficultyLevelUncheckedCreateWithoutVocabularyInput>
    connectOrCreate?: DifficultyLevelCreateOrConnectWithoutVocabularyInput
    connect?: DifficultyLevelWhereUniqueInput
  }

  export type LanguageUpdateOneRequiredWithoutVocabularyNestedInput = {
    create?: XOR<LanguageCreateWithoutVocabularyInput, LanguageUncheckedCreateWithoutVocabularyInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutVocabularyInput
    upsert?: LanguageUpsertWithoutVocabularyInput
    connect?: LanguageWhereUniqueInput
    update?: XOR<XOR<LanguageUpdateToOneWithWhereWithoutVocabularyInput, LanguageUpdateWithoutVocabularyInput>, LanguageUncheckedUpdateWithoutVocabularyInput>
  }

  export type DifficultyLevelUpdateOneRequiredWithoutVocabularyNestedInput = {
    create?: XOR<DifficultyLevelCreateWithoutVocabularyInput, DifficultyLevelUncheckedCreateWithoutVocabularyInput>
    connectOrCreate?: DifficultyLevelCreateOrConnectWithoutVocabularyInput
    upsert?: DifficultyLevelUpsertWithoutVocabularyInput
    connect?: DifficultyLevelWhereUniqueInput
    update?: XOR<XOR<DifficultyLevelUpdateToOneWithWhereWithoutVocabularyInput, DifficultyLevelUpdateWithoutVocabularyInput>, DifficultyLevelUncheckedUpdateWithoutVocabularyInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type VocabularyCreateWithoutLanguageInput = {
    word: string
    translation: string
    definition: string
    example?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    difficulty: DifficultyLevelCreateNestedOneWithoutVocabularyInput
  }

  export type VocabularyUncheckedCreateWithoutLanguageInput = {
    id?: number
    word: string
    translation: string
    definition: string
    example?: string | null
    difficultyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VocabularyCreateOrConnectWithoutLanguageInput = {
    where: VocabularyWhereUniqueInput
    create: XOR<VocabularyCreateWithoutLanguageInput, VocabularyUncheckedCreateWithoutLanguageInput>
  }

  export type VocabularyCreateManyLanguageInputEnvelope = {
    data: VocabularyCreateManyLanguageInput | VocabularyCreateManyLanguageInput[]
    skipDuplicates?: boolean
  }

  export type VocabularyUpsertWithWhereUniqueWithoutLanguageInput = {
    where: VocabularyWhereUniqueInput
    update: XOR<VocabularyUpdateWithoutLanguageInput, VocabularyUncheckedUpdateWithoutLanguageInput>
    create: XOR<VocabularyCreateWithoutLanguageInput, VocabularyUncheckedCreateWithoutLanguageInput>
  }

  export type VocabularyUpdateWithWhereUniqueWithoutLanguageInput = {
    where: VocabularyWhereUniqueInput
    data: XOR<VocabularyUpdateWithoutLanguageInput, VocabularyUncheckedUpdateWithoutLanguageInput>
  }

  export type VocabularyUpdateManyWithWhereWithoutLanguageInput = {
    where: VocabularyScalarWhereInput
    data: XOR<VocabularyUpdateManyMutationInput, VocabularyUncheckedUpdateManyWithoutLanguageInput>
  }

  export type VocabularyScalarWhereInput = {
    AND?: VocabularyScalarWhereInput | VocabularyScalarWhereInput[]
    OR?: VocabularyScalarWhereInput[]
    NOT?: VocabularyScalarWhereInput | VocabularyScalarWhereInput[]
    id?: IntFilter<"Vocabulary"> | number
    word?: StringFilter<"Vocabulary"> | string
    translation?: StringFilter<"Vocabulary"> | string
    definition?: StringFilter<"Vocabulary"> | string
    example?: StringNullableFilter<"Vocabulary"> | string | null
    languageId?: IntFilter<"Vocabulary"> | number
    difficultyId?: IntFilter<"Vocabulary"> | number
    createdAt?: DateTimeFilter<"Vocabulary"> | Date | string
    updatedAt?: DateTimeFilter<"Vocabulary"> | Date | string
  }

  export type VocabularyCreateWithoutDifficultyInput = {
    word: string
    translation: string
    definition: string
    example?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    language: LanguageCreateNestedOneWithoutVocabularyInput
  }

  export type VocabularyUncheckedCreateWithoutDifficultyInput = {
    id?: number
    word: string
    translation: string
    definition: string
    example?: string | null
    languageId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VocabularyCreateOrConnectWithoutDifficultyInput = {
    where: VocabularyWhereUniqueInput
    create: XOR<VocabularyCreateWithoutDifficultyInput, VocabularyUncheckedCreateWithoutDifficultyInput>
  }

  export type VocabularyCreateManyDifficultyInputEnvelope = {
    data: VocabularyCreateManyDifficultyInput | VocabularyCreateManyDifficultyInput[]
    skipDuplicates?: boolean
  }

  export type VocabularyUpsertWithWhereUniqueWithoutDifficultyInput = {
    where: VocabularyWhereUniqueInput
    update: XOR<VocabularyUpdateWithoutDifficultyInput, VocabularyUncheckedUpdateWithoutDifficultyInput>
    create: XOR<VocabularyCreateWithoutDifficultyInput, VocabularyUncheckedCreateWithoutDifficultyInput>
  }

  export type VocabularyUpdateWithWhereUniqueWithoutDifficultyInput = {
    where: VocabularyWhereUniqueInput
    data: XOR<VocabularyUpdateWithoutDifficultyInput, VocabularyUncheckedUpdateWithoutDifficultyInput>
  }

  export type VocabularyUpdateManyWithWhereWithoutDifficultyInput = {
    where: VocabularyScalarWhereInput
    data: XOR<VocabularyUpdateManyMutationInput, VocabularyUncheckedUpdateManyWithoutDifficultyInput>
  }

  export type LanguageCreateWithoutVocabularyInput = {
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LanguageUncheckedCreateWithoutVocabularyInput = {
    id?: number
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LanguageCreateOrConnectWithoutVocabularyInput = {
    where: LanguageWhereUniqueInput
    create: XOR<LanguageCreateWithoutVocabularyInput, LanguageUncheckedCreateWithoutVocabularyInput>
  }

  export type DifficultyLevelCreateWithoutVocabularyInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DifficultyLevelUncheckedCreateWithoutVocabularyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DifficultyLevelCreateOrConnectWithoutVocabularyInput = {
    where: DifficultyLevelWhereUniqueInput
    create: XOR<DifficultyLevelCreateWithoutVocabularyInput, DifficultyLevelUncheckedCreateWithoutVocabularyInput>
  }

  export type LanguageUpsertWithoutVocabularyInput = {
    update: XOR<LanguageUpdateWithoutVocabularyInput, LanguageUncheckedUpdateWithoutVocabularyInput>
    create: XOR<LanguageCreateWithoutVocabularyInput, LanguageUncheckedCreateWithoutVocabularyInput>
    where?: LanguageWhereInput
  }

  export type LanguageUpdateToOneWithWhereWithoutVocabularyInput = {
    where?: LanguageWhereInput
    data: XOR<LanguageUpdateWithoutVocabularyInput, LanguageUncheckedUpdateWithoutVocabularyInput>
  }

  export type LanguageUpdateWithoutVocabularyInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageUncheckedUpdateWithoutVocabularyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DifficultyLevelUpsertWithoutVocabularyInput = {
    update: XOR<DifficultyLevelUpdateWithoutVocabularyInput, DifficultyLevelUncheckedUpdateWithoutVocabularyInput>
    create: XOR<DifficultyLevelCreateWithoutVocabularyInput, DifficultyLevelUncheckedCreateWithoutVocabularyInput>
    where?: DifficultyLevelWhereInput
  }

  export type DifficultyLevelUpdateToOneWithWhereWithoutVocabularyInput = {
    where?: DifficultyLevelWhereInput
    data: XOR<DifficultyLevelUpdateWithoutVocabularyInput, DifficultyLevelUncheckedUpdateWithoutVocabularyInput>
  }

  export type DifficultyLevelUpdateWithoutVocabularyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DifficultyLevelUncheckedUpdateWithoutVocabularyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyCreateManyLanguageInput = {
    id?: number
    word: string
    translation: string
    definition: string
    example?: string | null
    difficultyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VocabularyUpdateWithoutLanguageInput = {
    word?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: DifficultyLevelUpdateOneRequiredWithoutVocabularyNestedInput
  }

  export type VocabularyUncheckedUpdateWithoutLanguageInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
    difficultyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyUncheckedUpdateManyWithoutLanguageInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
    difficultyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyCreateManyDifficultyInput = {
    id?: number
    word: string
    translation: string
    definition: string
    example?: string | null
    languageId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VocabularyUpdateWithoutDifficultyInput = {
    word?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    language?: LanguageUpdateOneRequiredWithoutVocabularyNestedInput
  }

  export type VocabularyUncheckedUpdateWithoutDifficultyInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
    languageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyUncheckedUpdateManyWithoutDifficultyInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
    languageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use LanguageCountOutputTypeDefaultArgs instead
     */
    export type LanguageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LanguageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DifficultyLevelCountOutputTypeDefaultArgs instead
     */
    export type DifficultyLevelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DifficultyLevelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LanguageDefaultArgs instead
     */
    export type LanguageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LanguageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DifficultyLevelDefaultArgs instead
     */
    export type DifficultyLevelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DifficultyLevelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VocabularyDefaultArgs instead
     */
    export type VocabularyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VocabularyDefaultArgs<ExtArgs>

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