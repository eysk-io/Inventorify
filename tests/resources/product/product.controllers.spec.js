import controllers from '../../../src/resources/product/product.controllers'
import { isFunction } from 'lodash'

describe('Product controllers', () => {
    test('has all crud controllers', () => {
        const crud = [
            'getAllProducts',
            'getAllProductsByVendor',
            'getOneProduct',
            'createOneProduct',
            'removeOneProduct',
            'updateOneProduct',
        ]

        crud.forEach(each => {
            expect(isFunction(controllers[each])).toBe(true)
        })

        expect(Object.keys(controllers).length).toBe(crud.length)
    })
})
