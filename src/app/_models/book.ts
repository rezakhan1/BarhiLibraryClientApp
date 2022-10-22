export interface Book {
    id: string;
    title: string;
    author: string;
    author_firstname: any;
    author_lastname: string;
    author_middlename: string;
    categories: string;
    volume: string;
    year: string;
    edition: string;
    language: string;
    extension: string;
    pages: string;
    filesize: string;
    md5: string;
    series: string;
    periodical: string;
    file_extension: string;
    url: string;
    convertTo: ConvertTo;
    description: string;
    cover: string;
}

export interface ConvertTo {
    epub: string;
    fb2: string;
    mobi: string;
    txt: string;
    rtf: string;
}

export interface Root {
    books: Book[];
}