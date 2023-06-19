# Software Design Principles Workshop

A housing for some exercises to demonstrate different software design principles

## Usage

* Open up one of the files from `examples/`
* Run `yarn start examples/<fileName>`, ex. `yarn start examples/creator.ts`
* Refactor the example given the description at the top

## Patterns

### Connascence

A taxonomy of coupling: https://connascence.io/

Connascence has three dimensions:
* Strength - How hard is the connascence to detect or refactor? Weaker is better.
* Degree - How many entities are coupled together? Lower is better.
* Locality - How close together are the coupled elements? Closer is better.

#### Static
* Name - agreement on the name of an entity
* Type - agreement on the type of an entity
* Meaning - agreement on the meaning of a value
* Position - agreement on the position of values
    ex: many positionally dependent function parameters
* Algorithm - agreement on an algorithm
    ex: two servers which communicate need to agree on the encryption scheme

#### Dynamic
* Execution - agreement on the order of execution
* Timing - agreement on the timing of certain events
    ex: A race condition has connascence of timing
* Value - when one value is coupled to other values
    ex: Literal strings in a test suite
* Identity - when multiple components must reference the same entity

### GRASP

#### Low Coupling

#### High Cohesion Principle

If elements are used together, keep them together

#### Information Expert Principle

The class with the most knowledge about something ought to be responsible for it

#### Creator Principle

Who creates an object? Whoever is closest to it. This promotes low coupling by making class
instances responsible for creating objects they need to reference.

#### Controller Principle

Who should be responsible for handling an input system event?

Assign the responsibility for receiving for handling a system event message to a class representing
the overall system. So, a class that hears the system event and then controls all the work that needs to be done.
Delegate the work to objects that should do it.

#### Polymorphism

When you polymorphic classes, you should put the responsibility for a method where it makes sense...
If the method doesn't vary, you keep it in the parent class. If the method varies, you put it in the subtypes.

#### Pure Fabrication

If you have a class that does, say, system methods, make an interface for it and hide those details behind that.
Then you inject those dependencies and they can change.

### From the session

#### Don't unnecessarily complect things (a la Rich Hickey)
#### Call things what they are
#### Outside In
#### Contain the imperative steps
#### Algebraic datatypes are great - functions, products and enums
#### Functional core, imperative shell - Gary Barnheart, Destroy all Software (thanks to Tim)
#### Against endowing nil with meaning beyond absence
#### Parce don't validate - eliminate validations as quickly as possible and not propagate them
#### Make impossible states impossible to represent -
#### "Dependently typed" languages are provably correct. Agda or Idress or Coq or Lean are examples, in order of popularity
#### "Homotopy theory" - the theory of open categories
#### "Algebra Driven Design" - A book on modeling your domain in algebraic types
#### Conway's Law - organizations design systems that mirror their own communication structure

## References
https://alistair.cockburn.us/hexagonal-architecture/
https://algebradriven.design/
https://lamport.azurewebsites.net/tla/tla.html
https://www.infoq.com/presentations/Simple-Made-Easy/

https://www.youtube.com/watch?v=pIJbp5Q3jhQ&ab_channel=UTSSoftwareEngineering
https://www.youtube.com/watch?v=lLLVw0DCJto&ab_channel=JavaUserGroupSwitzerland
Artium Hivemind

