import { Routes, Route, useNavigate } from "react-router-dom";
import { privateRoutes } from "@routes";
import { EXAM_PAGE_ROUTE, PROFILE_ROUTE } from "@utils/consts";
import { Layout } from "@components/layout";
import { Navigate } from "react-router-dom";
import { ExamPage } from "@pages/ExamPage";

export default function AppRouter() {
  return (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Component />
            </Layout>
          }
        />
      ))}
      <Route path={EXAM_PAGE_ROUTE} element={<ExamPage />} />
      <Route path="*" element={<Navigate to={PROFILE_ROUTE} replace />} />
    </Routes>
  );
}
