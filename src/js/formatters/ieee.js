function formatAuthors(authors) {
  const formatted = [];

  authors.forEach((author, index) => {
    let formattedAuthor = ''

    if (index == authors.length && authors.length > 0) formattedAuthor += 'and ';

    formattedAuthor += `${getInitials(author.first).join('. ')} ${author.last}`;

    // Greater than 6 authors, return the first with et al
    if (authors.length > 6) formattedAuthor += ' et al';

    formatted.push(formattedAuthor)
  })

  return htmlify(formatted.join(', '))
}
