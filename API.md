# Contact Management API

> API ini menggunakan basic auth dengan default username `admin` dan password `admin`

> Disarankan menggunakan header `Content-Type: application/json`


## GET /contact
Menampilkan list semua contact
* **URL Params:**

    `filter=[string]` : Filter untuk menampilkan data dengan sytax mongodb
    
    **example** : `GET /contact?filter={"company":{"$regex":"oogl"}}`
    

* **Data Params:**

    `none`

* **Success Response:**
    * **Code: 200**<br />
      **Content:**
      ```
        [
            {
                "_id": "57dab6c89e30bcec0725c9e1",
                "name": "Setyo",
                "title": "CEO",
                "email": "setyo@bigcompany.com",
                "phone": "087730271408",
                "address": "Jl. Mawar No.3",
                "company": "Big Company"
            },
            {
                "_id": "57e00ae8825673d3448651c6",
                "name": "John",
                "title": "Manager",
                "email": "setyo@bigcompany.com",
                "phone": "087730271408",
                "address": "Jl. Google no 2",
                "company": "Big Company"
            }
        ]
      ```
* **Error Response:**
    * **Code: 500**<br />
    **Content:** 
    ```
    {
        "error": 500,
        "message": "Internal Server Error"
    }
    ```


## GET /contact/:id
Menampilkan id contact
* **URL Params:**

    `none`

* **Data Params:**

    `none`

* **Success Response:**
    * **Code: 200**<br />
      **Content:**
      ```
        {
            "_id": "57dab6c89e30bcec0725c9e1",
            "name": "Setyo",
            "title": "CEO",
            "email": "setyo@bigcompany.com",
            "phone": "087730271408",
            "address": "Jl. Mawar No.3",
            "company": "Big Company"
        }
      ```
* **Error Response:**
    * **Code: 500**<br />
    **Content:** 
    ```
    {
        "error": 500,
        "message": "Internal Server Error"
    }
    ```

     OR

     * **Code: 404**<br />
     **Content:**
     ```
     {
        "error": 404,
        "message": "Contact not found"
     }
     ```



## POST /contact
Menambahkan data ke contact
* **URL Params:**

    `none`

* **Data Params:**

    `name=[string]`

    `title=[string]`

    `email=[string]`

    `phone=[string]`

    `address=[string]`

    `company=[string]`

    **example:**
    ```
    {
        "name": "Setyo Nugroho",
        "title": "CEO",
        "email": "setyo@bigcompany.com",
        "phone": "087730271408",
        "address": "My Home address",
        "company": "Big Company"
    }
    ```

* **Success Response:**
    * **Code: 200**<br />
      **Content:** `Inserted data with id`

* **Error Response:**
    * **Code: 500**<br />
    **Content:** 
    ```
    {
        "error": 500,
        "message": "Internal Server Error"
    }
    ```


## PUT /contact/:id
Mengubah data
* **URL Params:**

    `none`

* **Data Params:**

    `name=[string]`

    `title=[string]`

    `email=[string]`

    `phone=[string]`

    `address=[string]`

    `company=[string]`

    **example:**
    ```
    {
        "name": "Setyo Nugroho",
        "title": "CEO",
        "email": "setyo@bigcompany.com",
        "phone": "087730271408",
        "address": "My Home address",
        "company": "Big Company"
    }
    ```

* **Success Response:**
    * **Code: 200**<br />
      **Content:**
      ```
        {
            "ok": 1,
            "nModified": 1,
            "n": 1
        }
      ```
* **Error Response:**
    * **Code: 500**<br />
    **Content:** 
    ```
    {
        "error": 500,
        "message": "Internal Server Error"
    }
    ```

    OR

    * **Code: 404**<br />
    **Content:**
    ```
    {
        "error": 404,
        "message": "Contact not found"
    }
    ```



## DELETE /contact/:id
Menghapus contact
* **URL Params:**

    `none`

* **Data Params:**

    `none`

* **Success Response:**
    * **Code: 200**<br />
      **Content:**
      ```
        {
            "ok": 1,
            "n": 1
        }
      ```
* **Error Response:**
    * **Code: 500**<br />
    **Content:** 
    ```
    {
        "error": 500,
        "message": "Internal Server Error"
    }
    ```

    OR

    * **Code: 404**<br />
    **Content:**
    ```
    {
        "error": 404,
        "message": "Contact not found"
    }
    ```
