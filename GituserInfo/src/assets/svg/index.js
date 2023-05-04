import React from 'react';
import Close from './Close.svg';
import Lock from './Lock.svg';

export function defineIcon(name, width = 30, height = 30) {
  switch (name) {
    case 'close':
      return <Close width={width} height={height} />;
    case 'lock':
      return <Lock width={width} height={height} />;
    default:
      return null;
  }
}
