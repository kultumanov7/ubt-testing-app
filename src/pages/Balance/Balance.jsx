import {
  Button,
  Icon,
  LayoutContainer,
  NewModalLayout,
  TabsPane,
} from "@components/common";
import { useState } from "react";
import "./Balance.scss";

const Balance = () => {
  const [currentTabId, setCurrentTabId] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const TABS = [
    {
      id: 1,
      name: "Все",
    },
    {
      id: 2,
      name: "Пополнения",
    },
    {
      id: 3,
      name: "Расходы",
    },
  ];

  const getContent = (tab) => {
    switch (tab) {
      case 1:
        return <p>Пока здесь пусто</p>;
      case 2:
        return <p>Пока здесь пусто</p>;
      case 3:
        return <p>Пока здесь пусто</p>;
      default:
        return <p>Пока здесь пусто</p>;
    }
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <LayoutContainer className="balance">
      <div className="layout-header">
        <div className="layout-header__upper">
          <h1 className="layout-header__title">Баланс</h1>
          <Button
            text={"Пополнить баланс"}
            className="btn--secondary btn--pill"
            onClick={handleClick}
            iconLeft={<Icon name="add-activity" />}
          />
        </div>
      </div>
      <LayoutContainer className="layout__container--white">
        <div className="balance__item">
          <p className="balance__item-title">Общая сумма на балансе</p>
          <h1 className="balance__item-value">0 тенге</h1>
        </div>
      </LayoutContainer>
      <div className="transactions-history">
        <h3 className="transactions-history__title">История платежей</h3>
        <TabsPane
          tabs={TABS}
          currentTabId={currentTabId}
          setCurrentTabId={setCurrentTabId}
        />
        {getContent(currentTabId)}
      </div>
      {isModalOpen && (
        <NewModalLayout>
          <h1>NewModal</h1>
          <button onClick={() => setIsModalOpen(false)}>Go Back</button>
        </NewModalLayout>
      )}
    </LayoutContainer>
  );
};

export default Balance;
