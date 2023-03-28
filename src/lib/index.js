import React, { useCallback, useState } from 'react';
import JmTable from './components/JmTable';

const useJmTable = props => {
  const [checkedRowIndexes, setCheckedRowIndexes] = useState([]);

  const handleCheckedRowIndexes = useCallback(idx => {
    setCheckedRowIndexes(prev => {
      if (Array.isArray(idx)) {
        return idx;
      }
      const newCheckedIndexes = new Set(prev);
      if (newCheckedIndexes.has(idx)) {
        newCheckedIndexes.delete(idx);
      } else {
        newCheckedIndexes.add(idx);
      }
      return Array.from(newCheckedIndexes).sort((a, b) => a - b);
    });
  }, []);

  return {
    checkedIndexes: checkedRowIndexes,
    JmTable: (
      <JmTable handleCheckedRowIndexes={handleCheckedRowIndexes} {...props} />
    ),
  };
};

export default useJmTable;
