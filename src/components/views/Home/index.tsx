import React, { useContext } from "react";
import { DataContext } from "context/Data";
import Navigation from "components/molecules/Navigation";
import SearchBar from "components/molecules/SearchBar";
import LoadingSpinner from "components/atoms/LoadingSpinner";
import PlayerCard from "components/molecules/PlayerCard";

const Home = () => {
  const { loading, data, error } = useContext(DataContext);

  const renderPlayers = (): JSX.Element[] | undefined =>
    data?.map((p) => <PlayerCard key={p.id} {...p} />);

  return (
    <div className="container h-screen mx-auto flex flex-col justify-center items-center">
      <div
        className={`w-full lg:w-4/6 flex flex-col ${
          data || error ? "justify-start mt-8" : "justify-center"
        }`}
      >
        <Navigation />
        <SearchBar />
      </div>
      {loading && <LoadingSpinner />}

      {!loading && data?.length && (
        <div className="h-full xl:w-5/6 flex flex-row flex-wrap my-8">
          {renderPlayers()}
        </div>
      )}
    </div>
  );
};

export default Home;
