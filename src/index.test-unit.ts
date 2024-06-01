import { describe, test, expect } from 'vitest';
import { buildResponse } from './index.js';

/* ************************************************************************************************
 *                                             TESTS                                              *
 ************************************************************************************************ */

describe('buildResponse', () => {
  test('can build an empty response', () => {
    expect(buildResponse()).toStrictEqual({ success: true, data: undefined, error: undefined });
  });

  test('can include any primitives in the data', () => {
    expect(buildResponse(true)).toStrictEqual({ success: true, data: true, error: undefined });
    expect(buildResponse(100)).toStrictEqual({ success: true, data: 100, error: undefined });
    expect(buildResponse('Hello!')).toStrictEqual({ success: true, data: 'Hello!', error: undefined });
    expect(buildResponse({ id: 1, name: 'John Doe' })).toStrictEqual(
      { success: true, data: { id: 1, name: 'John Doe' }, error: undefined },
    );
    expect(buildResponse([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }])).toStrictEqual(
      {
        success: true,
        data: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }],
        error: undefined,
      },
    );
  });

  test('can handle errors of any type', () => {
    expect(buildResponse(
      undefined,
      'Ops, there was an error',
    )).toStrictEqual({ success: false, data: undefined, error: 'Ops, there was an error' });
    expect(buildResponse(
      undefined,
      new Error('Ops, there was an error'),
    )).toStrictEqual({ success: false, data: undefined, error: 'Ops, there was an error' });
  });

  test('can include data in an unsuccessful response', () => {
    expect(buildResponse(
      { some: 'data', foo: 123456 },
      new Error('Ops, there was an error'),
    )).toStrictEqual({
      success: false,
      data: { some: 'data', foo: 123456 },
      error: 'Ops, there was an error',
    });
  });
});
