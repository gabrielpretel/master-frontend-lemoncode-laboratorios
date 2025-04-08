import 'pinia'

declare module 'pinia' {
  export interface DefineStoreOptionsBase<S, Store> {
    persist?: {
      storage?: Storage
      paths?: string[]
    }
  }
}
