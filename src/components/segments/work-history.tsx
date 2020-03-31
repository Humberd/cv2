import * as React from 'react';
import './work-history.scss';
import { UnbreakableSegments } from '../unbreakableSegments';
import { HorizontalSeparator } from '../horizontal-separator';
import { DateEntry } from './date-entry';

export interface WorkHistoryProps {
  entries: WorkEntryProps[]
}

export const WorkHistory = (props: WorkHistoryProps) => (
    <UnbreakableSegments>
      {props.entries.map(it => (
          <WorkEntry {...it} key={it.date.from}/>
      ))}
    </UnbreakableSegments>
);

export interface WorkEntryProps {
  date: {
    from: string,
    to: string;
  },
  position: string;
  company: string;
  projects: WorkProjectProps[];
}

const WorkEntry = (props: WorkEntryProps) => (
    <div className="work-details entries-group">
      <DateEntry date={props.date}>
        <span className="position">{props.position}</span>
        <span className="separator">-</span>
        <span className="company">{props.company}</span>
      </DateEntry>
      <UnbreakableSegments className="projects">
        {props.projects.map(it => (
            <WorkProject {...it} key={it.name}/>
        ))}
      </UnbreakableSegments>
    </div>
);

export interface WorkProjectProps {
  name: string;
  technologies: string[];
  position: string;
  description: string;
}

const WorkProject = (props: WorkProjectProps) => (
    <li className="work-project">
      <span className="project-name">{props.name}</span>
      <HorizontalSeparator/>
      <span className="project-position">{props.position}</span>
      <p className="project-technologies">{props.technologies.join(', ')}</p>
      <p className="project-description">{props.description}</p>
    </li>
);
