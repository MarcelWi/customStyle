/**
     * function: addCustomStyle, creates custom style element and appends to html body
     * example function call: addCustomStyle("myStyle", ".someClassName", "{background-color: #cccccc }")
     * this results in adding a style html element to the website with the given style definition <style id="myStyle"> .someClassName { background-color: #cccccc} </style>
     *
     * @param styleidentifier: string, defines id of the style element to identify the style for later usage
     * @param selector: string, valid css selector
     * @param attributes: any, object of css attributes with curly braces, example: { display: none }
     * @param mediaQuerry?: string (optional), media querry for given stylesheet, example: "max-width: 909px"
     * @returns void
 */

function addCustomStyle(styleidentifier: string, selector: string, attributes: string, mediaQuerry?: string) {
    const head: HTMLHeadElement = document.head || document.getElementsByTagName('head')[0]
    const style: HTMLElement = document.createElement('style');
    let styleCSS: string = `${selector} ${attributes}`;
    const styleCSSMQ: string = `@media only screen and (${mediaQuerry}) {${styleCSS}}`;
    styleCSS = mediaQuerry ? styleCSSMQ : styleCSS;

    /**
     * create inline style in <head> block
     * example: <style id="myStyle"> .someClassName { background-color: #cccccc} </style>
     */

    style.setAttribute('type', 'text/css');
    style.setAttribute('media', 'screen');
    style.id = this.styleidentifier;
    style.appendChild(document.createTextNode(styleCSS));
    head.appendChild(style);
}

addCustomStyle(
    'myStyle',
    'body',
    '{background-color: blue;}',
    'max-width: 909px'
);
