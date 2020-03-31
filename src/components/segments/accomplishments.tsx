import * as React from 'react';
import './accomplishments.scss';
import { UnbreakableSegments } from '../unbreakableSegments';
import { DateEntry } from './date-entry';
import { HorizontalSeparator } from '../horizontal-separator';

export interface AccomplishmentsProps {
  entries: AccomplishmentEntryProps[];
}

export const Accomplishments = (props: AccomplishmentsProps) => (
    <UnbreakableSegments>
      {props.entries.map(it => (
          <AccomplishmentEntry {...it} key={it.date + it.name}/>
      ))}
    </UnbreakableSegments>
);

export interface AccomplishmentEntryProps {
  name: string;
  date: string;
  description?: string;
  role?: string;
  places: string[];
}

const AccomplishmentEntry = (props: AccomplishmentEntryProps) => (
    <div className="accomplishment-details entries-group">
      <DateEntry
          date={{
            from: props.date,
          }}
      >
        <span className="name">{props.name}</span>

        {props.role && (
            <>
              <HorizontalSeparator/>
              <span>{props.role}</span>
            </>
        )}
      </DateEntry>

      {props.description && <p className="description">{props.description}</p>}

      <UnbreakableSegments>
        {props.places.map(it => (
            <li key={it}>- {it}</li>
        ))}
      </UnbreakableSegments>
    </div>
);
