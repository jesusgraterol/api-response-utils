import { extractMessage } from 'error-message-utils';
import { IAPIResponse } from './types.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Builds the response object that will be included in the HTTP body. Note that the error (if any)
 * will be processed and converted into a string regardless of the original type.
 * Moreover, a response with an error can also contain data.
 * @param data
 * @param error
 * @returns IAPIResponse
 */
const buildResponse = <T = undefined>(data?: T, error?: any): IAPIResponse<T> => ({
  success: error === undefined,
  data: data as T,
  error: error ? extractMessage(error) : undefined,
});

/**
 * Verifies if a given value is an object.
 * @param value
 * @returns boolean
 */
const __isObject = (value: unknown): value is Record<string, unknown> => (
  Boolean(value)
  && typeof value === 'object'
  && !Array.isArray(value)
);

/**
 * Verifies if a given value is a valid API Response object.
 * @param response
 * @returns boolean
 */
const isResponse = <T>(response: unknown): response is IAPIResponse<T> => (
  __isObject(response)
  && typeof response.success === 'boolean'
  && Object.hasOwn(response, 'data')
  && Object.hasOwn(response, 'error')
);





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // types
  type IAPIResponse,

  // implementation
  buildResponse,
  isResponse,
};
