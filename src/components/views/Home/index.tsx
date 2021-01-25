import React, { useContext, ChangeEvent, FormEvent } from "react";
import { DataContext } from "context/Data";
import Navigation from "components/molecules/Navigation";
import SearchBar from "components/molecules/SearchBar";
import LoadingSpinner from "components/atoms/LoadingSpinner";

const Home = () => {
  const { submitting, loading, data, error } = useContext(DataContext);

  return (
    <div className="container h-full mx-auto flex flex-col justify-center items-center">
      <div
        className={`w-full lg:w-4/6 h-screen flex flex-col ${
          submitting || data || error ? "justify-start mt-8" : "justify-center"
        }`}
      >
        <Navigation />
        <SearchBar />
      </div>
      <div className="h-full w-full">
        {(loading || submitting) && <LoadingSpinner />}
      </div>
    </div>
  );
};

export default Home;
