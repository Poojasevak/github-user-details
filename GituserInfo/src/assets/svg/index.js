import React from 'react';
import Close from './Close.svg';
import Lock from './Lock.svg';
import Search from './Search.svg';
import SearchBar from './SearchBar.svg';

export function defineIcon(name, width = 30, height = 30) {
  switch (name) {
    case 'close':
      return <Close width={width} height={height} />;
    case 'lock':
      return <Lock width={width} height={height} />;
    case 'search':
      return <Search width={width} height={height} />;
    case 'searchbar':
      return <SearchBar width={width} height={height} />;
    default:
      return null;
  }
}
