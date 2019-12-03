import { shallow } from 'enzyme'
import React from 'react'
import Card from './Card'

describe("Card with props", () => {
    const mockModal = [{
            id:"",
            description:"",
            deadline:new Date(),
            done:true,
    }]

    // it("snapshot", () => {
    //     expect(shallow(<Card todos={mockModal} />)).toMatchSnapshot()
    // })

    it("findButton", () => {
        const wrapper = shallow(<Card todos={mockModal} />)
        wrapper.find('[htmlFor="button"]')
        expect(console.log('hasil', wrapper))
    })
})