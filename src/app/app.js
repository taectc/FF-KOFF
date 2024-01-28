import { ComponentService } from "../services/component.service";
import { ErrorService } from "../services/error.service";
import { parseInput } from  "../utills/parse-inputs"
import { validateInput } from "../utills/validate-inputs";

export const app = () => {

  const componentService = new ComponentService();
  const errorService = new ErrorService();
  
  errorService.hideError();

  const calTotal = () => {

    errorService.hideError();

    const inputs = componentService.getInput();
    const numbers = parseInput(...inputs);
    const valid = validateInput(...numbers);

    if (valid) {
      const [price, quantity, shipping] = numbers;
      const totalPrice = price * quantity + shipping;
      componentService.showPrice(totalPrice); //display ราคา
    } else {
      // showError();
      errorService.showErrorMessage(inputs, numbers);
    }
  };
  // totalBtn.addEventListener("click", calTotal);
  componentService.onClick(calTotal);
};

// app();
