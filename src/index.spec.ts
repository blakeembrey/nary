import { nary, nullary, unary, binary, ternary, quaternary } from './index'

describe('nary', () => {
  it('it should accept no arguments', () => {
    const fn = jest.fn()
    const test = nullary(fn)

    ;(test as any)()
    ;(test as any)(1)
    ;(test as any)(1, 2)

    expect(fn.mock.calls).toEqual([
      [],
      [],
      []
    ])
  })

  it('it should accept one argument', () => {
    const fn = jest.fn()
    const test = unary(fn)

    ;(test as any)()
    ;(test as any)(1)
    ;(test as any)(1, 2)

    expect(fn.mock.calls).toEqual([
      [undefined],
      [1],
      [1]
    ])
  })

  it('it should accept two arguments', () => {
    const fn = jest.fn()
    const test = binary(fn)

    ;(test as any)()
    ;(test as any)(1)
    ;(test as any)(1, 2)

    expect(fn.mock.calls).toEqual([
      [undefined, undefined],
      [1, undefined],
      [1, 2]
    ])
  })

  it('it should accept three arguments', () => {
    const fn = jest.fn()
    const test = ternary(fn)

    ;(test as any)(1, 2)
    ;(test as any)(1, 2, 3)
    ;(test as any)(1, 2, 3, 4)

    expect(fn.mock.calls).toEqual([
      [1, 2, undefined],
      [1, 2, 3],
      [1, 2, 3]
    ])
  })

  it('it should accept four arguments', () => {
    const fn = jest.fn()
    const test = quaternary(fn)

    ;(test as any)(1, 2)
    ;(test as any)(1, 2, 3)
    ;(test as any)(1, 2, 3, 4)

    expect(fn.mock.calls).toEqual([
      [1, 2, undefined, undefined],
      [1, 2, 3, undefined],
      [1, 2, 3, 4]
    ])
  })

  it('it should accept configured number of arguments', () => {
    const fn = jest.fn()
    const test = nary(10, fn)

    ;(test as any)(1, 2, 3, 4, 5)
    ;(test as any)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    ;(test as any)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)

    expect(fn.mock.calls).toEqual([
      [1, 2, 3, 4, 5, undefined, undefined, undefined, undefined, undefined],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    ])
  })
})
