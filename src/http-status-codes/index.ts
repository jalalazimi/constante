export enum HTTP_STATUS_CODES {
  // Informational responses (100-199)
  Continue = 100, // The request can proceed
  SwitchingProtocols = 101, // The server is changing protocols
  Processing = 102, // The server is processing the request (WebDAV)
  EarlyHints = 103, // Used to return some response headers before the final response (RFC 8297)

  // Successful responses (200-299)
  OK = 200, // The request was successful
  Created = 201, // The request resulted in a new resource being created
  Accepted = 202, // The request has been accepted but not yet processed
  NonAuthoritativeInformation = 203, // The response is from a copy of the resource, not the authoritative source
  NoContent = 204, // The server successfully processed the request but has no response
  ResetContent = 205, // The user agent should reset the document view (used in forms)
  PartialContent = 206, // Partial GET request success
  MultiStatus = 207, // Provides status for multiple independent operations (WebDAV)
  AlreadyReported = 208, // The members of a DAV binding have been enumerated (WebDAV)
  IMUsed = 226, // A response for a request with multiple resource representations (RFC 3229)

  // Redirection responses (300-399)
  MultipleChoices = 300, // The requested resource has multiple representations
  MovedPermanently = 301, // The requested resource has moved permanently
  Found = 302, // The requested resource has been found temporarily
  SeeOther = 303, // The response to the request can be found under a different URI
  NotModified = 304, // The client can use a cached version of the requested resource
  UseProxy = 305, // The requested resource must be accessed through a proxy
  TemporaryRedirect = 307, // The requested resource can be temporarily found under a different URI
  PermanentRedirect = 308, // The requested resource has moved permanently (status code from RFC 7538)

  // Client error responses (400-499)
  BadRequest = 400, // The request cannot be fulfilled due to bad syntax or invalid parameters
  Unauthorized = 401, // Authentication is required and has failed or has not been provided
  PaymentRequired = 402, // Payment is required to access the requested resource
  Forbidden = 403, // The server understands the request, but it refuses to fulfill it
  NotFound = 404, // The requested resource could not be found on the server
  MethodNotAllowed = 405, // The method specified in the request is not allowed for the resource
  NotAcceptable = 406, // The server cannot produce a response matching the list of acceptable values
  ProxyAuthenticationRequired = 407, // Proxy authentication is required to access the requested resource
  RequestTimeout = 408, // The server timed out waiting for the request
  Conflict = 409, // The request could not be completed due to a conflict with the current state of the target resource
  Gone = 410, // The requested resource is no longer available at the server
  LengthRequired = 411, // The server requires a valid Content-Length header
  PreconditionFailed = 412, // One or more conditions specified in the request header fields evaluated to false
  PayloadTooLarge = 413, // The server refused the request because the request payload is larger than allowed
  UriTooLong = 414, // The server refused the request because the URI is longer than the server is willing to interpret
  UnsupportedMediaType = 415, // The server refused the request because the media type is not supported
  RangeNotSatisfiable = 416, // The client has asked for a portion of the file, but the server cannot supply that portion
  ExpectationFailed = 417, // The server cannot meet the requirements of the Expect request-header field
  MisdirectedRequest = 421, // The request was directed at a server that is not able to produce a response (RFC 7540)
  UnprocessableEntity = 422, // The request was well-formed but semantically incorrect (WebDAV)
  Locked = 423, // The resource that is being accessed is locked (WebDAV)
  FailedDependency = 424, // The request failed due to the failure of a previous request (WebDAV)
  TooEarly = 425, // Indicates that the client should retry at a later time (RFC 8470)
  UpgradeRequired = 426, // The client should switch to a different protocol (RFC 7231)
  PreconditionRequired = 428, // The origin server requires the request to be conditional (RFC 6585)
  TooManyRequests = 429, // The user has sent too many requests in a given amount of time (RFC 6585)
  RequestHeaderFieldsTooLarge = 431, // The server is unwilling to process the request because its header fields are too large (RFC 6585)
  UnavailableForLegalReasons = 451, // The server is denying access to the resource as a legal demand (RFC 7725)

  // Server error responses (500-599)
  InternalServerError = 500, // An unexpected server error occurred
  NotImplemented = 501, // The server does not support the functionality required to fulfill the request
  BadGateway = 502, // The server, while acting as a gateway or proxy, received an invalid response from the upstream server
  ServiceUnavailable = 503, // The server is currently unable to handle the request due to temporary overloading or maintenance
  GatewayTimeout = 504, // The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server
  HTTPVersionNotSupported = 505, // The server does not support the HTTP protocol version used in the request
  VariantAlsoNegotiates = 506, // Transparent content negotiation for the request results in a circular reference
  InsufficientStorage = 507, // The server is unable to store the representation needed to complete the request (WebDAV)
  LoopDetected = 508, // The server detected an infinite loop while processing the request (WebDAV)
  NotExtended = 510, // Further extensions to the request are required for the server to fulfill it
  NetworkAuthenticationRequired = 511, // The client needs to authenticate to gain network access or it needs to provide valid credentials (RFC 6585)
}
