export const DATE = {
  /** Maximum allowed time in milliseconds, calculated for a span of about 285 years */
  MAX_ALLOWED_TIME: 8640000000000000,

  /** Minimum allowed time in milliseconds, calculated for a span of about -285 years */
  MIN_ALLOWED_TIME: -8640000000000000,

  /** Number of milliseconds in one second */
  MILLISECONDS_IN_SECOND: 1000,

  /** Number of milliseconds in one minute */
  MILLISECONDS_IN_MINUTE: 60000,

  /** Number of milliseconds in one hour */
  MILLISECONDS_IN_HOUR: 3600000,

  /** Number of milliseconds in one day */
  MILLISECONDS_IN_DAY: 86400000,

  /** Number of milliseconds in one week */
  MILLISECONDS_IN_WEEK: 604800000,

  /** Number of seconds in one minute */
  SECONDS_IN_MINUTE: 60,

  /** Number of seconds in one hour */
  SECONDS_IN_HOUR: 3600,

  /** Number of seconds in one day */
  SECONDS_IN_DAY: 86400,

  /** Number of seconds in one week */
  SECONDS_IN_WEEK: 604800,

  /** Number of minutes in one hour */
  MINUTES_IN_HOUR: 60,

  /** Number of minutes in one day */
  MINUTES_IN_DAY: 1440,

  /** Number of minutes in one week */
  MINUTES_IN_WEEK: 10080,

  /** Number of hours in one day */
  HOURS_IN_DAY: 24,

  /** Number of hours in one week */
  HOURS_IN_WEEK: 168,

  /** Number of days in one week */
  DAYS_IN_WEEK: 7,

  /** Number of months in one quarter */
  MONTHS_IN_QUARTER: 3,

  /** Number of months in one year */
  MONTHS_IN_YEAR: 12,

  /** Number of quarters in one year */
  QUARTERS_IN_YEAR: 4,

  /** Average number of weeks in a year */
  WEEKS_IN_YEAR: 52.1775,

  /** Number of days in a typical year */
  DAYS_IN_YEAR: 365,

  /** Number of days in a leap year */
  DAYS_IN_LEAP_YEAR: 366,
} as const

export type Date = typeof DATE[keyof typeof DATE]
