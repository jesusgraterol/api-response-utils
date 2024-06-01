import { extractMessage } from 'error-message-utils';

/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * API Response
 * The response object that is sent to the client via the HTTP body.
 */
interface IAPIResponse {
  // a response is considered to be successful if error === undefined
  success: boolean,

  // the data that will be sent to the client (regardless of the request's outcome)
  data: any,

  // the error thrown during the handling of the request (if any)
  error: string | undefined
}




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





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // types
  IAPIResponse,

  // implementation
  buildResponse,
};
