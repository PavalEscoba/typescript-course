import React from "react";

export function Greeter(props: { person: string }): JSX.Element {
  return <h2>Good day {props.person}!</h2>;
}

interface ByeProps {
  friend: string;
}

export const GoodBye = ({ friend }: ByeProps) => {
  return <h2>Good bye {friend}!</h2>;
};

export const Hello: React.FC = () => {
  return <h3>Hello</h3>;
};
