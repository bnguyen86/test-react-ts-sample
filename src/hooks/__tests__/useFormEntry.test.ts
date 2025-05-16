import { beforeEach, describe, expect, it } from 'vitest'
import { renderHook } from 'vitest-browser-react'
import useFormEntry from '../useFormEntry';
import { act } from 'react';

describe('useFormEntry Hook', () => {
    let renderHookResult: any;

    beforeEach(() => {
        renderHookResult = renderHook(() => useFormEntry({ name: 'John Smith', age: 35 }));
    });

    it('should set the default formEntry value', () => {
        const { formEntry } = renderHookResult.result.current;
        expect(formEntry.name).toBe('John Smith');
    });

    it('should set the default isDirty value', () => {
        const { isDirty } = renderHookResult.result.current;
        expect(isDirty).toBe(false);
    });

    it('should set the new values on change', async () => {
        const { result } = renderHook(() => useFormEntry({ name: 'John Smith', age: 35 }));;
        const event = {
            target: {
                name: 'name',
                value: 'Jane Doe',
            },
        } as React.ChangeEvent<HTMLInputElement>;

        act(() => {
            result.current.handleChange(event);
        });

        await Promise.resolve();
        expect(result.current.isDirty).toBe(true);
        expect(result.current.formEntry.name).toBe('Jane Doe');

    });

    it('should rest values on restForm', async () => {
        const { result } = renderHook(() => useFormEntry({ name: 'John Smith', age: 35 }));;
        const event = {
            target: {
                name: 'name',
                value: 'Jane Doe',
            },
        } as React.ChangeEvent<HTMLInputElement>;

        act(() => {
            result.current.handleChange(event);
        });

        act(() => {
            result.current.resetForm();
        });

        await Promise.resolve();
        expect(result.current.isDirty).toBe(false);
        expect(result.current.formEntry.name).toBe('John Smith');

    });

})