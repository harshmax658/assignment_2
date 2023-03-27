import Header from "@/components/Header/Header";
import ItemContainer from "@/components/ShoppingCard/ItemContainer";

import { GlobalStyle } from "@/styles/global_style";

const index = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ItemContainer />
    </>
  );
};

export default index;
