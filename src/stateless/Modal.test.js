import { shallow } from 'enzyme'
import React from 'react'
import Modal from './Modal'

describe("Modal with Props", () => {
    const mockModal = {
        modal:"modal",
        form_todo:{
            id:"",
            description:"",
            deadline:new Date(),
            done:true,
        },
    }

    it("snapshot", ({modal, form_todo} = mockModal) => {
        expect(shallow(<Modal modal={modal} form_todo={form_todo}/>)).toMatchSnapshot()
    })
})