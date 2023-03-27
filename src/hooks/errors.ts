import { useEffect, useState } from 'react';
import { ObjectSchema } from 'yup';

// export const useUsernameErrors = (schema: ObjectSchema<any>, text: string) => {
//   const [errorsUsename, setErrorsUsername] = useState<string[]>([]);

//   useEffect(() => {
//     const validate = async (username: string) => {
//       try {
//         const result = await schema.validate({ username }, { abortEarly: false });

//         if (result) {
//           setErrorsUsername([]);
//         }
//       } catch (e: any) {
//         setErrorsUsername(e.errors);
//       }
//     };

//     validate(text);
//   }, [text, schema]);

//   return errorsUsename;
// };

// export const usePasswordErrors = (schema: ObjectSchema<any>, text: string) => {
//   const [errorsPassword, setErrorspassword] = useState<string[]>([]);

//   useEffect(() => {
//     const validate = async (password: string) => {
//       try {
//         const result = await schema.validate(
//           {
//             password,
//           },
//           { abortEarly: false }
//         );

//         if (result) {
//           setErrorspassword([]);
//         }
//       } catch (e: any) {
//         setErrorspassword(e.errors);
//       }
//     };

//     validate(text);
//   }, [text, schema]);

//   return errorsPassword;
// };

export const useErrors = (schema: ObjectSchema<any>, text: string, type: 'password' | 'username') => {
  const [errorsArr, setErrorsArr] = useState<string[]>([]);

  useEffect(() => {
    if (type === 'password') {
      const validate = async (password: string) => {
        try {
          const result = await schema.validate(
            {
              password,
            },
            { abortEarly: false }
          );

          if (result) {
            setErrorsArr([]);
          }
        } catch (e: any) {
          setErrorsArr(e.errors);
        }
      };

      validate(text);
    }
    if (type === 'username') {
      const validate = async (username: string) => {
        try {
          const result = await schema.validate(
            {
              username,
            },
            { abortEarly: false }
          );

          if (result) {
            setErrorsArr([]);
          }
        } catch (e: any) {
          setErrorsArr(e.errors);
        }
      };

      validate(text);
    }
  }, [text, schema, type]);

  return { errorsArr };
};
