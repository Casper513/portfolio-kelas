import { useState, useEffect, useRef } from 'react';

const useAccordionState = (key: string) => {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});
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
      localStorage.setItem(key, JSON.stringify(expandedItems));
    }
  }, [key, expandedItems]);

  const handleExpand = (id: string) => {
    setExpandedItems((prevExpandedItems) => ({
      ...prevExpandedItems,
      [id]: !prevExpandedItems[id],
    }));
  };

  return {
    expandedItems,
    handleExpand,
  };
};

export default useAccordionState;
