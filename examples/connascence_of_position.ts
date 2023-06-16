/**
* Connascence of Position
*
* When two entities must agree upon the position of things
*
* This example has Connascence of Position with Degree 3 (bad), but low Locality (good), and low
* Strength (good).
*
* Refactor this so that the instantiator of Email no longer has connascence of position
* with the Email constructor. (Use one interface and pass an object? Make a type for each thing
* and require that type instead of just a string?)
*
* BONUS: Find the connascence of name
* BONUS: Find the connascence of meaning
* BONUS: Find the connascence of value in the test suite
*
* Code inspired / stolen from https://www.youtube.com/watch?v=lLLVw0DCJto&ab_channel=JavaUserGroupSwitzerland
*/

import assert from 'node:assert';

class Email {
  recipient: string;
  sender: string;
  message: string;

  constructor(recipient: string, sender: string, message: string) {
    this.recipient = recipient;
    this.sender = sender;
    this.message = message;
  }
}

function test() {
  const email = new Email("Logan@artiumfuture.com", "Ray@artium.io", "Hey how's it going in the future for you");

  assert.equal(email.recipient, "Logan@artiumfuture.com");
  assert.equal(email.sender, "Ray@artium.io");
  assert.equal(email.message, "Hey how's it going in the future for you");
}

test();


