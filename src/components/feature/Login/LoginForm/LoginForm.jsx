import { useState } from "react";
import { Button, CustomLink, FormItem, List } from "@components/common";
import "./LoginForm.scss";
import { useAction } from "@helpers/hooks";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false); // do it then
  const { authorize } = useAction();
  const AUTH_ITEMS = [
    {
      id: 1,
      field: "input",
      name: "email",
      type: "email",
      value: email,
      placeholder: "Email",
    },
    {
      id: 2,
      field: "input",
      name: "password",
      type: "password",
      value: password,
      placeholder: "Пароль",
    },
  ];
  const REMEMBER_ME_ITEM = {
    id: 1,
    field: "checkbox",
    label: "Запомнить меня",
    name: "remember",
    type: "checkbox",
    checked: remember,
  };

  const handleClick = () => {
    authorize({ email, password });
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "remember":
        setRemember(checked);
        break;
      default:
        break;
    }
  };

  return (
    <div className="login-form">
      <h1>Вход в STP</h1>
      <p>Send, spend and save smarter</p>
      <List
        items={AUTH_ITEMS}
        renderItem={(item) => (
          <FormItem key={item.id} item={item} handleChange={handleChange} />
        )}
      />
      <div className="login-form__options">
        <FormItem
          key={REMEMBER_ME_ITEM.id}
          item={REMEMBER_ME_ITEM}
          handleChange={handleChange}
        />
        <CustomLink to="#">Забыли пароль?</CustomLink>
      </div>
      <Button
        text="Войти"
        onClick={handleClick}
        className="btn--secondary btn--pill"
      />

      <p>
        Нет аккаунта? <a href="#">Зарегистрироваться</a>
      </p>
    </div>
  );
};

export default LoginForm;
