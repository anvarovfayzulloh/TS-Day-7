import Container from "../../utils";
import axios from "../../api/api";
import { useEffect, useState } from "react";
import Card from "../../components/card/Card";

const Home = () => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const loadingData = async () => {
      const response = await axios.get("/products?limit=40");
      const data = response.data.products;
      setFetchData(data);
    };
    loadingData();
  }, []);

  return (
    <>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 mt-8 pb-[40px]">
          {fetchData.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Home;
