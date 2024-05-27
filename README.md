# crud-node-firebase (part of **RESEARCH** for project)
CRUD node.js + firebase  

# creds.json and firebase DB
- These credentials are for a specific DB created only for testing, hence these file needs to be updated with a valid DB credentials (auth, type... anything that it's in there)
- These Firebase DB data can be updated with any Firebase DB details (research work for Industrial Project, so these are only simple "learning steps")

# Firebase (how to crate a DB)
Supporting material:

https://www.youtube.com/watch?v=qKxisFLQRpQ

https://www.youtube.com/watch?v=5PZNDF_lbiI

https://www.youtube.com/watch?v=5O38WFpoLn8&t=473s

# Support Videos for how to create Firebase CRUD API (these are only 3 examples):

https://www.youtube.com/watch?v=bs_xs9-RJvc 
https://www.youtube.com/watch?v=bs_xs9-RJvc 
https://www.youtube.com/watch?v=YPsftzOURLw

# Example how you can generate keys and Firebase DB details:

![image](https://github.com/rusuot/industrial_project_crud_api_firebase/assets/156461904/20978a8b-100d-42b9-a4a2-0dcfe0194321)
Also, you can read:   https://stackoverflow.com/questions/40799258/where-can-i-get-serviceaccountcredentials-json-for-firebase-admin


 
Start project with: 
<ul>
<li>npm install</li>
<li>npm run dev</li>
</ul>
Once the project is run, a message such as "Server has started on port: 8383" will be displayed in Terminal console.
Next, for any CRUD API call, Postman can be used.
Below API CRUD calls can be checked:



# How this API works
### GET ALL products 
Method: GET \
Path:   http://localhost:8383/products \
Response status: 200 OK \
Response body: 
```
[
    {
        "image": "https://dummy_example_for_photo0_.jpg",
        "price": 1,
        "rating": {
            "rate": 1,
            "count": 1
        },
        "description": "Dummy example for description",
        "id": "1",
        "category": "dummy example for category",
        "title": "Dummy example for title"
    }
...]
```

### GET a product by a specific ID
Method: GET \
Path:   http://localhost:8383/products/id/2 \
Response status: 200 OK \
Response body:
```
{
    "image": "https://dummy_example.jpg",
    "price": 2,
    "rating": {
        "rate": 2,
        "count": 2
    },
    "description": "dummy example for description",
    "id": "2",
    "category": "dummy example for category",
    "title": "dummy example for title"
}
```

### GET LIST of products by a specific category
Method: GET \
Path: http://localhost:8383/products/electronics \
Response status: 200 OK \
Response body: 
```
[
    {
        "image": "https://dummyexample.jpg",
        "price": 2,
        "rating": {
            "rate": 2,
            "count": 2
        },
        "description": "dummy",
        "id": "5",
        "category": "electronics",
        "title": "dummy title"
    }...]
```

### POST - ADD A PRODUCT
Method: POST \
Path: http://localhost:8383/addproduct \
Headers:  Key: Content-Type   &  Value: application/json  \
Body:
```
{
      "id":"1",
      "title":"dummy",
      "price":1,
      "description":"dummy description",
      "category":"dummy category",
      "image":"https://dummy_photo_.jpg",
      "rating":{
         "rate":1,
         "count":1
      }
   }
```
Response status: 200 OK
Response body: (same as body sent above)
##### [!NOTE] 
ID must be string, hence using "1" for "id". \
Reason: \
If we will use 1 (as integer/number): an eror will be received & the error has to do with how json-server works. \
Each and every key directly exposed at the root of the JSON object is considered as a separate URL in json-server. \


# Important
Code presented in this repo works, is running without any issue. 
However, I have found some very interesting automatic tools, I will let below the links, they are only for infor for any further projects:
-->https://medium.com/@xathis/import-json-into-firebase-firestore-without-code-9084e919f54a
-->https://www.firefoo.app/
