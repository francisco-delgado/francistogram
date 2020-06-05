// import * as React from "react";
// import * as EmailValidator from "email-validator";
// import addToMailchimp from "gatsby-plugin-mailchimp";

// export default function MailchimpEmail() {
//   const [email, setEmail] = React.useState(null);
//   const [error, setError] = React.useState(null);
//   const [submitResponse, setSubmitResponse] = React.useState(null);

//   const handleSubmitEmail = () => {
//     const isEmailValid = EmailValidator.validate(email);
//     if (isEmailValid) {
//       submitToMailchimp(email);
//     }
//   };

//   const submitToMailchimp = email => {
//     const path = (url =
//       typeof window !== "undefined" ? window.location.href : "");
//     setSubmitResponse(addToMailchimp(email), {
//       path,
//     });
//   };

//   return (
//     <input onSubmit={this.}
//   )
// }
