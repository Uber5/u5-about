import { getErrors } from '..'

describe('getErrors', () => {

  it('fails without "window"', () => {
    expect(() => getErrors(null)).toThrow()
  })

  it('fails without "localStorage"', () => {
    expect(() => getErrors({})).toThrow()
  })

  describe('given no errors occurred', () => {

    const w = {
      localStorage: {
        getItem: () => '[]'
      }
    }

    it('returns an empty array', () => {
      expect(getErrors(w)).toEqual([])
    })

  })

  describe('given one error', () => {

    const w = {
      localStorage: {
        getItem: () => '[{"message":"dummy error"}]'
      }
    }

    it('returns the error', () => {
      expect(getErrors(w)).toEqual([{ message: 'dummy error' }])
    })
  })

})
