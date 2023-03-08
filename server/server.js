const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

dbTableAvailBooks = [
    {
        isb: 67,
        bookTitle: 'Harry Potter',
    },
    {
        isb: 107,
        bookTitle: 'The Hunger Games'
    },
    {
        isb: 51,
        bookTitle: 'Curious George'
    }
]

dbTableCheckedOutBooks = [

]

app.post('/checkout', (req, res) => {
    let bookIndex = -1

    for (let i = 0; i < dbTableAvailBooks.length; i++) {
        if (dbTableAvailBooks[i].isb === req.body.isb) {
            bookIndex = i
        }
    }

    if (bookIndex === -1) {
        res.status(400).send({ message: 'book does not exist or is not available'})
        return
    }

    let removedBook = dbTableAvailBooks.splice(bookIndex, 1)

    let checkoutInfo = {
        patronName: req.body.name,
        patronLibraryId: req.body.lcId,
        // ...removedBook[0]
        bookTitle: removedBook[0].bookTitle,
        isb: removedBook[0].isb
    }

    dbTableCheckedOutBooks.push(checkoutInfo)

    res.status(200).send({
        message: 'Book available! Here it is:',
        book: {
            name: checkoutInfo.bookTitle,
            isb: checkoutInfo.isb
        }
    })

    console.log(dbTableAvailBooks)
    console.log(dbTableCheckedOutBooks)
})

app.post('/return', (req, res) => {

})

app.listen(9001, () => {
    console.log('server up on 9001')
})