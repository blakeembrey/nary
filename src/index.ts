/**
 * Function cache for `nary` generated functions.
 */
const FUNCTIONS: { [index: number]: Function } = {}

/**
 * Generate a function that accepts a number of arguments.
 */
export function nary <U> (length: 0, fn: () => U): () => U
export function nary <T, U> (length: 1, fn: (arg: T) => U): (arg: T) => U
export function nary <T1, T2, U> (length: 2, fn: (arg1: T1, arg2: T2) => U): (arg1: T1, arg2: T2) => U
export function nary <T1, T2, T3, U> (length: 3, fn: (arg1: T1, arg2: T2, arg3: T3) => U): (arg1: T1, arg2: T2, arg3: T3) => U
export function nary <T1, T2, T3, T4, U> (length: 4, fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => U): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => U
export function nary <T1, T2, T3, T4, T5, U> (length: 5, fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => U): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => U
export function nary <T1, T2, T3, T4, T5, T6, U> (length: 6, fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => U): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => U
export function nary <TAll, U> (length: number, fn: (args: TAll[]) => U): (args: TAll[]) => U
export function nary (length: number, fn: (...args: any[]) => any): (...args: any[]) => any {
  if (!FUNCTIONS[length]) {
    const params: string[] = []

    for (let i = 0; i < length; i++) {
      params.push(`_${i}`)
    }

    const args = params.join(',')

    FUNCTIONS[length] = new Function('fn', `return function nary${length} (${args}) { return fn(${args}) }`)
  }

  return FUNCTIONS[length](fn)
}

/**
 * Short-hand methods.
 */
export const nullary = <U> (fn: () => U) => nary(0, fn)
export const unary = <T, U> (fn: (arg: T) => U) => nary(1, fn)
export const binary = <T1, T2, U> (fn: (arg1: T1, arg2: T2) => U) => nary(2, fn)
export const ternary = <T1, T2, T3, U> (fn: (arg1: T1, arg2: T2, arg3: T3) => U) => nary(3, fn)
export const quaternary = <T1, T2, T3, T4, U> (fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => U) => nary(4, fn)
