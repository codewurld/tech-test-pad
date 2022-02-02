
import React from 'react'
import { render } from '@testing-library/react';
import AddTodo from '../src/components/AddTodo'


// test input field placeholder on AddTodo component

describe('input value', () => {
    it("updates on change", () => {
        const { queryByPlaceholderText } =
            render(<AddTodo />);

        const listInputPlaceholder = queryByPlaceholderText('ToDo')


        expect(listInputPlaceholder).toBeTruthy()
    })

});

