import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import BaseWindow from '../BaseWindow'

describe('BaseWindow', async () => {
  it('should render BaseWindow', () => {
    const windowEl = render((
      <BaseWindow children={
        <>
          <div>test</div>
          <div>test</div>
        </>
      } />
    ));
    const children = windowEl.getByText('test');
    expect(children.elements().length).toBe(2);
  })
})