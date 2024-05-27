// API CRUD Firebase
// This API CRUD was developed for Industrial Project QHO only as part of Research. 

// const query = require('firebase/firestore');
// const where = require('firebase/firestore');
const express = require('express')
const { FieldValue} = require('firebase-admin/firestore')

const app = express()
const port = 8383
const { db } = require('./firebase.js')

app.use(express.json())

const products = {
"success":1
}

// API GET /products/:category
// API GET /products By Category
app.get('/products/:category', async (req, res) => {
    const { category } = req.params

    db.collection("products").where("category","==",category).get().then(function(querySnapshot) {

        let response = [];
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          response.push(doc.data());
        });
        res.status(200).send(response)
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });

      
})


// API GET /products/id/:id
// API GET /products By ID
app.get('/products/id/:id', async (req, res) => {
    const { id } = req.params
    const productsRef = db.collection('products').doc(id)
    const doc = await productsRef.get()
    if (!doc.exists) {
        return res.sendStatus(400)
    }

    res.status(200).send(doc.data())
})

// API GET ALL Products
// LIST all Products
app.get('/products', async (req, res) => {
    let result = await db.collection('products').get(); //TODO: add query if needed
    let response = [];
      
    result.forEach(doc => {
          response.push(doc.data());
        });
    // return res.send( { "collection" : response} );
    return res.send(response);
      })




//POST API call for products with all details
app.post('/addproduct', async (req, res) => {
    const { id, title, price, description, category, image, rate, count, rating } = req.body
    const productsRef = db.collection('products').doc(id)

    const res2 = await productsRef.set({
    
    "title": title,
    "id": id,
    "price": parseFloat(price),
    "description": description,
    "category": category,
    "image": image,
    "rating": {
        "rate": parseFloat(rating.rate),
        "count": Number(rating.count)

}
    }, { merge: true }
)
    // products[name] = status
    res.status(200).send(req.body)
})



// app.patch('/changestatus', async (req, res) => {
//     const { name, newStatus } = req.body
//     const productsRef = db.collection('products').doc('details')
//     const res2 = await productsRef.set({
//         [name]: newStatus
//     }, { merge: true })
//     // products[name] = newStatus
//     res.status(200).send(products)
// })

// app.delete('/products', async (req, res) => {
//     const { name } = req.body
//     const productsRef = db.collection('products').doc('details')
//     const res2 = await productsRef.update({
//         [name]: FieldValue.delete()
//     })
//     res.status(200).send(products)
// })

app.listen(port, () => console.log(`Server has started on port: ${port}`))
