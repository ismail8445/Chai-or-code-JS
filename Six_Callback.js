const books = [
    {
        title: 'Book One', genre: 'Fiction', publish: 2003, edition: 2018
    },
    {
        title: 'Book Two', genre: 'History', publish: 2013, edition: 2021
    },
    {
        title: 'Book Three', genre: 'History', publish: 2000, edition: 2017
    },
    {
        title: 'Book Four', genre: 'Fiction', publish: 2008, edition: 2022
    },
    {
        title: 'Book Five', genre: 'Non-Fiction', publish: 2001, edition: 2011
    },
    {
        title: 'Book Six', genre: ' Non-Fiction', publish: 2013, edition: 2023
    },
    {
        title: 'Book Seven', genre: 'History', publish: 1982, edition: 2009
    },
    {
        title: 'Book Eight', genre: 'History', publish: 1988, edition: 2004
    },
    {
        title: 'Book Nine', genre: 'Non-Fiction', publish: 2000, edition: 2016
    },
    {
        title: 'Book Ten', genre: 'Fiction', publish: 2000, edition: 2019
    },

];

let UserBooks = books.filter((bk) => bk.genre === 'History')
console.log(UserBooks);

UserBooks = books.filter((bk) => { return bk.publish >= 2010 && bk.genre === 'Non-Fiction' })
console.log(UserBooks)