import {
  ValidatedInputContainer,
  ValidatedInputForm,
  ValidatedInputError,
  ValidatedInputField,
  ValidatedInputHelper,
  ValidatedInputLabel,
} from "./components/ValidatedInput";
import { Card } from "./components/Card";

import { StyledButton } from "./components/StyledButton";

function App() {
  return (
    <Card>
      <ValidatedInputForm
        onSubmit={(data) => console.log(data)}
        className="space-y-8"
      >
        <ValidatedInputContainer>
          <ValidatedInputLabel>Name</ValidatedInputLabel>
          <ValidatedInputHelper>First and Last</ValidatedInputHelper>
          <ValidatedInputField
            name="name"
            registerOptions={{ required: "Name is required." }}
          />
          <ValidatedInputError />
        </ValidatedInputContainer>

        <ValidatedInputContainer>
          <ValidatedInputLabel>Email</ValidatedInputLabel>
          <ValidatedInputField
            name="email"
            registerOptions={{ required: "Email is required" }}
          />
          <ValidatedInputError />
        </ValidatedInputContainer>

        <ValidatedInputContainer>
          <ValidatedInputLabel>Phone Number</ValidatedInputLabel>
          <ValidatedInputField
            name="phoneNumber"
            registerOptions={{ required: "Phone number is required." }}
          />
          <ValidatedInputError />
        </ValidatedInputContainer>
        <StyledButton type="submit">Submit</StyledButton>
      </ValidatedInputForm>
    </Card>
  );
}

export default App;
