import { Button, Icon, List, TabsPane } from "@components/common";
import "./LayoutHeader.scss";
import classNames from "classnames";

const LayoutHeader = (props) => {
  const {
    headerTitle,
    buttonText,
    btnOnClick,
    tabs,
    currentTabId,
    setCurrentTabId,
  } = props;

  return (
    <div className="layout-header">
      <div className="layout-header__upper">
        <h1 className="layout-header__title">{headerTitle}</h1>
        {buttonText && (
          <Button
            text={buttonText}
            className="btn--secondary btn--pill"
            onClick={btnOnClick}
            iconLeft={<Icon name="add-activity" />}
          />
        )}
      </div>
      <TabsPane
        tabs={tabs}
        currentTabId={currentTabId}
        setCurrentTabId={setCurrentTabId}
      />
    </div>
  );
};

export default LayoutHeader;
