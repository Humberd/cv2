import * as React from 'react';
import './others.scss';
import { List } from '../list';
import { DateEntry } from './date-entry';
import { HorizontalSeparator } from '../horizontal-separator';

export interface OthersProps {
  entries: OtherEntryProps[]
}

export const Others = (props: OthersProps) => {
  return (
      <List>
        {props.entries.map(entry => (
            <OtherEntry {...entry} key={entry.name}/>
        ))}
      </List>
  );
};

export interface OtherEntryProps {
  name: string;
  role: string;
  date: string;
  description: string;
}

export const OtherEntry = (props: OtherEntryProps) => {
  return (
      <li className="other-entry">
        <DateEntry
            date={{
              from: props.date,
            }}
        >
          <span className="name">{props.name}</span>
          <HorizontalSeparator/>
          <span>{props.role}</span>
        </DateEntry>
        <p>{props.description}</p>
      </li>
  );
};