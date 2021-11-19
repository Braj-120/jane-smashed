## API Server
Node Js Server module which can be used to download the latest content.
Requires authentication to get a token and bearer token to download content.

### API Available
**/api/authenticate - POST**
Used to authenticate 

Body must be JSON
```
Body: {
    username: <>,
    password: <>,
    hostname: <>
}
```

Generates and replies with a jwt token corresponding to user and host

**/api/content - GET**

Requires Bearer Token and Hostname in the header
Provides the content in csv format.
