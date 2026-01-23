import Header from "./Header";

const Bags = () => {
  return (
    <>
      <Header />

      <main>
        <div className="bag-page">
          <div className="bag-items-container"></div>
          <div className="bag-summary"></div>
        </div>
      </main>
    </>
  );
};

export default Bags;
