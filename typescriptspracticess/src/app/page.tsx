import type { Route } from 'next';
import Link from 'next/link';
import React from 'react';

type CardProps<T extends string> = {
  href?: Route<T> | URL;
};

const defaultHref: Route = '/about';

function Card<T extends string>({ href = defaultHref as Route<T> }: CardProps<T>) {
  return (
    <Link href={href}>
      <div>My Card</div>
      
    </Link>
  );
}
 
export default Card;
 