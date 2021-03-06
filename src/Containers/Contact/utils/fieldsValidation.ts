  const ValidationName = (name:string) => {
    if (name.length) {
      if (name.length > 4) {
        return false
      } else {
        return true
      }
    }
    return false
  }

  const ValidationEmail = (value: string): boolean => {
    const validation = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
    if (value) {
      return validation.test(value);
    }
    return true;
  }

  const ValidationMessage = (value:string): boolean => {
    if (value.length) {
      if (value.length > 4) {
        return false;
      } return true;
    }
    return false;
  }


  export {ValidationName, ValidationEmail, ValidationMessage};
