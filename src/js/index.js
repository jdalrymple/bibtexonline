// VARIABLES
let fromArea = document.getElementById("from");
let toDiv = document.getElementById("todiv");
let formatDropdown = document.getElementById("format");
let ctooltip = document.getElementById("mycTooltip");

// JQUERY: If contents change, call convert function!
$('#from').bind('input propertychange', function () {
    convert()
})

// Function to format the citation based on the format selected
function format(data, style) {
    // Load style specific formatter
    const F = getFormatter(formatStyle)

    // Format authors
    const authors = F.formatAuthors(data.author);

    // http://bib-it.sourceforge.net/help/fieldsAndEntryTypes.php#article
    switch(data.entryType) {
      case 'article': return F.formatArticle(data, formatStyle)
      case 'inproceedings': return F.formatInproceedings(data, formatStyle)
      case 'book': return F.formatBook(data, formatStyle)
      case 'phdthesis': return F.formatPhDThesis(data, formatStyle)
      case 'misc': return F.formatMisc(data, formatStyle)
      default: return 'Format ' + data.entryType + ' not supported yet!'
    }
}

// Function called to convert BibTeX to other format
function convert() {

    // Reset output
    // toInput.value = '';
    toDiv.innerHTML = '';

    // Contents to format
    let contents = fromArea.value;

    // If empty, return nothing!
    if (contents == '') {
        console.log('Contents are empty!');
        return;
    }

    // BIBTEX PARSER
    bibtex = new BibTex();
    bibtex.content = contents;
    bibtex.parse();

    // For each parsed citation
    for (let i in bibtex.data) {

        // Get citation
        let citation = bibtex.data[i];

        // Format value: MLA, APA, Chicago, Harletd, Vancouver, IEEE
        let formatStyle = formatDropdown.options[formatDropdown.selectedIndex].value;

        // Format citation
        let output = format(citation, formatStyle);

        // Show
        // toInput.value += htmlify(output) + "\n\n";
        toDiv.innerHTML += htmlify(output) + "<br><br>";
    }
}

// Copy text & tooltip!
function copyFunction() {

    let div = document.createRange();
    window.getSelection().removeAllRanges(); // clear current selection
    div.setStartBefore(toDiv);
    div.setEndAfter(toDiv) ;
    window.getSelection().addRange(div);
    document.execCommand("copy"); // Copy!
    ctooltip.innerHTML = "Copied!"; // Tooltip!
}

// Tooltip after copying!
function outFunc() {
    ctooltip.innerHTML = "Copy to clipboard"; // Tooltip!
}
