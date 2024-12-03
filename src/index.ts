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
const buildResponse = (data?: any, error?: any): IAPIResponse => ({
  success: error === undefined,
  data,
  error: error ? extractMessage(error) : undefined,
});

/**
 * Verifies if a given value is a valid API Response object.
 * @param response
 * @returns boolean
 */
const isResponse = (response: any): response is IAPIResponse => (
  !!response
  && typeof response === 'object'
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
