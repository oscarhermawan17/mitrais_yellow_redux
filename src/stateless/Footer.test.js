import { shallow } from 'enzyme'
import React from 'react'
import Footer from './Footer'

describe("Footer Stateless", () => {
    it("expect render", () => {
        expect(shallow(<Footer />).length).toEqual(1)
    })

    it("snapshot", () => {
        expect(shallow(<Footer />).length).toMatchSnapshot()
    })
})