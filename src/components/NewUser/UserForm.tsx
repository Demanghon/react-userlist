import React, { useState } from "react";
import User from "../../models/Users";
import Button from "../UI/Button";
import ValidationErrors from "../UI/ValidationErrors";
import style from "./UserForm.module.css";

interface UserFormProps {
  onUserAdded(user: User): void;
}

type ValidableHTMLElement = HTMLInputElement | HTMLSelectElement | HTMLButtonElement | HTMLOutputElement | HTMLTextAreaElement

const UserForm = ({ onUserAdded }: UserFormProps) => {
  const [username, setUsername] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [isValid, setValid] = useState<boolean>(true);
  const [errors, setErrors] = useState<string[]>([]);

  const usernameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };
  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setValid(form.checkValidity());
    const messages: string[] = [];
    if (!form.checkValidity()) {
      form.querySelectorAll(":invalid").forEach((invalidElement) => {
        const input = invalidElement as ValidableHTMLElement;
        const label = (form.querySelector(`label[for=${input.id}]`)) as HTMLLabelElement;
        messages.push(`${label.innerText}: ${input.validationMessage}`);
      });
    } else {
      const user = new User(username, +age);
      onUserAdded(user);
      setUsername("");
      setAge("");
    }
    setErrors(messages);
  };

  return (
    <form onSubmit={submitFormHandler} noValidate className={`${!isValid && style.invalid}`}>
      <ValidationErrors errors={errors} />
      <div className={style["new-user__controls"]}>
        <div className={style["new-user__control"]}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={usernameChangeHandler} required />
        </div>
        <div className={style["new-user__control"]}>
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" min="1" max="100" step="1" value={age} onChange={ageChangeHandler} required />
        </div>
        <div className={style["new-user__actions"]}>
          <Button type="submit">Add user</Button>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
