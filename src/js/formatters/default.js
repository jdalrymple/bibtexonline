function formatAuthors(authors = [], formatStyle) {
    let authorsStr = '';
    let author;

    authors.forEach((author, index) => {
        if (formatStyle == 'mla' && index > 0) { authorsStr += " et al"; break; } // MLA: Azcona, David, et al.
        if (index > 0) { authorsStr += ", "; } // For more than one author, separate them with a comma
        if (index > 0 && index == authorData.length - 1) { // Before adding the last author, add '&'' or 'and' if needed
            if (formatStyle == 'apa') { authorsStr += "& "; } // & Smeaton, A.
            else if (formatStyle == 'chicago' || formatStyle == 'harvard') { authorsStr += "and "; } // and Alan Smeaton
        }

        if (formatStyle == 'mla' || formatStyle == 'chicago') {
            if (index == 0) { authorsStr += author.last + ", " + author.first; } // First: Azcona, David
            else { authorsStr += author.first + ((author.first && author.last) ? ", " : "") + author.last; } // Rest: Piyush Arora
        }
        else {
            const initials = getInitials(author.first)

            if (formatStyle == 'vancouver') { separator = ""; } // Azcona, D
            else { separator = "."; } // Azcona, D.

            authorsStr += author.last + ((author.first) ? ", " + initials.join(separator) + separator : "");
        }
    });

    return htmlify(authorsStr);
}

// ARTICLE
// An article from a journal or magazine.
// Required fields: author, title, journal, year.
// Optional fields: volume, number, pages, month, note.
function formatArticle(data, formatStyle) {
  authors = ((authors) ? authors : "Authors are required!");

  var title = ((data.title) ? data.title : "<strong style='color:red;'>Title is required!</strong>");
  var journal = ((data.journal) ? data.journal : "<strong style='color:red;'>Journal is required!</strong>")
  var year = ((data.year) ? data.year : "<strong style='color:red;'>Year is required!</strong>")
  if (formatStyle == 'mla') {
      return authors +
          ". \"" + title + "\". " +
          "<em>" + journal + "<\/em>" +
          ((data.volume) ? " " + data.volume : "") +
          ". " +
          ((data.number) ? " " + data.number : "") +
          "(" + year + ")" +
          ((data.pages) ? ": " + data.pages : "") +
          ".";
  }
  else if (formatStyle == 'apa') {
      return authors +
          " (" + year + "). " +
          title +
          "<em>" + journal +
          ((data.volume) ? ", " + data.volume : "") +
          "<\/em>" +
          ((data.number) ? "(" + data.number + ")" : "") +
          ((data.pages) ? ", " + data.pages : "") +
          ".";
  }
  else if (formatStyle == 'chicago') {
      return authors +
          ". \"" + title + "\"." +
          "<em>" + journal + "<\/em>" +
          ((data.volume) ? " " + data.volume : "") +
          ((data.number) ? ", no." + data.number : "") +
          " (" + year + ")" +
          ((data.pages) ? ": " + data.pages : "") +
          ".";
  }
  else if (formatStyle == 'harvard') {
      return authors +
          " " + year +
          ". " + title +
          ". <em>" + journal +
          ((data.volume) ? ", " + data.volume : "") +
          "<\/em>" +
          ((data.number) ? "(" + data.number + ")" : "") +
          ((data.pages) ? ", p." + data.pages : "") +
          ".";
  }
  else if (formatStyle == 'vancouver') {
      return authors +
          ". \"" + title + "\". " +
          journal + " " +
          year +
          ((data.volume) ? "; " + data.volume : "") +
          ((data.number) ? "(" + data.number + ")" : "") +
          ((data.pages) ? ":" + data.pages : "") +
          ".";
  }
}

// IN PROCEEDINGS
// An article in a conference proceedings.
// Required fields: author, title, booktitle, year.
// Optional fields: editor, volume or number, series, pages, address, month, organization, publisher, note.
function formatInproceedings(data, style) {
  authors = ((authors) ? authors : "Authors are required!");
  var title = ((data.title) ? data.title : "<strong style='color:red;'>Title is required!</strong>");
  var booktitle = ((data.booktitle) ? data.booktitle : "<strong style='color:red;'>Book title is required!</strong>");
  var year = ((data.year) ? data.year : "<strong style='color:red;'>Year is required!</strong>");
  if (formatStyle == 'mla') {
      return authors +
          ". \"" + title + ".\" " +
          "<em>" + booktitle + "<\/em>. " +
          ((data.publisher) ? data.publisher + ", " : "")
          year +
          ".";
  }
  else if (formatStyle == 'apa') {
      return authors +
          " (" + year + "). " +
          title +
          ". In <em>" + booktitle + "<\/em>" +
          ((data.pages) ? " (pp. " + data.pages + ")" : "") +
          "." +
          ((data.publisher) ? " " + data.publisher + "." : "");
  }
  else if (formatStyle == 'chicago') {
      return authors +
          ". \"" + title + ".\" " +
          ". In <em>" + booktitle + "<\/em>" +
          ((data.pages) ? " (pp. " + data.pages + ")" : "") +
          "." +
          ((data.publisher) ? " " + data.publisher + ", ": "") +
          year + ".";
  }
  else if (formatStyle == 'harvard') {
      return authors +
          " " + year +
          ". " + title +
          ". In <em>" + data.booktitle + "<\/em>" +
          ((data.pages) ? " (pp. " + data.pages + ")" : "") +
          "." +
          ((data.publisher) ? " " + data.publisher + ".": "");
  }
  else if (formatStyle == 'vancouver') {
      return authors +
          title +
          ". In " + booktitle + " " +
          data.year + " " +
          ((data.pages) ? " (pp. " + data.pages + ")" : "") +
          "." +
          ((data.publisher) ? " " + data.publisher + ".": "");
  }
}

// BOOK
// A book with an explicit publisher.
// Required fields: author or editor, title, publisher, year.
// Optional fields: volume or number, series, address, edition, month, note.
function formatBook(data, formatStyle) {
  authors = ((authors) ? authors : "Authors are required!");
  var title = ((data.title) ? data.title : "<strong style='color:red;'>Title is required!</strong>");
  var publisher = ((data.publisher) ? data.publisher : "<strong style='color:red;'>Publisher is required!</strong>");
  var year = ((data.year) ? data.year : "<strong style='color:red;'>Year is required!</strong>");
  if (authors == "Authors are required!") {
      authors = ((data.editor) ? data.editor : "<strong style='color:red;'>Author or Editor is required!</strong>");
  }
  if (formatStyle == 'mla') {
      return authors +
          ". <em>" + title + "<\/em>." +
          ((data.volume) ? " Vol. " + data.volume : "") +
          ". " +
          publisher + ", " +
          year + ".";
  }
  else if (formatStyle == 'apa') {
      return authors +
          " (" + year + "). <em>" +
          title + "<\/em>." +
          ((data.volume) ? " (Vol. " + data.volume + ") " : " ") +
          publisher + ".";
  }
  else if (formatStyle == 'chicago') {
      return authors +
          ". <em>" + title + "<\/em>." +
          ((data.volume) ? " Vol. " + data.volume + ". ": "") +
          publisher + ", " +
          year + ".";
  }
  else if (formatStyle == 'harvard') {
      return authors + " " +
          year + ". " +
          ". <em>" + title + "<\/em>." +
          ((data.volume) ? " (Vol. " + data.volume + "). " : " ") +
          publisher + ".";
  }
  else if (formatStyle == 'vancouver') {
      return authors + ". " +
          title + ". " +
          publisher + "; " +
          year + ".";
  }
}

// PHD THESIS
// A Ph.D. thesis.
// Required fields: author, title, school, year.
// Optional fields: type, address, month, note.
// Do something
function howpublished2readable(howpublished){
    var howpublishedStr = '';
    if (howpublished && howpublished.startsWith("\\url{") && howpublished.endsWith("}")) {
        var uri = howpublished.split("\\url{")[1].split("}")[0];
        howpublishedStr = '<a href="' + uri + '" target="_blank">' + uri + '</a>';
    }
    return htmlify(howpublishedStr);
}

function formatPhDThesis(data, formatStyle) {
  authors = ((authors) ? authors : "Authors are required!");
  var title = ((data.title) ? data.title : "<strong style='color:red;'>Title is required!</strong>");
  var school = ((data.school) ? data.school : "<strong style='color:red;'>School is required!</strong>");
  var year = ((data.year) ? data.year : "<strong style='color:red;'>Year is required!</strong>");
  if (formatStyle == 'mla') {
      return authors +
          ". <em>" + title + "<\/em>" +
          ". Diss." + school +
          ", " + year + ".";
  }
  else if (formatStyle == 'apa') {
      return authors +
          " (" + year + "). " +
          "<em>" + title + "<\/em>." +
          " (Doctoral dissertation, " + school + ").";
  }
  else if (formatStyle == 'chicago') {
      return authors +
          ". \"" + title + ".\" " +
          "PhD diss., " + school + ", " +
          year + ". ";
  }
  else if (formatStyle == 'harvard') {
      return authors +
          ", " + year +
          ". <em>" + title + "<\/em>." +
          " (Doctoral dissertation, " + school + ").";
  }
  else if (formatStyle == 'vancouver') {
      return authors +
          ". <em>" + title + "<\/em>" +
          " (Doctoral dissertation, " + school + ").";
  }
}

// MISC
// Use this type when nothing else fits. A warning will be issued if all optional fields are empty
// (i.e., the entire entry is empty or has only ignored fields).
// Required fields: none.
// Optional fields: author, title, howpublished, month, year, note
function formatMisc(data, formatStyle) {
  if (formatStyle == 'mla' || formatStyle == 'chicago') {
      return ((authors) ? authors + ". ": "") +
          ((data.title) ? "\"" + data.title + ".\" ": "") +
          ((data.howpublished) ? howpublished2readable(data.howpublished) + ". ": "") +
          ((data.year) ? " (" + data.year + "). ": "");
  }
  else if (formatStyle == 'apa'|| formatStyle == 'harvard') {
      return ((authors) ? authors + ". ": "") +
          ((data.year) ? " (" + data.year + "). ": "") +
          ((data.title) ? data.title + ". ": "") +
          ((data.howpublished) ? howpublished2readable(data.howpublished) + ". ": "");
  }
  else if (formatStyle == 'vancouver') {
      return ((authors) ? authors + ". ": "") +
          ((data.title) ? data.title + ". ": "") +
          ((data.howpublished) ? howpublished2readable(data.howpublished) + ". ": "");
  }
}
