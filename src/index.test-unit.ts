import { describe, test, expect } from 'vitest';
import { buildResponse, isResponse } from './index.js';

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



describe('isResponse', () => {
  test('can identify a successful response object', () => {
    expect(isResponse(buildResponse())).toBe(true);
  });

  test('can identify a successful response object w/ data', () => {
    expect(isResponse(buildResponse({ hello: 'world' }))).toBe(true);
  });

  test('can identify an unsuccessful response object', () => {
    expect(isResponse(buildResponse(undefined, new Error('Oops, there\'s been an error.')))).toBe(true);
  });

  test('can identify an unsuccessful response object w/ data', () => {
    expect(isResponse(buildResponse({ hello: 'world' }, new Error('Oops, there\'s been an error.')))).toBe(true);
  });

  test('can identify an invalid response object', () => {
    expect(isResponse(undefined)).toBe(false);
    expect(isResponse(null)).toBe(false);
    expect(isResponse([])).toBe(false);
    expect(isResponse({})).toBe(false);
    expect(isResponse(123)).toBe(false);
    expect(isResponse('asd')).toBe(false);
    expect(isResponse(new Date())).toBe(false);
  });

  test('can identify an incomplete response object', () => {
    expect(isResponse({ success: true })).toBe(false);
    expect(isResponse({ success: true, data: undefined })).toBe(false);
    expect(isResponse({ success: true, error: undefined })).toBe(false);
    expect(isResponse({ data: 123 })).toBe(false);
    expect(isResponse({ data: undefined, error: undefined })).toBe(false);
    expect(isResponse({ data: 'some data!', error: 'Some error' })).toBe(false);
    expect(isResponse({ error: 'Some error' })).toBe(false);
  });
});
