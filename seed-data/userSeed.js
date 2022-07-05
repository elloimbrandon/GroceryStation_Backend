module.exports = [
  {
    name: "Marty",
    email: "grocerystationaz@yahoo.com",
    password: "Martyonemanparty1",
  },
  {
    name: "Brandon",
    email: "bfeltzcode@gmail.com",
    password: "Sports123!",
  },
];

// user model
// name: {
//   type: String,
//   unique: true,
//   lowercase: true,
//   required: true,
//   trim: true,
// },
// email: {
//   type: String,
//   unique: true, // Prevents the same email being used
//   required: true,
//   trim: true,
//   lowercase: true,
//   validate(value) {
//     if (!validator.isEmail(value)) {
//       throw new Error("Email is invalid");
//     }
//   },
// },
// password: {
//   type: String,
//   required: true,
//   minlength: 7,
//   trim: true,
//   validate(value) {
//     if (value.toLowerCase().includes("password")) {
//       throw new Error('Password cannot contain the word "password".');
//     }
//   },
// },
