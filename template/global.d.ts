
/**
 * callback type
*/
type callbackType = (err: Error | null, content: any, message?: string | null | undefined) => {};

/**
 * Extentd Global Type
*/
interface window {
  _debug: boolean;
}

