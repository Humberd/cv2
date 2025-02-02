import * as React from 'react';
import './work-history.scss';
import { UnbreakableList } from '../unbreakableList';
import { HorizontalSeparator } from '../horizontal-separator';
import { DateEntry } from './date-entry';
import {
  getIcon,
  pseudoMarkdownToReact,
  removeDuplicatedWhiteSpaces,
} from '../utils';

export interface WorkHistoryProps {
  entries: WorkEntryProps[];
}

export const WorkHistory = (props: WorkHistoryProps) => (
  <UnbreakableList>
    {props.entries.map((it) => (
      <WorkEntry {...it} key={it.date.from} />
    ))}
  </UnbreakableList>
);

export interface WorkEntryProps {
  date: {
    from: string;
    to: string;
  };
  positions: string[];
  shortDescription?: string;
  company: WorkEntryCompany;
  projects: WorkProjectProps[];
}

export interface WorkEntryCompany {
  name: string;
  icon?: string;
  iconSize?: 'small';
}

const WorkEntry = (props: WorkEntryProps) => (
  <li className="work-details entries-group">
    <DateEntry date={props.date}>
      <h3 className="position">
        {props.positions.map((position, index) => (
          <div key={position}>
            {position}
            {index !== props.positions.length - 1 && <span>,</span>}
          </div>
        ))}
      </h3>
      <span className="separator">-</span>
      <div className="company">
        <span className="company-name">{props.company.name}</span>
        {props.company.icon && (
          <img
            className={`company-logo ${props.company.iconSize ?? ''}`}
            src={getIcon(props.company.icon)}
            aria-hidden={true}
          />
        )}
      </div>
    </DateEntry>
    <p>{removeDuplicatedWhiteSpaces(props.shortDescription || '')}</p>

    {props.shortDescription && <h5 className="projects-header">Projects:</h5>}
    <UnbreakableList className="projects">
      {props.projects.map((it) => (
        <WorkProject {...it} key={it.name} />
      ))}
    </UnbreakableList>
  </li>
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
    <HorizontalSeparator />
    <span className="project-position">{props.position}</span>
    <p className="project-technologies">[{props.technologies.join(', ')}]</p>
    <p className="project-description">
      {pseudoMarkdownToReact(removeDuplicatedWhiteSpaces(props.description))}
    </p>
  </li>
);
