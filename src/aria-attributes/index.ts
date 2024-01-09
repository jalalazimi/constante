export enum ARIA_ATTRIBUTES {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  ARIA_ACTIVEDESCENDANT = 'aria-activedescendant',

  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications. */
  ARIA_ATOMIC = 'aria-atomic',

  /** Indicates whether user input completion suggestions are provided. */
  ARIA_AUTOCOMPLETE = 'aria-autocomplete',

  /** Indicates an element's "busy" state. */
  ARIA_BUSY = 'aria-busy',

  /** Indicates the current "checked" state of checkboxes, radio buttons, and other widgets. */
  ARIA_CHECKED = 'aria-checked',

  /** Defines the total number of columns in a table, grid, or treegrid. */
  ARIA_COLCOUNT = 'aria-colcount',

  /** Defines an element's column index or position with respect to the total number of columns. */
  ARIA_COLINDEX = 'aria-colindex',

  /** Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid. */
  ARIA_COLSPAN = 'aria-colspan',

  /** Identifies the element (or elements) that controls the current element. */
  ARIA_CONTROLS = 'aria-controls',

  /** Indicates the element that represents the current item within a container or set of related elements. */
  ARIA_CURRENT = 'aria-current',

  /** Identifies the element (or elements) that describes the object. */
  ARIA_DESCRIBEDBY = 'aria-describedby',

  /** Identifies the element that provides a detailed, extended description for the object. */
  ARIA_DETAILS = 'aria-details',

  /** Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable. */
  ARIA_DISABLED = 'aria-disabled',

  /** Indicates what functions can be performed when a dragged object is released on the drop target. */
  ARIA_DROPEFFECT = 'aria-dropeffect',

  /** Identifies the element that provides an error message for the object. */
  ARIA_ERRORMESSAGE = 'aria-errormessage',

  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  ARIA_EXPANDED = 'aria-expanded',

  /** Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order. */
  ARIA_FLOWTO = 'aria-flowto',

  /** Indicates an element's grab state in a drag-and-drop operation. */
  ARIA_GRABBED = 'aria-grabbed',

  /** Indicates whether the element can be grabbed (dragged to a new location). */
  ARIA_HASPOPUP = 'aria-haspopup',

  /** Indicates whether the element is exposed to an accessibility API. */
  ARIA_HIDDEN = 'aria-hidden',

  /** Indicates the entered value does not conform to the format expected by the application. */
  ARIA_INVALID = 'aria-invalid',

  /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  ARIA_KEYSHORTCUTS = 'aria-keyshortcuts',

  /** Defines a string value that labels the current element. */
  ARIA_LABEL = 'aria-label',

  /** Identifies the element (or elements) that labels the current element. */
  ARIA_LABELLEDBY = 'aria-labelledby',

  /** Defines the hierarchical level of an element within a structure. */
  ARIA_LEVEL = 'aria-level',

  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  ARIA_LIVE = 'aria-live',

  /** Indicates whether an element is modal when displayed. */
  ARIA_MODAL = 'aria-modal',

  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  ARIA_MULTILINE = 'aria-multiline',

  /** Indicates that the user may select more than one item from the current selectable descendants. */
  ARIA_MULTISELECTABLE = 'aria-multiselectable',

  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  ARIA_ORIENTATION = 'aria-orientation',

  /** Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship. */
  ARIA_OWNS = 'aria-owns',

  /** Defines a hint that can be used by a user agent to suggest the expected data format. */
  ARIA_PLACEHOLDER = 'aria-placeholder',

  /** Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. */
  ARIA_POSINSET = 'aria-posinset',

  /** Indicates the current "pressed" state of toggle buttons. */
  ARIA_PRESSED = 'aria-pressed',

  /** Indicates that the element is not editable, but is otherwise operable. */
  ARIA_READONLY = 'aria-readonly',

  /** Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. */
  ARIA_RELEVANT = 'aria-relevant',

  /** Indicates that user input is required on the element before a form may be submitted. */
  ARIA_REQUIRED = 'aria-required',

  /** Defines a human-readable, author-localized description for the role of an element. */
  ARIA_ROLEDESCRIPTION = 'aria-roledescription',

  /** Defines the total number of rows in a table, grid, or treegrid. */
  ARIA_ROWCOUNT = 'aria-rowcount',

  /** Defines an element's row index or position with respect to the total number of rows. */
  ARIA_ROWINDEX = 'aria-rowindex',

  /** Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid. */
  ARIA_ROWSPAN = 'aria-rowspan',

  /** Indicates the current "selected" state of various widgets. */
  ARIA_SELECTED = 'aria-selected',

  /** Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. */
  ARIA_SETSIZE = 'aria-setsize',

  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  ARIA_SORT = 'aria-sort',

  /** Defines the maximum allowed value for a range widget. */
  ARIA_VALUEMAX = 'aria-valuemax',

  /** Defines the minimum allowed value for a range widget. */
  ARIA_VALUEMIN = 'aria-valuemin',

  /** Defines the current value for a range widget. */
  ARIA_VALUENOW = 'aria-valuenow',

  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  ARIA_VALUETEXT = 'aria-valuetext',

  /** Defines the role of an element in the context of accessibility. */
  ROLE = 'role',
}
