/**
 * Enum for HTML Tag Names.
 * Provides a comprehensive list of HTML tags for use in TypeScript projects.
 */
export const enum HTML_TAG_NAMES {
  /** Anchor tag for hyperlinks. */
  'A' = 'a',
  /** Abbreviation tag. */
  'ABBR' = 'abbr',
  /** Acronym tag (deprecated in HTML5). */
  'ACRONYM' = 'acronym',
  /** Address tag for defining contact information. */
  'ADDRESS' = 'address',
  /** Applet tag (deprecated in HTML5). */
  'APPLET' = 'applet',
  /** Area tag for image maps. */
  'AREA' = 'area',
  /** Article tag for self-contained content. */
  'ARTICLE' = 'article',
  /** Aside tag for content tangentially related to the main content. */
  'ASIDE' = 'aside',
  /** Audio tag for sound content. */
  'AUDIO' = 'audio',
  /** Bold text tag. */
  'B' = 'b',
  /** Base tag for specifying the base URL for all relative URLs in a document. */
  'BASE' = 'base',
  /** Basefont tag (deprecated in HTML5). */
  'BASEFONT' = 'basefont',
  /** Bidirectional isolation tag for formatting text in a different direction. */
  'BDI' = 'bdi',
  /** Bidirectional override tag for changing text direction. */
  'BDO' = 'bdo',
  /** Background sound tag (non-standard). */
  'BGSOUND' = 'bgsound',
  /** Big text tag (deprecated in HTML5). */
  'BIG' = 'big',
  /** Blinking text tag (non-standard). */
  'BLINK' = 'blink',
  /** Blockquote tag for long quotations. */
  'BLOCKQUOTE' = 'blockquote',
  /** Body tag representing the document's body. */
  'BODY' = 'body',
  /** Line break tag. */
  'BR' = 'br',
  /** Button tag for clickable buttons. */
  'BUTTON' = 'button',
  /** Canvas tag for drawing graphics. */
  'CANVAS' = 'canvas',
  /** Caption tag for table captions. */
  'CAPTION' = 'caption',
  /** Center tag for centered text (deprecated in HTML5). */
  'CENTER' = 'center',
  /** Cite tag for references to creative works. */
  'CITE' = 'cite',
  /** Code tag for displaying inline code. */
  'CODE' = 'code',
  /** Column tag for defining table columns. */
  'COL' = 'col',
  /** Colgroup tag for grouping table columns. */
  'COLGROUP' = 'colgroup',
  /** Command tag (deprecated in HTML5). */
  'COMMAND' = 'command',
  /** Content tag (deprecated, used in Shadow DOM). */
  'CONTENT' = 'content',
  /** Data tag for adding machine-readable translations of data. */
  'DATA' = 'data',
  /** Datalist tag for specifying a list of pre-defined options for input controls. */
  'DATALIST' = 'datalist',
  /** Description tag for defining a term or name in a description list. */
  'DD' = 'dd',
  /** Deletion tag for indicating document changes. */
  'DEL' = 'del',
  /** Details tag for creating interactive widgets for showing/hiding information. */
  'DETAILS' = 'details',
  /** Definition tag for specifying a term's definition. */
  'DFN' = 'dfn',
  /** Dialog tag for creating dialog boxes or sub-windows. */
  'DIALOG' = 'dialog',
  /** Directory list tag (deprecated in HTML5). */
  'DIR' = 'dir',
  /** Division tag for sectioning content. */
  'DIV' = 'div',
  /** Description list tag for wrapping `dt` and `dd` elements. */
  'DL' = 'dl',
  /** Data term tag for labeling `dd` elements. */
  'DT' = 'dt',
  /** Element tag (deprecated, used in Shadow DOM). */
  'ELEMENT' = 'element',
  /** Emphasis tag for emphasizing text. */
  'EM' = 'em',
  /** Embed tag for embedding external content like plugins. */
  'EMBED' = 'embed',
  /** Fieldset tag for grouping related elements in a form. */
  'FIELDSET' = 'fieldset',
  /** Figcaption tag for providing a caption to a `figure` element. */
  'FIGCAPTION' = 'figcaption',
  /** Figure tag for self-contained content, often with a caption. */
  'FIGURE' = 'figure',
  /** Font tag for specifying text font, size, and color (deprecated in HTML5). */
  'FONT' = 'font',
  /** Footer tag for defining a footer for a document or section. */
  'FOOTER' = 'footer',
  /** Form tag for creating HTML forms for user input. */
  'FORM' = 'form',
  /** Frame tag for defining a particular area in which to display a document (deprecated in HTML5). */
  'FRAME' = 'frame',
  /** Frameset tag for holding a collection of `frame` elements (deprecated in HTML5). */
  'FRAMESET' = 'frameset',
  /** Heading level 1 tag for top-level headings. */
  'H1' = 'h1',
  /** Heading level 2 tag for second-level headings. */
  'H2' = 'h2',
  /** Heading level 3 tag for third-level headings. */
  'H3' = 'h3',
  /** Heading level 4 tag for fourth-level headings. */
  'H4' = 'h4',
  /** Heading level 5 tag for fifth-level headings. */
  'H5' = 'h5',
  /** Heading level 6 tag for sixth-level headings. */
  'H6' = 'h6',
  /** Head tag for containing meta-information about the document. */
  'HEAD' = 'head',
  /** Header tag for introductory content or navigational links. */
  'HEADER' = 'header',
  /** Hgroup tag for grouping heading (`h1`-`h6`) elements. */
  'HGROUP' = 'hgroup',
  /** Horizontal rule tag for thematic breaks in a page. */
  'HR' = 'hr',
  /** Root of an HTML document. */
  'HTML' = 'html',
  /** Italics tag for italicizing text. */
  'I' = 'i',
  /** Iframe tag for embedding another HTML page within the current page. */
  'IFRAME' = 'iframe',
  /** Image tag for embedding images in the document (not part of HTML standard). */
  'IMAGE' = 'image',
  /** Image tag for embedding images in the document. */
  'IMG' = 'img',
  /** Input tag for interactive controls to accept data from the user. */
  'INPUT' = 'input',
  /** Inserted text tag for indicating document changes. */
  'INS' = 'ins',
  /** ISINDEX tag (deprecated in HTML5). */
  'ISINDEX' = 'isindex',
  /** Keyboard input tag for defining keyboard input. */
  'KBD' = 'kbd',
  /** Keygen tag for generating key-pairs for forms. */
  'KEYGEN' = 'keygen',
  /** Label tag for labeling form elements. */
  'LABEL' = 'label',
  /** Legend tag for providing a legend for a fieldset. */
  'LEGEND' = 'legend',
  /** List item tag for ordered and unordered lists. */
  'LI' = 'li',
  /** Link tag for defining external resources like stylesheets. */
  'LINK' = 'link',
  /** Listing tag (deprecated in HTML5). */
  'LISTING' = 'listing',
  /** Main tag for the main content of a document. */
  'MAIN' = 'main',
  /** Map tag for defining image maps. */
  'MAP' = 'map',
  /** Mark tag for highlighting text. */
  'MARK' = 'mark',
  /** Marquee tag (non-standard). */
  'MARQUEE' = 'marquee',
  /** MathML tag for mathematical expressions. */
  'MATH' = 'math',
  /** Menu tag for creating menus or navigation lists. */
  'MENU' = 'menu',
  /** Menuitem tag for defining items in a menu. */
  'MENUITEM' = 'menuitem',
  /** Meta tag for metadata information about the document. */
  'META' = 'meta',
  /** Meter tag for measuring a scalar value within a known range. */
  'METER' = 'meter',
  /** Multicol tag (deprecated in HTML5). */
  'MULTICOL' = 'multicol',
  /** Nav tag for navigation menus. */
  'NAV' = 'nav',
  /** Nextid tag (deprecated in HTML5). */
  'NEXTID' = 'nextid',
  /** No line break tag (deprecated in HTML5). */
  'NOBR' = 'nobr',
  /** No embed tag (deprecated in HTML5). */
  'NOEMBED' = 'noembed',
  /** No frames tag (deprecated in HTML5). */
  'NOFRAMES' = 'noframes',
  /** No script tag (deprecated in HTML5). */
  'NOSCRIPT' = 'noscript',
  /** Object tag for embedding objects like multimedia. */
  'OBJECT' = 'object',
  /** Ordered list tag for creating numbered lists. */
  'OL' = 'ol',
  /** Optgroup tag for grouping option elements in a select element. */
  'OPTGROUP' = 'optgroup',
  /** Option tag for defining options in a select element. */
  'OPTION' = 'option',
  /** Output tag for displaying the result of a calculation. */
  'OUTPUT' = 'output',
  /** Paragraph tag for defining paragraphs of text. */
  'P' = 'p',
  /** Param tag for passing parameters to objects. */
  'PARAM' = 'param',
  /** Picture tag for responsive images. */
  'PICTURE' = 'picture',
  /** Plaintext tag (deprecated in HTML5). */
  'PLAINTEXT' = 'plaintext',
  /** Preformatted text tag for preserving whitespace and line breaks. */
  'PRE' = 'pre',
  /** Progress tag for displaying progress bars. */
  'PROGRESS' = 'progress',
  /** Quotation tag for inline quotations. */
  'Q' = 'q',
  /** Ruby base tag for ruby annotations. */
  'RB' = 'rb',
  /** Ruby base container tag for ruby annotations. */
  'RBC' = 'rbc',
  /** Ruby parenthesis tag for ruby annotations. */
  'RP' = 'rp',
  /** Ruby text tag for ruby annotations. */
  'RT' = 'rt',
  /** Ruby text container tag for ruby annotations. */
  'RTC' = 'rtc',
  /** Ruby tag for ruby annotations. */
  'RUBY' = 'ruby',
  /** Strikethrough tag for indicating text that has been deleted. */
  'S' = 's',
  /** Sample text tag for indicating sample output. */
  'SAMP' = 'samp',
  /** Script tag for including scripts like JavaScript. */
  'SCRIPT' = 'script',
  /** Section tag for defining sections of content. */
  'SECTION' = 'section',
  /** Select tag for creating dropdown lists. */
  'SELECT' = 'select',
  /** Shadow DOM tag for encapsulating web components. */
  'SHADOW' = 'shadow',
  /** Slot tag for defining slots in web components. */
  'SLOT' = 'slot',
  /** Small text tag for indicating smaller text. */
  'SMALL' = 'small',
  /** Source tag for defining multiple media resources for media elements. */
  'SOURCE' = 'source',
  /** Spacer tag (deprecated in HTML5). */
  'SPACER' = 'spacer',
  /** Span tag for inline styling and grouping elements. */
  'SPAN' = 'span',
  /** Strikethrough tag for indicating text that has been deleted. */
  'STRIKE' = 'strike',
  /** Strong tag for indicating strong importance. */
  'STRONG' = 'strong',
  /** Style tag for defining inline styles. */
  'STYLE' = 'style',
  /** Subscript tag for rendering text as a subscript. */
  'SUB' = 'sub',
  /** Summary tag for summarizing details in a details element. */
  'SUMMARY' = 'summary',
  /** Superscript tag for rendering text as a superscript. */
  'SUP' = 'sup',
  /** SVG tag for embedding scalable vector graphics. */
  'SVG' = 'svg',
  /** Table tag for creating tables. */
  'TABLE' = 'table',
  /** Table body tag for grouping table rows. */
  'TBODY' = 'tbody',
  /** Table data cell tag for table cells. */
  'TD' = 'td',
  /** Template tag for defining client-side templates. */
  'TEMPLATE' = 'template',
  /** Textarea tag for multi-line text input. */
  'TEXTAREA' = 'textarea',
  /** Table footer tag for defining table footers. */
  'TFOOT' = 'tfoot',
  /** Table header cell tag for table headers. */
  'TH' = 'th',
  /** Table head tag for grouping table header rows. */
  'THEAD' = 'thead',
  /** Time tag for representing date and time values. */
  'TIME' = 'time',
  /** Title tag for defining the document's title. */
  'TITLE' = 'title',
  /** Table row tag for defining table rows. */
  'TR' = 'tr',
  /** Track tag for specifying text tracks for media elements. */
  'TRACK' = 'track',
  /** Teletype text tag for indicating text that should be displayed in a monospaced font. */
  'TT' = 'tt',
  /** Underline tag for underlining text. */
  'U' = 'u',
  /** Unordered list tag for creating bulleted lists. */
  'UL' = 'ul',
  /** Variable tag for defining variables or placeholders. */
  'VAR' = 'var',
  /** Video tag for embedding video content. */
  'VIDEO' = 'video',
  /** Word break opportunity tag for suggesting line break opportunities. */
  'WBR' = 'wbr',
  /** XMP tag for preformatted text (deprecated in HTML5). */
  'XMP' = 'xmp',
}
