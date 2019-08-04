const handleInput = {

  init : function() {
    let inputNodes = document.querySelectorAll(".input__field_input");
    const onInputFocus = (input) => {
      input.target.classList.add("has--content");
    }
    
    const onInputBlur = (input) => {
      if(input.target.value == "") {
        input.target.classList.remove("has--content");
      }
    }
  
    inputNodes.forEach((selectedInput) => {
      if(selectedInput.value !== "") {
        selectedInput.classList.add("has--content");
      }
      selectedInput.addEventListener('focus', onInputFocus);
      selectedInput.addEventListener('blur', onInputBlur);
    });
  }

}

export {
  handleInput
}
