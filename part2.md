# Group Work


tweedr is pivoting to become a social fintech company. Users can now send payments to each other.

A payment is a join table between two users.

| sender_id     | recipient_id  | amount |
| ------------- |:-------------:|  -----:|
|  2            |  4            | 1600   |
|  8            |  5            |   12   |
|  6            |  4            |    1   |

You will split the work between two people. One person will write model methods, the other will write controllers and views. **DO NOT WORK ON THE SAME FILE** we have not covered the git conflicts that will arise if two people work on the same file.

### How to start

Decide on **one** of the apps you will work on.

Add the above functionality.


##### 1. the DB model methods

##### Edit tables.sql and seed.sql

##### createPayment

##### getPayment

##### getUserSentPayments / getUserRecievedPayments

```js
db.payments.getUserSentPayments( sender_id, (error, payments) => { ...
db.payments.getUserRecievedPayments( recipient_id, (error, payments) => { ...
```

Gets an array of payments for a given id:

```js
let recipient_id = 4;

...

// payments should look like this
const payments = [
  {
    sender_id : 2,
    recipient_id : 4,
    amount : 1600
  }
];
```

<hr/>

##### getPaymentTotalByRecipient

```js
db.payments.getPaymentTotalByRecipient( recipient_id, (error, total) => { ...
```

```js
let recipient_id = 4;
...

// total should be 1601
```

<hr/>

##### getPaymentTotalBySender


```js
db.payments.getPaymentTotalBySender( sender_id, (error, total) => { ...
```

```js
let sender_id = 8;
...

// total should be 8
```

<hr/>


##### 2. controllers and views

Create the controllers and views to create a new payment, and show each payment.

`/` should show the total you have sent and recieved. Use the db methods to show that number.
