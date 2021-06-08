# BethEl-International-church-min
## Overview

This full stack MERN application allows users to browse the web-app for information as well as being able to make purchases from the store.
General user will be able to browse the web-app, while authenticated users will be able to create, read, update and destroy their products. The aim of the site is to improve the User Experience.

## Whimsical Diagram

[Click here for wireframe](https://whimsical.com/bethel-church-ministry-LvNnRwWKiXBiZzBgX6JbCY)


## Schema

##### Product

```
const Listing = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: {type: String, required: true},
    userId: { type: Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
)
```

const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true },
    listings: [{ type: Schema.Types.ObjectId, ref: "listings" }],
  },
  { timestamps: true }
);
```
