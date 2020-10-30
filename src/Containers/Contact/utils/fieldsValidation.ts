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


  export {ValidationName, ValidationEmail};
