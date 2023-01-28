# assesment-backend

To create any list of favs you need to create an user first and then login

To create a user you need to do a post request with and email and a password to the path: /api/user. Something like this:

Request Body:
json
{
"email": "kz@mz.com",
"password": "12345"
}

To login, you need to do a post request to the path auth/local/login with the email and password for the user you previously created.

Once you are logged it returns the token.

With tis token you can do al the actions to the favs path:

GET to /api/favs
POST to /api/favs
GET to /api/favs/:id
DELETE to /api/favs/:id

## Questions

1. Indicate which are the parts of the following url:
   https://backend.mega-app.com.co:8080/api/articles/search?docid=1020&hl=en#dayone

· Protocol: https://
This means what is the proper protocol to use. Https enables encrypted communication and secure connections between remote users and the primary web server.

· Subdomain: backend.
This indicates to the browser the website it should serve and all the information groups located in it, such as its sections or categories.

· Second level domain: mega-appdocid=1020&hl=en#dayone
The second level domain is defined as the website name, which allows to users to identify a certain brand's site

· Top level domain: .com.co
Sometimes it is called a domain name suffix because the domain name ends with the TLD. TLDs are assigned and managed by The Internet Corporation for Assigned Names and Numbers (ICANN). Additionally, a list of all valid TLDs is maintained by IANA and updated from time to time.

· Port :8080
Ports focus on the channels used by various servers. Your browser needs to connect to a specific port to access resources on that server.

· The path: /api/articles/
The path indicates the directory the server should request. Paths, however, are used to identify each route in the site's navigation structure.

· The query and parameters: search?docid=1020&hl=en#dayone
The question mark tells the browser that you are querying the database where the data is stored. On the other hand, parameters are values that are queried while someone is doing a search.

2.  Define what is a Web API, Restful and what are the status Code 200-, 400-, 500-

· API stands for Application Programming Interface. At its core, an API is a set of functions and procedures that enable the creation of applications. Access data and features of other applications, services, or operating systems. Fundamentally, they are intermediaries between different software platforms. They allow two independent applications to "talk" to each other.

APIs are neither databases nor servers. This is the code that manages the server's access points. An API is like a common language, a communication mechanism between developers.

· REST stands for Representational State Transfer and was developed by computer scientist Roy Fielding. Also, it is called as RESTful API, is an application programming interface (API or web API) that conforms to the limits of the REST architectural style and allows interaction with RESTful web services.

· status 200 (SUCCESSFUL RESPONSE)
Succeeded request depending of the method GET, POST, PATCH, PUT, DELETE

· status 400 (CLIENT ERROR RESPONSE)
Bad request: the server could not process the request because of any invalid data

· status 500 (SERVER ERROR RESPONSE)
Internal server error: the server found and error that it cannot handle.

3. When we talk about CRUD, what does it mean?

CRUD stands for Create, Read, Update, and Delete. These functions are the four pillars of a complete CRUD API (a full-stack application, for that matter). When someone is building an API, the model should include these functions in the process of performing various actions. If an action cannot be described by any of these four operations, it should probably be a model of its own.
