import {Fragment, Suspense} from "react";
import {Article, Header, Sidebar} from "@components/common";
import "./Layout.scss";

export default function Layout({children}) {
    return (
        <Fragment>
            <Header/>
            <Sidebar/>
            <Article className={"private-layout__article"}>
                <Suspense fallback={<div>Загрузка...</div>}>
                    {children}
                </Suspense>
            </Article>
        </Fragment>
    );
};