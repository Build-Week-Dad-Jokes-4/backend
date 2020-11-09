# Dad Jokes backend

This is a build-week project for Lambda that uses React as a platform. It will be able to fetch jokes from an API, register new users, add jokes as well as delete the and backend with SQLite.

# frontend/backend

Proposal

- What problem does your app solve?
  - Our app is used to entertain the user
  - This can help with boredom and sadness

- Be as specific as possible; how does your app solve the problem?
  - By giving the user funny jokes to pass the time.

- What is the mission statement?

  - Dad’s already have enough on their plate. What better way than to kill some time reading Dad Jokes after an awesome day with the family.

Features

- What features are required for your minimum viable product?
  - CRUD Dad Jokes for logged-in users
  - View jokes for public (non-authenticated) users

- What features may you wish to put in a future release?
  - Add pic to user’s profile
  - Hide punchline of jokes until the user wants to see it

- What do the top 3 similar apps do for their users?
  - The iPhone app, “Funny dad jokes”, gives the use one joke at a time. It also displays the question and punchline at the same time.

  - www.niceonedad.com - This website display jokes and answers on slides that change when you click. They use cool animations for their slide transitions.

  - www.boredpanda.com - This website has many jokes and other forms of entertainment. It is not completely focused on dad jokes, so the number of dad jokes is limited.

Frameworks - Libraries

- What 3rd party frameworks/libraries are you considering using?
  - React
  - Semantic UI
- Do APIs require you to contact its maintainer to gain access?
  - No
- Are you required to pay to use the API?
  - No
- Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)
  - N/A

Target Audience

- Who is your target audience? Be specific.
  - Dads
  - Anyone who enjoys Dad Jokes

- What feedback have you gotten from potential users?
  - It sounds cool.
  - I would use it because I like dad jokes.

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
