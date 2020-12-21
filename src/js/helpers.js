// Function to compile LaTeX special characters to HTML
function htmlify(str='') {
    return str.replace(/\\"\{a\}/g, '&auml;')
        .replace(/\{\\aa\}/g, '&aring;')
        .replace(/\\aa\{\}/g, '&aring;')
        .replace(/\\"a/g, '&auml;')
        .replace(/\\"\{o\}/g, '&ouml;')
        .replace(/\\'e/g, '&eacute;')
        .replace(/\\'\{e\}/g, '&eacute;')
        .replace(/\\'a/g, '&aacute;')
        .replace(/\\'A/g, '&Aacute;')
        .replace(/\\"o/g, '&ouml;')
        .replace(/\\"u/g, '&uuml;')
        .replace(/\\ss\{\}/g, '&szlig;')
        .replace(/\{/g, '')
        .replace(/\}/g, '')
        .replace(/\\&/g, '&')
        .replace(/--/g, '&ndash;');
}

function uriEncode(str = '') {
    return str.replace(/\\"\{a\}/g, '%C3%A4')
        .replace(/\{\\aa\}/g, '%C3%A5')
        .replace(/\\aa\{\}/g, '%C3%A5')
        .replace(/\\"a/g, '%C3%A4')
        .replace(/\\"\{o\}/g, '%C3%B6')
        .replace(/\\'e/g, '%C3%A9')
        .replace(/\\'\{e\}/g, '%C3%A9')
        .replace(/\\'a/g, '%C3%A1')
        .replace(/\\'A/g, '%C3%81')
        .replace(/\\"o/g, '%C3%B6')
        .replace(/\\"u/g, '%C3%BC')
        .replace(/\\ss\{\}/g, '%C3%9F')
        .replace(/\{/g, '')
        .replace(/\}/g, '')
        .replace(/\\&/g, '%26')
        .replace(/--/g, '%E2%80%93');
}

// Function to get initials from authors
function getInitials(name) {
    return name.split('-').map(word => word[0])
}
