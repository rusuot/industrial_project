const { initializeApp, cert } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')

const serviceAccount = require('./creds.json')

initializeApp({
    credential: cert(serviceAccount)
})


const db = getFirestore()

//added for errors such as: "Value for argument "data" is not a valid Firestore document. Cannot use "undefined" as a Firestore value (found in field "`12`")"
//db.settings({ ignoreUndefinedProperties: true });
//


module.exports = { db }