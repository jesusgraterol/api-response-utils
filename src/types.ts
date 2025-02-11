

/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * API Response
 * The response object that is sent to the client via the HTTP body.
 */
interface IAPIResponse<T> {
  // a response is considered to be successful if error === undefined
  success: boolean,

  // the data that will be sent to the client (regardless of the request's outcome)
  data: T | undefined,

  // the error thrown during the handling of the request (if any)
  error: string | undefined
}





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  IAPIResponse,
};
