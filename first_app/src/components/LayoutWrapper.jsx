import styled from "@emotion/styled/macro";

const LayoutWrapper = styled.div`
  background-color: #17171a;
  min-height: 100vh;
  color: white;
`;

const ContentArea = styled.main`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

function Layout({ children }) {
  return (
    <LayoutWrapper>
      <ContentArea>{children}</ContentArea>
    </LayoutWrapper>
  );
}
export default Layout;
