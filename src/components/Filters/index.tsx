import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import { styles } from './styles';
import { Filter } from '@/components/Filter';



type FiltersProps = {
  filters: FILTER_PROP[],
  filterSelected: FILTER_PROP,
  changeFilterSelected: (filter: FILTER_PROP) => void
}

export function Filters({changeFilterSelected,filterSelected,filters}: FiltersProps) {
 
  function handleChangeFilterSelected(filter: FILTER_PROP) {
    changeFilterSelected(filter)
  }
  return (
    <FlatList
        data={filters}
        horizontal
        
        contentContainerStyle={styles.content}
        keyExtractor={(item) => item.id}
        renderItem={({ item:filter }) => (
          <Filter
            isSelected={filterSelected.id === filter.id}
            onPress={() => handleChangeFilterSelected(filter) }
          >
            {filter.label}
          </Filter>
        )}
    />
  );
}