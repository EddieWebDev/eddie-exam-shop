import { CreateAccountForm } from "./components/createAccountForm";

const CreateAccount = () => {
  return (
    <section>
      <div className="flex flex-col gap-4 my-4">
        <h2>Create a new account here</h2>
        <div>
          <CreateAccountForm />
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
