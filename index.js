//this is actually /functions folder with indexed.js
// work in progress 
// !!!!!

const express = require('express')
const { FieldValue } = require('firebase-admin/firestore')
const app = express()
const port = 8383
const { db } = require('./firebase.js')

app.use(express.json())

const products = {
    'laptop': 'lenovo',
    'sneakers': 'nike'
}

app.get('/products', async (req, res) => {
    const productsRef = db.collection('products').doc('details')
    const doc = await productsRef.get()
    if (!doc.exists) {
        return res.sendStatus(400)
    }

    res.status(200).send(doc.data())
})

app.get('/products/:name', (req, res) => {
    const { name } = req.params
    if (!name || !(name in products)) {
        return res.sendStatus(404)
    }
    res.status(200).send({ [name]: products[name] })
})

app.post('/addproduct', async (req, res) => {
    const { name, status } = req.body
    const productsRef = db.collection('products').doc('details')
    const res2 = await productsRef.set({
        [name]: status
    }, { merge: true })
    // products[name] = status
    res.status(200).send(products)
})

app.patch('/changestatus', async (req, res) => {
    const { name, newStatus } = req.body
    const productsRef = db.collection('products').doc('details')
    const res2 = await productsRef.set({
        [name]: newStatus
    }, { merge: true })
    // products[name] = newStatus
    res.status(200).send(products)
})

app.delete('/products', async (req, res) => {
    const { name } = req.body
    const productsRef = db.collection('products').doc('details')
    const res2 = await productsRef.update({
        [name]: FieldValue.delete()
    })
    res.status(200).send(products)
})

app.listen(port, () => console.log(`Server has started on port: ${port}`))