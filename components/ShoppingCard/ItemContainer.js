import Card from "./Card";
import { GlobalStyel } from "./card_style";
import axios from "axios";

export const getStaticProps = async () => {
  const res = await axios.get(
    "https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json"
  );
  console.log("first");
  return {
    props: {},
  };
};
const ItemContainer = () => {
  return (
    <div className="container">
      <GlobalStyel />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default ItemContainer;
