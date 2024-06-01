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









/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // types
  IAPIResponse,

};
