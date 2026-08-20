export const checkValidation = (email, password, name = null) => {
  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (name !== null) {
    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name.trim());

    if (!nameRegex) {
      return "Please enter a valid name";
    }
  }

  if (!emailRegex) {
    return "Please enter a valid email address";
  }

  if (!passwordRegex) {
    return "Please enter a valid password";
  }

  return null;
};