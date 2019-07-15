import React from 'react';

export default function ContactWrapper(props) {
  return props.condition ? props.wrapper(props.children) : props.children;
}