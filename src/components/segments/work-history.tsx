import * as React from 'react';
import './work-history.scss';
import { DateEntry } from './date-entry';
import { List } from '../list';

export interface WorkHistoryProps {
  entries: WorkEntryProps[]
}

export const WorkHistory = (props: WorkHistoryProps) => (
    <List>
      {props.entries.map(it => (
          <WorkEntry {...it} key={it.date.from}/>
      ))}
    </List>
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
    <DateEntry date={props.date}>
      <div className="work-details">
        <p className="position">{props.position}</p>
        <p className="company">{props.company}</p>
        <List className="projects">
          {props.projects.map(it => (
              <WorkProject {...it} key={it.name}/>
          ))}
        </List>
      </div>
    </DateEntry>
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
      <span className="project-separator">&#9679;</span>
      <span className="project-position">{props.position}</span>
      <p className="project-technologies">{props.technologies.join(', ')}</p>
      <p className="project-description">{props.description}</p>
    </li>
);
