//ts-check

/**
 * checks the data-attribute inside the html for forms and results whenever the function runs
 * @returns {object} 
 */


/**
 * searchs the data-form attribute found in the html
 * @param {HTMLElement} form - inspects the data-form attribute 
 */ 
const form = document.querySelector("[data-form]");
/**
 * searchs the data-result attribute found in the html
 * @type {HTMLElement<number> | null} result - inspects the data-result attribute
 */
const result = document.querySelector("[data-result]");



form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  if(!dividend || !divider){  
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
  }else if(dividend < 0 || divider < 0){
    result.innertext = "Division not performed. Invalid number provided. Try again";
    
  }else if(dividend === "yolo" && divider === "+++"){
    
    
  }else{
    result.innerText = parseFloat(Math.floor(dividend / divider));
  }
});