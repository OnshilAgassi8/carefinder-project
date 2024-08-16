import React, { useEffect, useState } from "react";
import HospitalList from "./HospitalLists";
import Pagination from "./Pagination";
import { CSVLink} from "react-csv";
import MarkdownEditor from "./MarkdownEditor";

import Footer from "./footer";

const SkeletonCard: React.FC = () => (
    <div className="max-w-sm p-4 bg-gray-200 animate-pulse flex flex-row justify-between border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <div className="h-24 bg-gray-300 rounded mb-4"></div>
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
    </div>
  );
  
  const MyHospitals: React.FC = () => {
    const [providers, setProviders] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [postsPerPage] = useState<number>(12);
  
    const [searchInput, setSearchInput] = useState<string>("");
    const [filteredProviders, setFilteredProviders] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
  
    const [markdownContent, setMarkdownContent] = useState<string>("");

  const handleSaveMarkdown = (content: string) => {
    setMarkdownContent(content);
    // Here you would typically save the content to your backend
    console.log("Saving markdown content:",markdownContent, content);
  };

    useEffect(() => {
      let isMounted = true;
  
      const fetchProviders = () => {
        setIsLoading(true);
        fetch("https://api.reliancehmo.com/v3/providers")
          .then((res) => res.json())
          .then((response) => {
            if (isMounted) {
              setProviders(response?.data);
              setIsLoading(false);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      };
  
      fetchProviders();
  
      return () => {
        isMounted = false;
      };
    }, []);
  
    useEffect(() => {
      fetch("https://api.reliancehmo.com/v3/providers")
        .then((res) => res.json())
        .then((response) => {
          setProviders(response?.data);
        })
        .catch((error) => {
          setError(error);
        });
    }, []);
  
    useEffect(() => {
      const filtered = providers.filter((provider: any) => {
        const { name, state } = provider;
        const searchValue = searchInput.toLowerCase();
        return (
          name.toLowerCase().includes(searchValue) ||
          state.name.toLowerCase().includes(searchValue)
        );
      });
      setFilteredProviders(filtered);
    }, [searchInput, providers]);
  
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
  
    const currentPosts = filteredProviders.length
      ? filteredProviders.slice(firstPostIndex, lastPostIndex)
      : providers.slice(firstPostIndex, lastPostIndex);
  
    const handleShare = () => {
      if (navigator.share) {
        const shareData = {
          title: "Selected Providers",
          text: "Check out these selected providers!",
          url: window.location.href,
        };
  
        navigator
          .share(shareData)
          .then(() => {
            console.log("Successfully shared.");
          })
          .catch((error) => {
            console.error("Error sharing:", error);
          });
      } else {
        console.log("Web Share API not supported in this browser.");
      }
    };
  
    return (
        <div>
      <section className="bg-Primary py-8 md:py-20 w-full ">
        {/* Floating container */}
        
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-Grey/800 text-2xl font-bold md: text-3xl text-center  mb-6">
            Hospitals in Nigeria
          </h2>
          <div className="p-4 md:p-8 bg-white shadow-xl rounded-lg">
            <form className="w-full mb-6">
              <label className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
  
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-Grey/900 border border-Grey/600 rounded-lg bg-gray-50 focus:ring-Primary focus:border-Primary"
                  placeholder="Search by city or state"
                  required
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
            </form>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
              {isLoading ? (
                Array.from({ length: 4 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))
              ) : null }
            </div>
            <div className=" grid grid-row-4 gap-12">
             {!isLoading? <HospitalList providers={currentPosts} /> : null} 
            </div>
            <Pagination
              totalPosts={filteredProviders.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />

         <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Create Hospital Entry</h2>
            <MarkdownEditor onSave={handleSaveMarkdown} />
          </div>
          
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 ">
              <p className="font-medium">
                {" "}
                Showing {filteredProviders.length} Locations
              </p>
              <div className="flex gap-4">
                <button className="btn btn-secondary" onClick={handleShare}>
                  Share
                </button>
                <button className="btn btn-secondary hover:bg-Primary">
                  <CSVLink data={filteredProviders}>Download CSV</CSVLink>
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </div>
    );
  };
  
  export default MyHospitals;
  function setError(_error: any) {
    throw new Error("Function not implemented.");
  };
