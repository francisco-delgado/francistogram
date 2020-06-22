// import * as React from "react";
// import { css, StyleSheet } from "aphrodite";
// import * as EmailValidator from "email-validator";
// import addToMailchimp from "gatsby-plugin-mailchimp";

// import Group from "../base/Group";

// import colors from "../styles/colors";

// export default function MailchimpEmail() {
//   const [email, setEmail] = React.useState("");
//   const [error, setError] = React.useState(null);
//   const [submitResponse, setSubmitResponse] = React.useState(null);

//   const handleSubmitEmail = () => {
//     const isEmailValid = EmailValidator.validate(email);
//     if (isEmailValid) {
//       submitToMailchimp(email);
//     }
//   };

//   const submitToMailchimp = email => {
//     const path = typeof window !== "undefined" ? window.location.href : "";
//     setSubmitResponse(addToMailchimp(email), {
//       path,
//     });
//   };

//   return (
//     <div className={css(styles.newsletterContainer)}>
//       <form onSubmit={handleSubmitEmail}>
//         <Group gap={16} justifyContent="center">
//           <input
//             placeholder="Email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//           <button>Subscribe</button>
//         </Group>
//       </form>
//     </div>
//   );
// }

// const styles = StyleSheet.create({
//   newsletterContainer: {
//     borderRadius: 3,
//     background: colors.offWhite,
//     paddingTop: 24,
//     paddingBottom: 24,
//     marginTop: -8,
//     marginBottom: 16,
//   },
// });
