# Dad Jokes backend

## Base Url

```
https://be-dad-jokes.herokuapp.com/api
```
## Authentication Users Route

### REGISTER

Method 
```
POST
```

Endpoint
```
/auth/register
```

Expect Output
```
Body
{
    username: // string, unique, mandator
    password: // string, mandatory
}
```

Returns
```
{
    id: // auto increment
    username: //
    password: // token 
}
```

### LOGIN

Method
```
POST
```

Endpoint
```
/auth/login
```

Expect Output
```
{
    username: //
    password: //
}
```

Returns
```
{
    id: // 
    username: //
    token: 
}
```

## Jokes Route

### Get All Jokes

Method 
```
GET
```  

Endpoint
``` 
/api/jokes
```

Expect Output
```
{
    "joke": string
    "punchline": string
    "private": //boolean default false,
    "public": //boolean default false
}
```
Returns
```
[{
    id: //
    joke: //
    punchline: //
    private: false,
    public: false,
    user_id: null
}]
```

### Get jokes by id

Method 
```
GET
```  

Endpoint
``` 
/api/jokes/:id
```

Expect Output
```
{
    "joke": string
    "punchline": string
    "private": //boolean default false,
    "public": //boolean default false
}
```
Returns
```
[
    {
        id: //
        joke: //
        punchline: //
        private: false,
        public: false,
        user_id: null
    },
    {
        id: //
        joke: //
        punchline: //
        private: false,
        public: false,
        user_id: null
    },
    ...
]
```

### Add a joke

Method
```
POST
```

Endpoint
```
/api/jokes/add
```

Expect 
```
{
    "joke": string
    "punchline": string
    "private": //boolean default false,
    "public": //boolean default false
}
```

Returns
```
   "joke": //
    "punchline": //
    "private": //
    "public": //
```

### Update jokes by id

Method
```
PUT
```

Endpoint
```
/api/jokes/update/:id
```

Expect 
```
{
    "joke": string
    "punchline": string
    "private": //boolean default false,
    "public": //boolean default false
}
```

Returns
```
    "id": //
    "joke": //
    "punchline": //
    "private": //
    "public": //
    "user_id": null
```

### Delete jokes by id

Method
```
DELETE
```

Endpoint
```
/api/jokes/delete/:id
```

Expect 
```
{
    "joke": string
    "punchline": string
    "private": //boolean default false,
    "public": //boolean default false
}
```

Returns
```
    "id": //
    "joke": //
    "punchline": //
    "private": //
    "public": //
    "user_id": null
```

# Users

## Get users

| Method | Endpoint 

| GET   | https://be-dad-jokes.herokuapp.com/api/users

## Get user by id

| Method | Endpoint 

| GET   | https://be-dad-jokes.herokuapp.com/api/users/:id