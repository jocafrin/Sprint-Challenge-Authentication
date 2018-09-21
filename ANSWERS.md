<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?

A session is measures of time that a user is "remembered" by a site's server or by their own browser. A user can maintain access while the session is valid, and they will lose access when it ends, which will cause them to reauthenticate

2. What does bcrypt do to help us store passwords in a secure manner.

bcrypt hashes passwords which leaves encrypted strings of random numbers and letters

3. What does bcrypt do to slow down attackers?

It repeatedly hashes your passwords, which means an attacker would need to know whatever algorithm was used and the number of rounds of hashing in order to decode your password.

4. What are the three parts of the JSON Web Token?

header, payload, secret/signature