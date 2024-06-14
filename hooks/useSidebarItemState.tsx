import { useState, useEffect, useRef } from 'react';

const useSidebarItemState = (key: string) => {
  const [expandItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});
  const isInitialMount = useRef(true);

  useEffect(() => {
    const savedState = localStorage.getItem(key);
    if (savedState) {
      setExpandedItems(JSON.parse(savedState));
    }
  }, [key]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      localStorage.setItem(key, JSON.stringify(expandItems));
    }
  }, [key, expandItems]);

  const handle = (id: string) => {
    setExpandedItems((prevExpandedItems) => {
      // If the clicked item is already expanded, collapse it
      if (prevExpandedItems[id]) {
        return {
          ...prevExpandedItems,
          [id]: false
        };
      } else {
        // Toggle the clicked item and collapse other expanded items
        const newExpandedItems = Object.keys(prevExpandedItems).reduce((acc, key) => {
          acc[key] = key === id ? true : false;
          return acc;
        }, {} as { [key: string]: boolean });
  
        return {
          ...prevExpandedItems,
          ...newExpandedItems,
        };
      }
    });
  };
  
  
  
  

  return {
    expandItems,
    handle,
  };
};

export default useSidebarItemState;
