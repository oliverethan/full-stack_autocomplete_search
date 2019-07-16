# Full Stack Autocomplete Search Bar

## This is a design exercise that was coded in *5 hours* for an assessment not a finished product

An autocomplete search bar with client server and database implemented. Designed from scratch in **1 day** from this prompt:


#### Design a web client that allows a user to input a search terms related to drug records and return suggestions based on the input.
#### Once a search suggestion is selected the client should display more expansive information regarding the term.

#### Use Cases:
* A user should be able to search for drug records by main name.
* A user should be able to search for drug mechanisms by name.
* A user should be able to differentiate between drug records and drug mechanisms in the auto suggestion features.
* A user should be able to see search suggestions as they type.
* A user should be able select a drug from the suggestions and view the record for the full drug record.
* A user should be able to select a mechanism from the suggestions and view the collection of drugs associated with the mechanism of action.

#### Design Deliverables:
* Sequence Diagram depicting the service calls between browser and server and sequence flow between server components (see blank template below).
* Service Specification (API Doc) depicting the parameters that are sent to each service calls and the response from those calls (see blank template below).
* Data model depicting the entities and their fields that are stored in the data tier (see source data below).
* High level architecture diagram depicting the different technologies you would employ to accomplish the design. This is your chance to show us your experience with web technologies, so we recommend you pick technologies you are most familiar with.

## Design

### Sequence Diagram

![Alt text](images/sequence_diagram.png?raw=true "Title")

### E/R Diagram (BCNF)

![Alt text](images/er_diagram.png?raw=true "Title")

### Architecture Diagram

![Alt text](images/architecture.png?raw=true "Title")

The front end of the application could be designed using the basic tools listed above. If the application needed to be expanded the Angular framework could be used for additional functionality. The server could be designed using nodeJS and the express framework to easily handle the requests and responses. PostgreSQL is a solid relational database framework that I'm familiar with.

