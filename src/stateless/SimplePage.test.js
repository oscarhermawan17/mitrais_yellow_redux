import { shallow } from 'enzyme'
import React from 'react'
import SimplePage from './SimplePage'

describe("SimplePage Stateless", () => {
    it("snapshot", () => {
        expect(shallow(<SimplePage />)).toMatchSnapshot()
    })
})