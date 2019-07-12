import * as React from 'react';

import './segment.scss';

export interface SegmentProps {
  header: SegmentHeaderProps,
  children: React.ReactNode
}

export const Segment = (props: SegmentProps) => (
    <section className="segment">
      <SegmentHeader {...props.header}/>
      {props.children}
    </section>
);

export interface SegmentHeaderProps {
  icon: string;
  title: string;
}

const SegmentHeader = (props: SegmentHeaderProps) => (
    <header className="segment--header">
      <div className="icon-wrapper">
        <img
            className="icon"
            src={require(`../../images/${props.icon}`)}
        />
      </div>
      <h1>{props.title}</h1>
    </header>
);
